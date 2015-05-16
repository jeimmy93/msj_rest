var express = 	require("express"),
	app		= 	express()
	puerto 	= 	process.env.PORT || 8081, 
	bodyParser 	= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var mensaje = [
				{
					id 			: 	1, 
					identifi	: 	"12345",
					asunto 		: 	"saludito", 
					mensajes 	: 	"hola", 
					fecha 		: 	"12/5/2015", 
					hora 		: 	"12"
				},
				{
					id 			: 	2, 
					identifi	: 	"6789",
					asunto 		: 	"saludito", 
					mensajes 	: 	"qmas", 
					fecha 		: 	"11/5/2015", 
					hora 		: 	"8"
				},
				{
					id 			: 	3, 
					identifi	: 	"121212",
					asunto 		: 	"saludito", 
					mensajes 	: 	"hi", 
					fecha 		: 	"5/5/2015", 
					hora 		: 	"9"
				}];


app.get('/getAllData', function(req, res)
{
	res.json(mensaje);   
});

app.post('/createData', function (req, res)
{
	res.json(crearmensaje(req.body));
});


var crearmensaje = function(body)
{
	
		
			mensaje.push(body);
			mensaje[mensaje.length - 1].id = mensaje.length;		
}


app.listen(puerto);
console.log("Express server iniciado en el " + puerto);