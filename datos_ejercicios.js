const datosEjercicios = [
    {
		numero: 1,
		estadistica: { 
			dificultad: "Muy fácil", 
			calificacion_promedio: "96/100", 
			intentos_promedio: "1.1",
			tiempo_promedio: 180, 
			tasa_exito: "90%", 
			colorClase: "level-very-easy" 
		},
		data: {
			tipo_pregunta: "opcion_multiple",
			concepto: "Estructura de datos: Vectores",
			titulo: "Operaciones entre vectores",
			contenido_pregunta: "Dado el siguiente código en R, ¿Cuál será el resultado de mean(v[v < 6])? v <- c(3, 6, 7, 5, 4) print(mean(v[v < 6]))",
			puntaje_maximo: 100,
			tiempo_medio_esperado: 180, 
			opciones_respuesta: ["3", "4", "5", "6"],
			respuesta_correcta: "4",
			instruccion_tutor: "Se crea un vector, luego se filtra los datos usando un condicional de menor y luego se obtiene el promedio del vector resultante. Finalmente se muestra el resultado por consola",
			url_diapositivas: "https://www.it.uc3m.es/albjimen/programaci%C3%B3n/transparencias/M1.pdf",
			url_ejercicios: "",
			teoria_texto: `PROGRAMACIÓN
Vectores, Matrices y Funciones

Alberto Jiménez Macías
Curso 2025 - 2026

Variables

Variables en R
● Es un espacio con nombre para almacenar información. 
● Usamos la flecha <- para guardar un valor en una variable.

Nombres de variables
● Mayúsculas: Usualmente para constantes o valores que no cambian en el modelo (Ej. Tasa_Impositiva_Fija).
● Minúsculas: Para variables que esperamos que cambien o sean calculadas (Ej. consumo_total, inflacion_anual).

Ejemplo de variables
# Ingresos Nacionales (constante)
Y_nacional <- 1000000 # Uso de mayúsculas para "constantes" o valores clave
# Tasa de crecimiento esperada
g_esperado <- 0.035

Tipos de datos
● Numéricos (numeric): Números (precios, cantidades, PIB, tasas).
■ precio_bono <- 98.75
■ pi_esperado <- 2.5

● Caracteres (character): Texto (nombres de países, categorías, nombres de empresas).
■ pais_origen <- "España"
■ sector_empresa <- "Servicios"

Tipos de datos
● Lógicos (logical): Verdadero (TRUE) o Falso (FALSE). Útil para condiciones.
■ hay_recesion <- TRUE
■ es_empresa_grande <- FALSE

● Valores Especiales (NA, NULL): Estos no son "tipos de datos" sino valores especiales que representan estados o situaciones.
■ NA (Not Available - No Disponible): Datos Faltantes
■ NULL: Objeto Vacío o Ausencia de Objeto
■ Inf (infinito), -Inf (menos infinito) y NaN (Not a Number)

Operaciones básicas
● Operaciones Aritméticas: Suma (+), Resta (-), Multiplicación (*), División (/), Potencia (^).

# Calcular el ingreso total de ventas 
precio_unitario <- 50 
cantidad_vendida <- 200 
ingresos_totales <- precio_unitario * cantidad_vendida 
# Resultado: ingresos_totales es 10000 

# Calcular la inflación anual
ipc_actual <- 105
ipc_anterior <- 100
inflacion_anual <- ((ipc_actual / ipc_anterior) - 1) * 100
# Resultado: inflacion_anual es 5

Operaciones básicas
● print(): Para ver el contenido de una variable o el resultado en la consola.
print("Mensaje de texto para mostrar por consola")
print(paste("El PIB esperado para el próximo año es:", Y_nacional * (1 + g_esperado), "millones €."))
# Resultado en Consola: "El PIB esperado para el próximo año es: 1035000 millones €."

Estructuras de datos

Vectores

Definición
● Es una secuencia ordenada de elementos del mismo tipo.
● Piensen en una serie temporal (precios, PIB trimestral) o una columna de datos en una hoja de cálculo.
● La forma más común de crear vectores con valores específicos es ‘c()’ de (combinar).

Creación
● c(): Para vectores con valores ya conocidos.
■ v5 <- c(1:5) # Crea un vector con números del 1 al 5
■ # Resultado: v5 es [1, 2, 3, 4, 5]

■ precios_acciones <- c(10.5, 11.2, 10.8, 11.5, 12.0)
■ # Resultado: precios_acciones es [10.5, 11.2, 10.8, 11.5, 12.0]

Operaciones
● Elemento a Elemento (con un número): R aplica operaciones a cada elemento del vector.
○ precios_dolares <- precios_acciones * 1.1 # Convertir a otra moneda (tasa 1.1)
○ # Resultado: precios_dolares es [11.55, 12.32, 11.88, 12.65, 13.2]

● Entre Vectores: Dos vectores de la misma longitud se operan elemento a elemento.
○ ingresos_mensuales <- c(1000, 1200, 1100) # Ingresos por mes
○ gastos_mensuales <- c(800, 950, 900)     # Gastos por mes
○ ahorro_mensual <- ingresos_mensuales - gastos_mensuales # Ahorro por mes
■ # Resultado: ahorro_mensual es [200, 250, 200]

Funciones básicas
● sum(): Suma de todos los elementos. 
○ total_ahorro <- sum(ahorro_mensual) 
○ # Resultado: total_ahorro es 650 

● min(), max(): Mínimo y máximo valor.
○ max_precio_accion <- max(precios_acciones)
○ # Resultado: max_precio_accion es 12

● mean(): Media (promedio). 
○ salario_promedio <- mean(salarios)
○ # Resultado: salario_promedio es 1830 

● length(): Número de elementos (longitud del vector).
○ num_observaciones_pib <- length(pib_trimestral)
○ # Resultado: num_observaciones_pib es 4

Acceder a elementos
● Usando corchetes [] y el índice (posición).
● El primer elemento es el índice 1
primer_precio <- precios_acciones[1]
# Resultado: primer_precio es 10.5
salarios_intermedios <- salarios[c(2, 4)] # Segundo y cuarto salario
# Resultado: salarios_intermedios es [1800, 1650]

Acceder a elementos
● Seleccionar elementos que cumplen una condición
○ == (igual a), != (distinto de)
○ > (mayor que), < (menor que)
○ >= (mayor o igual que), <= (menor o igual que)
○ & (AND lógico), | (OR lógico), ! (NOT lógico)

○ precios_altos <- precios_acciones[precios_acciones > 11] # Precios mayores a 11
■ # Resultado: precios_altos es [11.2, 11.5, 12]

Acceder a elementos
● Asignar nombres a los elementos para hacer su código y resultados más legibles
○ pib_trimestral <- c(100,102,110,103)
○ names(pib_trimestral) <- c("Q1_2024", "Q2_2024", "Q3_2024", "Q4_2024")
○ # pib_trimestral ahora: Q1_2024=100, Q2_2024=102, etc.
○
○ pib_q4_2024 <- pib_trimestral["Q4_2024"] # Acceder por nombre
○ # Resultado: pib_q4_2024 es 103

Matrices

Definición
● Una colección de elementos del mismo tipo organizados en filas y columnas. Como una tabla de Excel.
● Se usa el comando matrix() con los parámetros indicados:
○ data: El vector de valores que contendrá la matriz. R los llenará por columnas por defecto.
○ nrow: El número de filas deseado para la matriz.
○ ncol: El número de columnas deseado para la matriz.
○ byrow = FALSE (por defecto): Indica si los datos se deben llenar por columnas (FALSE) o por filas (TRUE). Si lo omites, R llenará columna a columna.
○ dimnames: Un parámetro opcional que recibe una lista de dos vectores de caracteres con los nombres de las filas y las columnas.

Ejemplo
# Datos de ventas de 2 productos en 3 regiones para un trimestre
ventas_datos <- c(100, 120, 150,  80, 90, 110)   
# Creamos la matriz: 2 filas (productos), 3 columnas (regiones)
matriz_ventas <- matrix(ventas_datos, nrow = 2, byrow = TRUE) # byrow=TRUE llena por filas
# Resultado de matriz_ventas:
#      [,1] [,2] [,3]
# [1,]  100  120  150
# [2,]   80   90  110

Funciones básicas
● dim(): Devuelve el número de filas y columnas.
○ dimensiones_matriz <- dim(matriz_ventas)
○ # Resultado: dimensiones_matriz es [2, 3] (2 filas, 3 columnas)

● nrow(): Número de filas.
○ num_productos <- nrow(matriz_ventas)
○ # Resultado: num_productos es 2

● ncol(): Número de columnas.
○ num_regiones <- ncol(matriz_ventas)
○ # Resultado: num_regiones es 3

Acceder a elementos
● Usando corchetes [fila, columna]. Si se omite uno, selecciona toda la fila o columna.
● Siempre fila primero, luego columna
○ venta_prodA_regS <- matriz_ventas[1, 2]
○ # Resultado: venta_prodA_regS es 120
○ ventas_regNorte <- matriz_ventas[ , 1] # Todas las ventas como vector
○ # Resultado: ventas_regNorte es [100, 80]
○ ventas_prodB <- matriz_ventas[2, ] # Todas las ventas como vector
○ # Resultado: ventas_prodB es [80, 90, 110]

Operaciones básicas
● Las operaciones aritméticas se aplican elemento a elemento.
○ # Suponemos un impuesto del 10% sobre las ventas
○ impuesto_ventas <- matriz_ventas * 0.10
○ # Resultado de impuesto_ventas:
○ #      [,1] [,2] [,3]
○ # [1,] 10.0 12.0 15.0
○ # [2,]  8.0  9.0 11.0

Operaciones: Vector por matriz
● R repite el vector v para que coincida con las dimensiones de la matriz
● El vector v se convierte internamente en matriz.
● R multiplica cada elemento de la matriz por el elemento correspondiente del vector repetido.
○ m2 <- matrix(c(1, 2, 3, 4), ncol= 2)
○ v <- c(5 , 10)
○ resultado <- m2 * v

Operaciones básicas
● cbind() y rbind(): Para combinar vectores o matrices por columnas (cbind) o filas (rbind).
○ vector1 <- 1:3 # [1, 2, 3]
○ vector2 <- 4:6 # [4, 5, 6]
○ vector3 <- 7:9 # [7, 8, 9]
○ matriz_combinada <- cbind(vector1, vector2, vector3) # Une como columnas
○ # Resultado de matriz_combinada:
○ #      vector1 vector2 vector3
○ # [1,]       1       4       7
○ # [2,]       2       5       8
○ # [3,]       3       6       9

Operaciones básicas
● transposición (t()): Intercambia filas por columnas
○ matriz_transpuesta <- t(matriz_ventas)
○ # Resultado de matriz_transpuesta:
○ #      [,1] [,2]
○ # [1,]  100   80
○ # [2,]  120   90
○ # [3,]  150  110

Funciones

Definición
● Un bloque de código con un nombre que realiza una tarea específica.
● Como una fórmula que pueden usar una y otra vez con diferentes entradas o argumentos. Ej: print(), sum(), mean()
● Evita repetir código, mejora la organización y facilita la depuración de errores.

Creación
nombre_funcion <- function(argumento1, argumento2, ...) {
   # Bloque de código de la función
   # Aquí realizamos operaciones con los argumentos
   return(resultado) # Opcional: define qué valor devuelve la función
}
return(): Opcional, especifica el valor o valores que la función "entrega" como resultado.

Ejemplo
calcular_crecimiento <- function(valor_inicial, valor_final) {
  crecimiento <- ((valor_final - valor_inicial) / valor_inicial) * 100
  return(crecimiento)
}
# Usando la función:
crecimiento_pib_ej <- calcular_crecimiento(100, 105) # PIB de 100 a 105
# Resultado: crecimiento_pib_ej es 5%
crecimiento_exportaciones <- calcular_crecimiento(250, 265) # Exportaciones de 250 a 265
# Resultado: crecimiento_exportaciones es 6%

Ejemplo
generar_resumen_cuentas <- function(ingresos_anuales, gastos_anuales, concepto_analisis) {
  # Calcular el balance neto
  balance_neto <- ingresos_anuales - gastos_anuales
  # Imprimir el resumen en la consola
  print(paste("--- Resumen Anual para:", concepto_analisis, "---"))
  print(paste("Ingresos Totales:", ingresos_anuales, "€"))
  print(paste("Gastos Totales:", gastos_anuales, "€"))
  print(paste("Balance Neto:", balance_neto, "€"))
  print("------------------------------------------")
}

Ejemplo
analizar_finanzas_mensuales <- function(ingresos_vec, gastos_vec) {
  # Calcula el ahorro para cada mes
  ahorro_mensual <- ingresos_vec - gastos_vec
  # Calcula el ahorro total del periodo
  ahorro_total <- sum(ahorro_mensual)
  # Devuelve un vector con el ahorro mensual y el ahorro total
  resultado_analisis <- c(ahorro_mensual, ahorro_total)
  return(resultado_analisis)
} 

Ejemplo
mis_ingresos <- c(2000, 2100, 1950) # Ingresos de 3 meses
mis_gastos <- c(1500, 1600, 1400)   # Gastos de 3 meses
resultados_finanzas <- analizar_finanzas_mensuales(mis_ingresos, mis_gastos)
print("Resultados del análisis financiero (ahorro mensual seguido del ahorro total):")
print(resultados_finanzas)
# Resultado: [200, 250, 200, 650] 

Ejemplo
# Usamos la función, pero no asignamos su "resultado" a ninguna variable
generar_resumen_cuentas(ingresos_anuales = 500000, gastos_anuales = 450000, concepto_analisis = "Compañía Alpha")

[1] "--- Resumen Anual para: Compañía Alpha ---"
[1] "Ingresos Totales: 500000 €"
[1] "Gastos Totales: 450000 €"
[1] "Balance Neto: 50000 €"
[1] "------------------------------------------"
`,
				ejercicios_texto: `Sesión 2 de laboratorio: Vectores, Matrices y
Funciones.

Parte 1: Vectores

El objetivo es practicar la creación de vectores en R para almacenar, manipular y
analizar esta información.

El Banco Mundial ofrece datos valiosos para los economistas, como la inflación
anual medida por el índice de precios al consumidor (IPC). Para este ejercicio, se
usaránlosdatosextraídosdeestafuente
https://datos.bancomundial.org/indicador/FP.CPI.TOTL.ZG?end=2024&locations=ES
&start=1960&view=chartpara analizar la inflación anual de cinco países europeos
España, Francia, Alemania, Italia, Reino Unido desde 2020 hasta 2024. Para eso es
necesario descargar los datos en formato EXCEL y desde la primera pestaña
llamada “Datos” filtrar por los países y años antes indicados.

Problema 1

Crear un vector llamadopaisescon los nombres de los países, y luego cinco
vectores paralainflación de cada año, con nombres comoinflacion_2020,
inflacion_2021, etc.El siguiente paso es calcular el cambio en puntos porcentuales
de la inflación para cada país entre2020y2024. Guardar el resultado en un nuevo
vector llamadodiferencia_inflacion. Finalmente, calculen la media de la inflación
para el año2023y la suma total de la inflación para todos los países en2024.
Mostrar todos los resultados obtenidos por consola usando el valor y el mensaje
correspondiente.

Problema 2

Identifiquen los países que experimentaron una inflación superior a 7.5% en2022y
muestren sus nombres. Se deben usar el vectorpaisesy el vector de inflación de
ese año. También, mostrar la inflación del año2024de los países que ocuparon la
primera y la última posición en el vectorpaises. Mostrar todoslos resultados
obtenidos por consola usando el valor y el mensaje correspondiente.

Problema 3

Supongamos que el Banco Central Europeo (BCE) tiene una meta de inflación del
2.0%. Usando las variables antes creadas, calculen cuánto se desvió la inflación de
cada país con respecto a esta meta en2024y guardar el resultado en un nuevo
vector llamadodesviacion_meta_2024. Luego, sumar la inflación de los años 2020 y
2021 para cada país, creando un vectorinflacion_total_2020_2021. Finalmente,
calculenla media delainflación para los años2022y2023para cada país,
guardandolos resultados en un vector llamadomedia_inflacion_22_23. Mostrar

todoslosresultados obtenidos por consola usando el valor y el mensaje
correspondiente.

Parte 2: Matrices

El objetivo es practicar la creación, manipulación y filtrado de matrices, así como
realizar operaciones entre ellas.

Continuando con el análisis delainflación, ahora utilizaremos matrices para
organizar la información de una manera más estructurada, similar a una tabla. Para
este problema, usaremos datos de inflación de dos regiones: Europa y América en
el mismo periodo de tiempo de la primera parte desde 2020 hasta 2024. Los países
de Europa son: España, Francia, Alemania,Italia, Reino Unido y países de
América: México, Chile, Canadá, EEUU, Ecuador.

Problema 1

Creen una matriz llamadainflacion_europapara los países europeos y otra llamada
inflacion_americapara los países de América. Las matrices deben contener los
datos de inflación de cada año como columnas y los países como filas. Usen los
nombres delos países ylos años como nombres delas filas y columnas.
Finalmente, muestren la dimensión de ambas matrices. Mostrar todos los resultados
obtenidos por consola usando el valor y el mensaje correspondiente.

Problema 2

Realizaremos un análisis comparativo entre las dos regiones. Primero, se debe
obtener la inflación promedio de Europa y la de América para cada año (2020-2024)
y guardar estos promedios en dos vectores distintos. Luego, comparar las dos
regiones calculando la diferencia de la inflación promedio de Europa menos la de
Américaparacadaaño,guardandoelresultadoenunvectorllamado
diferencia_regional. Finalmente, buscar la inflación de Alemania en 2022 y la de
México en 2023 usando el acceso por nombres de fila y columna. Mostrar todos los
resultados obtenidos por consola usando el valor y el mensaje correspondiente.

Problema 3

Para simular un impacto económico la inflación en ambas regiones aumentará un
15% con respecto a los valores de 2024 y guardarlas en dos nuevas matrices,
inflacion_futura_europayinflacion_futura_america, multiplicandolas matrices de
2024por un factor de1.15. Luego, un analista les pide mostrar los datos de la
inflación de todoslos años para Ecuador. Adicionalmente, para un análisis
comparativo, mostrar la inflación de Reino Unido en2022y la de Chile en2023. 
Mostrar todos los resultados obtenidos por consola usando el valor y el mensaje
correspondiente.

Parte 3: Funciones

El objetivo es crear funciones que nos permiten automatizar estas tareas, haciendo
nuestro código más eficiente, legible y fácil de mantener

Problema 1

Crear una función llamadacalcular_poder_adquisitivoque tome como parámetros la
matrizdeinflacióndeunaregión(matriz_inflacion) yun año específico
(anio_referencia). La función debe extraer el vector deinflación del año de
referencia de la matriz y calcular un "factor de devaluación" para cada país usando
la fórmula1 / (1 + (inflacion / 100)). Este factor representa cuánto vale 1€ al final de
ese año, en términos del inicio. Finalmente, la función debe imprimir un vector con el
nombre del país y su factor de devaluación para ese año. La función no debe
devolver un valor(return())sino que su propósito esimprimir elinforme
directamente. Escribe un código de prueba para la función creada.

Problema 2

Creen una función llamadacomparar_inflacion_anualque tome tres parámetros: la
matriz de una región (matriz_inflacion), un primer año (anio1) y un segundo año
(anio2). La función debe extraer los vectores de inflación de ambos años de la
matriz, calcular el promedio de inflación para ambos años y la diferencia entre los
dos promedios (promedio de anio2 - promedio de anio1). La función debe devolver
un vector con tres elementos: el promedio delanio1, el promedio delanio2y la
diferencia entre ellos.`
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 65, fecha: "2026-05-10T09:15:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 42, fecha: "2026-05-10T09:16:00Z" },
			{ estudiante_id: "Estudiante_03", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-10T09:17:30Z" },
			{ estudiante_id: "Estudiante_05", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-10T09:19:15Z" },
			{ estudiante_id: "Estudiante_06", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 78, fecha: "2026-05-10T09:20:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2026-05-10T09:22:10Z" },
			{ estudiante_id: "Estudiante_08", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 55, fecha: "2026-05-10T09:23:45Z" },
			{ estudiante_id: "Estudiante_09", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 65, fecha: "2026-05-10T09:25:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 70, fecha: "2026-05-10T09:26:30Z" },
			{ estudiante_id: "Estudiante_11", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 90, fecha: "2026-05-10T09:28:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 80, fecha: "2026-05-10T09:32:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 40, fecha: "2026-05-10T09:33:45Z" },
			{ estudiante_id: "Estudiante_15", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 105, fecha: "2026-05-10T09:35:10Z" },
			{ estudiante_id: "Estudiante_16", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 75, fecha: "2026-05-10T09:36:20Z" },
			{ estudiante_id: "Estudiante_17", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 98, fecha: "2026-05-10T09:38:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 60, fecha: "2026-05-10T09:40:15Z" },
			{ estudiante_id: "Estudiante_20", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 88, fecha: "2026-05-10T09:43:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 72, fecha: "2026-05-10T09:45:10Z" },
			{ estudiante_id: "Estudiante_22", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 81, fecha: "2026-05-10T09:46:25Z" },
			{ estudiante_id: "Estudiante_23", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 115, fecha: "2026-05-10T09:48:40Z" },
			{ estudiante_id: "Estudiante_24", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 50, fecha: "2026-05-10T09:50:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-10T09:51:30Z" },
			{ estudiante_id: "Estudiante_26", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-10T09:53:15Z" },
			{ estudiante_id: "Estudiante_27", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 68, fecha: "2026-05-10T09:55:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 77, fecha: "2026-05-10T09:57:20Z" },
			{ estudiante_id: "Estudiante_29", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 83, fecha: "2026-05-10T09:58:45Z" },
			{ estudiante_id: "Estudiante_31", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 42, fecha: "2026-05-10T10:02:30Z" },
			{ estudiante_id: "Estudiante_32", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 76, fecha: "2026-05-10T10:04:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 89, fecha: "2026-05-10T10:06:15Z" },
			{ estudiante_id: "Estudiante_34", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 94, fecha: "2026-05-10T10:08:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 63, fecha: "2026-05-10T10:09:45Z" },
			{ estudiante_id: "Estudiante_36", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 84, fecha: "2026-05-10T10:11:10Z" },
			{ estudiante_id: "Estudiante_37", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 71, fecha: "2026-05-10T10:13:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 79, fecha: "2026-05-10T10:16:15Z" },
			{ estudiante_id: "Estudiante_40", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 58, fecha: "2026-05-10T10:18:00Z" },
			{ estudiante_id: "Estudiante_41", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 87, fecha: "2026-05-10T10:20:10Z" },
			{ estudiante_id: "Estudiante_42", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 91, fecha: "2026-05-10T10:22:25Z" },
			{ estudiante_id: "Estudiante_43", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 69, fecha: "2026-05-10T10:24:00Z" },
			{ estudiante_id: "Estudiante_44", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 74, fecha: "2026-05-10T10:25:30Z" },
			{ estudiante_id: "Estudiante_45", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 80, fecha: "2026-05-10T10:27:15Z" },
			{ estudiante_id: "Estudiante_38", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 202, fecha: "2026-05-10T10:14:30Z" },
			{ estudiante_id: "Estudiante_04", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 20, fecha: "2026-05-10T09:18:00Z" }, 
			{ estudiante_id: "Estudiante_04", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 35, fecha: "2026-05-10T09:22:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-10T09:41:30Z" }, 
			{ estudiante_id: "Estudiante_19", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 25, fecha: "2026-05-10T09:45:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 230, fecha: "2026-05-10T09:30:15Z" }, 
			{ estudiante_id: "Estudiante_12", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 140, fecha: "2026-05-10T09:35:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 250, fecha: "2026-05-10T10:01:10Z" }, 
			{ estudiante_id: "Estudiante_30", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 130, fecha: "2026-05-10T10:07:00Z" }
		]
	},
    {
		numero: 2,
		estadistica: { 
			dificultad: "Fácil", 
			calificacion_promedio: "88/100", 
			intentos_promedio: "1.9", 
			tiempo_promedio: 240, 
			tasa_exito: "85%", 
			colorClase: "level-easy" 
		},
		data: {
			tipo_pregunta: "calculo",
			concepto: "Proporcionalidade da Largura de Banda",
			titulo: "Impacto da Redução do Débito",
			contenido_pregunta: "Um ficheiro de 335MB demora 14 segundos a ser transferido num determinado canal, em condições ótimas de utilização. Qual o tempo que demora a sua transferência, em condições ótimas de utilização, noutro canal com apenas 50% da largura de banda do primeiro?",
			puntaje_maximo: 100,
			tiempo_medio_esperado: 240,
			opciones_respuesta: [], 
			respuesta_correcta: "",
			instruccion_tutor: "Explica ao aluno que a relação entre a largura de banda e o tempo de transferência é inversamente proporcional. Não é necessário calcular o débito exato; se a largura de banda é reduzida a 50% (metade), o tempo necessário para transferir a mesma quantidade de dados será o dobro.",
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: "",
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 190, fecha: "2026-05-11T10:15:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 1, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 215, fecha: "2026-05-11T10:20:15Z" },
			{ estudiante_id: "Estudiante_03", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 170, fecha: "2026-05-11T10:15:00Z" },
			{ estudiante_id: "Estudiante_04", intento: 1, nota: 88, calificacion: "Aprobado", tiempo_empleado_seg: 195, fecha: "2026-05-11T10:17:30Z" },
			{ estudiante_id: "Estudiante_05", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 210, fecha: "2026-05-11T10:16:00Z" },
			{ estudiante_id: "Estudiante_05", intento: 2, nota: 72, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-11T10:19:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 255, fecha: "2026-05-11T10:18:30Z" },
			{ estudiante_id: "Estudiante_07", intento: 1, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 260, fecha: "2026-05-11T10:24:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 250, fecha: "2026-05-11T10:20:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 1, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 235, fecha: "2026-05-11T10:18:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 2, nota: 88, calificacion: "Aprobado", tiempo_empleado_seg: 260, fecha: "2026-05-11T10:22:30Z" },
			{ estudiante_id: "Estudiante_10", intento: 1, nota: 24, calificacion: "Suspendido", tiempo_empleado_seg: 250, fecha: "2026-05-11T10:20:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 2, nota: 72, calificacion: "Aprobado", tiempo_empleado_seg: 275, fecha: "2026-05-11T10:25:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 245, fecha: "2026-05-11T10:26:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 220, fecha: "2026-05-11T10:24:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 2, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 280, fecha: "2026-05-11T10:28:30Z" },
			{ estudiante_id: "Estudiante_13", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 225, fecha: "2026-05-11T10:33:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 1, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-11T10:26:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 2, nota: 72, calificacion: "Aprobado", tiempo_empleado_seg: 140, fecha: "2026-05-11T10:32:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2026-05-11T10:35:30Z" },
			{ estudiante_id: "Estudiante_16", intento: 1, nota: 88, calificacion: "Aprobado", tiempo_empleado_seg: 115, fecha: "2026-05-11T10:36:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 1, nota: 32, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-11T10:34:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 120, fecha: "2026-05-11T10:39:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 300, fecha: "2026-05-11T10:36:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 2, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 250, fecha: "2026-05-11T10:41:30Z" },
			{ estudiante_id: "Estudiante_19", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 270, fecha: "2026-05-11T10:42:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 1, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-11T10:40:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 2, nota: 72, calificacion: "Aprobado", tiempo_empleado_seg: 300, fecha: "2026-05-11T10:45:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 210, fecha: "2026-05-11T10:47:30Z" },
			{ estudiante_id: "Estudiante_22", intento: 1, nota: 88, calificacion: "Aprobado", tiempo_empleado_seg: 260, fecha: "2026-05-11T10:47:30Z" },
			{ estudiante_id: "Estudiante_23", intento: 1, nota: 88, calificacion: "Aprobado", tiempo_empleado_seg: 285, fecha: "2026-05-11T10:47:30Z" },
			{ estudiante_id: "Estudiante_24", intento: 1, nota: 96, calificacion: "Aprobado", tiempo_empleado_seg: 265, fecha: "2026-05-11T10:47:30Z" },
			{ estudiante_id: "Estudiante_25", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 270, fecha: "2026-05-11T10:47:30Z" }
		]
	},
    {
		numero: 3,
		estadistica: { 
			dificultad: "Media", 
			calificacion_promedio: "57/100", 
			intentos_promedio: "2.1",
			tiempo_promedio: 60, 
			tasa_exito: "60%", 
			colorClase: "level-medium" 
		},
		data: {
			tipo_pregunta: "opcion_multiple",
			concepto: "Endereçamento IP e Máscaras",
			titulo: "Identificação do Endereço de Rede",
			contenido_pregunta: "Qual o endereço da rede onde está a máquina com IP 192.168.123.3 e máscara de rede 255.255.255.0?",
			puntaje_maximo: 100,
			tiempo_medio_esperado: 60, 
			opciones_respuesta: ["192.168.0.0", "192.168.123.0","192.168.123.255", "Nenhuma das anteriores"],
			respuesta_correcta: "",
			instruccion_tutor: "Guia o aluno a aplicar a operação lógica AND entre o endereço IP e a máscara de rede. Mostra que a máscara 255.255.255.0 (ou /24) mantém os três primeiros octetos intactos (192.168.123) e transforma os bits do último octeto em zeros, resultando em .0.",
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: "",
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 45, fecha: "2026-05-12T10:15:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 52, fecha: "2026-05-12T10:18:30Z" },
			{ estudiante_id: "Estudiante_03", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 38, fecha: "2026-05-12T10:20:15Z" },
			{ estudiante_id: "Estudiante_04", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-12T10:10:00Z" },
			{ estudiante_id: "Estudiante_05", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 68, fecha: "2026-05-12T10:12:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 25, fecha: "2026-05-12T10:15:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-12T10:16:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 40, fecha: "2026-05-12T10:17:30Z" },
			{ estudiante_id: "Estudiante_08", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 25, fecha: "2026-05-12T10:18:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 45, fecha: "2026-05-12T10:19:30Z" },
			{ estudiante_id: "Estudiante_09", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 25, fecha: "2026-05-12T10:20:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-12T10:22:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-12T10:22:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2026-05-12T10:24:30Z" },
			{ estudiante_id: "Estudiante_11", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 75, fecha: "2026-05-12T10:26:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-12T10:26:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 105, fecha: "2026-05-12T10:28:30Z" },
			{ estudiante_id: "Estudiante_13", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-12T10:28:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-12T10:30:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-12T10:30:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-12T10:32:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 100, fecha: "2026-05-12T10:34:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 70, fecha: "2026-05-12T10:36:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-12T10:36:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 80, fecha: "2026-05-12T10:39:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 30, fecha: "2026-05-12T10:38:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-12T10:40:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-12T10:42:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 20, fecha: "2026-05-12T10:40:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-12T10:42:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 90, fecha: "2026-05-12T10:44:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 40, fecha: "2026-05-12T10:42:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-12T10:44:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2026-05-12T10:46:30Z" },
			{ estudiante_id: "Estudiante_21", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-12T10:44:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-12T10:46:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-12T10:48:30Z" },
			{ estudiante_id: "Estudiante_22", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-12T10:46:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 20, fecha: "2026-05-12T10:46:30Z" },
			{ estudiante_id: "Estudiante_23", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 25, fecha: "2026-05-12T10:48:00Z" },
			{ estudiante_id: "Estudiante_23", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-12T10:48:30Z" },
			{ estudiante_id: "Estudiante_24", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 10, fecha: "2026-05-12T10:50:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 30, fecha: "2026-05-12T10:51:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 35, fecha: "2026-05-12T10:52:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 25, fecha: "2026-05-12T10:53:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 20, fecha: "2026-05-12T10:54:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 15, fecha: "2026-05-12T10:54:30Z" },
			{ estudiante_id: "Estudiante_27", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-12T10:54:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-12T10:56:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-12T10:56:00Z" }, 
			{ estudiante_id: "Estudiante_28", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-12T10:59:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-12T10:58:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2026-05-12T11:00:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 95, fecha: "2026-05-12T11:00:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 105, fecha: "2026-05-12T11:02:30Z" },
			{ estudiante_id: "Estudiante_31", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-12T11:02:00Z" },
			{ estudiante_id: "Estudiante_31", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-12T11:04:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-12T11:04:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-12T11:06:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 20, fecha: "2026-05-12T11:06:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-12T11:08:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-12T11:10:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 35, fecha: "2026-05-12T11:08:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-12T11:10:30Z" },
			{ estudiante_id: "Estudiante_34", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-12T11:12:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 55, fecha: "2026-05-12T11:10:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 60, fecha: "2026-05-12T11:12:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 55, fecha: "2026-05-12T11:14:00Z" },
			{ estudiante_id: "Estudiante_38", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 38, fecha: "2026-05-12T11:16:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 43, fecha: "2026-05-12T11:18:00Z" },
			{ estudiante_id: "Estudiante_40", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 53, fecha: "2026-05-12T11:20:00Z" }
		]
	},
	{
		numero: 4,
		estadistica: { 
			dificultad: "Difícil", 
			calificacion_promedio: "25/100", 
			intentos_promedio: "2.9", 
			tiempo_promedio: 120, 
			tasa_exito: "40%",
			colorClase: "level-hard" 
		},
		data: {
			tipo_pregunta: "calculo",
			concepto: "Cálculo de Hosts em Sub-redes",
			titulo: "Número de Endereços Úteis",
			contenido_pregunta: "Quantos endereços podem ser utilizados para endereçar computadores numa rede com a máscara 255.255.255.248?",
			puntaje_maximo: 100,
			tiempo_medio_esperado: 120, 
			opciones_respuesta: [],
			respuesta_correcta: "",
			instruccion_tutor: "Ensina o aluno a identificar os bits reservados para hosts. Uma máscara terminada em .248 corresponde a um prefixo /29, o que deixa 3 bits para hosts (32 - 29). Lembra o aluno de aplicar a fórmula 2^n - 2 (neste caso 2^3 - 2) para subtrair o endereço de rede e o endereço de broadcast.",
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: "",
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-13T12:15:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-13T12:10:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 85, fecha: "2026-05-13T12:12:00Z" },
			{ estudiante_id: "Estudiante_03", intento: 1, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-13T12:12:30Z" },
			{ estudiante_id: "Estudiante_03", intento: 2, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 110, fecha: "2026-05-13T12:15:00Z" },
			{ estudiante_id: "Estudiante_04", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-13T12:14:00Z" },
			{ estudiante_id: "Estudiante_04", intento: 2, nota: 63, calificacion: "Aprobado", tiempo_empleado_seg: 100, fecha: "2026-05-13T12:16:30Z" },
			{ estudiante_id: "Estudiante_05", intento: 1, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-13T12:15:00Z" },
			{ estudiante_id: "Estudiante_05", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 140, fecha: "2026-05-13T12:17:30Z" },
			{ estudiante_id: "Estudiante_06", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-13T12:16:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 2, nota: 51, calificacion: "Aprobado", tiempo_empleado_seg: 165, fecha: "2026-05-13T12:18:30Z" },
			{ estudiante_id: "Estudiante_07", intento: 1, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-13T12:18:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 180, fecha: "2026-05-13T12:20:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-13T12:20:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-13T12:22:30Z" },
			{ estudiante_id: "Estudiante_08", intento: 3, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 155, fecha: "2026-05-13T12:26:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 1, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 95, fecha: "2026-05-13T12:22:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 2, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 105, fecha: "2026-05-13T12:24:30Z" },
			{ estudiante_id: "Estudiante_09", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 170, fecha: "2026-05-13T12:28:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 3, nota: 63, calificacion: "Aprobado", tiempo_empleado_seg: 130, fecha: "2026-05-13T12:31:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-13T12:26:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-13T12:28:30Z" },
			{ estudiante_id: "Estudiante_11", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 150, fecha: "2026-05-13T12:32:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-13T12:28:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 2, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-13T12:30:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 3, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 210, fecha: "2026-05-13T12:35:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-13T12:30:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-13T12:32:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-13T12:34:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 4, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 185, fecha: "2026-05-13T12:38:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-13T12:32:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 95, fecha: "2026-05-13T12:34:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-13T12:36:30Z" },
			{ estudiante_id: "Estudiante_14", intento: 4, nota: 63, calificacion: "Aprobado", tiempo_empleado_seg: 205, fecha: "2026-05-13T12:41:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 140, fecha: "2026-05-13T12:34:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 115, fecha: "2026-05-13T12:37:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 130, fecha: "2026-05-13T12:40:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 4, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 220, fecha: "2026-05-13T12:44:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2026-05-13T12:36:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 105, fecha: "2026-05-13T12:38:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 125, fecha: "2026-05-13T12:41:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 4, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 240, fecha: "2026-05-13T12:46:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-13T12:40:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 2, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 30, fecha: "2026-05-13T12:41:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 3, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 40, fecha: "2026-05-13T12:42:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-13T12:42:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-13T12:43:30Z" },
			{ estudiante_id: "Estudiante_18", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-13T12:45:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-13T12:44:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 2, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-13T12:45:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 3, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-13T12:46:30Z" },
			{ estudiante_id: "Estudiante_20", intento: 1, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-13T12:46:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-13T12:47:30Z" },
			{ estudiante_id: "Estudiante_20", intento: 3, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-13T12:49:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 35, fecha: "2026-05-13T12:48:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 2, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 40, fecha: "2026-05-13T12:49:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 3, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-13T12:50:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 4, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-13T12:51:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-13T12:50:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-13T12:51:30Z" },
			{ estudiante_id: "Estudiante_22", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-13T12:53:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 4, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-13T12:55:00Z" },
			{ estudiante_id: "Estudiante_23", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-13T12:52:00Z" },
			{ estudiante_id: "Estudiante_23", intento: 2, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-13T12:53:00Z" },
			{ estudiante_id: "Estudiante_23", intento: 3, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-13T12:54:30Z" },
			{ estudiante_id: "Estudiante_23", intento: 4, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-13T12:56:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-13T12:54:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-13T12:56:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-13T12:57:30Z" },
			{ estudiante_id: "Estudiante_24", intento: 4, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-13T12:59:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 130, fecha: "2026-05-13T12:56:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 2, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 145, fecha: "2026-05-13T12:59:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 3, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 160, fecha: "2026-05-13T13:02:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 1, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 150, fecha: "2026-05-13T12:58:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 125, fecha: "2026-05-13T13:01:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 170, fecha: "2026-05-13T13:04:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 140, fecha: "2026-05-13T13:00:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 160, fecha: "2026-05-13T13:03:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 185, fecha: "2026-05-13T13:06:30Z" },
			{ estudiante_id: "Estudiante_28", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 115, fecha: "2026-05-13T13:02:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 135, fecha: "2026-05-13T13:05:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 3, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 155, fecha: "2026-05-13T13:08:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 125, fecha: "2026-05-13T13:04:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 140, fecha: "2026-05-13T13:07:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 190, fecha: "2026-05-13T13:11:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 160, fecha: "2026-05-13T13:06:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 2, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 150, fecha: "2026-05-13T13:09:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 3, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 175, fecha: "2026-05-13T13:12:30Z" },
			{ estudiante_id: "Estudiante_31", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 135, fecha: "2026-05-13T13:08:00Z" },
			{ estudiante_id: "Estudiante_31", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 170, fecha: "2026-05-13T13:11:30Z" },
			{ estudiante_id: "Estudiante_31", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 195, fecha: "2026-05-13T13:15:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 145, fecha: "2026-05-13T13:10:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2026-05-13T13:13:30Z" },
			{ estudiante_id: "Estudiante_32", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 210, fecha: "2026-05-13T13:17:30Z" },
			{ estudiante_id: "Estudiante_33", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 165, fecha: "2026-05-13T13:12:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 190, fecha: "2026-05-13T13:16:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 225, fecha: "2026-05-13T13:20:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 155, fecha: "2026-05-13T13:14:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 175, fecha: "2026-05-13T13:17:30Z" },
			{ estudiante_id: "Estudiante_34", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 200, fecha: "2026-05-13T13:21:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2026-05-13T13:16:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 195, fecha: "2026-05-13T13:19:30Z" },
			{ estudiante_id: "Estudiante_35", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 240, fecha: "2026-05-13T13:24:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 1, nota: 11, calificacion: "Suspendido", tiempo_empleado_seg: 170, fecha: "2026-05-13T13:18:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 2, nota: 23, calificacion: "Suspendido", tiempo_empleado_seg: 210, fecha: "2026-05-13T13:22:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 3, nota: 40, calificacion: "Suspendido", tiempo_empleado_seg: 230, fecha: "2026-05-13T13:26:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 130, fecha: "2026-05-13T13:20:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 2, nota: 17, calificacion: "Suspendido", tiempo_empleado_seg: 145, fecha: "2026-05-13T13:23:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 3, nota: 29, calificacion: "Suspendido", tiempo_empleado_seg: 160, fecha: "2026-05-13T13:26:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 4, nota: 46, calificacion: "Suspendido", tiempo_empleado_seg: 185, fecha: "2026-05-13T13:29:30Z" },
			{ estudiante_id: "Estudiante_38", intento: 1, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 140, fecha: "2026-05-13T13:22:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 150, fecha: "2026-05-13T13:24:00Z" },
			{ estudiante_id: "Estudiante_40", intento: 1, nota: 80, calificacion: "Aprobado", tiempo_empleado_seg: 160, fecha: "2026-05-13T13:26:00Z" }
		]
	},
    {
		numero: 5,
		estadistica: { 
			dificultad: "Muy difícil", 
			calificacion_promedio: "11/100", 
			intentos_promedio: "3.1", 
			tiempo_promedio: 240, 
			tasa_exito: "30%", 
			colorClase: "level-very-hard" 
		},
		data: {
			tipo_pregunta: "opcion_multiple",
			concepto: "Cálculo de Broadcast em Sub-redes",
			titulo: "Determinação do Endereço de Difusão",
			contenido_pregunta: "Qual o endereço de Broadcast da rede onde está a máquina com IP 192.168.123.36 e máscara de rede 255.255.255.248?",
			puntaje_maximo: 100,
			tiempo_medio_esperado: 240, 
			opciones_respuesta: ["192.168.123.255", "192.168.123.0","192.168.123.39", "Nenhuma das anteriores"],
			respuesta_correcta: "",
			instruccion_tutor: "Ajuda o aluno a encontrar o bloco mágico (saltos) da sub-rede. A máscara .248 permite blocos de 8. A sub-rede que contém o IP .36 é a .32 (múltiplo de 8). O endereço de broadcast é sempre o último endereço antes da próxima sub-rede (.40), ou seja, .39.",
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: "",
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 180, fecha: "2026-05-14T10:15:00Z" },
			{ estudiante_id: "Estudiante_02", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 215, fecha: "2026-05-14T10:20:00Z" },
			{ estudiante_id: "Estudiante_03", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-14T10:10:00Z" },
			{ estudiante_id: "Estudiante_03", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 260, fecha: "2026-05-14T10:16:00Z" },
			{ estudiante_id: "Estudiante_04", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-14T10:12:00Z" },
			{ estudiante_id: "Estudiante_04", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 290, fecha: "2026-05-14T10:18:30Z" },
			{ estudiante_id: "Estudiante_05", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 150, fecha: "2026-05-14T10:15:00Z" },
			{ estudiante_id: "Estudiante_05", intento: 2, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 310, fecha: "2026-05-14T10:22:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2026-05-14T10:16:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 150, fecha: "2026-05-14T10:20:00Z" },
			{ estudiante_id: "Estudiante_06", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 250, fecha: "2026-05-14T10:26:30Z" },
			{ estudiante_id: "Estudiante_07", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-14T10:18:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2026-05-14T10:21:00Z" },
			{ estudiante_id: "Estudiante_07", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 330, fecha: "2026-05-14T10:28:30Z" },
			{ estudiante_id: "Estudiante_08", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-14T10:20:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-14T10:23:00Z" },
			{ estudiante_id: "Estudiante_08", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 280, fecha: "2026-05-14T10:29:30Z" },
			{ estudiante_id: "Estudiante_09", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 160, fecha: "2026-05-14T10:22:00Z" },
			{ estudiante_id: "Estudiante_09", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 200, fecha: "2026-05-14T10:26:30Z" },
			{ estudiante_id: "Estudiante_09", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 350, fecha: "2026-05-14T10:34:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 190, fecha: "2026-05-14T10:25:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2026-05-14T10:29:00Z" },
			{ estudiante_id: "Estudiante_10", intento: 3, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 270, fecha: "2026-05-14T10:35:30Z" },
			{ estudiante_id: "Estudiante_11", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-14T10:28:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-14T10:30:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-14T10:32:00Z" },
			{ estudiante_id: "Estudiante_11", intento: 4, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 380, fecha: "2026-05-14T10:40:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 200, fecha: "2026-05-14T10:32:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 180, fecha: "2026-05-14T10:36:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 220, fecha: "2026-05-14T10:41:00Z" },
			{ estudiante_id: "Estudiante_12", intento: 4, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 400, fecha: "2026-05-14T10:49:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-14T10:35:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 30, fecha: "2026-05-14T10:36:00Z" },
			{ estudiante_id: "Estudiante_13", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-14T10:37:30Z" },
			{ estudiante_id: "Estudiante_14", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 75, fecha: "2026-05-14T10:37:00Z" },
			{ estudiante_id: "Estudiante_14", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-14T10:38:30Z" },
			{ estudiante_id: "Estudiante_14", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 40, fecha: "2026-05-14T10:39:30Z" },
			{ estudiante_id: "Estudiante_15", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-14T10:39:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-14T10:41:00Z" },
			{ estudiante_id: "Estudiante_15", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 110, fecha: "2026-05-14T10:43:30Z" },
			{ estudiante_id: "Estudiante_16", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 120, fecha: "2026-05-14T10:41:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 95, fecha: "2026-05-14T10:43:00Z" },
			{ estudiante_id: "Estudiante_16", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 70, fecha: "2026-05-14T10:45:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 60, fecha: "2026-05-14T10:43:00Z" },
			{ estudiante_id: "Estudiante_17", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 55, fecha: "2026-05-14T10:44:30Z" },
			{ estudiante_id: "Estudiante_17", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 85, fecha: "2026-05-14T10:46:30Z" },
			{ estudiante_id: "Estudiante_18", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 100, fecha: "2026-05-14T10:45:00Z" },
			{ estudiante_id: "Estudiante_18", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 115, fecha: "2026-05-14T10:47:30Z" },
			{ estudiante_id: "Estudiante_18", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 90, fecha: "2026-05-14T10:49:30Z" },
			{ estudiante_id: "Estudiante_19", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 130, fecha: "2026-05-14T10:47:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 80, fecha: "2026-05-14T10:49:00Z" },
			{ estudiante_id: "Estudiante_19", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 105, fecha: "2026-05-14T10:51:30Z" },
			{ estudiante_id: "Estudiante_20", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 50, fecha: "2026-05-14T10:49:00Z" },
			{ estudiante_id: "Estudiante_20", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 45, fecha: "2026-05-14T10:50:30Z" },
			{ estudiante_id: "Estudiante_20", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 65, fecha: "2026-05-14T10:52:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 250, fecha: "2026-05-14T10:50:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 210, fecha: "2026-05-14T10:54:00Z" },
			{ estudiante_id: "Estudiante_21", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 310, fecha: "2026-05-14T11:00:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 320, fecha: "2026-05-14T10:52:00Z" },
			{ estudiante_id: "Estudiante_22", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-14T10:57:30Z" },
			{ estudiante_id: "Estudiante_22", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 260, fecha: "2026-05-14T11:02:30Z" },
			{ estudiante_id: "Estudiante_23", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 275, fecha: "2026-05-14T10:55:00Z" },
			{ estudiante_id: "Estudiante_23", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 305, fecha: "2026-05-14T11:00:30Z" },
			{ estudiante_id: "Estudiante_23", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 290, fecha: "2026-05-14T11:05:30Z" },
			{ estudiante_id: "Estudiante_24", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 350, fecha: "2026-05-14T10:58:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 245, fecha: "2026-05-14T11:03:00Z" },
			{ estudiante_id: "Estudiante_24", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-14T11:08:30Z" },
			{ estudiante_id: "Estudiante_25", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 295, fecha: "2026-05-14T11:00:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 265, fecha: "2026-05-14T11:05:00Z" },
			{ estudiante_id: "Estudiante_25", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 330, fecha: "2026-05-14T11:11:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 260, fecha: "2026-05-14T11:03:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 315, fecha: "2026-05-14T11:09:00Z" },
			{ estudiante_id: "Estudiante_26", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 275, fecha: "2026-05-14T11:14:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 340, fecha: "2026-05-14T11:05:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 400, fecha: "2026-05-14T11:12:00Z" },
			{ estudiante_id: "Estudiante_27", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 285, fecha: "2026-05-14T11:17:30Z" },
			{ estudiante_id: "Estudiante_28", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 285, fecha: "2026-05-14T11:08:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 255, fecha: "2026-05-14T11:13:00Z" },
			{ estudiante_id: "Estudiante_28", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 310, fecha: "2026-05-14T11:19:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 305, fecha: "2026-05-14T11:11:00Z" },
			{ estudiante_id: "Estudiante_29", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 290, fecha: "2026-05-14T11:16:30Z" },
			{ estudiante_id: "Estudiante_29", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 270, fecha: "2026-05-14T11:21:30Z" },
			{ estudiante_id: "Estudiante_30", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 255, fecha: "2026-05-14T11:14:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 325, fecha: "2026-05-14T11:20:00Z" },
			{ estudiante_id: "Estudiante_30", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 295, fecha: "2026-05-14T11:25:30Z" },
			{ estudiante_id: "Estudiante_31", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 270, fecha: "2026-05-14T11:17:00Z" },
			{ estudiante_id: "Estudiante_31", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-14T11:22:30Z" },
			{ estudiante_id: "Estudiante_31", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 315, fecha: "2026-05-14T11:28:30Z" },
			{ estudiante_id: "Estudiante_32", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 315, fecha: "2026-05-14T11:20:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 265, fecha: "2026-05-14T11:25:00Z" },
			{ estudiante_id: "Estudiante_32", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 345, fecha: "2026-05-14T11:31:30Z" },
			{ estudiante_id: "Estudiante_33", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-14T11:23:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 310, fecha: "2026-05-14T11:29:00Z" },
			{ estudiante_id: "Estudiante_33", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 250, fecha: "2026-05-14T11:33:30Z" },
			{ estudiante_id: "Estudiante_33", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 290, fecha: "2026-05-14T11:38:30Z" },
			{ estudiante_id: "Estudiante_34", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 330, fecha: "2026-05-14T11:26:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 275, fecha: "2026-05-14T11:31:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 300, fecha: "2026-05-14T11:36:00Z" },
			{ estudiante_id: "Estudiante_34", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 380, fecha: "2026-05-14T11:43:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 295, fecha: "2026-05-14T11:29:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 340, fecha: "2026-05-14T11:35:30Z" },
			{ estudiante_id: "Estudiante_35", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 260, fecha: "2026-05-14T11:40:00Z" },
			{ estudiante_id: "Estudiante_35", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 285, fecha: "2026-05-14T11:45:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 410, fecha: "2026-05-14T11:32:00Z" },
			{ estudiante_id: "Estudiante_36", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 290, fecha: "2026-05-14T11:37:30Z" },
			{ estudiante_id: "Estudiante_36", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 275, fecha: "2026-05-14T11:42:30Z" },
			{ estudiante_id: "Estudiante_36", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 315, fecha: "2026-05-14T11:48:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 265, fecha: "2026-05-14T11:35:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 335, fecha: "2026-05-14T11:41:00Z" },
			{ estudiante_id: "Estudiante_37", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 285, fecha: "2026-05-14T11:46:30Z" },
			{ estudiante_id: "Estudiante_37", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 305, fecha: "2026-05-14T11:52:00Z" },
			{ estudiante_id: "Estudiante_38", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 305, fecha: "2026-05-14T11:38:00Z" },
			{ estudiante_id: "Estudiante_38", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 260, fecha: "2026-05-14T11:43:00Z" },
			{ estudiante_id: "Estudiante_38", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 325, fecha: "2026-05-14T11:49:00Z" },
			{ estudiante_id: "Estudiante_38", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 395, fecha: "2026-05-14T11:56:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 285, fecha: "2026-05-14T11:41:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 315, fecha: "2026-05-14T11:47:00Z" },
			{ estudiante_id: "Estudiante_39", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 255, fecha: "2026-05-14T11:51:30Z" },
			{ estudiante_id: "Estudiante_39", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 295, fecha: "2026-05-14T11:57:00Z" },
			{ estudiante_id: "Estudiante_40", intento: 1, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 355, fecha: "2026-05-14T11:44:00Z" },
			{ estudiante_id: "Estudiante_40", intento: 2, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 290, fecha: "2026-05-14T11:49:30Z" },
			{ estudiante_id: "Estudiante_40", intento: 3, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 335, fecha: "2026-05-14T11:55:30Z" },
			{ estudiante_id: "Estudiante_40", intento: 4, nota: 0, calificacion: "Suspendido", tiempo_empleado_seg: 280, fecha: "2026-05-14T12:00:30Z" }
		]
	}
];