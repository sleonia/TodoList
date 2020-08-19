class Item {
	constructor(text, state=true) {
		this.text = text;
		this.state = state;
	}

	get	text() {
		return this.text;
	}
	
	set	text(text) {
		this.text = text;
	}

	get	state() {
		return this.state;
	}

	set	state(state) {
		this.state = state;
	}
};

export default Item;
