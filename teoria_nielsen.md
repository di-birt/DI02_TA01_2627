# Usabilidad y Heurísticas de Jakob Nielsen

---

## ¿Qué es la usabilidad?

La **usabilidad** es la medida en que un producto puede ser utilizado por usuarios específicos para conseguir objetivos específicos con **efectividad, eficiencia y satisfacción** en un contexto de uso determinado. Esta definición es la que establece la norma internacional **ISO 9241-11**.

Dicho de forma más sencilla: un sistema es usable cuando el usuario puede hacer lo que necesita hacer, de forma fácil, rápida y sin frustrarse.

La usabilidad no es una propiedad única, sino que se compone de varios atributos:

- **Facilidad de aprendizaje:** ¿Cuánto tarda un usuario nuevo en aprender a usar el sistema?
- **Eficiencia:** Una vez aprendido, ¿con qué rapidez puede completar tareas?
- **Memorabilidad:** Si un usuario deja de usarlo un tiempo, ¿puede retomar el uso fácilmente?
- **Tolerancia a errores:** ¿Cuántos errores comete el usuario? ¿Puede recuperarse fácilmente?
- **Satisfacción:** ¿El uso resulta agradable?

---

## ¿Para qué sirve la usabilidad?

La usabilidad se aplica al diseño y evaluación de cualquier sistema con el que interactúe una persona: aplicaciones móviles, sitios web, software de escritorio, cajeros automáticos, electrodomésticos, etc.

Su objetivo principal es **centrar el diseño en el usuario** (User-Centered Design), asegurando que el producto se construye pensando en quien lo va a usar y no solo en quien lo desarrolla.

Algunas de sus aplicaciones concretas son:

- **Evaluar interfaces existentes** para detectar problemas antes o después de su lanzamiento.
- **Guiar el diseño** de nuevas interfaces desde las primeras fases del proyecto.
- **Comparar alternativas** de diseño para elegir la opción más adecuada para los usuarios.
- **Reducir el coste de soporte**, ya que una interfaz usable genera menos dudas y errores en los usuarios.
- **Aumentar la conversión** en aplicaciones comerciales: un proceso de compra usable se abandona menos.

---

## ¿Por qué es importante?

La usabilidad es importante por razones tanto humanas como de negocio:

**Desde el punto de vista del usuario:**
- Reduce la frustración y el estrés al interactuar con tecnología.
- Permite completar tareas sin necesidad de formación extensa ni de leer manuales.
- Mejora la accesibilidad, especialmente para personas mayores o con poca experiencia tecnológica.

**Desde el punto de vista del negocio:**
- Un producto difícil de usar provoca abandono: el usuario se va a la competencia.
- Corregir problemas de usabilidad en fases tempranas del desarrollo es mucho más barato que hacerlo una vez el producto está en producción.
- Mejora la reputación y la satisfacción del cliente, lo que se traduce en fidelización.
- Reduce los costes de formación y soporte técnico.

> *"Si el usuario no puede usar el producto, no importa lo potente que sea."*

---

## Métodos de evaluación de la usabilidad

Existen diversas formas de evaluar la usabilidad de un sistema:

- **Test con usuarios:** Se observa a usuarios reales realizando tareas concretas con el sistema.
- **Evaluación heurística:** Expertos en usabilidad revisan el sistema comparándolo con una lista de principios o criterios reconocidos. Es rápida y económica.
- **Card sorting:** Se pide a usuarios que organicen contenidos en categorías para diseñar mejor la arquitectura de información.
- **Eye tracking:** Se registra dónde mira el usuario en la pantalla para detectar qué elementos llaman la atención y cuáles pasan desapercibidos.
- **Encuestas y cuestionarios:** Como el SUS (System Usability Scale), que mide la usabilidad percibida de forma estandarizada.

La **evaluación heurística** es uno de los métodos más extendidos, y es aquí donde cobran relevancia los principios de Jakob Nielsen.

---

## Heurísticas de Usabilidad de Jakob Nielsen

Jakob Nielsen es uno de los mayores expertos en usabilidad web y de interfaces de usuario. En 1994, junto con Rolf Molich, estableció **10 principios heurísticos** que sirven como guía para evaluar y diseñar interfaces usables. Estos criterios se utilizan ampliamente en evaluaciones heurísticas, donde expertos revisan una interfaz sin usuarios reales para detectar problemas de usabilidad.

---

## 1. Visibilidad del estado del sistema

**Descripción:**  
El sistema debe mantener siempre informado al usuario sobre lo que está ocurriendo, mediante retroalimentación apropiada en un tiempo razonable. El usuario nunca debe preguntarse "¿qué está pasando ahora mismo?".

