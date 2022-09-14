
use opticadb;

db.clients.insertOne(
	{"name" : "Pedro Jiménez",
	"street": "Aragón"
	"number":40,
	"door": "A",
	"floor" : 1,
	"city": "Barcelona,
	"PC": 08030,
	"country": "Catalunya"
	"phone" : 444444444,
	"email":"p.jime@acme.com",
	"registrationDate" : "2022-01-10",
	"recomendation":"Jessi";
	"invoicesList"[ 
			{ "invoice" : 1,
			"seller": "Laura",
			"date": "2022-01-10",
			"productsList"[
				{"product" : 1,
				"brand":"Gucci",
				"graduation_left": 0.50,
				"graduation_right" :0.50,
				"frame": "flotante",
				"color_frame": "brown",
				"color_glasses": "blue",
				"price": 110
				}
			]
			"total": 110
		}
	]
});
db.clients.insertOne(
	{"name" : "Santiago Pérez",
	"street": "Diagonal"
	"number":100,
	"door": "B",
	"floor" : 1,
	"city": "Barcelona,
	"PC": 08030,
	"country": "Catalunya"
	"phone" : 555555555,
	"email":"sperez@acme.com",
	"registrationDate" : "2022-2-7",
	"recomendation":"Maria";
	"invoicesList"[ 
			{ "invoice" : 2,
			"seller": "Laura",
			"date": "2022-02-7",
			"productsList"[
				{"product" : 1,
				"brand":"Gucci",
				"graduation_left": 0.50,
				"graduation_right" :0.50,
				"frame": "flotante",
				"color_frame": "negro",
				"color_glasses": "blue",
				"price": 130
				}
			]
			"total": 130
		}
	]
});

db.clients.insertOne(
	{"name" : "María Muñoz",
	"street": "Valencia"
	"number":30,
	"door": "A",
	"floor" : 1,
	"city": "Barcelona,
	"PC": 08030,
	"country": "Catalunya"
	"phone" : 777777777,
	"email":"m.mun@acme.com",
	"registrationDate" : "2022-04-15",
	"recomendation":"Jose";
	"invoicesList"[ 
			{ "invoice" : 1,
			"seller": "Juan",
			"date": "2022-04-15",
			"productsList"[
				{"product" : 3,
				"brand":"Guess",
				"graduation_left": 0.75,
				"graduation_right" :0.75,
				"frame": "flotante",
				"color_frame": "red",
				"color_glasses": "red",
				"price": 120
				},
				{"product" : 4,
				"brand":"Guess",
				"graduation_left": 0.75,
				"graduation_right" :0.75,
				"frame": "metalicas",
				"color_frame": "azul",
				"color_glasses": "white",
				"price": 150
				}
			]
			"total": 270
		}
	]
});
db.suppliers.insertOne(
	{"name" : "Universitaria",
	"street": "Chile"
	"number":4,
	"door": " ",
	"floor" : 0,
	"city": "La Roca del Valles",
	"PC": 08430,
	"country": "Catalunya"
	"phone" : 111111111,
	"fax":222222222,
	"nif": "50505050H"
	"brandList"[
	{ "brand": "Guess"},
	{ "brand" : "Gucci"}
	]
	});
db.suppliers.insertOne(
	{"name" : "Central",
	"street": "Cargol"
	"number":17,
	"door": "d"
	"floor" : 0,
	"city": "Barcelona",
	"PC": 08020,
	"country": "Catalunya"
	"phone" : 999999999,
	"fax":888888888,
	"nif": "40404040O"
	"brandList"[
	{ "brand": "Alen"},
	{ "brand" : "Loren"}
	]
	});