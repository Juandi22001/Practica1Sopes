# SISTEMAS OPERATIVOS 1
## Practica 1

---

### Universidad de San Carlos de Guatemala
### Primer Semestre 2022
### Juan Diego Alvarado Salguero
### 201807335
### Manual de Usuario


---

# Views

:round_pushpin: [Interfaz de Inicio](#id2)
:round_pushpin: [Escribir operacion](#id3)

:round_pushpin: [Calcular ](#id4)
:round_pushpin: [Visualizar resultado](#id5)
:round_pushpin: [Ver Resultados](#id6)

<br>
<br>
# Reportes



## :beginner: Al correr nuestro programa nos toparemos con una bonita interfaz  que se mostrara acontinuación <a name="id2"></a>
![2](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/img1.PNG)




## :beginner: Para el manejo del backend se hizo uso de  golang  este lenguaje novedoso   y facil de usar. Si fuera un  proyecto normal solo tendriamos que instalar golang   y correr el comando go mod init  : nombre de nuestro proyecto y ya facil , pero como estamos  haciendo uso de la herramienta docker  lo unico que tenemos que hacer para poder correr nuestro programa es configurar nuestro docker file de la siguiente manera. <a name="id3"></a>
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/golang.png)



## :beginner: Para la base de datos  se uso  de la famosa base de datos no relacional  para ello no se croe un docker file en especifico   porque realmente no es algo que se tenga que modificar , por eso es que  toda la imagen y sus conexiones se hicieron en el archivo principal docker compose <a name="id4"></a>
![4](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/mongo.png)

## :beginner: Por ultimop para el  frontend se  hizo uso de react   para su configuración al igual que con  golang  se hizo uso de un docker file para subir la imagen y posteriormete subirla a docker hub <a name="id5"></a>

![5](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/react_imagen.PNG)
## :beginner: Para correr nuestro proyecto lo unico que se tiene que hacer es correr el comando docker compose up  y solo bastaria de configurar  la ruta  de donde querremos que se guarde la base de datos<a name="id6"></a>
