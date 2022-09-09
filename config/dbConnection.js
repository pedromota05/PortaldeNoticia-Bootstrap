var mysql = require('mysql');

const connMySQL = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'ifms',
			database : 'cadastro_usuarios'
		});
}

module.exports = function () {
	return connMySQL;
}