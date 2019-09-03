import React from "react";
import {Route, Switch} from "react-router-dom";
import TestStart from "./TestStart";
import ModuleA from "./ModuleA";
import ModuleB from "./ModuleB";

export default function Routes() {
	return <Switch>
		<Route
			path="/test/A"
			render={() => <ModuleA />}
			exact />
		<Route
			path="/test/B"
			render={() => <ModuleB />}
			exact />
		<Route
			path="*"
			render={() => <TestStart />} />
	</Switch>
}