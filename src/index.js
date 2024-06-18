import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import store from "./redux_app/store";

import  { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from './App';

import { loadUser } from "./redux_app/actions/account/actions";

// Alert config
const alertConfig = {
	timeout: 3000,
	position: "top center"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{store.dispatch(loadUser())}

		<Provider store={store}>
			<AlertProvider template={AlertTemplate} {...alertConfig}>
				<App />
			</AlertProvider>
		</Provider>
	</React.StrictMode>
);
