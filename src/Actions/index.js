import * as types from "../Constants/ActionTypes"

let itemId = 0;

//export function addList(text) {
//	return {
//		type: types.addList,
//		items: []
//	};
//}

//export function deleteList(listId) {
	//return {
		//type: types.deleteList,
		//listId
	//};
//}

export function addItem(text) {
	return {
		type: types.addItem,
		id: itemId++,
		text: text
	};
}

//export function deleteItem() {
//}

export function toggleTodo(id) {
	return {
		type: types.ToggleTodo,
		id: id
	};
}