package main

import (

    "backendgo/configs"
    "backendgo/routes"
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    app := fiber.New()


    configs.ConnectDB()
    app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

    routes.UserRoute(app)

    app.Listen(":7000")
}