Esta carpeta contine los diferentes yaml para lanzar la aplicaicon de la UOC en kubernetes

Importnate:

El contenedor web hace referencia a un docker local llamado web-uoc:latest por lo que previamente hay que subir la imagen al repositorio.
Si se utiliza minikube image push web-uoc:latest

Previamente hay que hacer el build 
docker build -t web-uoc:latest .   ( este comando se ha de ejecutar dentro de la carpeta bun-app)