import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./provider/StateProvider";
// import * as serviceWorker from './serviceWorker';
// import { initialState } from "./reducer/reducer";
// import reducer from "./reducer/reducer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./reducer/store";

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>

			{/* <StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider> */}
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
