var chat = new ChatReact([
	{
		author : {
			nome : "Daniele Batista"
		},
		texto : "Olá Pedro! Tudo bem?",
		dt_envio : new Date("2015-09-13 23:21 GMT-0300")
	},
	{
		author : {
			nome : "Pedro Marcelo"
		},
		texto : "Tudo sim! E você?",
		dt_envio : new Date("2015-09-13 23:23 GMT-0300")
	}
]);

chat.render('test-cr');
clearInterval(helloWorld);