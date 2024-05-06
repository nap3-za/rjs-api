
class BasicFieldChoice {
	
	constructor(raw_choices) {
		this.raw_choices = raw_choices;
	}

	raw_choices() {
		return this.raw_choices
	}

	values() {
		var values = new Array();
		var i = 0;
		for (const [key, value] of Object.entries(this.raw_choices)) {
			values[i] = value[0];
			i++;
		}
		return values;
	}

	choices() {
		var choices = new Array();
		var i = 0;
		for (const [key, value] of Object.entries(this.raw_choices)) {
			choices[i] = value[1];
			i++;
		}
		return choices;
	}

	value_choice() {
		var choices = new Array();
		var i = 0;
		for (const [key, value] of Object.entries(this.raw_choices)) {
			choices[i] = value;
			i++;
		}
		return choices;

	}

	name_value() {
		var choices = {};
		var i = 0;
		for (const [key, value] of Object.entries(this.raw_choices)) {
			choices[key] = value[0];
			i++;
		}
		return choices;
	}

}

const accountTypes = {
	SUPERUSER: new Array("SUR", "Superuser"),
	ADMIN: new Array("ADM", "Admin"),
	TEACHER: new Array("TCH", "Teacher"),
}

export const AccountTypes = new BasicFieldChoice(accountTypes);


