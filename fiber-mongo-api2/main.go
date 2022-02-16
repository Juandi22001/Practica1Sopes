package main

import (

    "fiber-mongo-api2/configs"
    "fiber-mongo-api2/routes" //add this
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    app := fiber.New()

    //run database
    configs.ConnectDB()
    app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
    //routes
    routes.UserRoute(app)

    app.Listen(":7000")
}