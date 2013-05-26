/*---------------------
	:: Todo
	-> model
---------------------*/
module.exports = {

	attributes: {
	  title: {
	    type: 'STRING',
	    defaultsTo: ''
	  },
	  completed: {
	    type: 'STRING',
	    defaultsTo: false
	  }
		// Simple attribute:
		// name: 'STRING',

		// Or for more flexibility:
		// phoneNumber: {
		//	type: 'STRING',
		//	defaultValue: '555-555-5555'
		// }

	}

};