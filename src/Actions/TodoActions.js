import Actions from "../Actions/Actions"

//export ????

export default function addList(text) {
	return {
		type: Actions.addList,
		items: []
	};
}

export default function deleteList(listId) {
	return {
		type: Actions.deleteList,
		listId
	};
}

//function addItem() {
//}

//function deleteItem() {
//}