![Icono de spinner / indicador de carga](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spinner_font_awesome.svg/120px-Spinner_font_awesome.svg.png)

*Un spinner de carga es uno de los elementos más universales para comunicar al usuario que el sistema está trabajando. Fuente: Font Awesome / Wikimedia Commons (CC BY-SA 3.0)*

**Ejemplos:**
- Una barra de progreso que muestra el porcentaje completado al descargar un archivo.
- Un indicador de carga (spinner) mientras una aplicación obtiene datos de un servidor.
- El indicador de batería en un teléfono móvil que muestra el nivel de carga en tiempo real.
- Un semáforo en un paso de peatones que muestra cuántos segundos quedan para cruzar.
- Al enviar un formulario, mostrar el mensaje "Formulario enviado correctamente ✓" en lugar de no dar ninguna respuesta.
- En un editor de texto, mostrar "Guardado" o "Guardando..." para indicar el estado del documento.

---

## 2. Coincidencia entre el sistema y el mundo real

**Descripción:**  
El sistema debe hablar el lenguaje del usuario, usando palabras, frases y conceptos familiares para él, en lugar de términos orientados al sistema. Debe seguir las convenciones del mundo real y presentar la información en un orden lógico y natural.

![Icono de carrito de la compra](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/160px-Shopping_cart_icon.svg.png)

*El icono del carrito de la compra es un ejemplo perfecto de metáfora del mundo real aplicada a una interfaz digital. Fuente: Jbarta / Wikimedia Commons (CC0)*

**Ejemplos:**
- Usar el icono de una papelera para representar "eliminar" o "borrar".
- Usar el icono de un sobre para representar el correo electrónico.
- En una aplicación de notas, llamar a la acción "Archivar" en lugar de "Mover a estado inactivo".
- En una tienda online, usar "Carrito de la compra" en lugar de "Contenedor temporal de ítems seleccionados".
- En una aplicación de música, usar iconos de play (▶), pausa (⏸) y stop (⏹) que todos reconocen de los reproductores físicos.
- Mostrar un calendario visual para seleccionar fechas, en lugar de pedir que se escriba en formato ISO (YYYY-MM-DD).

---

## 3. Control y libertad del usuario

**Descripción:**  
Los usuarios a menudo realizan acciones por error. El sistema debe ofrecer una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo. Se deben soportar las funciones de deshacer y rehacer.

![Icono de deshacer](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Undo_font_awesome.svg/120px-Undo_font_awesome.svg.png)

*El botón "Deshacer" (undo) es el ejemplo más claro de libertad del usuario: permite revertir cualquier acción sin consecuencias permanentes. Fuente: Font Awesome / Wikimedia Commons (CC BY-SA 3.0)*

**Ejemplos:**
- El botón "Deshacer" (Ctrl+Z) en procesadores de texto que permite revertir cambios accidentales.
- El botón "Cancelar" en un formulario de múltiples pasos que permite salir sin guardar.
- La papelera de reciclaje en los sistemas operativos: los archivos eliminados no se borran definitivamente de inmediato, sino que se pueden recuperar.
- En Gmail, la opción "Deshacer envío" que aparece durante unos segundos tras enviar un correo.
- Un botón "Limpiar filtros" en una búsqueda avanzada con muchos criterios aplicados.
- Poder cerrar un modal o diálogo pulsando la tecla Escape o haciendo clic fuera de él.

---

## 4. Consistencia y estándares

**Descripción:**  
Los usuarios no deberían tener que preguntarse si palabras, situaciones o acciones diferentes significan lo mismo. Se deben seguir las convenciones de la plataforma y mantener la coherencia interna en todo el sistema.

![Icono de marca de verificación](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Check_font_awesome.svg/120px-Check_font_awesome.svg.png)

*Una marca de verificación (✓) tiene el mismo significado en todas las interfaces y culturas digitales: confirma que algo está correcto o completado. Eso es consistencia. Fuente: Font Awesome / Wikimedia Commons (CC BY-SA 3.0)*

**Ejemplos:**
- Usar siempre el mismo color (por ejemplo, rojo) para todos los mensajes de error en una aplicación.
- Que el botón "Guardar" esté siempre en la misma posición en todas las pantallas de la aplicación.
- En aplicaciones móviles iOS, el botón de "Atrás" siempre aparece en la esquina superior izquierda.
- Usar siempre el mismo tipo de botón para acciones primarias (por ejemplo, botón azul y relleno) y el mismo para acciones secundarias (botón con borde).
- En una suite ofimática (como Microsoft Office), los atajos de teclado son los mismos en Word, Excel y PowerPoint.
- Si el sistema usa "Eliminar" en un lugar y "Borrar" en otro para la misma acción, genera confusión; debe elegir uno y mantenerlo.

