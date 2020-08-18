class Item {
	constructor(text, status) {
		this._text = text;
		this._status = status;
	}

	get	text() {
		return this._text;
	}
	
	set	text(text) {
		this._text = text;
	}

	get	status() {
		return this._status;
	}

	set	status(status) {
		this._status = status;
	}
};

export default Item;
