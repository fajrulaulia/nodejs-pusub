# Node JS PubSub

## Instalation

``` bash
$ npm i
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