---

## 5. Prevención de errores

**Descripción:**  
Mejor que un buen mensaje de error es un diseño cuidadoso que evite que el problema ocurra en primer lugar. Se deben eliminar las condiciones propensas a error o verificar las acciones antes de que el usuario se comprometa con ellas.

![Icono de advertencia / alerta](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gnome-dialog-warning.svg/120px-Gnome-dialog-warning.svg.png)

*El triángulo de advertencia aparece antes de que ocurra un error, alertando al usuario de que debe revisar algo. Es el símbolo visual de la prevención. Fuente: GNOME Project / Wikimedia Commons (CC BY-SA 3.0 US)*

**Ejemplos:**
- Desactivar (poner en gris) el botón "Enviar" hasta que todos los campos obligatorios del formulario estén rellenos.
- Mostrar un cuadro de confirmación antes de realizar una acción destructiva e irreversible ("¿Estás seguro de que quieres eliminar este archivo? Esta acción no se puede deshacer").
- En un formulario de fechas de viaje, deshabilitar en el calendario de "fecha de regreso" todos los días anteriores a la "fecha de salida".
- Autocompletar o sugerir términos de búsqueda para evitar errores tipográficos.
- En un campo de contraseña, mostrar un indicador de fortaleza para guiar al usuario antes de que intente registrarse con una contraseña débil.
- Al pegar un número de teléfono, formatear automáticamente el número para detectar si tiene los dígitos correctos.

---

## 6. Reconocimiento antes que recuerdo

**Descripción:**  
Se debe minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones disponibles. El usuario no debería tener que recordar información de una parte del diálogo a otra. Las instrucciones de uso del sistema deben ser visibles o fácilmente recuperables cuando sea necesario.

![Icono de lista de opciones](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/List_font_awesome.svg/120px-List_font_awesome.svg.png)

*Mostrar una lista visible de opciones (menú, historial, sugerencias) permite al usuario reconocer lo que necesita en lugar de tener que recordarlo de memoria. Fuente: Font Awesome / Wikimedia Commons (Dominio público)*

**Ejemplos:**
- Mostrar el historial de búsquedas recientes cuando el usuario hace clic en la barra de búsqueda.
- En un proceso de compra de varios pasos, mostrar un resumen del pedido en la barra lateral de todos los pasos.
- Los menús desplegables con todas las opciones disponibles, en lugar de campos de texto libre donde el usuario debe recordar los valores posibles.
- Mostrar las últimas imágenes editadas en la pantalla de inicio de una aplicación de edición fotográfica.
- Los tooltips (descripciones emergentes) que aparecen al pasar el ratón sobre iconos, explicando su función.
- El autocompletado de direcciones en formularios de envío, basado en direcciones anteriores.

---

## 7. Flexibilidad y eficiencia de uso

**Descripción:**  
Los aceleradores —invisibles para el usuario novel— pueden acelerar la interacción para el usuario experto, de modo que el sistema pueda atender tanto a usuarios sin experiencia como a usuarios con experiencia. Se debe permitir a los usuarios personalizar las acciones frecuentes.

![Icono de rayo / velocidad](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bolt_font_awesome.svg/120px-Bolt_font_awesome.svg.png)

*El rayo simboliza la velocidad y eficiencia que los atajos de teclado y aceleradores aportan a los usuarios expertos, sin perjudicar a los novatos. Fuente: Font Awesome / Wikimedia Commons (CC BY-SA 3.0)*

**Ejemplos:**
- Los atajos de teclado (Ctrl+C, Ctrl+V, Ctrl+S) que permiten a usuarios avanzados trabajar sin usar el ratón.
- En aplicaciones de viajes, la función "Buscar destinos similares" basada en reservas anteriores.
- Los macros en Excel que permiten a usuarios avanzados automatizar tareas repetitivas.
- La posibilidad de personalizar la barra de herramientas en un programa para tener a mano las funciones más usadas.
- Los "atajos" o "favoritos" en una aplicación de navegación para acceder rápidamente a destinos frecuentes.
- En un editor de código, los snippets que expanden una palabra clave en un bloque de código completo.

---

## 8. Estética y diseño minimalista

**Descripción:**  
Los diálogos no deben contener información irrelevante o que rara vez se necesita. Cada unidad extra de información compite con la información relevante y disminuye su visibilidad relativa. Menos es más.

![Icono de menos / reducir](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Minus_font_awesome.svg/120px-Minus_font_awesome.svg.png)

*El signo menos (−) representa perfectamente la filosofía del diseño minimalista: quitar lo que sobra para que lo esencial brille. Menos elementos = menos distracciones. Fuente: Font Awesome / Wikimedia Commons (CC BY-SA 3.0)*

