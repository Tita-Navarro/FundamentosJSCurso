/*Javascript solo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas
funciones a otros procesos. Este modelo de concurrencia se le llama EventLoop.

Javascript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas
al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la
respuesta, el callback asociado pasa a la cola de las tareas para ser ejecutado una vez que Javascript haya 
terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y Javascript se encuentra ejecutando procesos muy pesados,
el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

console.warn('NO VOY A BLOQUEAR EL EVENTLOOP')

https://www.latintflip.com para que quede más claro junto con este 
video https://www.youtube.com/watch?v=rgmej4Jx4WM */