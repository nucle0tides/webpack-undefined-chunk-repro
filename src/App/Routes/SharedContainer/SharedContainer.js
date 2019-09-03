import React from "react";
import HeavyFile from "./HeavyFile";

export default function SharedContainer({children, props}) {
	return <div {...props}>
		{children}
	</div>
}