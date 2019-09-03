import React from "react";
import {withRouter} from "react-router-dom";
import Routes from "./Routes";

class App extends React.Component {

	state = {
		testStatus: "Start",
		testError: null
	};

	render() {
		return <React.Fragment>
			<h2>
				{`Test Status: ${this.state.testStatus}`}
			</h2>
			<div>
				<a href="/test">{"Start over"}</a>
			</div>
			{this.state.testError &&
				<pre>
					{this.state.testError}
				</pre>
			}
			{!this.state.testError &&
				<Routes/>
			}
		</React.Fragment>
	}

	componentDidMount() {
		if (window.location.href.endsWith("test")) {
			setTimeout(this.navigate("/test/A", "First - A"), 1000);

			setTimeout(this.navigate("/test/B", "First - B"), 2000);

			setTimeout(this.navigate("/test/A", "Second - A"), 3000);
		}
	}

	componentDidCatch(error, info) {
		this.setState({
			testError: error.stack
		});
	}

	navigate = (path, testStatus) => {
		return () => {
			this.props.history.push(path);
			this.setState({
				testStatus
			})
		}
	};
}

export default withRouter(App);