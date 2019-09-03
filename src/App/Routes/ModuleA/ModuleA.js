import React from "react";
import SharedContainer from "../SharedContainer";

export default function ModuleA() {
	return <React.Fragment>
		<SharedContainer>
			{"Shared Container - A1"}
		</SharedContainer>
		<SharedContainer>
			{"Shared Container - A2"}
		</SharedContainer>
	</React.Fragment>
}