var Document = require('camo').Document;

class User extends Document{

	constructor(){
		super();

		this.first_name = String;
		this.last_name = String;
		this.email = String;
		this.password = String;
		this.created_at = {
			type: Date,
			default: Date.now
		};
		this.last_active = {
			type: Date,
			default: Date.now
		}
	};

}