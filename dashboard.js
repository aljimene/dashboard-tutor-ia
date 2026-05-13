let userId = "";
let messagesDiv, inputField, sendBtn;
let currentExerciseId = null;
let chatHistory = [];
let gNotas = null;
let gExito = null;
let gTiempo = null;
let currentExerciseDataFull;
let tiempoInicioResolucion = 0;

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwXrJAvPBEe65Bs4adNLZgP23vXCJ7LMSA2T_18soBVPTwjcbKV3Ahzrl4jcAIDWOTS7w/exec";
const LOG_APP_URL = "https://script.google.com/macros/s/AKfycbwqHGdObyguQ9pOG-zB5IjzzM3XFrc2ucCmUF_A9LduPIUx2w9kA_I3P7xhJy-arzE/exec";

document.addEventListener('DOMContentLoaded', function() {
    const rawCode = localStorage.getItem('userCode');
    if (!rawCode) { window.location.href = 'index.html'; return; }
    
    const displayElement = document.getElementById('display-user-code');
    if (displayElement) displayElement.innerText = rawCode;
    
    userId = "Estudiante_" + rawCode;

    const listaEjerciciosDiv = document.getElementById('lista-ejercicios');
    listaEjerciciosDiv.innerHTML = ''; 
    
    datosEjercicios.forEach((ejercicio) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'exercise-item'; 
        itemDiv.innerHTML = `<i class="fas fa-file-alt"></i> ${t('palabraEjercicio')} ${ejercicio.numero}`;
        itemDiv.onclick = (e) => seleccionarEjercicio(ejercicio, e.currentTarget);
        listaEjerciciosDiv.appendChild(itemDiv);
    });
	
	setTimeout(() => {
        registrarTracking("Inicio_Sesion", "Entró al dashboard principal");
    }, 500);

    messagesDiv = document.getElementById('messages');
    inputField = document.getElementById('user-input');
    sendBtn = document.getElementById('send-btn');

    sendBtn.onclick = sendMessage;
    inputField.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
	aplicarTextosGlobales();
	configurarTrackingAtencion();
});

function seleccionarEjercicio(ejercicioData, elementoHTML) {
    currentExerciseId = "Ejercicio_" + ejercicioData.numero;
    currentExerciseDataFull = ejercicioData;

    document.getElementById('content-layout').classList.remove('hidden');
    document.getElementById('solve-container').classList.add('hidden');
	
	registrarTracking("Ver_Dashboard_Ejercicio", `Viendo métricas del Ejercicio ${ejercicioData.numero}`);

    chatHistory = []; 
    if (messagesDiv) {
        messagesDiv.innerHTML = `<div class="msg bot">${t('botSaludo')}</div>`;
    }

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('exercise-content').classList.remove('hidden');

    document.querySelectorAll('.exercise-item').forEach(item => item.classList.remove('active'));
    elementoHTML.classList.add('active');
    
    actualizarCabecera(ejercicioData);
	renderizarGraficos(ejercicioData);
}

function actualizarCabecera(datos) {
    document.getElementById('header-calificacion').innerText = datos.estadistica.calificacion_promedio;
    document.getElementById('header-tiempo').innerText = datos.estadistica.tiempo_promedio;
    
    const difElemento = document.getElementById('header-dificultad');
    const diffMap = {
        "Fácil": t('difFacil'),
        "Medio": t('difMedio'),
        "Difícil": t('difDificil')
    };
    document.getElementById('header-dificultad').innerText = diffMap[datos.estadistica.dificultad] || datos.estadistica.dificultad;
    difElemento.className = datos.estadistica.colorClase; 
}
function registrarTracking(accion, detalles = "") {
    fetch(LOG_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            tipo: "tracking",
            estudianteId: userId,
            ejercicioId: currentExerciseId || "Ninguno",
            accion: accion,
            detalles: detalles
        })
    }).catch(err => console.error("Error en tracking en segundo plano", err));
}

