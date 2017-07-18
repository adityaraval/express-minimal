module.exports.dev = {
    "BASE_URL":"http://localhost:3000",
    "VERSION":"/api/v1",
    "PORT":3000,
    "DB":{
        url:"mongodb://todo:todo@ds025449.mlab.com:25449/todo"
    }
}

module.exports.test = {
    "BASE_URL":"http://localhost:4000",
    "VERSION":"/api/v1",
    "PORT":4000,
    "DB":{
        url:"mongodb://localhost:27017/expressMinimalTest"
    }
}

module.exports.prod = {
    "BASE_URL":"http://localhost:5000",
    "VERSION":"/api/v1",
    "PORT":5000,
    "DB":{
        url:"mongodb://localhost:27017/expressMinimalProd"
    }
}