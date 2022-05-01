const morgan = require("morgan")
const express = require("express")
const methodOverride = require('method-override');
const mainRouter = require('./routes/mainRoutes')

const app = express()

let port = 3030
let host = 'localhost'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))
app.use(methodOverride('_method'))

app.use('/', mainRouter)

app.use((req, res, next)=>{
  let err = new Error('The server cannot locate ' + req.url)
  err.status = 404
  next(err)
})

app.use((err, req, res, next)=>{
  console.log(err.stack)
  if(!err.status){
    err.status = 500
    err.message = "Internal server error"
  }
  res.status(err.status)
  res.render('error', {error: err})
})

app.listen(port, host, ()=>{
  console.log("Server is running on port " + port)
})