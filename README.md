# ksd_web

## Descripción
Web para la visualización de manera simple y directa las tendencias cortoplacistas que podrían tomar las principales criptodivisas en el marco intradía.<br> 
Está basada en Vue3 y representa visualmente los datos obtenidos y calculados por [kassandra_task](https://github.com/aquesadat/kssandra_task "kassandra_task") proporcionados vía servicio web por [kassandra_ws](https://github.com/aquesadat/kssandra_ws "kassandra_ws") <br>

## Pantallas

### Principal
Además de información de interés sobre la inversión en cryptodivisas, en la tabla principal muestra un rankin de sugerencias de inversión basadas en el potencial de incremento de valor a corto plazo y la propbabilidad de que este se cumpla. <br>
Cada elemento de la tablaes un link a una pantalla donde se muestrá información más pormenorizada pudiendo visualizar esta en una gráfica y realizar simulaciones.
![homepage](https://user-images.githubusercontent.com/48809827/216252430-a8bf1e81-89d5-4ff8-95dd-fb261732f7a1.jpg)

### Gráfica y simulación
Esta pantalla está compuesta de varias secciones, siempre para una misma criptodivisa:
- Gráfica <br> 
Muestra la evolución del precio hasta el momento actual y la tendencia que tomará a corto plazo según las predicciones realizadas. Esta información puede consultarse en intervalos de 15min o 1h.
- Simulador <br>
Dado un importe, un plazo de inversión y unas comisiones de compra y venta (opcionales) simula la rentabilidad de la inversión proporcionando información sobre el valor que se podría obtener transcurrido dicho periodo de tiempo, beneficio neto y probabilidad de que dicho resultado se produzca. Normalmente la probabilidad es inversamente proporcional al plazo.
- Más info <br>
Representa valores cotización actuales, históricos y de mercado.
![chart_simu](https://user-images.githubusercontent.com/48809827/216253118-24891c7f-2ef2-4f13-aae3-4c5c3962968b.jpg)
