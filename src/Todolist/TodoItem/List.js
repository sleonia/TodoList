import Item from "./Item"

class List {
	constructor(title, items) {
		this._title = title;
		this._items = [];
	}

	get title() {
		return this._title;
	};

	set title(text) {
		this._title = text;
	};

	get items() {
		return this._items;
	};

	set items(items) {
		this._items = items;
	};
};

export default List;