
package routes

import (
    "fiber-mongo-api2/controllers"
    "github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
    app.Post("/CrearOperacion", controllers.CreateUser)
    app.Get("/Operaciones", controllers.GetAllUsers)
  /*  app.Get("/user/:userId", controllers.GetAUser)
    app.Put("/user/:userId", controllers.EditAUser)
    app.Delete("/user/:userId", controllers.DeleteAUser)
    app.Get("/users", controllers.GetAllUsers)*/
}