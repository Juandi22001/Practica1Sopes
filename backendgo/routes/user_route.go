
package routes

import (
    "backendgo/controllers"
    "github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
    app.Post("/CrearOperacion", controllers.CrearOperacion)
    app.Get("/Operaciones", controllers.ObtenerCalculos)

}