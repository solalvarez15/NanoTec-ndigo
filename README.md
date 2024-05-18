# NanoGenTech

### Integrantes
46924 - Alvarez Sol Micaela <br>
51337 - Leonardelli Marianela <br>
47786 - Molinas María del Rosario



### Descripción
NanoGenTech es la nueva tecnología de Indigo que se encarga de presupuestar y agendar exploraciones médicas en pacientes humanos, así como también reservar y visualizar sus turnos en el quirofano.
El profesional utiliza esta herramienta para realizar los estudios que el paciente necesita, trazar la ruta de mayor eficiencia de un órgano a otro, en caso de necesitarlo y obtener el costo total final.
El paciente, por otro lado, puede visualizar su turno y en caso de algun imprevisto, cancelarlo o solicitar reprogramarlo.



### Regularidad
CRUD simple: <br>
1.Pacientes: <br>
Create: registrar nuevo paciente con su información personal (dni, nombre, apellido, mail, telefono, fecha nacimiento, direccion --> calle, altura, piso, depto, etc).<br>
Read: muestra la información del paciente.<br>
Update: modificar la información del paciente.<br>
Delete: eliminar el perfil del paciente en caso de que sea necesario. <br>

2.Turnos consulta (solicitado x paciente): <br>
Create: programar nuevos turnos para consultas médicas, asignando fecha, hora y profesional médico. <br>
Read: visualizar los turnos programados, junto con el profesional médico asignado, fecha y hora. <br>
Update: modificar detalles de los turnos (fecha y/o hora). <br>
Delete: cancelar turnos. <br>

3.Turnos exploración médica (sacado x el médico): <br>
Create: programar nuevos turnos para exploraciones médicas, asignando fecha, hora y paciente. <br>
Read: visualizar los turnos programados, junto con la información del paciente y del médico, fecha y hora. <br>
Update: modificar detalles de los turnos (fecha y/o hora). <br>
Delete: cancelar turnos. <br>

4.Tipo Exploración Médica: <br>
Create: registrar nuevas exploraciones médicas que los profesionales pueden realizar, junto con los detalles específicos de cada una. <br>
Read: acceder a la lista de exploraciones médicas disponibles. <br>
Update: modificar los detalles de las exploraciones médicas. <br>
Delete: eliminar exploraciones médicas que ya no estén en uso o que hayan sido reemplazadas por otras. <br>

5.Médico: <br>
Create: registrar nuevo médico con su información personal (número de matrícula, dni, nombre, apellido, mail, telefono, fecha nacimiento, direccion --> calle, altura, piso, depto, etc).<br>
Read: muestra la información del médico.<br>
Update: modificar la información del médico.<br>
Delete: eliminar el perfil del médico en caso de que sea necesario. <br>

CRUD dependiente: <br>
1.CRUD Exploración Médica {depende de} CRUD Tipo Exploración Médica <br>
2.CRUD Historia Clínica {depende de} CRUD Paciente <br>


Listado + detalle: <br>
1.Listado de turnos disponibles filtrado por día, hora y médico disponible <br>
2.Listado de exploraciones médicas filtrado por tipo de exploraciones médicas y médico que la realizan <br>


CUU: <br>
1.Reservar turno para exploración médica. <br>
2.Presupuestar exploración médica. <br>



### Aprobación Directa
CRUD: <br>
1.Pacientes <br>
2.Turnos <br>
3.Tipo Exploración Médica <br>
4.Exploración Médica <br>
5.Médico <br>
6.Costos <br>
7.Obra Social <br>

CUU: <br>
1.Reservar turno para exploración médica. <br>
2.Presupuestar exploración médica. <br>
3.Cancelar o reprogramar turno. 



### Extra
CRUD Costos:<br>
Create: registrar los costos asociados con cada exploración médica, incluyendo costos base y posibles costos adicionales y descuentos. <br>
Read: acceder a la lista de costos para cada exploración médica, junto con una descripción detallada de los mismos. <br>
Update: modificar los costos asociados con las exploraciones médicas. <br>
Delete: eliminar costos que ya no son aplicables o que hayan sido actualizados.
