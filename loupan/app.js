var express = require('express')

var mysql = require('mysql')

var bodyparser = require('body-parser')

var app = express()


var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"ci991227",
    database:"loupan",
    port:3306,
})


// app.post('/',function(req,res){
//     res.setHeader('Access-Control-Allow-Origin','*')
//     pool.getConnection(function(err,connection){
//         if (err) {
//             console.log(err)
//             return
//         }
//         var sql = 'insert into loupan(name,price,des,img,fenlei) values(${json.name},${json.price},${json.des},${json.img},${json.fenlei})'
//         connection.query(sql,function(err,data){
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             res.send(data)
//             connection.end()
//         })
//     })

// })


app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if (err) {
            console.log(err)
            return
        }
        var sql = 'select * from loupan limit 0,3'
        connection.query(sql,function(err,data){
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })

})


app.get('/ha',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if (err) {
            console.log(err)
            return
        }
        var sql = 'select * from loupan'
        connection.query(sql,function(err,data){
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })

})

app.get('/news',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if (err) {
            console.log(err)
            return
        }
        var sql = 'select * from news'
        connection.query(sql,function(err,data){
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
})





app.listen(8000,function(){
    console.log('么么哒')
})



