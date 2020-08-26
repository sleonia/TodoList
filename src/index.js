import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./Reducers/index"
import App from "./Components/App"

//import rootReducer from "./TEST/reducer_index"
//import App from "./TEST/App"

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);