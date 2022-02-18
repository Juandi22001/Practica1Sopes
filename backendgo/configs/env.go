
package configs

import (
    "log"
    "os"
    "github.com/joho/godotenv"
)

func EnvMongoURI() string {

    err := godotenv.Load()
    if err != nil {
        log.Fatal("efe base no conectada :v")
    }



    Usuario, _ := os.LookupEnv("MONGO_USERNAME")
	contra, _ := os.LookupEnv("MONGO_PASSWORD")
	host, _ := os.LookupEnv("MONGO_HOST")



	URI := "mongodb://" + Usuario + ":" + contra + "@" + host + ":27017/BaseSopes1?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    return URI
}