/*---------------------
	:: Todo
	-> controller
---------------------*/
var TodoController = {

	// To trigger this action locally, visit: `http://localhost:port/todo/title:string`
	title: function (req,res) {

		// This will render the view: /home/chris/proj/js/sails-todos/views/todo/title:string.ejs
		res.view();

	},

	// To trigger this action locally, visit: `http://localhost:port/todo/completed:boolean`
	completed: function (req,res) {

		// This will render the view: /home/chris/proj/js/sails-todos/views/todo/completed:boolean.ejs
		res.view();

	}

};
module.exports = TodoController;