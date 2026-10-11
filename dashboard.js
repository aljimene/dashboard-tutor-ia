let userId = "";
let messagesDiv, inputField, sendBtn;
let currentExerciseId = null;
let chatHistory = [];
let gNotas = null;
let gExito = null;
let gTiempo = null;
let currentExerciseDataFull;
let tiempoInicioResolucion = 0;

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyAk9N1Otb6KC09scyrJPk7D11xtlKqXu81QoMNc2s9TCV1gzQ9hZfE9lx3qoLLcDn2/exec";
const LOG_APP_URL = "https://script.google.com/macros/s/AKfycbzxO5bcQDocTRWd1x9r-E2aEeAKa19UTlfPNwpS0iM9l8cQuJBWZZKIgt5uJLFYBEZI/exec";

//document.addEventListener('contextmenu', function(e) {
//    e.preventDefault();
//}, false);

function mostrarCargaGlobal() {
    let overlay = document.getElementById('global-loading-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'global-loading-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.backdropFilter = 'blur(4px)';
        overlay.innerHTML = `
            <i class="fas fa-circle-notch fa-spin fa-4x" style="color: #1a73e8; margin-bottom: 20px;"></i>
            <h2 style="color: #2c3e50; font-family: 'Segoe UI', sans-serif;">${t('enviando')}</h2>
        `;
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'flex';
}

function ocultarCargaGlobal() {
    const overlay = document.getElementById('global-loading-overlay');
    if (overlay) overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const rawCode = localStorage.getItem('userCode');
    if (!rawCode) { window.location.href = 'index.html'; return; }
    
    const displayElement = document.getElementById('display-user-code');
    if (displayElement) displayElement.innerText = rawCode;
    
    userId = "Estudiante_" + rawCode;

    const listaEjerciciosDiv = document.getElementById('lista-ejercicios');
    listaEjerciciosDiv.innerHTML = ''; 
    const lang = AppConfig.idioma;
	const modo = AppConfig.modo;
    datosEjercicios.forEach((ejercicio) => {
		const bloqueIdioma = ejercicio.data[lang] || ejercicio.data['es'];
		const textosSeguros = bloqueIdioma[modo] || bloqueIdioma['practica'];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'exercise-item'; 
        itemDiv.innerHTML = `<i class="fas fa-file-alt"></i> ${t('palabraEjercicio')}: ${textosSeguros.concepto}`;
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

    registrarTracking("Inicia_Resolucion_Directa", `Entrando a resolver el Ejercicio ${ejercicioData.numero}`);

    document.querySelectorAll('.exercise-list div').forEach(el => el.classList.remove('active'));
    if (elementoHTML) {
        elementoHTML.classList.add('active');
    }

    document.getElementById('welcome-screen').classList.add('hidden');
	//document.getElementById('metrics-container').classList.add('hidden');
    document.getElementById('exercise-content').classList.remove('hidden');
	const cabeceraMetricas = document.querySelector('.exercise-header');
    if (cabeceraMetricas) {
        cabeceraMetricas.classList.add('hidden');
    }

    const lang = AppConfig.idioma;
	const modo = AppConfig.modo;
	
	const bloqueIdioma = ejercicioData.data[lang] || ejercicioData.data['es'];
    const textosSeguros = bloqueIdioma[modo] || bloqueIdioma['practica'];
	
    const conceptoActual = textosSeguros.concepto; 
    
    const saludoPersonalizado = t('botSaludo').replace('{concepto}', conceptoActual);

    const messagesDiv = document.getElementById('messages');
    if (messagesDiv) {
        messagesDiv.innerHTML = `<div class="msg bot">${saludoPersonalizado}</div>`;
    }

    chatHistory = [
        { 
            "role": "model", 
            "parts": [{ "text": saludoPersonalizado }] 
        }
    ];

    const inputField = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    if (inputField) {
        inputField.value = '';
        inputField.disabled = false;
    }
    if (sendBtn) sendBtn.disabled = false;

    iniciarEvaluacion(ejercicioData);
}

function actualizarCabecera(datos) {
    document.getElementById('header-calificacion').innerText = datos.estadistica.calificacion_promedio;
    document.getElementById('header-tiempo').innerText = datos.estadistica.tiempo_promedio;
    
    const difElemento = document.getElementById('header-dificultad');
    const diffMap = {
        "Muy fácil": t('difMuyFacil'),
        "Fácil": t('difFacil'),
        "Medio": t('difMedio'),
        "Difícil": t('difDificil'),
        "Muy difícil": t('difMuyDificil')
    };
    document.getElementById('header-dificultad').innerText = diffMap[datos.estadistica.dificultad] || datos.estadistica.dificultad;
    difElemento.className = datos.estadistica.colorClase; 
}

function registrarTracking(accion, detalles = "") {
    return fetch(LOG_APP_URL, {
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
function renderLegend() {
    const container = document.getElementById('legend-container');
    
    const items = [
        { class: 'bg-eficiente', text: t('cuadranteEficiente'), color: 'rgba(46, 204, 113, 0.8)' },
        { class: 'bg-perseverante', text: t('cuadrantePerseverante'), color: 'rgba(52, 152, 219, 0.8)' },
        { class: 'bg-descuidado', text: t('cuadranteDescuidado'), color: 'rgba(241, 196, 15, 0.8)' },
        { class: 'bg-ayuda', text: t('cuadrantePeligro'), color: 'rgba(231, 76, 60, 0.8)' }
    ];

    container.innerHTML = items.map(item => `
        <div class="legend-item">
            <span class="color-box ${item.class}"></span>
            <span style="color: ${item.color}; font-weight: bold; font-size: 14px;">
                ${item.text}
            </span>
        </div>
    `).join('');
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
            x: parseFloat((int.tiempo_empleado_seg).toFixed(1)),
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
                backgroundColor: 'rgba(52, 152, 219, 0.8)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
			aspectRatio: 1.4,
            plugins: { 
                title: { display: true, text: t('chartNotasTitulo') },
            },
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
        }
    });

    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw: function(chart) {
            if (chart.config.type !== 'doughnut') return;
            let width = chart.width, height = chart.height, ctx = chart.ctx;
            ctx.restore();
            
            let porcentaje = Math.round((aprobados / (aprobados + suspendidos)) * 100) || 0;
            
            let fontSize = (height / 140).toFixed(2);
            ctx.font = "bold " + fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "#333";
            
            let textX = width / 2, textY = height / 2;
            ctx.fillText(porcentaje + "%", textX, textY);
            ctx.save();
        }
    };

    const ctxExito = document.getElementById('chartExito').getContext('2d');
    gExito = new Chart(ctxExito, {
        type: 'doughnut',
        data: {
            labels: [t('chartAprobados'), t('chartSuspendidos')],
            datasets: [{
                data: [aprobados, suspendidos],
                backgroundColor: ['#2ecc71', '#e74c3c'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                title: { display: true, text: t('chartExitoTitulo') }
            },
            cutout: '60%'
        }
    });

    const notaAprobado = ejercicioData.data.puntaje_maximo / 2;
	const tiempoMedioEsperado = parseFloat(ejercicioData.estadistica.tiempo_promedio) || 180;
    const tiempoMaximoEje = tiempoMedioEsperado * 2; 

    const margenY_Sup = 1;     
    const margenX_Der = 30;    

    const ctxTiempo = document.getElementById('chartTiempo').getContext('2d');
    gTiempo = new Chart(ctxTiempo, {
        type: 'scatter',
        data: {
            datasets: [{ 
                label: t('labelInteraccion'), 
                data: datosDispersion,        
                backgroundColor: '#2c3e50',   
                pointRadius: 6.5,
                pointHoverRadius: 10,
                borderWidth: 3,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            clip: false,
            layout: {
                padding: { top: 10, right: 15, left: 10, bottom: 10 } 
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: t('chartCuadrantesTitulo') }, 
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${t('tooltipTiempo')}: ${context.parsed.x} s | ${t('tooltipNota')}: ${context.parsed.y}`;
                        }
                    }
                },
                annotation: {
                    annotations: {
                        boxEficiente: {
                            type: 'box', 
                            xMin: 0, xMax: tiempoMedioEsperado, 
                            yMin: notaAprobado, yMax: ejercicioData.data.puntaje_maximo + margenY_Sup,
                            backgroundColor: 'rgba(46, 204, 113, 0.15)', borderWidth: 0,
                        },
                        boxPerseverante: {
                            type: 'box', 
                            xMin: tiempoMedioEsperado, xMax: tiempoMaximoEje + margenX_Der, 
                            yMin: notaAprobado, yMax: ejercicioData.data.puntaje_maximo + margenY_Sup,
                            backgroundColor: 'rgba(52, 152, 219, 0.15)', borderWidth: 0,
                        },
                        boxFaltaEsfuerzo: {
                            type: 'box', 
                            xMin: 0, xMax: tiempoMedioEsperado, 
                            yMin: 0, yMax: notaAprobado,
                            backgroundColor: 'rgba(241, 196, 15, 0.15)', borderWidth: 0,
                        },
                        boxNecesitaAyuda: {
                            type: 'box', 
                            xMin: tiempoMedioEsperado, xMax: tiempoMaximoEje + margenX_Der, 
                            yMin: 0, yMax: notaAprobado,
                            backgroundColor: 'rgba(231, 76, 60, 0.15)', borderWidth: 0,
                        }
                    }
                }
            },
            scales: {
                x: { 
                    title: { display: true, text: t('chartTiempoX') }, 
                    min: 0, 
                    max: tiempoMaximoEje + margenX_Der 
                },
                y: { 
                    title: { display: true, text: t('chartTiempoY') }, 
                    min: 0, 
                    max: ejercicioData.data.puntaje_maximo + margenY_Sup,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
	renderLegend();
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
        let mathBlocks = [];
        
        const mathPattern = /(\$\$.*?\$\$|\$.*?\$)/gs;
        
        let protectedText = text.replace(mathPattern, (match) => {
            let id = `###MATH_${mathBlocks.length}###`;
            mathBlocks.push(match);
            return id;
        });

        let htmlContent = marked.parse(protectedText);
        
        mathBlocks.forEach((math, index) => {
            // Ponemos las fórmulas dentro de un span para protegerlas del CSS del chat
            htmlContent = htmlContent.replace(`###MATH_${index}###`, `<span class="math-formula">${math}</span>`);
        });
        
        div.innerHTML = htmlContent;
        
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([div]).catch(err => console.error('Error MathJax:', err));
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
	const lang = AppConfig.idioma;
	const modo = AppConfig.modo;
	
	const bloqueIdioma = currentExerciseDataFull.data[lang] || currentExerciseDataFull.data['es'];
	const textosSeguros = bloqueIdioma[modo] || bloqueIdioma['practica'];
	
    fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
            prompt: text,
            userId: userId,
            ejercicioId: currentExerciseId,
            history: chatHistory,
            concepto: textosSeguros.concepto,
            titulo: textosSeguros.titulo,
            instruccionTutor: textosSeguros.instruccion_tutor,
            teoria: currentExerciseDataFull.data.teoria_texto || "",
			idioma: lang
        })
    })
    .then(async response => {
        // Interceptamos respuestas HTML (como redirecciones de login) antes de que rompan el JSON
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        if (!response.ok) {
            const errorText = data && data.error ? data.error : response.statusText;
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        if (!isJson) {
            throw new Error("El servidor no devolvió JSON. Posible conflicto de cuentas de Google.");
        }
        
        return data;
    })
    .then(data => {
        if (data.reply) {
            addMessage(data.reply, 'bot');
            chatHistory.push({ "role": "user", "parts": [{ "text": text }] });
            chatHistory.push({ "role": "model", "parts": [{ "text": data.reply }] });
        } else {
            addMessage("Error lógico del bot: " + data.error, 'bot');
        }
        restaurarInterfaz();
    })
    .catch(error => {
        // Ahora imprimirá el error real en la burbuja roja
        addMessage("Fallo capturado: " + error.message, 'bot');
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
			let justificaRespuesta = "N/A";
			const lang = AppConfig.idioma;
			const modo = AppConfig.modo;
	
			const bloqueIdioma = currentExerciseDataFull.data[lang] || currentExerciseDataFull.data['es'];
			const textosSeguros = bloqueIdioma[modo] || bloqueIdioma['practica'];
            const tipo = textosSeguros.tipo_pregunta;
            if (tipo === "opcion_multiple" || tipo === "verdadero_falso") {
                const seleccionado = document.querySelector('input[name="respuesta_ejercicio"]:checked');
                if (!seleccionado) { alert(t('alertaSeleccion')); return; }
                respuestaAlumno = seleccionado.value;
				
				if (tipo === "opcion_multiple") {
                    justificaRespuesta = document.getElementById('justificacion_opcion').value.trim();
                    if (justificaRespuesta === "") { 
                        alert(t('alertaJustificacion')); 
                        return; 
                    }
                }
            } else if (tipo === "calculo") {
                respuestaAlumno = document.getElementById('respuesta_calculo').value.trim();
                if (respuestaAlumno === "") { alert(t('alertaTexto')); return; }
				justificaRespuesta = "";
            }

            mostrarCargaGlobal();

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
					justificaRespuesta: justificaRespuesta,
                    notaMaxima: currentExerciseDataFull.data.puntaje_maximo,
                    tiempoResolucion: tiempoResolucionSeg
                })
            })
            .then(res => res.json())
            .then(data => {
                registrarTracking("Enviar_Respuesta", `Respondió en ${tiempoResolucionSeg}s`).then(() => {
                    ocultarCargaGlobal();
                    alert(t('alertaExito'));
                    
                    document.getElementById('solve-layout').classList.add('hidden');
                    document.getElementById('stats-container').classList.remove('hidden');
                });
            })
            .catch(err => {
                ocultarCargaGlobal();
                alert(t('alertaError'));
            });
        });
    }
});

