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
:round_pushpin: [Metodo drop_duplicates()](#id5)
:round_pushpin: [Metodo sum()](#id6)
:round_pushpin: [Linear Regresion()](#id7)
:round_pushpin: [PDF](#id8)

<br>
<br>
# Reportes



## :beginner: Docker  Compose es una herramienta para definir y ejecutar aplicaciones Docker de contenedores múltiples. Con Compose, utiliza un archivo YAML para configurar los servicios de su aplicación. Luego, con un solo comando, crea e inicia todos los servicios desde su configuración.11 ene 2021 en este proyecto hicimos uso de esta fascinante herramienta  para instalarla  lo unico que tenemos que hacer es ir a su direccion https://docs.docker.com/compose/  y dependiendo nuestro sistema operativo  se instalara docker compose <a name="id2"></a>
![2](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/docker.jpg)
## :beginner: Para el manejo del backend se hizo uso de  golang  este lenguaje novedoso   y facil de usar. Si fuera un  proyecto normal solo tendriamos que instalar golang   y correr el comando go mod init  : nombre de nuestro proyecto y ya facil , pero como estamos  haciendo uso de la herramienta docker  lo unico que tenemos que hacer para poder correr nuestro programa es configurar nuestro docker file de la siguiente manera. <a name="id3"></a>
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/golang.png)
# docker file de golang
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/imagen_golang.PNG)



## :beginner: Para la base de datos  se uso  de la famosa base de datos no relacional  para ello no se croe un docker file en especifico   porque realmente no es algo que se tenga que modificar , por eso es que  toda la imagen y sus conexiones se hicieron en el archivo principal docker compose <a name="id4"></a>
![4](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/mongo.png)
# configuracion del docker compose de mongo
![4](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/imagen_mongo.png)

## :beginner: Este metodo su funcion en el proyecto es simplemente el de evitar valores repetidos , es decir que en el archivo csv que se desee cargar vendran siempre datos repetidos , entonces gracias a este metodo propio de la libreria pandas es posible evitar la data repetida y asi   poder mostrarle al usuario los datos que el desea escoger pero  sin data repetida<a name="id5"></a>
![5](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/data4.png)

## :beginner: El metodo sum , es junto al isin() quiza uno de los 2 metodos propios de la libreria pandas mas importantes en este proyecto , gracias a que basicamente sin esos 2 metodos el proyecto no podria ser funcional , este metodo sum() su funcion es simplemente la de sumar todos los campos de una posicion en un dataframe es decir si se tiene un arreglo en ese dataframe directamente en esa posicion va dar como resultado   la suma de todos los campos de ese dataframe<a name="id6"></a>
![6](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/data5.png)

## :beginner: Linear Regresion , es una libreria de sticklearn, que basicamente es la que facilita hacer todas las predicciones, todas las tendecias realizadas en este proyecto<a name="id7"></a>
![7](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/data6.png)

## :beginner:  Para la crecion de los reportes,se utiliza siempre una libreria llamada fdpf ,  que  basicamente crea un objeto PDF propio de su libreria para en ese objeto guardar todo lo que consideremos nescesario para poder guardar el reporte en formato PDF y que el usuario pueda ver a detalle los resultados del analisis <a name="id8"></a>
![8](https://github.com/Juandi22001/Proyecto2OLC2/blob/main/Manuales/img/data7.png)
