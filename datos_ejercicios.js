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
			es: {
				teoria: {
					concepto: "Vectores",
					titulo: "Operaciones entre vectores",
					contenido_pregunta: `Un analista quiere saber cuántos trimestre tuvieron un crecimiento del PIB positivo. Para ello, escribe el siguiente código en R:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					pib_trimestral <- c(2.5, -1.0, 3.2, 1.5, -0.5)<br>
					pib <- pib_trimestral[pib_trimestral > 0]<br>
					print(length(pib))
					</i>`,
					opciones_respuesta: ["Imprime 3", "Imprime 7.2", "Imprime un vector (TRUE, FALSE, TRUE, TRUE, FALSE)", "Imprime 2.4"],
					respuesta_correcta: "Imprime 3",
					instruccion_tutor: "Para guiar al estudiante ante un error, haz que analice la instrucción de adentro hacia afuera. Primero, pídele que identifique qué elementos exactos del vector pib_trimestral cumplen la condición lógica > 0 (que serían 2.5, 3.2 y 1.5). Después, pregúntale cuál es el propósito de la función externa length() al aplicarse exclusivamente sobre esos elementos filtrados, ayudándole a recordar que esta función cuenta la cantidad total de elementos resultantes, pero no suma sus valores ni calcula el promedio",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			en: {
				teoria: {
					concepto: "Vectors",
					titulo: "Vector Operations",
					contenido_pregunta: `An analyst would like to know how many quarters had positive GDP growth. To do this, he writes the following code in R:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					quarterly_GDP <- c(2.5, -1.0, 3.2, 1.5, -0.5)<br>
					GDP <- quarterly_GDP[quarterly_GDP > 0]<br>
					print(length(GDP))
					</i>`,
					opciones_respuesta: ["Print 3", "Print 7.2", "Print a vector (TRUE, FALSE, TRUE, TRUE, FALSE)", "Print 2.4"],
					respuesta_correcta: "Print 3",
					instruccion_tutor: "To guide the student when they make a mistake, have them analyze the instruction from the inside out. First, ask them to identify which specific elements of the vector `pib_trimestral` satisfy the logical condition > 0 (which would be 2.5, 3.2, and 1.5). Next, ask them what the purpose of the external function `length()` is when applied exclusively to those filtered elements, helping them remember that this function counts the total number of resulting elements but does not sum their values or calculate the average.",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			puntaje_maximo: 100,
			tiempo_medio_esperado: 180,
			url_diapositivas: "https://www.it.uc3m.es/albjimen/programaci%C3%B3n/transparencias/M1.pdf",
			url_ejercicios: "",
			teoria_texto: `Variables en R
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
			tipo_pregunta: "opcion_multiple",
			es: {
				teoria: {
					concepto: "Condicionales",
					titulo: "Condiciones Lógicas Múltiples",
					contenido_pregunta: `Una administración pública utiliza el siguiente código en R para asignar una subvención a familias.
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					ingreso <- 2500<br>
					hijos <- 2<br>

					if (ingreso < 2000 | (ingreso <= 3000 & hijos >= 2)) {<br>
					  subvencion <- 500<br>
					} else if (ingreso <= 3000 & hijos < 2) {<br>
					  subvencion <- 200<br>
					} else {<br>
					  subvencion <- 0<br>
					}<br>
					print(subvencion)<br>
					</i>
					¿Qué valor imprimirá la consola para esta familia?`,
					opciones_respuesta: ["0","200","500","R dará un error porque no se pueden combinar | y & en el mismo if"],
					respuesta_correcta: "500",
					instruccion_tutor: "Para guiar al estudiante ante un error, divide la evaluación del primer if en dos partes. Pídele que compruebe primero si ingreso < 2000 (que es Falso, ya que 2500 no es menor que 2000). Luego, haz que analice la expresión entre paréntesis (ingreso <= 3000 & hijos >= 2), la cual se cumple. Finalmente, enfoca su atención en el operador | (OR) que une ambas partes, recordándole que basta con que una de las condiciones separadas por el OR sea Verdadera para que R ejecute ese bloque y asigne 500 a la subvención.",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			en: {
				teoria: {
					concepto: "Conditionals",
					titulo: "Multiple Logical Conditions",
					contenido_pregunta: `A government agency uses the following R code to assign a subsidy to families.
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					income <- 2500<br>
					children <- 2<br>

					if (income < 2000 | (income <= 3000 & children >= 2)) {<br>
					  subsidy <- 500<br>
					} else if (income <= 3000 & children < 2) {<br>
					  subsidy <- 200<br>
					} else {<br>
					  subsidy <- 0<br>
					}<br>
					print(subsidy)<br>
					</i>
					What value will the console print for this family?`,
					opciones_respuesta: ["0","200","500","R will return an error because you cannot combine | and & in the same if statement"],
					respuesta_correcta: "500",
					instruccion_tutor: "To guide the student when they make a mistake, break down the evaluation of the first `if` statement into two parts. Ask them to first check whether `ingreso` < 2000 (which is False, since 2500 is not less than 2000). Next, have them analyze the expression in parentheses (`ingreso` <= 3000 & `hijos` >= 2), which is true. Finally, focus their attention on the | (OR) operator that joins both parts, reminding them that it is sufficient for just one of the conditions separated by the OR to be True for R to execute that block and assign 500 to the grant.",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			puntaje_maximo: 100,
			tiempo_medio_esperado: 240,
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: `¿Qué es el control de ﬂujo?
● Decidir qué código se
ejecuta según condiciones.
● Permite crear programas
más complejos que la
ejecución lineal, mediante
la toma de decisiones.

Si llueve, coge un
paraguas
Llueve
No llueve

3

Ejemplo de if
lluvia_prevista_mm <- 11
if (lluvia_prevista_mm > 1) { #Condición
print("Coge un paraguas")
#Bloque de
código
}
4

Condiciones lógicas

5

Comparaciones lógicas
● == igual
● != distinto
● > mayor, < menor
● >= mayor o igual, <= menor o igual
● & “y” lógico, | “ó” lógico
6

Condiciones múltiples con & y |
● & representa “and”, “y”
● | representa “or”, “ó” (alt gr + 1)
if (x > 0 & x < 10) {
print("entre 0 y 10")
}
7

Condiciones con vectores y matrices
Si usamos un vector o matriz como argumento para
una comparación lógica, el resultado será un vector
o matriz booleano del mismo tamaño; así
c(1,2,3) > c(3,2,1)
devuelve
(FALSE, FALSE, TRUE
8

Riesgos de == y !=
● Cuidado con == (operador lógico “igual”) cuando se
●
●

manejan números no enteros: las operaciones pueden
introducir redondeos.
x
==
y
puede
dar
FALSE
para
x=1;
y=0,999999999999999
Similar consideración para!=
(operador lógico
“distinto”).
9

Condicionales

10

Condicionales en R
● if, else if, else, switch
● En
primer
lugar,
evalúan
expresiones lógicas (operaciones
con resultado TRUE ó FALSE).
● En segundo lugar, ejecutan o
ignoran bloques de código en
función del resultado anterior.

IF
Si
Coge un
paraguas

inicio

¿Se
prevee
lluvia?

No

ﬁn
11

Sintaxis básica de if
# Código previo, siempre se ejecuta
if (condicion) {
# Código a ejecutar si la condición
es TRUE
}
# Código posterior, siempre se ejecuta
12

Ejemplo de if
x <- 5
#Código previo, siempre se ejecuta
if (x > 0) { #Condición
print("x es positivo") #Código a ejecutar si la
condición es TRUE
}
x <- x+1
#Código posterior, siempre se ejecuta

13

Condicionales en R
● if, else if, else, switch
● En
primer
lugar,
evalúan
expresiones lógicas (operaciones
con resultado TRUE ó FALSE).
● En segundo lugar, ejecutan o
ignoran bloques de código en
función del resultado anterior.

IF
Si

inicio

¿es año
bisiesto?

febrero tiene
29 días

ELSE
No

febrero tiene
28 días

ﬁn

14

if...else
es_bisiesto <- function(anio) {
(anio %% 4 == 0 && anio %% 100 != 0) || (anio %% 400 == 0)
}
if (es_bisiesto(2025)) {
dias_por_mes <- c(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30,
31)
} else {
dias_por_mes <- c(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,
31)
}

15

if...else if...else
if (x > 0) {
print("positivo")
} else if (x < 0) {
print("negativo")
} else {
print("cero")
}
16

ifelse() – versión compacta

resultado
<ifelse(x
"positivo", "no positivo")
print(resultado)

>

0,

17

switch()
valor <- "opcion_peor"
opcion = switch(valor,
opcion_mejor
=
"Volar",
opcion_media
=
"Caminar",
opcion_peor
=
"Reptar")
print(opcion)

valor <- "raiz"
resultado = switch( valor,
"raiz" = {
x <- 10
sqrt(x)
},
"cuadrado" = {
x <- 10
x^2
},
"cubo" = {
x <- 10
x^2
},
)
print(resultado)

valor <- 2
mes
=
"Enero",
"Marzo")

switch(valor,
"Febrero",

print(mes)

18

Ejemplos prácticos

19

Ejemplo práctico 1: impuestos
ingreso <- 1200
if (ingreso > 1000) {
print("Paga impuestos")
} else {
print("No paga impuestos")
}
20

Ejemplo práctico 2: más impuestos
ingreso <- 1200
if (ingreso > 1000) {
print("Paga impuestos")
base_imponible <- ingreso - 1000
} else {
print("No paga impuestos")
base_imponible <- 0
}
21

ifelse() con vectores
# Vector de ingresos
ingresos <- c(8000, 14000, 25000, 9000, 20000, 15000)
# Clasificación con ifelse (vectorizado)
clasificacion <- ifelse(ingresos < 15000,
"Alto")
print(clasificacion)
"Alto" "Alto"

#"Bajo"

"Bajo"

"Alto"

"Bajo",

"Bajo"
22

ifelse() con vectores, anidado
# Vector de ingresos
ingresos <- c(8000, 14000, 25000, 9000, 20000, 15000)
# Clasificación con ifelse (vectorizado)
clasificacion <- ifelse(ingresos < 10000, "Bajo",
ifelse(ingresos < 20000, "Medio",
"Alto"))
print(clasificacion)
"Alto" "Medio"

#"Bajo"

"Medio"

"Alto"

"Bajo"
23

ifelse() con matrices
# Matriz de tasas de desempleo (%)
desempleo <- matrix(c(4.2, 5.5, 6.8,
3.9, 7.1, 4.8),
nrow = 2, byrow = TRUE)
# Clasificación con ifelse sin bucles
clasificacion <- ifelse(desempleo < 5, "Bajo", "Alto")
print(clasificacion) #Veremos una matriz:
[,1]
[,2]
[,3]
[1,] "Bajo" "Alto" "Alto"
[2,] "Bajo" "Alto" "Bajo"
24

Ejemplo práctico 3: impuesto progresivo
Cálculo de impuestos en 3 tramos, 1000-2000 al 10%, 2000-3000
al 20% y 3000 en adelante al 30%
ingreso <- 3200
impuesto <- 0
if (ingreso > 3000) {
impuesto <- impuesto + (ingreso – 3000) * 0.3
}
#¿Cómo continuar?
25`,
			ejercicios_texto: `Sesión 3 de laboratorio (con soluciones): Control de
flujo: Condicionales.
El objetivo es practicar el uso de condicionales (if) en R para introducir la toma de
decisiones en el flujo de programa y crear programas no lineales, incluyendo el uso
de conceptos estudiados anteriormente en el curso, como vectores, matrices y
funciones.
Problema 1
Escribe un programa que, dado un valor de coste mensual, imprima:
●​ "Bajo" si es menor de 1000
●​ "Medio" si está entre 1000 y 3000
●​ "Alto" si es mayor de 3000
Solución:
coste <- 2500
if (coste < 1000) {
print("Bajo")
} else if (coste <= 3000) {
print("Medio")
} else {
print("Alto")
}
Problema 2
Escribe un programa que, dado un ingreso anual, calcula el impuesto (no
progresivo):
●​ Si es menor de 10 000 → 5%
●​ Si está entre 10 000 y 20 000 → 10%
●​ Si es mayor de 20 000 → 15%
●​ Muestra el impuesto a pagar.
Solución:
ingreso <- 18000
impuesto <- 0
if (ingreso < 10000) {
impuesto <- ingreso * 0.05
} else if (ingreso <= 20000) {
impuesto <- ingreso * 0.10
} else {
impuesto <- ingreso * 0.15
}
cat("Impuesto a pagar:", impuesto)

Problema 3
Escribe un programa que, dado un ingreso anual, calcula el impuesto (progresivo):
●​ Tramo por debajo de 10 000 → 5%
●​ Tramo entre 10 000 y 20 000 → 10%
●​ Tramo mayor de 20 000 → 15%
●​ Muestra el impuesto a pagar.
Solución:
ingreso <- 25000
if (ingreso <= 10000) {
impuesto <- ingreso * 0.05
} else if (ingreso <= 20000) {
impuesto <- (10000 * 0.05) + (ingreso - 10000) * 0.10
} else {
impuesto <- (10000 * 0.05) + (10000 * 0.10) + (ingreso 20000) * 0.15
}
cat("Impuesto a pagar:", impuesto)
Problema 4
Escribe un programa que, dado el dato del PIB de dos años sucesivos, clasifique la
situación como:
●​ "Recesión" si es negativa
●​ "Estancamiento" si está entre 0 y 1%
●​ "Crecimiento" si es mayor o igual a 1%
Solución:
PIB_anterior <- 1000
PIB_posterior <- 1012
crecimiento <- (PIB_posterior - PIB_anterior) / PIB_anterior *
100
if (crecimiento < 0) {
print("Recesion")
} else if (crecimiento < 1) {
print("Estancamiento")
} else {
print("Crecimiento")
}
Problema 5
Crea una copia del programa del problema 4 y “encapsula” su operación en una
función que acepte 2 argumentos (PIB_anterior y PIB_posterior) y devuelva como

resultado “-1” en caso de recesión, “0” en caso de estancamiento y “1” en caso de
crecimiento. Ejecuta la función múltiples veces para ver distintos resultados.
Solución:
clasificarPIB <- function(PIB_anterior, PIB_posterior) {
crecimiento <- (PIB_posterior - PIB_anterior) / PIB_anterior
* 100
if (crecimiento < 0) {
return(-1)
} else if (crecimiento < 1) {
return(0)
} else {
return(1)
}
}
# Ejemplo
print(clasificarPIB(1000, 1012))
print(clasificarPIB(1000, 1009))
print(clasificarPIB(1000, 999))
Problema 6
Crea una copia del programa del problema 4 (o 5) para extenderlo. Añade dos datos
dados: población del primer y del segundo año. Clasifica las economías según PIB
per cápita y tasa de crecimiento anual:
●​ Si PIB p.c. < 5000 → "Economía en desarrollo"
●​ Si PIB p.c. >= 5000 y crecimiento < 1% → "Economía estancada"
●​ Si PIB p.c. >= 5000 y crecimiento >= 1% → "Economía en crecimiento"
Solución:
PIB_anterior <- 700000000
PIB_posterior <- 690000000
poblacion_anterior <- 12000
poblacion_posterior <- 12500
pib_per_capita <- PIB_posterior / poblacion_posterior
crecimiento <- (PIB_posterior - PIB_anterior) / PIB_anterior *
100
if (pib_per_capita < 5000) {
print("Economia en desarrollo")
} else if (crecimiento < 1) {
print("Economia estancada")
} else {
print("Economia en crecimiento")

}
Problema 7
Extiende el programa anterior para que acepte y devuelva valores en vectores tanto
para los 2 valores de PIB, los 2 valores de población, y el resultado final.
Solución (vectores):
PIB_anterior <- c(50000000, 700000000, 900000000)
PIB_posterior <- c(55000000, 702000000, 910000000)
poblacion_anterior <- c(12000, 25000, 50000)
poblacion_posterior <- c(12500, 25200, 51000)
pib_per_capita <- PIB_posterior / poblacion_posterior
crecimiento <- (PIB_posterior - PIB_anterior) / PIB_anterior *
100
resultado <- ifelse(pib_per_capita < 5000,
"Economía en desarrollo",
ifelse(crecimiento < 1,
"Economía estancada",
"Economía en crecimiento"))
print(resultado)`
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 190, fecha: "2026-05-11T10:15:00Z" },
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
			es: {
				teoria: {
					concepto: "Bucles",
					titulo: "Bucles Anidados",
					contenido_pregunta: `Un departamento de cumplimiento normativo quiere contar cuántas auditorías se realizan en total durante los 3 primeros trimestres del año. En cada trimestre, se audita un número de oficinas igual al número del trimestre actual (ej. en el trimestre 1 se audita 1 oficina, en el 2 se auditan 2, etc.). Analiza el siguiente código en R:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					income <- 2500<br>
					auditorias <- 0<br>
					for (trimestre in 1:3) {<br>
					  for (oficina in 1:trimestre) {<br>
						auditorias <- auditorias + 1<br>
					  }<br>
					}<br>
					print(auditorias)<br>
					</i>
					¿Cuál es el valor final de la variable auditorias que imprimirá la consola?`,
					opciones_respuesta: ["3", "6","9", "1"],
					respuesta_correcta: "6",
					instruccion_tutor: "Pídele que haga la 'traza' mental del código paso a paso. Pregúntale: 'Cuando el trimestre es 1, ¿de qué número a qué número va el bucle de la oficina?'. Una vez que responda, pregúntale qué pasa en el trimestre 2, y luego en el trimestre 3. Haz que él mismo sume las auditorías de cada trimestre (1 + 2 + 3) para descubrir el valor final de la variable.",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			en: {
				teoria: {
					concepto: "Loops",
					titulo: "Inner Loops",
					contenido_pregunta: `A compliance department wants to count the total number of audits conducted during the first three quarters of the year. In each quarter, the number of offices audited is equal to the quarter number (e.g., in the first quarter, 1 office is audited; in the second, 2 are audited; and so on). Analyze the following R code:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					income <- 2500<br>
					audits <- 0<br>
					for (quarter in 1:3) {<br>
					  for (office in 1:quarter) {<br>
						audits <- audits + 1<br>
					  }<br>
					}<br>
					print(audits)<br>
					</i>
					What is the final value of the audits variable that the console will display?`,
					opciones_respuesta: ["3", "6","9", "1"],
					respuesta_correcta: "6",
					instruccion_tutor: "Ask them to mentally “walk through” the code step by step. Ask him, “When the quarter is 1, what range does the office loop cover?” Once he answers, ask him what happens in quarter 2, and then in quarter 3. Have him add up the audits for each quarter (1 + 2 + 3) to figure out the final value of the variable.",
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			puntaje_maximo: 100,
			tiempo_medio_esperado: 60,
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: `¿Qué es un bucle?
●
Repetir

bloques

de

código

sin

reescribir.

●

Normalmente,

las

Mientras (while) no se ha
terminado, repetir la tarea

repeticiones

tienen pequeñas alteraciones.

●

Controlamos el número de veces que
se repite, o la condición para que se
siga repitiendo o deje de repetirse.

Por
hacer

Hecho

3

Tipos de bucles
● Tengo que asistir a clases de diferentes
asignaturas durante 14 semanas.
● Mientras no apruebe, tengo que estudiar y
practicar.
● Tengo que estudiar y practicar hasta que
aprueba.

4

Bucles e instrucciones asociadas

5

Tipos de bucles en R
● for → iterar n veces
● while → repetir mientras se cumpla
condición
● repeat → repetir hasta usar break
6

Bucle for

7

Bucle for
Funcionamiento:
● Se especiﬁca una colección de elementos (como un vector)
● Se especiﬁca una variable contenedora
● El bucle toma el primer elemento de la colección, lo copia en la
variable contenedora, y ejecuta el bloque de código
● Se repite la acción para el resto de elementos de la colección
● Agotados los elementos de la colección, se continúa después del
bucle
8

Sintaxis del bucle for
for (i in 1:5) {
#Repetir para los
números 1, 2,3,4,5 (5 veces).
#El número asociado a la repetición
actual se
#almacena en la variable i.
print(i)
}
9

Bucle for con vectores
edades <- c(21, 34, 45)
for (edad in edades) { #Repetir para todos los valores
en el vector “edades”.
#Los valores de “edades” se introducirán en orden en
#la variable “edad”, y se ejecutará el bloque de
código.
print(edad)
}
10

Bucle for con matrices
edades <- matrix(c(21, 34, 45,
28, 39, 50),
nrow = 2, byrow = TRUE)
for (edad in edades) { # Repetir para todos los elementos de
la matriz
# Los valores se recorrerán por columnas orden interno de R
# y se introducirán en la variable “edad”.
print(edad)
}
11

Bucle for con matrices, índices explícitos
edades <- matrix(c(21, 34, 45,
28, 39, 50),
nrow = 2, byrow = TRUE)
# Recorrer la matriz usando índices
for (i in 1:nrow(edades)) {
# recorrer filas
for (j in 1:ncol(edades)) {
# recorrer columnas
cat("Fila", i, "Columna", j, ":", edades[i, j], "\n")
}
}
12

Bucle for sobre una lista
lista <- list(ventas = c(10, 15, 20),
gastos = c(5, 7, 9))
for (nombre in names(lista)) {
cat(nombre, ":", sum(lista[[nombre]]),
"\n")
}
13

Bucle for sobre un data frame
df
<data.frame(pais
=
c("Espana",
"Francia"),PIB = c(1400, 2700))
for (i in 1:nrow(df)) {
cat(df$pais[i], "-", df$PIB[i], "\n")
}
14

Bucle for sobre datos importados de un CSV
datos_ventas <- read.csv("ventas.csv")
for (i in 1:nrow(datos_ventas)) {
cat("Fila",
i,
datos_ventas$Producto[i],
datos_ventas$Cantidad[i], "\n")
}

":",
"-",

15

Bucle while

16

Bucle while
Funcionamiento:
● Inicialización de la variable antes del bucle
● Se especiﬁca una condición y se evalúa al comienzo de cada
repetición
○ Si la condición se cumple (da como resultado TRUE), el bloque de
código se ejecuta, se incrementa la variable y se vuelve a empezar
evaluando la condición
○ Si la condición no se cumple, se continúa después del bucle
(incluso si nunca se ha ejecutado)

17

Sintaxis del bucle while
x <- 1
#Inicialización de la condición del bucle
while (x <= 5) { #Si la condición x <= 5 se cumple, ejecutar el
código.
#Al terminar el bloque se volverá a empezar, reevaluando la
condición.
print(x)
x <- x + 1
#Los cambios hechos en la variable se conservarán
en la siguiente iteración y tras terminar el bucle.
} #Si la condición no se cumple, se prosigue.

18

Fallos habituales con el bucle while
● Si la condición no se cumple en la primera pasada, el
código puede no ejecutarse ni una sola vez (origen de fallo
habitual)
● Si la condición no deja de cumplirse por la ejecución
repetida del bloque de código (e.g. while(TRUE) ó
while(1) ), ni se sale del bucle por otros medios (e.g.
break), es un bucle inﬁnito
19

Bucle repeat
Instrucciones break y next

20

Bucle repeat e instrucción break
Se termina el bucle mediante la instrucción break. La instrucción break
también permite terminar otros bucles(e.g while).
x <- 1
repeat {
#Bucle sin límite preestablecido.
print(x)
x <- x + 1
if (x > 5) { break } #Instrucción break termina el
bucle.
}
21

next para saltar iteraciones
El comando next termina la repetición actual, y continúa con la siguiente. Si
se ejecuta en un bucle dentro de otro bucle, next solo afecta al más
profundo (activo).
for (i in 1:5) {
if (i == 3){
iteración.
print(i)
}

next

}#La

instrucción

next

salta

la

22

Comparación de bucles

23

Comparación de bucles
●

for → Bucle controlado, se conoce el número de iteraciones de antemano, o se quiere repetir
una acción para una serie de valores
○ Ejemplo: Calcular el índice de Gini de todos los países de una lista

●

while → Bucle con ﬁnal bien deﬁnido; se repetirán una serie de acciones hasta haber
cumplido una condición
○ Ejemplo: comprar stock de una serie de proveedores, ordenados por precio ascendente,
hasta tener el stock requerido

●

repeat → Bucle con múltiples condiciones de ﬁn (break) que se pueden producir a mitad
de procesamiento
○ Ejemplo: comprar stock indeﬁnidamente. Parar si se satisface la necesidad, si se acaban
los fondos o si no se puede comprar a un precio que deje margen de beneﬁcio
24

Bucles anidados

25

¿Cuando se anidan bucles?
● Cuando se ha de repetir un proceso para todos los valores
posibles de una variable, o cuando se tienen que realizar una
determinada acción multiples veces, se hace con un bucle.

● Cuando se ha de repetir el proceso para todas las
combinaciones posibles de varias variables, o una acción
repetitiva requiere en cada repetición otra acción repetitiva, se
utilizan bucles anidados
26

Ejemplo de bucle anidado
# Datos ficticios de IPC
ipc <- list(
"España" = c(100, 103, 106),
"Francia" = c(100, 101, 104)
)

# 2019, 2020, 2021

# Calcular inflación (%)
for (pais in names(ipc)) {
cat(pais, ":\n")
for (i in 2:length(ipc[[pais]])) {
inflacion <- (ipc[[pais]][i] / ipc[[pais]][i-1] - 1) * 100
cat(" Inflación año", i, ":", round(inflacion, 2), "%\n")
}
}
27

Tiempo de ejecución de bucles anidados
●

Si tenemos una función o bloque de código que se ejecuta en 1
milisegundo y lo ejecutamos en 2 ó 3 bucles sucesivos con 1 000
iteraciones cada uno, tardará 2 ó 3 segundos.

●

Si lo ejecutamos en 2 bucles anidados de 1 000 iteraciones cada uno,
tardará más de un cuarto de hora.

●

Si lo ejecutamos en 3 bucles anidados de 1 000 iteraciones cada uno,
tardará más de 10 días.
28

Ejemplos prácticos

29

Ejemplo práctico: sumatoria
suma <- 0
for (i in 1:100) {
suma <- suma + i
}
print(suma)
30

Ejemplo práctico 2: hipoteca (1/2)
# Parámetros de la hipoteca
capital <- 150000
# capital inicial
tasa <- 0.05
# 5% anual
anios <- 25
# Pago fijo anual (amortización francesa)
pago <- capital * (tasa / (1 - (1 + tasa)^(-anios)))
31

Ejemplo práctico 2: hipoteca (2/2)
saldo <- capital
for (anio in 1:anios) {
interes <- saldo * tasa
amortizacion <- pago - interes
saldo <- saldo - amortizacion
cat("Año", anio, "\n")
cat(" Intereses:", round(interes, 2), "\n")
cat(" Capital:", round(amortizacion, 2), "\n")
cat(" Saldo pendiente:", round(saldo, 2), "\n\n")
}
`,
			ejercicios_texto: `Sesión 4 de laboratorio: Bucles
El objetivo es practicar el uso de bucles en R (for, while, repeat) para
automatizar tareas repetitivas y trabajar con colecciones de datos. Se busca
afianzar la lógica de iteración y su aplicación en ejemplos de economía, utilizando
también conceptos vistos previamente en el curso, como vectores, funciones y
condicionales (if).
Problema 1
Escribe un programa que use un bucle for para imprimir los números del 1 al 10.
Solución:
# Imprimir números del 1 al 10
for (i in 1:10) {
print(i)
}
Problema 2
Escribe un programa que use un bucle for para imprimir los números pares del 1 al
10. Puede utilizar la función “resto de división” %% junto con un condicional “if”.
●​ n %% 2 devuelve 1 cuando n es impar
●​ n %% 2 devuelve 0 cuando n es par
Solucion:
# Imprimir números pares del 1 al 10
for (n in 1:10) {
if (n %% 2 == 0) {
# resto 0 significa que es par
print(n)
}
}
Problema 3
Un estudiante ahorra 200 € al mes durante 12 meses. Usa un bucle for para calcular
y mostrar el saldo de la cuenta después de cada mes.
Solución:
# Ahorro mensual constante
saldo <- 0
for (mes in 1:12) {
saldo <- saldo + 200
# se suma el ahorro
cat("Mes", mes, "- Saldo:", saldo, "\n")
}

Problema 4
Copie y adapte el programa anterior para aceptar un vector de 12 posiciones, por
ejemplo c(200, 250, 180, 220, 210, 230, 250, 200, 240, 190, 210,
220) en el que cada posición contiene el ahorro mensual.
Solucion:
# Vector con el ahorro de cada mes
ahorros <- c(200, 250, 180, 220, 210, 230, 250, 200, 240, 190,
210, 220)
saldo <- 0
for (mes in 1:12) {
saldo <- saldo + ahorros[mes]
cat("Mes", mes, "- Saldo:", saldo, "\n")
}
Problema 5
Escriba un programa que llene una matriz de 10 x 10 con las tablas de multiplicar.
Para imprimir una matriz puede utilizar simplemente print(matriz).
Solución:
# Crear matriz 10x10 vacía
tabla <- matrix(0, nrow = 10, ncol = 10)
# Llenar con bucles anidados
for (i in 1:10) {
for (j in 1:10) {
tabla[i, j] <- i * j
}
}
print(tabla)
Problema 6
Dado un vector con los gastos de 6 meses c(1200, 1500, 1300, 1600,
1400, 1350),
●​ Usa un bucle para calcular el gasto promedio sin usar mean().
Dados 2 porcentajes umbral (90%, 110%),
●​ Clasifique los valores en “bajo”, si están por debajo del umbral inferior, “altos”,
si están por encima del umbral superior, y “medios” si están entre ambos
(incluidos).
Asegúrese que las comparaciones con los umbrales se escriben de tal forma que
cada dato posible se clasifica de una y sólo de una forma mediante el uso correcto
de >, >=, <, <= en las comparaciones.

Solución:
# Datos
gastos <- c(1200, 1500, 1300, 1600, 1400, 1350)
# Calcular promedio manualmente
suma <- 0
for (i in 1:length(gastos)) {
suma <- suma + gastos[i]
}
promedio <- suma / length(gastos)
cat("Gasto promedio:", promedio, "\n")
# Clasificación con umbrales
umbral_bajo <- 0.9 * promedio
umbral_alto <- 1.1 * promedio
clasificacion <- c()
for (i in 1:length(gastos)) {
if (gastos[i] < umbral_bajo) {
clasificacion[i] <- "Bajo"
} else if (gastos[i] > umbral_alto) {
clasificacion[i] <- "Alto"
} else {
clasificacion[i] <- "Medio"
}
}
print(clasificacion)
Problema 7
Un capital inicial de 1000 € crece con interés compuesto a un 12% / año.
●​ Usa un bucle while para calcular en cuántos años el capital superará los 2000
€.
Si convertimos el interés a interés mensual linealmente, (12%/año) / (12 meses/año)
obtenemos 1%/mes.
●​ Use un segundo bucle para calcular en cuántos meses el capital superará los
2000€ con un interés mensual del 1%.
Si convertimos el interés anual a interés mensual mediante la siguiente fórmula
obtenemos (1+0,12)^(1/12)-1 = 0,009488 ~ 0,949% de interés mensual.
●​ Use un tercer bucle para calcular en cuántos meses el capital superará los
2000€ con un interés mensual de 0,949%.
Solución:
# Caso 1: interés anual 12%
capital <- 1000
anios <- 0
while (capital <= 2000) {

capital <- capital * 1.12
anios <- anios + 1
}
cat("Con interés anual del 12%, supera 2000€ en", anios,
"años.\n")
# Caso 2: interés mensual lineal 1% (12%/12)
capital <- 1000
meses <- 0
while (capital <= 2000) {
capital <- capital * 1.01
meses <- meses + 1
}
cat("Con interés mensual del 1%, supera 2000€ en", meses,
"meses.\n")
# Caso 3: interés mensual compuesto correcto
interes_mensual <- (1 + 0.12)^(1/12) - 1
capital <- 1000
meses <- 0
while (capital <= 2000) {
capital <- capital * (1 + interes_mensual)
meses <- meses + 1
}
cat("Con interés mensual compuesto de",
round(interes_mensual*100, 3),
"%, supera 2000€ en", meses, "meses.\n")
`
		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 45, fecha: "2026-05-12T10:15:00Z" }
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
			tipo_pregunta: "opcion_multiple",
			es: {
				teoria: {
					concepto: "Listas",
					titulo: "Operación con elementos de listas",
					contenido_pregunta: `Un analista financiero tiene la siguiente lista en R con los datos mensuales de un fondo de inversión:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					portafolio <- list(<br>
					  clientes = c("Empresa A", "Empresa B"),<br>
					  rendimientos = c(5.2, -1.4, 3.8)<br>
					)<br>
					total <- sum(portafolio["rendimientos"])<br>
					print(total)<br>
					</i>
					¿Cuál será el resultado en consola?`,
					opciones_respuesta: ["7.6","Produce un error, porque se está intentando aplicar una función matemática (sum) a un objeto de tipo lista, en lugar de a un vector numérico","Produce un error, porque el vector rendimientos tiene más elementos (3) que el vector clientes (2), lo que corrompe la lista","3.8"],
					respuesta_correcta: "Produce un error, porque se está intentando aplicar una función matemática (sum) a un objeto de tipo lista, en lugar de a un vector numérico",
					instruccion_tutor: `Pregúntale cuál es la diferencia conceptual entre extraer un elemento con un solo corchete [ versus usar el símbolo $. Hazle notar que la función sum() requiere números o un vector numérico para operar. Pregúntale: Al usar portafolio["rendimientos"], ¿R nos está entregando los números puros, o nos está entregando una 'caja' (lista) que tiene los números adentro? ¿Se puede sumar matemáticamente una lista?`,
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			en: {
				teoria: {
					concepto: "Lists",
					titulo: "Operations on List Elements",
					contenido_pregunta: `A financial analyst has the following list in R containing monthly data for an investment fund:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					portfolio <- list(<br>
					  clients = c(“Company A”, “Company B”),<br>
					  returns = c(5.2, -1.4, 3.8)<br>
					)<br>
					total <- sum(portfolio[“returns”])<br>
					print(total)<br>
					</i>
					¿What output is displayed in the console?`,
					opciones_respuesta: ["7.6","This causes an error because it attempts to apply a mathematical function (sum) to a list object instead of a numeric array.","This causes an error because the returns vector has more elements (3) than the `clientes` vector (2), which corrupts the list","3.8"],
					respuesta_correcta: "This causes an error because it attempts to apply a mathematical function (sum) to a list object instead of a numeric array.",
					instruccion_tutor: `Ask them what the conceptual difference is between extracting an element with a single square bracket [ versus using the $ symbol. Point out to them that the sum() function requires numbers or a numeric vector to operate. Ask them: When using portfolio[“returns”], is R giving us the raw numbers, or is it giving us a “box” (list) that contains the numbers? Can a list be added mathematically?`,
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			puntaje_maximo: 100,
			tiempo_medio_esperado: 120,
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: `Estructuras de datos II
Listas

Deﬁnición
● Una lista es una colección ordenada y ﬂexible de
objetos.
● A diferencia de los vectores y las matrices, que son
homogéneos, una lista puede contener elementos de
diferentes tipos de datos.
● Las listas son ideales para almacenar los resultados de
un análisis complejo.
4

Creación
● list(): Crear una lista. Es una buena práctica es
nombrar los elementos para que el código sea más
legible.

# Datos de inﬂación, precios y países
paises <- c("ARG", "MEX", "PER")
inﬂacion <- c(9.5, 7.9, 8.5) # Tasas de inﬂación anual
precios <- matrix(c(120, 130, 115, 800, 810, 850),
nrow = 2, byrow = TRUE,
dimnames = list(c("Cobre", "Trigo"), c("ARG", "MEX",
"PER")))

5

Acceder a elementos
● Existen tres formas principales de acceder a los
elementos:
○ [ ]: Extrae un solo elemento de la lista, devolviendo
siempre una nueva lista.
○ [[ ]]: Extrae un solo elemento de la lista, devolviendo su
contenido (vector, matriz, etc.).
○ $: Similar a [[]], pero se usa para acceder a elementos
por su nombre.
6

Creación: Ejemplo
# Crear una lista con diferentes objetos
analisis_macro <- list(
paises_analisis = paises,
tasas_inﬂacion = inﬂacion,
precios_clave = precios
)
7

Acceder a elementos: Ejemplo
# Acceder a la matriz de precios
usando el nombre
matriz_precios
<analisis_macro$precios_clave
print(matriz_precios)
#>Resultado: ARG MEX PER
#> Cobre
120 130 115
#> Trigo
800 810 850

# Acceder a la inﬂación de un país
inﬂacion_mexico
analisis_macro$tasas_inﬂacion[2]
print(inﬂacion_mexico)
#> Resultado: [1] 7.9

<-

8

Modiﬁcación
● Agregar, modiﬁcar o eliminar elementos de una lista.
# Agregar un nuevo vector de crecimiento del PIB
crecimiento_pib <- c(-9.86, -8.24, -11.12)
analisis_macro$crecimiento_pib <- crecimiento_pib
# Modiﬁcar la tasa de inﬂación de ARG
analisis_macro$tasas_inﬂacion[1] <- 100.2
9

Modiﬁcación
# Eliminar la matriz de precios
analisis_macro$precios_clave
NULL
print(analisis_macro)
#> $paises_analisis
#> [1] "ARG" "MEX" "PER"

#> #> $tasas_inﬂacion
<-#> [1] 100.2 7.9 8.5
#> #> $crecimiento_pib
#> [1] -9.86 -8.24 -11.12

10

Operaciones
lapply() : Es una función que aplica una función a cada elemento de

una lista y devuelve el resultado en una nueva lista. Es mucho más
eﬁciente que usar un bucle for.
inﬂacion_lista <- list(
ARG = c(95.0, 100.2, 105.5, 110.1, 115.8),
MEX = c(7.9, 8.5, 7.1, 6.5, 6.8),
PER = c(8.5, 9.1, 8.8, 9.2, 8.9)
)
11

Operaciones
promedios <- lapply(inﬂacion_lista, mean)
print(promedios)
#> Resultado: $ARG
#> [1] 105.92
#>
#> $MEX
#> [1] 7.76
#>
#> $PER
#> [1] 8.9
12

Factores

13

Deﬁnición
● Un factor es un tipo de dato para almacenar variables
categóricas o nominales.
● Usa el comando ‘factor ()’.
○ levels(): El atributo más importante de un factor.
Muestra las categorías únicas.
○ ordered = TRUE: Convierte un factor en un factor
ordenado. Útil para variables ordinales (ej., "Bajo",
"Medio", "Alto").
14

Ejemplo
# Sectores de la economía
sectores <- c("Servicios", "Industria", "Finanzas", "Servicios",
"Industria")
sectores_factor <- factor(sectores)
print(sectores_factor)
#> [1] Servicios Industria Finanzas Servicios Industria
#> Levels: Finanzas Industria Servicios
15

Ejemplo
# Factores ordenados para un análisis de riesgo
riesgo <- c("Alto", "Medio", "Bajo", "Medio", "Alto")
riesgo_factor <- factor(riesgo,
levels = c("Bajo", "Medio", "Alto"),
ordered = TRUE)
print(riesgo_factor)
#> Resultado: [1] Alto Medio Bajo Medio Alto
#> Levels: Bajo < Medio < Alto
16

Dataframe

17

Deﬁnición
● Un data frame es como una tabla de Excel o una base de
datos, donde cada columna puede tener un tipo de dato
diferente (numérico, de texto, etc.).
● Mientras que una matriz todos los datos son del mismo
tipo, en un data frame las columnas pueden ser de
diferentes tipos.
● Un data frame está compuesto por vectores.
18

Creación
● data.frame(). Cada argumento se convierte en una
columna.
● Funciones: dim(), names(), nrow(), ncol()
● Recomendación: Usar stringsAsFactors = FALSE dentro
de la función data.frame() para evitar que R convierta
automáticamente las columnas de texto a factores. Esto
previene errores comunes en la manipulación de datos.
19

Ejemplo
covid <- data.frame(
"paises" = c("ARG", "BRA", "CHI", "MEX", "PER"),
"crecimiento" = c(-9.86,-4.06,-5.84,-8.24,-11.12),
"muertes" = c(103721,549924,35026,238424,195243),
stringsAsFactors = FALSE
)
print(covid)
#> paises crecimiento muertes
#> 1 ARG
-9.86 103721
#> 2 BRA
-4.06 549924
#> 3 CHI
-5.84 35026
#> 4 MEX
-8.24 238424
#> 5 PER -11.12 195243
20

Acceso a elementos
● Accede a los datos de forma similar a las matrices, pero
también por nombres de columna.
# Acceder a la columna de crecimiento por nombre
crecimiento_pib <- covid$crecimiento
# Acceder al crecimiento del primer país
crecimiento_arg <- covid[1, 2] # ﬁla 1, columna 2
21

Acceso a elementos
● Seleccionar ﬁlas que cumplen con una condición lógica.
# Filtrar países con crecimiento negativo (recesión)
paises_recesion <- covid[covid$crecimiento < 0, ]
print(paises_recesion)
#> paises crecimiento muertes
#> 1 ARG
-9.86 103721
#> 2 BRA
-4.06 549924
#> 3 CHI
-5.84 35026
#> 4 MEX
-8.24 238424
#> 5 PER -11.12 195243
22

Operaciones
● Realizar operaciones matemáticas directamente entre
columnas y crear nuevas variables.
covid$muertes_normalizadas <- covid$muertes / sum(covid$muertes)
print(covid)
#> paises crecimiento muertes muertes_normalizadas
#> 1 ARG
-9.86 103721
0.1091568
#> 2 BRA
-4.06 549924
0.5790403
#> 3 CHI
-5.84 35026
0.0368817
#> 4 MEX
-8.24 238424
0.2510255
#> 5 PER -11.12 195243
0.2057390
23

Operaciones
● Usar múltiples condiciones lógicas dentro de los
corchetes.
# Filtrar países con crecimiento negativo Y más de 100,000 muertes
recesion_alto_impacto <- covid[covid$crecimiento < 0 & covid$muertes > 100000, ]
print(recesion_alto_impacto)
#> paises crecimiento muertes muertes_normalizadas
#> 1 ARG
-9.86 103721
0.1091568
#> 2 BRA
-4.06 549924
0.5790403
#> 4 MEX
-8.24 238424
0.2510255
#> 5 PER -11.12 195243
0.2057390
24

Operaciones
● merge(): une dos data frames basándose en una o más
columnas en común (una "clave").
# Otro DataFrame con datos de deuda pública
deuda <- data.frame(
paises = c("ARG", "BRA", "CHI", "MEX", "PER"),
deuda_pib = c(89.4, 75.2, 33.1, 52.8, 35.1)
)
# Unir los dos DataFrames por la columna "paises"
covid_con_deuda <- merge(covid, deuda, by = "paises")
25

Operaciones
print(covid_con_deuda)
#> paises crecimiento muertes muertes_normalizadas densidad_muertes
deuda_pib
#> 1 ARG
-9.86 103721
0.1091568
0.002304911 89.4
#> 2 BRA
-4.06 549924
0.5790403
0.002569738 75.2
#> 3 CHI
-5.84 35026
0.0368817
0.001843474 33.1
#> 4 MEX
-8.24 238424
0.2510255
0.001892254 52.8
#> 5 PER -11.12 195243
0.2057390
0.005916455 35.1
26

Ficheros

27

Introducción
● Los datos no se escriben manualmente en el código.
Sino provienen de fuentes externas como ﬁcheros de
texto, bases de datos o APIs web.
● El manejo de ﬁcheros es la puerta de entrada para usar
datos del mundo real en R, algo importante para el
análisis económico.
28

Introducción
● getwd(): Muestra el directorio de trabajo actual.
● setwd(): Te permite cambiar el directorio de trabajo.
# Ver el directorio actual
print(getwd())
#> [1] "C:/Usuarios/alberto/Documentos"
# Cambiar al directorio de tu proyecto
# setwd("C:/Usuarios/alberto/Documentos/Ficheros_R")
29

Importar datos
● read.csv(): Para importar archivos CSV. R lee el archivo y lo
convierte en un data frame.
● Parámetros:
■ ﬁle: La ruta del archivo (local o URL).
■ header = TRUE (por defecto): Indica si la primera ﬁla son
los nombres de las columnas.
■ sep = ",": El separador de las columnas (puede ser sep = ";"
para archivos europeos).
30
■ dec = ".": El separador decimal.

Importar datos
● Los
datos
del
Banco
Mundial
https://datos.bancomundial.org/indicador/SL.UEM.TOTL.ZS
formato CSV
# Datos de desempleo
● url_desempleo <- "ﬁchero.csv"
● url_desempleo
<"https://raw.githubusercontent.com/datasets/unemployment-ra
te/main/data/unemployment-rate.csv"
31

Importar datos
# Leer el archivo CSV directamente desde la URL
desempleo_df <- read.csv(url_desempleo)
# Usar head() para ver las primeras ﬁlas del DataFrame
print(head(desempleo_df))
#> Year Month Unemployment_Rate
#> 1 1948 1
3.4
#> 2 1948 2
3.8
#> 3 1948 3
4.0
#> 4 1948 4
3.9
#> 5 1948 5
3.5
#> 6 1948 6
3.6
32

Importar datos
● read.table(): Es un comando más general. Es útil para
archivos de texto con separadores diferentes, como
tabuladores (sep = "\t").
● read.delim(): Una variante de read.table() que asume
que el separador es un tabulador (\t).

33

Importar datos
# Suponiendo que tienes un archivo de texto "datos.txt" con
columnas separadas por espacios
# datos_texto <- read.table("datos.txt", header = TRUE)
# print(datos_texto)
#
# Para un archivo con tabuladores
# datos_tab <- read.delim("datos.txt")
34

Exportar datos
● write.csv(): El comando para guardar un DataFrame en un
archivo CSV.
● Parámetros:
○ x: El DataFrame que quieres guardar.
○ ﬁle: El nombre del archivo de destino (ej., "ﬁchero.csv").
○ row.names = FALSE: Es recomendado para evitar guardar
una columna adicional con los números de ﬁla.
35

Exportar datos
# Filtramos el data frame para quedarnos solo con los datos del año
2020
desempleo_2020 <- subset(desempleo_df, Year == 2020)
# Exportamos el nuevo DataFrame a un archivo CSV local
write.csv(desempleo_2020, "desempleo_2020.csv", row.names =
FALSE)
#> Esto creará un archivo llamado "desempleo_2020.csv" en tu
directorio de trabajo
36

Manejo de ﬁcheros
La forma más común de escribir un archivo de texto es con las
funciones ﬁle() y writeLines(), y la conexión se cierra con close().
● ﬁle()
○ Crea una conexión a un ﬁchero de texto.
○ Parámetros: El primer es la ruta del ﬁchero (description), y el
segundo es el modo de apertura (open). Los modos más comunes
son:
■
■

'w': Write (Escribir). Crea un ﬁchero nuevo o sobrescribir uno
existente.
'r': Read (Leer). Abre un ﬁchero para lectura.

■ Ejemplo: ﬁchero <- ﬁle('mi_reporte.txt', 'w')

37

Manejo de ﬁcheros
● writeLines()
○ Escribe líneas de texto en una conexión de ﬁchero. Cada
elemento de un vector de caracteres se escribe como una línea
separada.
○ Parámetros: El primer es el vector de caracteres que quieres
escribir, y el segundo es el objeto de la conexión del ﬁchero.
○ Automáticamente saltos de línea al ﬁnal de cada elemento del
vector.
○ Ejemplo: writeLines(c("primera linea", "segunda linea"), ﬁchero)
38

Manejo de ﬁcheros
● close()
○ Cierra la conexión al ﬁchero. Este paso es fundamental
para asegurar que todos los datos se guarden
correctamente y para liberar los recursos.
○ Se llama a la función close() sobre el objeto de
conexión del ﬁchero.
○ Ejemplo: close(ﬁchero)`,
			ejercicios_texto: `Sesión 5 de laboratorio: Listas, data frames y ficheros
Parte 1: Listas
El objetivo es practicar la creación de listas en R para almacenar, manipular y
analizar esta información.

Se utilizará un subconjunto de datos de las "Estadísticas Monetarias y Financieras"
del Banco Mundial, centrándonos en indicadores de tasas de interés de los últimos
10 años (2016-2025). Estos datos son cruciales para entender la política monetaria
y la salud financiera de un país.
Instrucciones para la preparación de los datos:
1.​ Accede a la base de datos del Banco Mundial:

https://data.imf.org/en/Datasets.
2.​ Filtra por el tems: Sector financiero y monetario y selecciona el conjunto de
datos: Estadísticas monetarias y financieras (MFS), Tipo de interés(Monetary
and Financial Statistics (MFS), Interest Rate)
3.​ Quitar la opción de descargar el conjunto de datos completo.
4.​ Selecciona el siguiente conjunto de países: Venezuela, Haití, Italia, Australia,
República Checa, Brasil, Panamá, Ecuador, Japón, Estados Unidos, Rusia,
Brasil, Argentina.
5.​ Buscar y seleccionar los siguientes indicadores:
a.​ Deposit Rate, Percent per annum
b.​ Savings Rate, Percent per annum
c.​ Lending Rate, Percent per annum
d.​ Money market Rate, Percent per annum
6.​ Elige los últimos diez años disponibles.
7.​ Descarga el conjunto de datos en formato CSV.
8.​ Una vez descargado, abrirlo en Excel y leer los datos.
Para este laboratorio, los datos son pre-procesados y se deben cargados en R en
una estructura de lista. No necesitas ni leer ningún archivo CSV. A continuación se
encuentra el esquema de la estructura de datos, que representa las tasas de interés
de varios países y su información asociada.
# Años de referencia para los datos
years <- 2016:2024

# Estructura de datos pre-cargada en una lista con todos los países

datos_financieros_lista <- list(
Venezuela = list(
indicadores = c("Deposit Rate", "Money market Rate", "Lending Rate", "Savings Rate"),
valores = list(
"Deposit Rate" = c(15.085, 147.325, NA, NA, NA, NA, NA, NA, NA),
"Money market Rate" = c(31.85, 52.875, NA, NA, NA, NA, NA, NA, NA),
"Lending Rate" = c(20.775, 210.59, NA, NA, NA, NA, NA, NA, NA),
"Savings Rate" = c(126.60, 125.49, NA, NA, NA, NA, NA, NA, NA)
)
),
Haiti = list(
……. Completar para todos los países

Problema 1
El spread de tasas de interés (diferencia entre la tasa de préstamo y la de depósito)
y la volatilidad de las tasas del mercado monetario son indicadores clave en la
economía. Se busca analizar ambos fenómenos en los países Argentina, Brasil y
Rusia, mostrando los resultados para un análisis comparativo. Para cada uno de los
países utilizando un bucle, se debe iterar sobre los países seleccionados y se debe
calcular y guardar el vector del spread (Tasa de Préstamo - Tasa de Depósito).
Además, calcular el promedio del vector resultante de la velocidad del cambio y
clasificar el resultado usando un factor en base a los siguientes niveles:
●​ Datos Insuficiente: Si el promedio es N/A
●​ Estable: Si el promedio es menor igual que 25
●​ Moderado: El resto de los valores
Solución:
# Lista de países a analizar
paises_a_analizar <- c("Argentina", "Brazil", "Russia")
niveles_clasificacion <- c("Estable", "Moderado", "Datos Insuficiente")
# Bucle para iterar sobre los países seleccionados
for (pais in paises_a_analizar) {
# Acceder a los vectores de tasas de interés del país actual
tasa_prestamo <- datos_financieros_lista[[pais]]$valores[["Lending Rate"]]
tasa_deposito <- datos_financieros_lista[[pais]]$valores[["Deposit Rate"]]

# Calcular el spread y el promedio
spread_vector <- tasa_prestamo - tasa_deposito
spread_promedio <- mean(spread_vector)
print(spread_promedio)
# Clasificar del spread promedio usando un condicional
if (is.na(spread_promedio)) {
clasificacion_spread <- "Datos Insuficientes"
} else if (spread_promedio <= 25) {
clasificacion_spread <- "Estable"
} else {
clasificacion_spread <- "Moderado"
}
# Convertir la clasificación en un factor
clasificacion_spread <- factor(clasificacion_spread, levels = niveles_clasificacion)
#Mostrar los resultados
cat("País:", pais, "\n")
cat(spread_vector, "\n")
cat(as.character(clasificacion_spread), "\n")
}
Problema 2
Analizar las tasas de ahorro y préstamo de Brasil. Para ellos, se debe crear una lista
que contenga los vectores de datos para ambas tasas y, a continuación, aplicar una
función personalizada que calcule la media y el rango (la diferencia entre el valor
máximo y mínimo) para cada una de ellas. La función debe ser aplicada a toda la
lista de manera eficiente utilizando lapply(), para obtener un resultado final que
muestre ambas métricas para cada tipo de tasa.
Solución:
# Crear una lista con los vectores de tasas de interés de Brasil
tasas_brasil <- list(
tasas_ahorro = datos_financieros_lista$Brazil$valores$Savings Rate,
tasas_prestamo = datos_financieros_lista$Brazil$valores$Lending Rate
)
# Definir una función personalizada para el análisis de métricas
analizar_tasas <- function(vector_tasas) {
# Asegurarse de que no haya valores NA
vector_tasas <- na.omit(vector_tasas)
# Si el vector está vacío después de eliminar los NA, devolver NA
if (length(vector_tasas) == 0) {

return(list(media = NA, rango = NA))
}
# Calcular la media y el rango
media <- mean(vector_tasas)
rango <- max(vector_tasas) - min(vector_tasas)
# Devolver los resultados en una lista
return(list(media = media, rango = rango))
}
# 3. Aplicar la función a la lista 'tasas_brasil' usando lapply()
resultados_analisis <- lapply(tasas_brasil, analizar_tasas)
# Mostrar el resultado final
print(resultados_analisis)

Problema 3
Clasificar a un conjunto de países (Ecuador, España, USA y Rusia) en categorías de
riesgo utilizando una combinación de bucles, condicionales y operaciones
vectoriales para crear un reporte estructurado. El reporte debe ser una lista con un
elemento para cada país, el cual contendrá una matriz de métricas clave (la media
de la Tasa de Préstamo, la desviación estándar de la Tasa del Mercado Monetario y
la cantidad de valores faltantes en la Tasa de Préstamo) y su clasificación final. La
clasificación de riesgo se determinará con las siguientes reglas:
●​ Si la media de la Tasa de Préstamo es mayor que 30 Y la desviación
estándar de la Tasa del Mercado Monetario es mayor que 15, el riesgo es
"Muy Alto".
●​ Si la media de la Tasa de Préstamo es mayor que 20 O la desviación
estándar es mayor que 10, el riesgo es "Alto".
●​ De lo contrario, el riesgo es "Normal".
El resultado final será una lista de listas, donde cada sub-lista contendrá el nombre
del país, la matriz de métricas calculadas y la clasificación de riesgo.
Solución:
# Vector de países a analizar en este problema
paises_riesgo <- c("Ecuador", "España", "USA", "Russia")
# Lista vacía para almacenar los resultados del análisis de riesgo
riesgo_pais_analisis <- list()
# Bucle para iterar sobre cada país en el vector
for (pais in paises_riesgo) {

# Acceder a los vectores de datos y calcular métricas
tasa_prestamo <- datos_financieros_lista[[pais]]$valores$Lending Rate
tasa_mercado_monetario <- datos_financieros_lista[[pais]]$valores$Money market
Rate
media_prestamo <- mean(tasa_prestamo, na.rm = TRUE)
desviacion_estandar_mercado <- sd(tasa_mercado_monetario, na.rm = TRUE)
na_count_prestamo <- sum(is.na(tasa_prestamo))
# Inicializar la clasificación
clasificacion_riesgo <- "Normal"
# Aplicar condicionales para determinar la clasificación de riesgo
if (!is.na(media_prestamo) && !is.na(desviacion_estandar_mercado)) {
if (media_prestamo > 30 && desviacion_estandar_mercado > 15) {
clasificacion_riesgo <- "Muy Alto"
} else if (media_prestamo > 20 || desviacion_estandar_mercado > 10) {
clasificacion_riesgo <- "Alto"
}
} else {
clasificacion_riesgo <- "Datos Insuficientes"
}
# Crear una matriz para las métricas
metricas_matriz <- matrix(
c(media_prestamo, desviacion_estandar_mercado, na_count_prestamo),
nrow = 1,
dimnames = list(
NULL,
c("Media Tasa Prestamo", "Desv. Est. Mercado", "NA en Tasa Prestamo")
)
)
# Crear una sub-lista con el análisis completo para el país actual
analisis_completo <- list(
Pais = pais,
Metricas = metricas_matriz,
Riesgo = clasificacion_riesgo
)
# Agregar la sub-lista a la lista principal de resultados
riesgo_pais_analisis[[pais]] <- analisis_completo
}

# Mostrar el resultado final
print(riesgo_pais_analisis)

Parte 2: Data frames
Se utilizará un subconjunto de datos de las "Perspectivas de la economía mundial
(WEO)" del Banco Mundial, centrándonos en indicadores sobre las previsiones
económicas de los últimos 10 años (2016-2025).
Instrucciones para la preparación de los datos:
1.​ Accede a la base de datos del Banco Mundial:
https://data.imf.org/en/Datasets.
2.​ Filtra por el items: Previsiones económicas y selecciona el conjunto de datos:
Perspectivas de la economía mundial (WEO) (World Economic Outlook).
3.​ Quitar la opción de descargar el conjunto de datos completo.
4.​ Buscar y seleccionar los siguientes indicadores:
a.​ Unemployment rate
b.​ Current account balance (credit less debit), US dollar
c.​ Imports of goods and services, US dollar
d.​ External debt, US dollar
e.​ Exports of goods and services, US dollar
f.​ Financial account balance (assets less liabilities), US dollar
5.​ Elige los últimos diez años disponibles
6.​ Descarga el conjunto de datos en formato CSV
7.​ Una vez descargado, abrirlo en Excel y leer los datos.
Problema 1
Leer el archivo CSV y, a continuación, convertir las columnas de los años a un
formato de fila, creando así un nuevo dataframe con las columnas COUNTRY,
INDICATOR, YEAR y VALUE. Este proceso de reestructuración es un paso crítico
para preparar los datos para cualquier análisis de series de tiempo. Adicionalmente,
el dataframe resultante debe ser filtrado para eliminar cualquier fila donde el valor
(VALUE) sea vacío o un valor faltante (NA), lo cual es un paso fundamental de
limpieza de datos.
Solución:
# 1. Lectura del archivo CSV
getwd()
datos_weo_crudos
<read.csv("Docencia/Programacion
R/Quinta
semana/Laboratorio/dataset_weo.csv", sep = ";", row.names = NULL, header =
TRUE)
# 2. Reestructurar el DataFrame de formato ancho a largo de forma manual

columnas_años <- c("X2016", "X2017", "X2018", "X2019", "X2020", "X2021",
"X2022", "X2023", "X2024", "X2025")
# Crear un DataFrame vacío para almacenar los datos reestructurados
datos_largos <- data.frame(
COUNTRY = character(),
INDICATOR = character(),
YEAR = numeric(),
VALUE = numeric(),
stringsAsFactors = FALSE
)
# Obtener las columnas que no son años
columnas_estaticas <- c("COUNTRY", "INDICATOR")
# Bucle para iterar sobre los años y reestructurar los datos
for (year in columnas_años) {
# Crear un sub-DataFrame con las columnas estáticas y la columna del año actual
sub_df <- datos_weo_crudos[, c(columnas_estaticas, year)]
# Cambiar el nombre de la columna del año a 'VALUE'
colnames(sub_df)[3] <- "VALUE"
# Agregar una columna 'YEAR' con el valor del año actual (sin la X)
sub_df$YEAR <- as.numeric(gsub("X", "", year))
# Reorganizar el orden de las columnas para que coincida con el DataFrame final
sub_df <- sub_df[, c("COUNTRY", "INDICATOR", "YEAR", "VALUE")]
# Combinar el sub-DataFrame con el DataFrame final (datos_largos)
datos_largos <- rbind(datos_largos, sub_df)
}
# 3. Limpiar los datos: eliminar filas con valores NA
# Usar un bucle para filtrar los datos
filas_a_mantener <- !is.na(datos_largos$VALUE)
datos_limpios <- datos_largos[filas_a_mantener, ]
print(head(datos_limpios))
Problema 2
Utilizando el dataframe reestructurado y limpio del problema anterior, se busca
realizar un análisis comparativo de la balanza comercial entre Euro Area (EA) y
Latin America and the Caribbean (LAC). La balanza comercial total se define como

la suma total de las exportaciones menos la suma total de las importaciones para
cada región en todo el período. Para esto se debe crear dos sub-dataframes, uno
para cada región, que contengan sus series de tiempo de exportaciones e
importaciones. Con estos subconjuntos, se debe calcular la balanza comercial total
para cada región sumando los valores de exportaciones e importaciones de todos
los años disponibles. El objetivo es comparar la balanza comercial acumulada para
cada región y comprender la dinámica de sus flujos de comercio exterior a lo largo
de una década.
Solución:
# 1. Crear un DataFrame vacío para los resultados totales
balanza_comercial_total <- data.frame(
REGION = character(),
Total_Exportaciones = numeric(),
Total_Importaciones = numeric(),
Balanza_Comercial = numeric(),
stringsAsFactors = FALSE
)
# 2. Definir las regiones a analizar
regiones_analizar <- c("Euro Area (EA)", "Latin America and the Caribbean (LAC)")
# Bucle para iterar sobre cada región
for (region in regiones_analizar) {
# Inicializar las sumas de exportaciones e importaciones para la región actual
total_exports <- 0
total_imports <- 0
# Bucle para recorrer el DataFrame limpio
for (i in 1:nrow(datos_limpios)) {
# Condicional para filtrar por región y sumarlas
if (datos_limpios$COUNTRY[i] == region) {
if (datos_limpios$INDICATOR[i] == "Exports of goods and services, US dollar") {
total_exports <- total_exports + datos_limpios$VALUE[i]
}
if (datos_limpios$INDICATOR[i] == "Imports of goods and services, US dollar") {
total_imports <- total_imports + datos_limpios$VALUE[i]
}
}
}
# 3. Calcular la balanza comercial total y agregarla al DataFrame de resultados
balanza_total <- total_exports - total_imports

nueva_fila <- data.frame(
REGION = region,
Total_Exportaciones = total_exports,
Total_Importaciones = total_imports,
Balanza_Comercial = balanza_total,
stringsAsFactors = FALSE
)
balanza_comercial_total <- rbind(balanza_comercial_total, nueva_fila)
}
# 4. Mostrar los resultados
print("--- Balanza Comercial Total de la Euro Area y América Latina y el Caribe ---")
print(balanza_comercial_total)
Problema 3
Una balanza de cuenta corriente con déficit (saldo negativo) puede llevar a un
aumento de la deuda externa para financiarlo. Para la región de "Emerging and
Developing Europe", se busca examinar esta relación. Para esto se debe crear un
nuevo dataframe que contenga las series de tiempo de la "External debt" y el
"Financial account balance" para esta región. Se debe realizar un cálculo que
permita entender si un superávit en la cuenta financiera ha ayudado a financiar un
incremento en la deuda externa. Los resultados de este análisis, que deben ser las
series de tiempo de los indicadores y la relación calculada, se deben exportar a un
archivo de texto llamado analisis_financiero.txt.
Solución:
# 1. Crear un DataFrame vacío para los resultados
analisis_df <- data.frame(
YEAR = numeric(),
Deuda_Externa = numeric(),
Cuenta_Financiera = numeric(),
Ratio_Financiera_Deuda = numeric(),
stringsAsFactors = FALSE
)
# 1. Definir la región y los años a analizar
region <- "Emerging and Developing Europe"
años_analizar <- sort(unique(datos_limpios$YEAR))
# 2. Bucle principal para iterar sobre los años
for (year in años_analizar) {
deuda <- NA

financiera <- NA
# Bucle para filtrar los datos y extraer los valores para cada año
for (i in 1:nrow(datos_limpios)) {
if (datos_limpios$COUNTRY[i] == region && datos_limpios$YEAR[i] == year) {
if (datos_limpios$INDICATOR[i] == "External debt, US dollar") {
deuda <- datos_limpios$VALUE[i]
}
if (datos_limpios$INDICATOR[i] == "Financial account balance (assets less
liabilities), US dollar") {
financiera <- datos_limpios$VALUE[i]
}
}
}
# Calcular el ratio si ambos valores existen y la deuda no es cero
if (!is.na(deuda) && !is.na(financiera) && deuda != 0) {
ratio <- financiera / deuda
# 3. Agregar la fila al DataFrame de resultados
nueva_fila <- data.frame(
YEAR = year,
Deuda_Externa = deuda,
Cuenta_Financiera = financiera,
Ratio_Financiera_Deuda = ratio,
stringsAsFactors = FALSE
)
analisis_df <- rbind(analisis_df, nueva_fila)
}
}
# 3. Exportar el análisis a un archivo de texto
nombre_archivo <- "analisis_financiero.txt"
file_conn <- file(nombre_archivo, "w")
writeLines(paste("--- Análisis de Deuda y Cuentas de Capital para la región:", region,
"---"), file_conn)
writeLines("\nValores anuales y ratio de la cuenta financiera sobre la deuda
externa:", file_conn)
writeLines("Año\tDeuda Externa\tCuenta Financiera\tRatio (CF/DE)", file_conn)
# 4. Bucle para escribir cada fila del DataFrame en el archivo
for (i in 1:nrow(analisis_df)) {
fila <- analisis_df[i, ]

linea <- paste(fila$YEAR, fila$Deuda_Externa,
fila$Ratio_Financiera_Deuda, sep = "\t")
writeLines(linea, file_conn)
}
# 5. Cerrar la conexión
close(file_conn)
`		},
		interacciones: [
			{ estudiante_id: "Estudiante_01", intento: 1, nota: 100, calificacion: "Aprobado", tiempo_empleado_seg: 95, fecha: "2026-05-13T12:15:00Z" },
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
			es: {
				teoria: {
					concepto: "Análisis estadístico en estructuras de datos",
					titulo: "Filtrado condicional en DataFrames",
					contenido_pregunta: `Un analista financiero quiere quedarse solo con las empresas cuya rentabilidad supera o iguala la mediana del mercado. Para ello, ejecuta este código en su script de R:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					empresas <- data.frame(<br>
					  sector = c("Tech", "Tech", "Agro", "Agro", "Finanzas"),<br>
					  rentabilidad = c(15, 5, 8, 12, 10)<br>
					)<br>
					mediana_global <- median(empresas$rentabilidad)<br>
					top_empresas <- subset(empresas, rentabilidad >= mediana_global)<br>
					print(nrow(top_empresas))<br>
					</i>
					¿Qué valor imprimirá la consola?`,
					opciones_respuesta: ["2", "3","5", "10"],
					respuesta_correcta: "3",
					instruccion_tutor: `Pídele que extraiga mentalmente la columna 'rentabilidad' y ordene sus 5 valores de menor a mayor para encontrar el valor central (la mediana). Una vez que el alumno deduzca que la mediana es 10, haz que observe el operador lógico en la función subset (>=). Pregúntale: '¿Cuáles de los 5 valores originales cumplen la condición de ser mayores o iguales a 10?'. Finalmente, recuérdale que la función nrow() no suma valores, sino que cuenta el número de filas (casos) que sobrevivieron al filtro`,
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			en: {
				teoria: {
					concepto: "Statistical Analysis in Data Structures",
					titulo: "Conditional Filtering in DataFrames",
					contenido_pregunta: `A financial analyst wants to focus only on companies whose profitability exceeds or equals the market median. To do this, he runs this code in his R script:
					<i style="font-family: monospace; background-color: #f8f9fa; padding: 10px; display: block; border-radius: 5px;"><br>
					companies <- data.frame(<br>
					  sector = c(“Tech”, “Tech”, “Agro”, ‘Agro’, “Finance”),<br>
					  profitability = c(15, 5, 8, 12, 10)<br>
					)<br>
					overall_median <- median(companies$profitability)<br>
					top_companies <- subset(companies, profitability >= overall_median)<br>
					print(nrow(top_companies))<br>
					</i>
					¿What output is displayed in the console?`,
					opciones_respuesta: ["2", "3","5", "10"],
					respuesta_correcta: "3",
					instruccion_tutor: `Ask the student to mentally extract the “return” column and sort its 5 values from smallest to largest to find the central value (the median). Once the student deduces that the median is 10, have them look at the logical operator in the subset function (>=). Ask them, “Which of the 5 original values satisfy the condition of being greater than or equal to 10?” Finally, remind them that the nrow() function does not sum values, but rather counts the number of rows (cases) that survived the filter.`,
				},
				practica: {
                    concepto: "Vectores",
                    titulo: "Operaciones entre vectores (Práctica)",
                    contenido_pregunta: "Escribe un código en R que cree un vector...",
                    opciones_respuesta: ["Opción A", "Opción B", "Opción C", "Opción D"],
                    respuesta_correcta: "Opción A",
                    instruccion_tutor: "Guía al alumno revisando la sintaxis de creación..."
                }
            },
			puntaje_maximo: 100,
			tiempo_medio_esperado: 240,
			url_diapositivas: "",
			url_ejercicios: "",
			teoria_texto: `Funciones y scripts en análisis estadístico
Resumen dataframes
● Filtrar y quitar valores NA en columnas
○ # Quitar ﬁlas con NA en cualquier columna
○ df_sin_na <- na.omit(df)
○ # Quitar ﬁlas donde columna 'col1' tiene NA
○ df_ﬁltrado <- df[!is.na(df$col1), ]

2

Resumen dataframes
● Seleccionar columnas del dataframe
○ # Seleccionar columnas por nombre
○ df_seleccion <- df[, c("col1", "col2")]
○ # Seleccionar columnas por índice
○ df_seleccion <- df[, c(1, 3)]

3

Resumen dataframes
● Crear un subset del dataframe
○ # Filtrar ﬁlas según condición
○ df_subset <- subset(df, col1 > 10)
○ # Seleccionar columnas especíﬁcas al mismo tiempo
○ df_subset <- subset(df, col1 > 10, select = c(col1, col3))

4

Resumen dataframes
● Recorrer un dataframe con for
○ for (i in 1:nrow(df)) { # Recorrer ﬁlas
○ print(df[i, ])
○ }
○ for (col in colnames(df)) { # Recorrer columnas
○ print(df[[col]])
○ }
5

Funciones estadísticas

6

Introducción

7

Introducción

8

Descriptivas
● Estas funciones te permiten resumir las características clave de
tus datos, proporcionando una comprensión inicial de la
distribución, tendencia central y dispersión.
■ Medidas de tendencia central: mean() (media), median()
(mediana).
■ Medidas de dispersión: var() (varianza), sd() (desviación
estándar), range() (rango).
■ Medidas de posición: min() (mínimo), max() (máximo),
quantile() (cuantiles).

9

Medidas de tendencia central
Se tiene datos de la inﬂación anual de varios países. ¿Cuál es la
inﬂación promedio?
●
●
●
●
●
●

inﬂacion_anual <- c(2.5, 3.1, 1.9, 4.0, 3.5)
media_inﬂacion <- mean(inﬂacion_anual)
#Resultado: 3
mediana_inﬂacion <- median(inﬂacion_anual)
#Resultado: 3.1
10

Medidas de dispersión
¿Qué tan volátil es el crecimiento del PIB en 10 años?
● crecimiento_pib <- c(2.1, -0.5, 3.4, 1.8, 2.0, 1.5, -0.1, 2.8, 3.0, 2.5)
● varianza_pib <- var(crecimiento_pib)
● #Resultado: 2.391667
● desviacion_estandar_pib <- sd(crecimiento_pib)
● #Resultado: 1.546508.
11

Otras funciones
● range(): Devuelve el valor mínimo y máximo de un vector. Es útil

para identiﬁcar rápidamente los extremos de tus datos.
● summary(): Proporciona un resumen de seis números: el mínimo, el
primer cuartil, la mediana, la media, el tercer cuartil y el máximo.
● quantile(): Permite calcular los percentiles de un vector. Esto es
esencial para entender la distribución de los datos y detectar
valores atípicos.
12

Otras funciones
● summary(crecimiento_pib) devolverá un resumen con la
media, mediana, cuartiles, etc.

● quantile(crecimiento_pib, probs = c(0.25, 0.75)) devolverá
1.575 (Q1) y 2.725 (Q3).
13

Medidas de relación y asociación
● cor(): Coeﬁciente de Correlación
○ Mide la fuerza y dirección de la relación lineal entre
dos variables. Los valores van de -1 a 1.
○ Sintaxis: cor(x, y)
○ Ejemplo: cor(crecimiento_pib, inﬂacion_anual). Un
valor cercano a -1 o 1 indica una relación fuerte.
14

Medidas de relación y asociación
● cov(): Covarianza
○ Indica cómo se mueven dos variables juntas. Un valor
positivo signiﬁca que ambas tienden a aumentar o disminuir
al mismo tiempo.
○ Sintaxis: cov(x, y)
○ La covarianza no está estandarizada, por lo que es mejor
usar la correlación para comparar la fuerza de las relaciones.
15

Análisis descriptivo por grupos
En economía, se necesita resumir datos por categorías (ej.
región, sector, año). table() y aggregate() son perfectos para
esto.
● table(): Conteo de Frecuencias.
○ Cuenta la frecuencia de cada valor en un vector
categórico.
○ Ejemplo: table(datos$sector_economico)

16

Análisis descriptivo por grupos
● prop.table(): Proporciones o Porcentajes.
○ Convierte una tabla de frecuencias a proporciones.
○ Ejemplo: prop.table(table(datos$sector_economico)).

● aggregate(): Resumen por Grupo
○ Aplica una función de resumen (ej. mean, sum) a un vector
numérico, agrupado por uno o más factores.
○ Sintaxis: aggregate(formula, data, FUN)
○ Ejemplo: aggregate(salario ~ sector_economico, data = datos, FUN
17
= mean) devolverá el salario promedio para cada sector.

Pruebas de hipótesis
Las pruebas de hipótesis nos ayudan a tomar decisiones sobre los datos,
determinando si las diferencias observadas son estadísticamente
signiﬁcativas o simplemente debidas al azar.

● Test T (t.test)
○ Compara las medias de dos grupos para ver si son
signiﬁcativamente diferentes.
○ Ejemplo: ¿Es el salario promedio de los hombres diferente al de las
mujeres?
18
○ Código: t.test(salario_hombres, salario_mujeres)

Pruebas de hipótesis
● ANOVA (aov)
○ Compara las medias de más de dos grupos. Es una
extensión del test T.
○ Ejemplo: ¿Es el ingreso promedio diferente entre tres
regiones (Norte, Centro, Sur)?
○ Código: aov(ingreso ~ region)
19

Pruebas de hipótesis
● Prueba de Chi-cuadrado (chisq.test)
○ Determina si hay una relación entre dos variables
categóricas (ej. si son independientes).
○ Ejemplo: ¿Hay una relación entre el nivel educativo y el
estado laboral (empleado/desempleado)?
○ Código: chisq.test(tabla_contingencia)
20

Análisis de probabilidad
● R tiene funciones integradas para las distribuciones de
probabilidad más comunes, lo que elimina la necesidad de
calcular manualmente las probabilidades.
● Distribución Normal: dnorm(), pnorm(), qnorm(), rnorm().
● Distribución Binomial: dbinom(), pbinom(), qbinom(),
rbinom().
21

Análisis de probabilidad
Cada una tiene una letra inicial que indica su propósito:
● d: densidad (densidad de probabilidad, ideal para gráﬁcos).
● p: probabilidad acumulada (probabilidad de que una variable sea
menor que un valor dado).
● q: cuantil (el valor que corresponde a una probabilidad
acumulada dada).
● r: aleatorio (generar números aleatorios de la distribución).
22

Análisis de probabilidad: Ejemplo
● Problema: Los datos del crecimiento del PIB. Asumiendo una

distribución normal con media 2.5 y desviación estándar 1.2,
¿cuál es la probabilidad de que el PIB crezca menos del 1%?
● Código: probabilidad <- pnorm(1, mean = 2.5, sd = 1.2)
● Resultado: probabilidad devolverá 0.1056499. Esto signiﬁca
que hay una probabilidad de alrededor del 10.6% de que el
crecimiento sea menor al 1%.
23

Scripts

24

Deﬁnición
Un script es un archivo de texto (.R) que contiene el código
completo de tu análisis.
● Otros pueden replicar tu trabajo y obtener los mismos resultados.
● Puedes reutilizar tu código en diferentes proyectos sin tener que
reescribir.
● Mantienes tus análisis limpios, ordenados y listos para colaborar en
equipo.
● Puedes gestionar los cambios en tu análisis a lo largo del tiempo.
25

Estructura recomendada
● Encabezado: Nombre del script, autor, fecha, descripción.
● Paso 1: Carga de datos. Importa tus archivos .csv o .xlsx.
● Paso 2: Limpieza y manipulación de datos. Prepara los datos
para el análisis (ej. manejar valores perdidos).
● Paso 3: Análisis estadístico. Realiza los cálculos y modelos.
● Paso 4: Exportación de resultados. Guarda tus hallazgos en
archivos para futuros reportes.
26

Script: Ejemplo
● Problema: Analizar la relación entre el crecimiento del PIB y la tasa
de desempleo en los últimos 10 años.
● Objetivo: Crear un script que:
○ Importe los datos.
○ Calcule métricas descriptivas.
○ Realice un análisis de correlación y regresión.
○ Exporte un reporte de resultados.
● Datos: Un data.frame llamado datos_europeos.
27

Script: Ejemplo
Fichero CSV: Pais,Anio,PIB,Desempleo
Alemania,2020,-3.3,4.0
Alemania,2021,2.6,3.6
Alemania,2022,1.8,3.2
Alemania,2023,0.1,3.0
Alemania,2024,1.4,2.9
Francia,2020,-7.7,8.2…
28

Script: Ejemplo
# Nombre del script: analisis_europa.R
# Autor: [Tu nombre]
# Descripción: Análisis de la relación entre PIB y desempleo.
# Este script automatiza el proceso de análisis de datos desde la carga
hasta la exportación de resultados.
# Parte 1: Cargar Datos
datos_europeos <- read.csv("datos_pib_desempleo.csv")
# Resultado: El data.frame 'datos_europeos' se carga en el entorno de R.
29

Script: Ejemplo
# Parte 2: Limpieza y Manipulación
# Eliminar ﬁlas con valores perdidos (NA)
datos_limpios <- na.omit(datos_europeos)
# Resultado: Las ﬁlas con NA se eliminan del data.frame.
# Revisar la estructura y resumen para asegurar la calidad de los datos
summary(datos_limpios)
# Resultado: Se muestra un resumen estadístico de cada columna para
veriﬁcar los rangos y distribuciones
30

Script: Ejemplo
# Parte 3: Análisis Descriptivo
# Tasa de desempleo promedio por país
promedio_desempleo_pais
<tapply(datos_limpios$Desempleo,
datos_limpios$Pais, mean)
# Resultado: Un array con la media de desempleo por país. Por ejemplo,
España Francia Alemania 8.5 7.2 4.1
# Tasa de crecimiento del PIB promedio
promedio_pib <- mean(datos_limpios$PIB)
# Resultado: Un único valor numérico. Por ejemplo, 1.87.
31

Script: Ejemplo
# Parte 4: Correlación y Regresión
# Correlación entre PIB y Desempleo
correlacion <- cor(datos_limpios$PIB, datos_limpios$Desempleo)
print(paste("Correlación entre PIB y Desempleo:", round(correlacion, 2)))
# Resultado: "Correlación entre PIB y Desempleo: -0.75".
# Explicación: Un valor negativo fuerte sugiere una relación inversa, a
mayor PIB, menor desempleo.
32

Flujo de trabajo
● Importar -> Limpiar -> Manipular -> Analizar -> Exportar
● Este es el ciclo de vida de un análisis de datos. Un script te
permite documentar y automatizar cada paso. Esto garantiza la
replicabilidad, lo que signiﬁca que cualquier persona puede
ejecutar el mismo script y obtener los mismos resultados.
● Un ﬂujo de trabajo bien deﬁnido te ayuda a organizar tus ideas, a
evitar errores y a colaborar de forma más efectiva con otros.`,
		ejercicios_texto: ``
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