use pizzeriadb;

db.clients.insertOne(
	{"client_id":1
	"name" : "Pedro ",
	"lastName": "Aragón"
	"address":"c/ valencia, n50, planta 3",
	"pc" : 08040,
	"province_id":1
	"location_id":1,
	"phone":222222222,
	"invoicesList"[ 
			{ "invoice" : 1,
			"date": "2022-01-10",
			"type_delivery": "tienda",
			"time_delivery":"2022-01-10, 22:30",
			"employee_id":2,
			"store_id": 1
			"productsList"[
				{"product_id":1,
				"quantity":1
				},{"product_id":20,
				"quantity":1
				},
			]
			"total": 11
		}
	]
},
{"client_id":2
	"name" : "María ",
	"lastName": "Pardo"
	"address":"v. Numancia, n 20, planta 5, puerta a",
	"pc" : 08790,
	"province_id":1
	"location_id":2,
	"phone":777777777,
	"invoicesList"[ 
			{ "invoice" : 1,
			"date": "2022-04-10",
			"type_delivery": "a domicilio",
			"time_delivery":"2022-04-10, 23:30",
			"employee_id":1,
			"store_id": 1
			"productsList"[
				{"product_id":30,
				"quantity":1
				},{"product_id":2,
				"quantity":2
				},
			]
			"total": 22
		}
	]
});
db.stores.insertOne(
	{"store_id" : 1,
	"address":"C/LLuria 10",
	"pc" : 08070,
	"location_id":1,
	"province_id":1
	"staff":[{
			"employee_id":1,
			"name" : "Juan",
			"lastName": "Pérez"
			"nif":"10203040Y",
			"phone" : 22222222,
			"type_employee": "repartidor"
		},{
			"employee_id":2,
			"name" : "Ana ",
			"lastName": "Losano"
			"nif":"30303030Y",
			"phone" :444444444 ,
			"type_employee": "cocinero"
		},{
			"employee_id":3,
			"name" : "Laura ",
			"lastName": "Sanoa"
			"nif":"08080808U",
			"phone" : 666666666,
			"type_employee": "cocinero"
		}]
	});


db.products.insertOne(
	{"product_id":1,
	"name":"agua",
	"description": "bezoya natural",
	"image":'/Users/Rosario/agua.png'
	"price" :1,
	"category":"bebida"
	},
	{"product_id":2,
	"name":"coca-cola",
	"description": "gasesosa",
	"image":'/Users/Rosario/coke.png'
	"price" :1,
	"category":"bebida"
	},
	{"product_id":20,
	"name":"hamburguesa clásica",
	"description": "lechuga y tomate,
	"image":'/Users/Rosario/hamburguesa_cla.png'
	"price" :10,
	"category":"comida"
	},
	{"product_id":21,
	"name":"hamburguesa oeste",
	"description": "del mundo",
	"image":'/Users/Rosario/hamburquesas_oes.png'
	"price" :20,
	"category":"comida"
	},
	{"product_id":30,
	"name":"pizza mozzarella",
	"description": "con queso y tomate",
	"image":'/Users/Rosario/pizza_mozz.png'
	"price" :20,
	"category":"pizzas_normal"
	},
	{"product_id":31,
	"name":"pizza mexicana",
	"description": "con queso y chilli",
	"image":'/Users/Rosario/pizza_mozz.png'
	"price" :20,
	"category":"pizzas_del_mundo"
	}
);


db.provinces.insertOne(
	{"province_id":1,
	"province_name":"Barcelona",
	"locations_list"[{
		"location_id":1,
		"location_name":"Barcelona"
	},"location_id":2,
		"location_name":"Granollers"
	}]
});


	
