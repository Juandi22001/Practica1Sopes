package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Calcu struct {
	Id        primitive.ObjectID `json:"id,omitempty"`
	Fecha     string             `json:"fecha,omitempty" validate:"required"`
	Operando1 string             `json:"operando1,omitempty" validate:"required"`
	Operando2 string             `json:"operando2,omitempty" validate:"required"`
	Resultado int                `json:"resultado,omitempty" validate:"required"`
	Simbolo   string             `json:"simbolo,omitempty" validate:"required"`
	Data      int                `json:"data,omitempty" `
}
