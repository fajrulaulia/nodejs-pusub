# Node JS PubSub

## Instalation
clone this repository and change directory to repository
``` bash
# Install depdencies
$ npm i
# Pull, build and up redis as redis server for serv nodejs
$ docker-compose up -d redis
```

## Usage
 
use two terminal, this is how to communicate pub sub using redis

terminal A
``` bash
$ node suscriber.js 
```

terminal B
``` bash
$ node publisher.js 
```

## Author
Fajrul Aulia
