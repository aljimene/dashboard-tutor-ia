const datosEjercicios = [
    {
        numero: 1,
        estadistica: { dificultad: "Fácil", calificacion_promedio: "4.2/5", intentos_promedio: "1.2", tiempo_promedio: "1.5 min", tasa_exito: "83%", colorClase: "level-easy" },
        data: {
            tipo_pregunta: "opcion_multiple",
            concepto: "Largura de banda vs Tamanho de ficheiro",
            titulo: "Cálculo de tempo de transferência",
            contenido_pregunta: "Um canal com uma velocidade de 50Mbps demora 40 décimos de segundo a descarregar um ficheiro. Qual é o tamanho desse ficheiro?",
            puntaje_maximo: 5,
            opciones_respuesta: ["10 segundos", "80 segundos", "100 segundos", "8 segundos"],
            respuesta_correcta: "80 segundos",
            instruccion_tutor: "O aluno costuma esquecer-se de converter Megabytes (MB) para Megabits (Mbps). 1 Byte = 8 bits. Orienta-o para que multiplique 100 por 8 antes de dividir."
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
            concepto: "Bitrate de Streaming",
            titulo: "Viabilidade de Streaming 4K",
            contenido_pregunta: "Um ficheiro de 335MB demora 14 segundos a ser transferido num dado canal, sob condições ótimas de utilização. Quanto tempo demora a ser transferido, em condições ótimas de utilização, noutro canal com apenas 50% da largura de banda do primeiro?",
            puntaje_maximo: 10,
            opciones_respuesta: [], 
            respuesta_correcta: "Aprox. 4.44 horas",
            instruccion_tutor: "O aluno deve igualar as unidades. 25 Mbps = 25 Megabits por segundo. 50 GB = 50.000 Megabytes = 400.000 Megabits. Tempo = 400.000 / 25 = 16.000 segundos. 16.000 / 3600 = 4.44 horas."
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
            tipo_pregunta: "verdadero_falso",
            concepto: "Latência vs Throughput",
            titulo: "Impacto do RTT no TCP",
            contenido_pregunta: "Qual é o endereço de rede onde se encontra a máquina com o IP 192.168.123.3 e a máscara de rede 255.255.0?",
            puntaje_maximo: 5,
            opciones_respuesta: ["Verdadeiro", "Falso"],
            respuesta_correcta: "Falso",
            instruccion_tutor: "Explica que o TCP é sensível ao RTT (Round Trip Time). A elevadíssima latência para o Japão faz com que a janela de congestionamento do TCP limite o throughput real, pelo que a ligação local de 500Mbps será provavelmente mais rápida para transferir um ficheiro."
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
            tipo_pregunta: "opcion_multiple",
            concepto: "Resolução e Compressão",
            titulo: "Eficiência de Codecs",
            contenido_pregunta: "Quantos endereços podem ser usados para endereçar computadores numa rede com a máscara 255.255.255.248?",
            puntaje_maximo: 5,
            opciones_respuesta: ["0%", "25%", "50%", "75%"],
            respuesta_correcta: "50%",
            instruccion_tutor: "O H.265 foi concebido para oferecer aproximadamente o dobro da eficiência de compressão do H.264 para a mesma qualidade, poupando 50% de bitrate."
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
            tipo_pregunta: "verdadero_falso",
            concepto: "Redes CDN",
            titulo: "Propósito das CDNs",
            contenido_pregunta: "Qual é o endereço de difusão (broadcast) da rede onde se encontra a máquina com o IP 192.168.123.36 e a máscara de rede 255.255.255.248?",
            puntaje_maximo: 5,
            opciones_respuesta: ["Verdadeiro", "Falso"],
            respuesta_correcta: "Falso",
            instruccion_tutor: "Esclarece que as CDNs não aumentam a largura de banda do servidor de origem, mas sim distribuem a carga através de servidores Edge próximos do utilizador, reduzindo a latência e poupando largura de banda na origem."
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