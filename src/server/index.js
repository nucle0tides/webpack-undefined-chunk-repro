import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server"
import {StaticRouter} from "react-router-dom";
import {ChunkExtractor} from "@loadable/server";
import App from "../App";

const serverApp = express();

serverApp.use("/favicon.ico", (req, res) => res.status(400).send());

serverApp.use("/modulea~moduleb.js", (req, res, next) => {
	setTimeout(next, 5000);
});

serverApp.use(express.static("dist/public", {
	maxAge: "0"
}));

serverApp.use((req, res) => {
	const statsFile = path.resolve("dist/public/loadable-stats.json");
	const chunkExtractor = new ChunkExtractor({
		statsFile
	});
	const context = {};

	const jsxApp = chunkExtractor.collectChunks(<StaticRouter location={req.url} context={context}>
		<App/>
	</StaticRouter>);

	const renderedApp = ReactDOMServer.renderToString(jsxApp);

	res.status(200).send(`<!doctype html>
<html>
	<body>
		<div id="react-main-mount">
			${renderedApp}
		</div>
		${chunkExtractor.getScriptTags()}
	</body>
</html>	
	`)
});

serverApp.use((req, res, error) => {
	res.status(400).send(`
<!doctype html>
<html>
	<body>
		<pre>
			${error.message}
		</pre>
		<pre>
			${error.stack}
		</pre>
		<a href="/test">Test</a>
	</body>
</html>	
	`);
});

serverApp.listen(3000);