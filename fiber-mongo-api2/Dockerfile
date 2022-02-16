# Stage 1
FROM golang:alpine as builder
RUN apk update && apk add --no-cache git
RUN mkdir /build
ADD . /build/
WORKDIR /build
RUN go get -d -v
RUN go build -o fiber-mongo-api2 .
# Stage 2
FROM alpine
RUN adduser -S -D -H -h /app fiber-mongo-api2
USER fiber-mongo-api2
COPY --from=builder /build/ /app/
WORKDIR /app
CMD ["./fiber-mongo-api2"]