**Ejemplos:**
- La página principal de Google: solo una caja de búsqueda y el logotipo, sin elementos distractores.
- Eliminar el menú de navegación completo durante el proceso de pago en una tienda online para no distraer al usuario.
- No mostrar todas las opciones de configuración avanzada en la pantalla principal; guardarlas en una sección "Ajustes avanzados".
- Una notificación push que muestra solo el texto esencial ("Tienes un nuevo mensaje de Ana"), sin información redundante.
- En una app de meditación, usar fondos simples y colores suaves para no distraer del contenido principal.
- Mostrar solo los 3-5 ítems más relevantes en un menú en lugar de 20 opciones a la vez.

---

## 9. Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores

**Descripción:**  
Los mensajes de error deben expresarse en lenguaje sencillo (sin códigos), indicar con precisión el problema y sugerir constructivamente una solución.

![Icono de error](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gnome-dialog-error.svg/120px-Gnome-dialog-error.svg.png)

*El icono de error con el símbolo de "prohibido" representa un fallo del sistema. La heurística exige que junto a este icono siempre aparezca una explicación clara y una solución. Fuente: GNOME Project / Wikimedia Commons (CC BY-SA 3.0 US)*

**Ejemplos:**
- En lugar de "Error 404", mostrar "Página no encontrada. Es posible que el enlace esté roto o la página haya sido movida. Puedes volver a la página principal o usar el buscador."
- En un formulario de login, en lugar de "Credenciales inválidas", especificar si el error es en el correo o en la contraseña (aunque esto puede tener implicaciones de seguridad, en muchos contextos mejora la usabilidad).
- Al introducir un número de tarjeta de crédito incorrecto, resaltar el campo en rojo y mostrar "El número de tarjeta debe tener 16 dígitos".
- En un formulario de registro, si el nombre de usuario ya está en uso, sugerir nombres de usuario disponibles similares.
- Al intentar subir un archivo con formato no soportado, indicar claramente "Solo se admiten archivos .PDF, .DOC y .DOCX" en lugar de un mensaje genérico de error.
- En una app de banca, si una transferencia falla, explicar el motivo ("Saldo insuficiente") y mostrar un botón directo para añadir fondos.

---

## 10. Ayuda y documentación

**Descripción:**  
Aunque es mejor que el sistema pueda usarse sin documentación, puede ser necesario proporcionar ayuda. Dicha información debe ser fácil de buscar, estar enfocada en la tarea del usuario, listar los pasos concretos a seguir y no ser demasiado extensa.

![Icono de ayuda / interrogante](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Help-browser.svg/120px-Help-browser.svg.png)

*El icono de interrogante azul es el símbolo universal del acceso a la ayuda. Una buena documentación siempre debe ser fácil de encontrar y relevante al contexto del usuario. Fuente: Tango Project / Wikimedia Commons (Dominio público)*

**Ejemplos:**
- Un botón de ayuda "?" contextual que abre una explicación relevante a la pantalla actual, no al manual completo.
- Una sección de preguntas frecuentes (FAQ) buscable en la web de soporte.
- Tutoriales interactivos o "tours guiados" la primera vez que el usuario accede a una función nueva.
- Tooltips que aparecen sobre campos de formulario complejos explicando qué información se espera y en qué formato.
- Una barra de búsqueda dentro del centro de ayuda para encontrar rápidamente artículos específicos.
- Videos cortos de "cómo se hace" (how-to) incrustados en la propia interfaz, junto a la funcionalidad que explican.

---

## Resumen

| # | Heurística | Idea clave |
|---|-----------|------------|
| 1 | Visibilidad del estado del sistema | Mantén al usuario informado de lo que ocurre |
| 2 | Coincidencia con el mundo real | Usa el lenguaje y conceptos del usuario |
| 3 | Control y libertad del usuario | Permite deshacer y salir fácilmente |
| 4 | Consistencia y estándares | Sé coherente y sigue las convenciones |
| 5 | Prevención de errores | Diseña para evitar errores antes de que ocurran |
| 6 | Reconocimiento antes que recuerdo | Muestra las opciones, no las ocultes |
| 7 | Flexibilidad y eficiencia | Ofrece atajos para usuarios avanzados |
| 8 | Estética y diseño minimalista | Solo lo necesario, sin distracciones |
| 9 | Recuperación de errores | Mensajes claros con solución |
| 10 | Ayuda y documentación | Documentación útil, breve y contextual |

---

*Fuente: Nielsen, J. (1994). "10 Usability Heuristics for User Interface Design". Nielsen Norman Group.*
