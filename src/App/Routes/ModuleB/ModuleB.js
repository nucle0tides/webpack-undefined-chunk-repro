import React from "react";
import SharedContainer from "../SharedContainer";

export default function ModuleB() {
	return <React.Fragment>
		<SharedContainer>
			{"Shared Container - B1"}
		</SharedContainer>
		<SharedContainer>
			{"Shared Container - B2"}
		</SharedContainer>
		<SharedContainer>
			{"Shared Container - B3"}
		</SharedContainer>
	</React.Fragment>
}