function renderizarGraficos(ejercicioData) {
    const interacciones = ejercicioData.interacciones;
    const container = document.getElementById('charts-container');
    const noDataMsg = document.getElementById('no-data-msg');

    if (!interacciones || interacciones.length === 0) {
        container.classList.add('hidden');
        noDataMsg.classList.remove('hidden');
        return;
    } else {
        container.classList.remove('hidden');
        noDataMsg.classList.add('hidden');
    }

    if (gNotas) gNotas.destroy();
    if (gExito) gExito.destroy();
    if (gTiempo) gTiempo.destroy();

    const conteoNotas = {};
    let aprobados = 0;
    let suspendidos = 0;
    const datosDispersion = [];

    interacciones.forEach(int => {
        conteoNotas[int.nota] = (conteoNotas[int.nota] || 0) + 1;
        
        if (int.calificacion === "Aprobado") aprobados++;
        else suspendidos++;

        datosDispersion.push({
            x: parseFloat((int.tiempo_empleado_seg / 60).toFixed(1)),
            y: int.nota
        });
    });

    const etiquetasNotas = Object.keys(conteoNotas).sort((a, b) => a - b);
    const valoresNotas = etiquetasNotas.map(nota => conteoNotas[nota]);

    Chart.defaults.font.family = "'Segoe UI', sans-serif";
    Chart.defaults.color = '#7f8c8d';

    const ctxNotas = document.getElementById('chartNotas').getContext('2d');
    gNotas = new Chart(ctxNotas, {
        type: 'bar',
        data: {
            labels: etiquetasNotas.map(n => `${t('chartNotasX')} ${n}`),
            datasets: [{
                label: t('chartNotasY'),
                data: valoresNotas,
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: t('chartNotasTitulo') } },
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
        }
    });

    const ctxExito = document.getElementById('chartExito').getContext('2d');
    gExito = new Chart(ctxExito, {
        type: 'doughnut',
        data: {
            labels: [t('chartAprobados'), t('chartSuspendidos')],
            datasets: [{
                data: [aprobados, suspendidos],
                backgroundColor: ['rgba(46, 204, 113, 0.7)', 'rgba(231, 76, 60, 0.7)'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: t('chartExitoTitulo') } },
            cutout: '60%'
        }
    });

    const ctxTiempo = document.getElementById('chartTiempo').getContext('2d');
    gTiempo = new Chart(ctxTiempo, {
        type: 'scatter',
        data: {
            datasets: [{
                label: t('labelInteraccion'),
                data: datosDispersion,
                backgroundColor: 'rgba(155, 89, 182, 0.6)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            clip: false,
            layout: {
                padding: { top: 15, right: 15 }
            },
            plugins: { 
                title: { display: true, text: t('chartTiempoTitulo') },
                tooltip: { callbacks: { label: function(context) {
                    return `${t('tooltipTiempo')}: ${context.parsed.x} min | ${t('tooltipNota')}: ${context.parsed.y}`;
                } } }
            },
            scales: {
                x: { title: { display: true, text: t('chartTiempoX') }, beginAtZero: true },
                y: { title: { display: true, text: t('chartTiempoY') }, beginAtZero: true, max: ejercicioData.data.puntaje_maximo }
            }
        }
    });
}

function logout() {
    registrarTracking("Cierre_Sesion", "Hizo clic en cerrar sesión");
    
    setTimeout(() => {
        localStorage.removeItem('userCode');
        window.location.href = 'index.html';
    }, 300);
}

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    
    if (sender.includes('bot')) {
        div.innerHTML = marked.parse(text);
        
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([div]).catch(function (err) {
                console.error('Error renderizando matemáticas:', err.message);
            });
        }
    } else {
        div.innerText = text;
    }

    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return div; 
}

function sendMessage() {
    const text = inputField.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    inputField.value = '';
	
	registrarTracking("Uso_Chatbot", "");
	
    inputField.disabled = true;
    sendBtn.disabled = true;

    const loadingMsg = addMessage(t('botPensando'), 'bot loading');

    const restaurarInterfaz = () => {
        loadingMsg.remove(); 
        inputField.disabled = false;
        sendBtn.disabled = false;
        inputField.focus();
    };

    fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
            prompt: text,
            userId: userId,
            ejercicioId: currentExerciseId,
            history: chatHistory // Enviamos toda la memoria acumulada
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.reply) {
            addMessage(data.reply, 'bot');
            
            chatHistory.push({ "role": "user", "parts": [{ "text": text }] });
            chatHistory.push({ "role": "model", "parts": [{ "text": data.reply }] });

        } else {
            addMessage("Error del bot: " + data.error, 'bot');
        }
        restaurarInterfaz();
    })
    .catch(error => {
        addMessage("Hubo un error de red o el servidor tardó demasiado.", 'bot');
        console.error(error);
        restaurarInterfaz();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    const btnResolver = document.getElementById('btn-resolver');
    if (btnResolver) {
        btnResolver.addEventListener('click', function() {
            if (!currentExerciseDataFull) return;

            const confirmar = confirm("¿Estás seguro de querer resolver el ejercicio ahora? No podrás consultar las estadísticas ni pedirle ayuda al Tutor IA.");
            
            if (confirmar) {
                iniciarEvaluacion(currentExerciseDataFull);
            }
        });
    }

    const btnSubmit = document.getElementById('btn-submit-answer');
    if (btnSubmit) {
        btnSubmit.addEventListener('click', function() {
            if (!currentExerciseDataFull) return;

            let respuestaAlumno = "";
            const tipo = currentExerciseDataFull.data.tipo_pregunta;
            if (tipo === "opcion_multiple" || tipo === "verdadero_falso") {
                const seleccionado = document.querySelector('input[name="respuesta_ejercicio"]:checked');
                if (!seleccionado) { alert(t('alertaSeleccion')); return; }
                respuestaAlumno = seleccionado.value;
            } else if (tipo === "calculo") {
                respuestaAlumno = document.getElementById('respuesta_calculo').value.trim();
                if (respuestaAlumno === "") { alert(t('alertaTexto')); return; }
            }

            btnSubmit.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('enviando')}`;
            btnSubmit.disabled = true;
			
			const tiempoResolucionSeg = Math.round((Date.now() - tiempoInicioResolucion) / 1000);
            fetch(LOG_APP_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    tipo: "respuesta",
                    estudianteId: userId,
                    ejercicioId: currentExerciseId,
                    pregunta: currentExerciseDataFull.data.contenido_pregunta,
                    respuesta: respuestaAlumno,
                    notaMaxima: currentExerciseDataFull.data.puntaje_maximo, // NUEVO
                    tiempoResolucion: tiempoResolucionSeg
                })
            })
            .then(res => res.json())
            .then(data => {
                registrarTracking("Enviar_Respuesta", `Respondió en ${tiempoResolucionSeg}s`);
                
                alert(t('alertaExito'));
                
                document.getElementById('solve-container').classList.add('hidden');
                document.getElementById('content-layout').classList.remove('hidden');
				
				btnSubmit.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-i18n="btnEnviarRespuesta">${t('btnEnviarRespuesta')}</span>`;
                btnSubmit.disabled = false;
            })
            .catch(err => {
                alert(t('alertaError'));
				btnSubmit.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-i18n="btnEnviarRespuesta">${t('btnEnviarRespuesta')}</span>`;
                btnSubmit.disabled = false;
            });
        });
    }
});

function iniciarEvaluacion(ejercicio) {
	tiempoInicioResolucion = Date.now();
    
    registrarTracking("Inicia_Resolucion", "Abrió la hoja del examen");

    document.getElementById('content-layout').classList.add('hidden');
    
    const solveContainer = document.getElementById('solve-container');
    solveContainer.classList.remove('hidden');

    const data = ejercicio.data;
    document.getElementById('solve-title').innerText = data.titulo;
	document.getElementById('solve-score').innerText = `${t('puntajeMaximo')} ${data.puntaje_maximo} ${t('puntos')}`;
	document.getElementById('solve-question').innerText = data.contenido_pregunta;
    const inputArea = document.getElementById('solve-input-area');
    inputArea.innerHTML = '';
    if (data.tipo_pregunta === "opcion_multiple" || data.tipo_pregunta === "verdadero_falso") {
        data.opciones_respuesta.forEach((opcion) => {
            const label = document.createElement('label');
            label.className = 'radio-option';
            label.innerHTML = `
                <input type="radio" name="respuesta_ejercicio" value="${opcion}">
                <span>${opcion}</span>
            `;
            inputArea.appendChild(label);
        });
    } else if (data.tipo_pregunta === "calculo") {
        const textarea = document.createElement('textarea');
        textarea.id = 'respuesta_calculo';
        textarea.className = 'textarea-calculo';
        textarea.placeholder = "Escribe aquí todo tu procedimiento paso a paso y el resultado final...";
        textarea.rows = 8;
        inputArea.appendChild(textarea);
    }
}
const temporizadoresAtencion = {};

function configurarTrackingAtencion() {
    const zonasDeInteres = [
        { elemento: document.querySelector('.metrics-container'), nombre: 'Estadisticas_Cabecera' },
        { elemento: document.getElementById('chartNotas').parentElement, nombre: 'Grafico_Notas' },
        { elemento: document.getElementById('chartExito').parentElement, nombre: 'Grafico_Exito' },
        { elemento: document.getElementById('chartTiempo').parentElement, nombre: 'Grafico_Tiempo' }
    ];

    zonasDeInteres.forEach(zona => {
        if (!zona.elemento) return;

        zona.elemento.addEventListener('mouseenter', () => {
            temporizadoresAtencion[zona.nombre] = Date.now(); // Guardamos el milisegundo exacto
        });

        zona.elemento.addEventListener('mouseleave', () => {
            if (temporizadoresAtencion[zona.nombre]) {
                const tiempoEnSegundos = (Date.now() - temporizadoresAtencion[zona.nombre]) / 1000;
                
                temporizadoresAtencion[zona.nombre] = null;

                if (tiempoEnSegundos >= 1.0) {
                    registrarTracking(`Atencion_${zona.nombre}`, `Tiempo: ${tiempoEnSegundos.toFixed(1)} segundos`);
                }
            }
        });
    });
}