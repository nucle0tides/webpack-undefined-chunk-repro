import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import {loadableReady} from "@loadable/component";
import createBrowserHistory from "history/createBrowserHistory";
import App from "../App";

loadableReady().then(() => {
	const history = createBrowserHistory();
	const mount = document.getElementById("react-main-mount");

	const app = <Router history={history}>
		<App/>
	</Router>;

	ReactDOM.hydrate(app, mount);
});