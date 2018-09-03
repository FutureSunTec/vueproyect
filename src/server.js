/*******************************************************
 * * Importar modulos para iniciar servidor
 *******************************************************/
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const formidable = require('express-formidable')

// ** Iniciar servidor con express
const app = express()

/*******************************************************
 
/*******************************************************
 * * Configuración del servidor
 *******************************************************/
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

app.use(morgan('dev'))


/*******************************************************
 * * Servicio estático del servidor
 *******************************************************/
app.use(express.static(path.join(__dirname, 'public')))

/*******************************************************
 * * Lanzamiento del servidor
 *******************************************************/
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})