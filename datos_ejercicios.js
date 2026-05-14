const datosEjercicios = [
    {
        numero: 1,
        estadistica: { dificultad: "Fácil", calificacion_promedio: "4.2/5", intentos_promedio: "1.2", tiempo_promedio: "1.5 min", tasa_exito: "83%", colorClase: "level-easy" },
		data: {
            tipo_pregunta: "opcion_multiple",
            concepto: "Débito e Transferência de Dados",
            titulo: "Cálculo do Tamanho do Ficheiro",
            contenido_pregunta: "Um canal com débito de 50Mbps demora 40 décimos de segundo a transferir um ficheiro. Qual o tamanho desse ficheiro?",
            puntaje_maximo: 5,
            opciones_respuesta: ["200000000 bits", "12500000 bits", "2000000 bits", "Nenhuma das anteriores"],
            respuesta_correcta: "200000000 bits",
            instruccion_tutor: "Ajuda o aluno a converter primeiro o tempo: 40 décimos de segundo equivalem a 4 segundos. Em seguida, orienta-o a multiplicar o débito (50 Mbps) pelo tempo, lembrando que 50 Megabits por segundo vezes 4 segundos resulta em 200 Megabits, que convertidos são 200.000.000 bits."
        },
        interacciones: [
            { estudiante_id: "Estudiante_01", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 120, fecha: "2024-05-10T09:15:00Z" },
            { estudiante_id: "Estudiante_02", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 90, fecha: "2024-05-10T09:20:00Z" },
            { estudiante_id: "Estudiante_03", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2024-05-10T09:25:00Z" },
            { estudiante_id: "Estudiante_03", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 100, fecha: "2024-05-10T09:30:00Z" },
            { estudiante_id: "Estudiante_04", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 80, fecha: "2024-05-11T10:10:00Z" },
            { estudiante_id: "Estudiante_05", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2024-05-12T11:00:00Z" },
            { estudiante_id: "Estudiante_06", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2024-05-13T08:30:00Z" },
            { estudiante_id: "Estudiante_06", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 130, fecha: "2024-05-13T08:45:00Z" },
            { estudiante_id: "Estudiante_07", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2024-05-13T09:00:00Z" },
            { estudiante_id: "Estudiante_08", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 105, fecha: "2024-05-14T09:00:00Z" },
            { estudiante_id: "Estudiante_09", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2024-05-14T09:10:00Z" },
            { estudiante_id: "Estudiante_10", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 120, fecha: "2024-05-15T10:20:00Z" }
        ]
    },
    {
        numero: 2,
        estadistica: { dificultad: "Medio", calificacion_promedio: "4.9/10", intentos_promedio: "1.5", tiempo_promedio: "6.4 min", tasa_exito: "53%", colorClase: "level-medium" },
        data: {
            tipo_pregunta: "calculo",
            concepto: "Proporcionalidade da Largura de Banda",
            titulo: "Impacto da Redução do Débito",
            contenido_pregunta: "Um ficheiro de 335MB demora 14 segundos a ser transferido num determinado canal, em condições ótimas de utilização. Qual o tempo que demora a sua transferência, em condições ótimas de utilização, noutro canal com apenas 50% da largura de banda do primeiro?",
            puntaje_maximo: 10,
            opciones_respuesta: [], 
            respuesta_correcta: "28 segundos",
            instruccion_tutor: "Explica ao aluno que a relação entre a largura de banda e o tempo de transferência é inversamente proporcional. Não é necessário calcular o débito exato; se a largura de banda é reduzida a 50% (metade), o tempo necessário para transferir a mesma quantidade de dados será o dobro."
        },
        interacciones: [
            { estudiante_id: "Estudiante_01", intento: 1, nota: 3, calificacion: "Suspendido", tiempo_empleado_seg: 300, fecha: "2024-05-10T10:15:00Z" },
            { estudiante_id: "Estudiante_01", intento: 2, nota: 7, calificacion: "Aprobado", tiempo_empleado_seg: 480, fecha: "2024-05-10T10:25:00Z" },
            { estudiante_id: "Estudiante_02", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 420, fecha: "2024-05-10T10:40:00Z" },
            { estudiante_id: "Estudiante_03", intento: 1, nota: 8, calificacion: "Aprobado", tiempo_empleado_seg: 540, fecha: "2024-05-11T11:05:00Z" },
            { estudiante_id: "Estudiante_04", intento: 1, nota: 2, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2024-05-11T11:20:00Z" },
            { estudiante_id: "Estudiante_04", intento: 2, nota: 4, calificacion: "Suspendido", tiempo_empleado_seg: 300, fecha: "2024-05-11T11:30:00Z" },
            { estudiante_id: "Estudiante_04", intento: 3, nota: 6, calificacion: "Aprobado", tiempo_empleado_seg: 360, fecha: "2024-05-11T11:45:00Z" },
            { estudiante_id: "Estudiante_05", intento: 1, nota: 10, calificacion: "Aprobado", tiempo_empleado_seg: 720, fecha: "2024-05-12T09:30:00Z" },
            { estudiante_id: "Estudiante_06", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2024-05-13T09:30:00Z" },
            { estudiante_id: "Estudiante_06", intento: 2, nota: 3, calificacion: "Suspendido", tiempo_empleado_seg: 240, fecha: "2024-05-13T09:45:00Z" },
            { estudiante_id: "Estudiante_07", intento: 1, nota: 4, calificacion: "Suspendido", tiempo_empleado_seg: 360, fecha: "2024-05-13T10:00:00Z" },
            { estudiante_id: "Estudiante_08", intento: 1, nota: 9, calificacion: "Aprobado", tiempo_empleado_seg: 600, fecha: "2024-05-14T10:00:00Z" },
            { estudiante_id: "Estudiante_09", intento: 1, nota: 2, calificacion: "Suspendido", tiempo_empleado_seg: 240, fecha: "2024-05-14T10:15:00Z" },
            { estudiante_id: "Estudiante_09", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 420, fecha: "2024-05-14T10:30:00Z" },
            { estudiante_id: "Estudiante_10", intento: 1, nota: 6, calificacion: "Aprobado", tiempo_empleado_seg: 480, fecha: "2024-05-15T11:00:00Z" }
        ]
    },
    {
        numero: 3,
        estadistica: { dificultad: "Difícil", calificacion_promedio: "2.0/5", intentos_promedio: "1.5", tiempo_promedio: "3.4 min", tasa_exito: "40%", colorClase: "level-hard" },
		data: {
            tipo_pregunta: "opcion_multiple",
            concepto: "Endereçamento IP e Máscaras",
            titulo: "Identificação do Endereço de Rede",
            contenido_pregunta: "Qual o endereço da rede onde está a máquina com IP 192.168.123.3 e máscara de rede 255.255.255.0?",
            puntaje_maximo: 5,
            opciones_respuesta: ["192.168.0.0", "192.168.123.0","192.168.123.255", "Nenhuma das anteriores"],
            respuesta_correcta: "192.168.123.0",
            instruccion_tutor: "Guia o aluno a aplicar a operação lógica AND entre o endereço IP e a máscara de rede. Mostra que a máscara 255.255.255.0 (ou /24) mantém os três primeiros octetos intactos (192.168.123) e transforma os bits do último octeto em zeros, resultando em .0."
        },
        interacciones: [
            { estudiante_id: "Estudiante_01", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2024-05-10T11:15:00Z" },
            { estudiante_id: "Estudiante_01", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 400, fecha: "2024-05-10T11:25:00Z" },
            { estudiante_id: "Estudiante_02", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2024-05-10T11:40:00Z" },
            { estudiante_id: "Estudiante_03", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 150, fecha: "2024-05-11T12:05:00Z" },
            { estudiante_id: "Estudiante_03", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 200, fecha: "2024-05-11T12:15:00Z" },
            { estudiante_id: "Estudiante_03", intento: 3, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 450, fecha: "2024-05-11T12:30:00Z" },
            { estudiante_id: "Estudiante_04", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 350, fecha: "2024-05-11T12:20:00Z" },
            { estudiante_id: "Estudiante_05", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2024-05-12T12:00:00Z" },
            { estudiante_id: "Estudiante_06", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2024-05-13T10:00:00Z" },
            { estudiante_id: "Estudiante_06", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 180, fecha: "2024-05-13T10:15:00Z" },
            { estudiante_id: "Estudiante_07", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2024-05-13T10:30:00Z" },
            { estudiante_id: "Estudiante_08", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 380, fecha: "2024-05-14T11:00:00Z" },
            { estudiante_id: "Estudiante_09", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 130, fecha: "2024-05-14T11:10:00Z" },
            { estudiante_id: "Estudiante_09", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 250, fecha: "2024-05-14T11:25:00Z" },
            { estudiante_id: "Estudiante_10", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2024-05-15T12:00:00Z" }
        ]
    },
    {
        numero: 4,
        estadistica: { dificultad: "Medio", calificacion_promedio: "3.8/5", intentos_promedio: "1.2", tiempo_promedio: "2.6 min", tasa_exito: "75%", colorClase: "level-medium" },
        data: {
            tipo_pregunta: "calculo",
            concepto: "Cálculo de Hosts em Sub-redes",
            titulo: "Número de Endereços Úteis",
            contenido_pregunta: "Quantos endereços podem ser utilizados para endereçar computadores numa rede com a máscara 255.255.255.248?",
            puntaje_maximo: 5,
            opciones_respuesta: [],
            respuesta_correcta: "6",
            instruccion_tutor: "Ensina o aluno a identificar os bits reservados para hosts. Uma máscara terminada em .248 corresponde a um prefixo /29, o que deixa 3 bits para hosts (32 - 29). Lembra o aluno de aplicar a fórmula 2^n - 2 (neste caso 2^3 - 2) para subtrair o endereço de rede e o endereço de broadcast."
        },
        interacciones: [
            { estudiante_id: "Estudiante_01", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 180, fecha: "2024-05-10T12:15:00Z" },
            { estudiante_id: "Estudiante_02", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 210, fecha: "2024-05-10T12:40:00Z" },
            { estudiante_id: "Estudiante_03", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2024-05-11T13:00:00Z" },
            { estudiante_id: "Estudiante_03", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 140, fecha: "2024-05-11T13:10:00Z" },
            { estudiante_id: "Estudiante_04", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2024-05-11T13:20:00Z" },
            { estudiante_id: "Estudiante_04", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 150, fecha: "2024-05-11T13:30:00Z" },
            { estudiante_id: "Estudiante_05", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 170, fecha: "2024-05-12T13:00:00Z" },
            { estudiante_id: "Estudiante_06", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 190, fecha: "2024-05-13T11:30:00Z" },
            { estudiante_id: "Estudiante_07", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2024-05-13T11:45:00Z" },
            { estudiante_id: "Estudiante_08", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 200, fecha: "2024-05-14T12:00:00Z" },
            { estudiante_id: "Estudiante_09", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 160, fecha: "2024-05-14T12:15:00Z" },
            { estudiante_id: "Estudiante_10", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 180, fecha: "2024-05-15T12:20:00Z" }
        ]
    },
    {
        numero: 5,
        estadistica: { dificultad: "Fácil", calificacion_promedio: "4.5/5", intentos_promedio: "1.1", tiempo_promedio: "1.5 min", tasa_exito: "91%", colorClase: "level-easy" },
        data: {
            tipo_pregunta: "opcion_multiple",
            concepto: "Cálculo de Broadcast em Sub-redes",
            titulo: "Determinação do Endereço de Difusão",
            contenido_pregunta: "Qual o endereço de Broadcast da rede onde está a máquina com IP 192.168.123.36 e máscara de rede 255.255.255.248?",
            puntaje_maximo: 5,
            opciones_respuesta: ["192.168.123.255", "192.168.123.0","192.168.123.39", "Nenhuma das anteriores"],
            respuesta_correcta: "192.168.123.39",
            instruccion_tutor: "Ajuda o aluno a encontrar o bloco mágico (saltos) da sub-rede. A máscara .248 permite blocos de 8. A sub-rede que contém o IP .36 é a .32 (múltiplo de 8). O endereço de broadcast é sempre o último endereço antes da próxima sub-rede (.40), ou seja, .39."
        },
        interacciones: [
            { estudiante_id: "Estudiante_01", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 90, fecha: "2024-05-10T13:15:00Z" },
            { estudiante_id: "Estudiante_02", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2024-05-10T13:40:00Z" },
            { estudiante_id: "Estudiante_03", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2024-05-11T14:05:00Z" },
            { estudiante_id: "Estudiante_04", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2024-05-11T14:15:00Z" },
            { estudiante_id: "Estudiante_05", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 40, fecha: "2024-05-12T14:00:00Z" },
            { estudiante_id: "Estudiante_05", intento: 2, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 120, fecha: "2024-05-12T14:10:00Z" },
            { estudiante_id: "Estudiante_06", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 105, fecha: "2024-05-13T12:00:00Z" },
            { estudiante_id: "Estudiante_07", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 80, fecha: "2024-05-13T12:15:00Z" },
            { estudiante_id: "Estudiante_08", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 100, fecha: "2024-05-14T13:00:00Z" },
            { estudiante_id: "Estudiante_09", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2024-05-14T13:10:00Z" },
            { estudiante_id: "Estudiante_10", intento: 1, nota: 5, calificacion: "Aprobado", tiempo_empleado_seg: 100, fecha: "2024-05-15T13:20:00Z" }
        ]
    }
];