function iniciarEvaluacion(ejercicio) {
    tiempoInicioResolucion = Date.now();
    
    registrarTracking("Inicia_Resolucion", "Abrió la hoja del examen");
	
	const lang = AppConfig.idioma;
	const modo = AppConfig.modo;
	
    document.getElementById('stats-container').classList.add('hidden');
    document.getElementById('solve-layout').classList.remove('hidden');
    
	const panelChatbot = document.querySelector('.right-panel');
    const panelEjercicio = document.getElementById('solve-container');

    if (panelChatbot && panelEjercicio) {
        if (AppConfig.mostrarTutor) {
            panelChatbot.style.display = '';
            panelEjercicio.style.flex = "3";
        } else {
            panelChatbot.style.display = 'none';
            panelEjercicio.style.flex = "1";
        }
    }
	
    const btnResolver = document.getElementById('btn-resolver');
    if (btnResolver) btnResolver.disabled = true;

    const data = ejercicio.data;
	const bloqueIdioma = ejercicio.data[lang] || ejercicio.data['es'];
	const textosSeguros = bloqueIdioma[modo] || bloqueIdioma['practica'];
	
    document.getElementById('solve-title').innerText = textosSeguros.titulo;
    document.getElementById('solve-score').innerText = `${t('puntajeMaximo')} ${data.puntaje_maximo} ${t('puntos')}`;
	document.getElementById('solve-question').innerHTML = textosSeguros.contenido_pregunta;

    const inputArea = document.getElementById('solve-input-area');
    inputArea.innerHTML = ''; 

    if (textosSeguros.tipo_pregunta === "opcion_multiple" || textosSeguros.tipo_pregunta === "verdadero_falso") {
        
        const opcionesContainer = document.createElement('div');
        opcionesContainer.className = 'opciones-container';
        
        textosSeguros.opciones_respuesta.forEach((opcion, index) => {
            const label = document.createElement('label');
            label.className = 'opcion-item'; 
            
             label.innerHTML = `<input type="radio" name="respuesta_ejercicio" id="opcion_${index}" value="${opcion}"> <span style="cursor: pointer;">${opcion}</span>`;
            
            label.htmlFor = `opcion_${index}`; 
            
            opcionesContainer.appendChild(label);
        });
        inputArea.appendChild(opcionesContainer);

        if (textosSeguros.tipo_pregunta === "opcion_multiple") {
            const justificacionTitle = document.createElement('h4');
            justificacionTitle.innerText = t('labelJustificacion');
            justificacionTitle.style.marginTop = "20px";
            justificacionTitle.style.marginBottom = "10px";
            justificacionTitle.style.color = "#2c3e50";
            inputArea.appendChild(justificacionTitle);

            const textareaJustificacion = document.createElement('textarea');
            textareaJustificacion.id = 'justificacion_opcion';
            textareaJustificacion.className = 'textarea-calculo';
            textareaJustificacion.placeholder = t('placeholderJustificacion');
            textareaJustificacion.rows = 3;
            inputArea.appendChild(textareaJustificacion);
        }

    } else if (textosSeguros.tipo_pregunta === "calculo") {
        const textarea = document.createElement('textarea');
        textarea.id = 'respuesta_calculo';
        textarea.className = 'textarea-calculo';
        textarea.placeholder = t('placeholderCalculo'); 
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
            temporizadoresAtencion[zona.nombre] = Date.now();
        });

        zona.elemento.addEventListener('mouseleave', () => {
            if (temporizadoresAtencion[zona.nombre]) {
                const tiempoEnSegundos = (Date.now() - temporizadoresAtencion[zona.nombre]) / 1000;
                
                temporizadoresAtencion[zona.nombre] = null;

                if (tiempoEnSegundos >= 1.0) {
                    registrarTracking(`Tiempo_${zona.nombre}`, `Tiempo: ${tiempoEnSegundos.toFixed(1)} segundos`);
                }
            }
        });
    });
}