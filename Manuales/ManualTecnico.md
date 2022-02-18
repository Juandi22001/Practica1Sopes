# SISTEMAS OPERATIVOS 1
## Practica 1

---

### Universidad de San Carlos de Guatemala
### Primer Semestre 2022
### Juan Diego Alvarado Salguero
### 201807335
### Manual Tecnico


---

# Views

:round_pushpin: [Info](#id2)
:round_pushpin: [Backend](#id3)

:round_pushpin: [Base de datos](#id4)
:round_pushpin: [Frontend](#id5)


<br>
<br>
# Reportes



## :beginner: Docker  Compose es una herramienta para definir y ejecutar aplicaciones Docker de contenedores múltiples. Con Compose, utiliza un archivo YAML para configurar los servicios de su aplicación. Luego, con un solo comando, crea e inicia todos los servicios desde su configuración.11 ene 2021 en este proyecto hicimos uso de esta fascinante herramienta  para instalarla  lo unico que tenemos que hacer es ir a su direccion https://docs.docker.com/compose/  y dependiendo nuestro sistema operativo  se instalara docker compose <a name="id2"></a>
![2](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/docker.jpg)
## archivo de docker compose
![2](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/dockercompose.PNG)
## :beginner: Para el manejo del backend se hizo uso de  golang  este lenguaje novedoso   y facil de usar. Si fuera un  proyecto normal solo tendriamos que instalar golang   y correr el comando go mod init  : nombre de nuestro proyecto y ya facil , pero como estamos  haciendo uso de la herramienta docker  lo unico que tenemos que hacer para poder correr nuestro programa es configurar nuestro docker file de la siguiente manera. <a name="id3"></a>
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/golang.png)
# docker file de golang
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/imagen_golang.PNG)



## :beginner: Para la base de datos  se uso  de la famosa base de datos no relacional  para ello no se croe un docker file en especifico   porque realmente no es algo que se tenga que modificar , por eso es que  toda la imagen y sus conexiones se hicieron en el archivo principal docker compose <a name="id4"></a>
![4](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/mongo.png)
# configuracion del docker compose de mongo
![4](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/imagen_mongo.PNG)

## :beginner: Por ultimop para el  frontend se  hizo uso de react   para su configuración al igual que con  golang  se hizo uso de un docker file para subir la imagen y posteriormete subirla a docker hub <a name="id5"></a>
![5](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/react.PNG)
## docker file react
![5](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/react_imagen.PNG)
