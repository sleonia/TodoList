class List {
	constructor(title, items) {
		this.title = title;
		this.items = [];
	}

	get title() {
		return this.title;
	};

	set title(text) {
		this.title = text;
	};

	get items() {
		return this.items;
	};

	set items(items) {
		this.items = items;
	};
};

export default List;