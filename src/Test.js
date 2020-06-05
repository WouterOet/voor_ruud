import * as React from "react";


export default class Test extends React.Component {

	componentDidMount() {
		let ws = new WebSocket("wss://echo.websocket.org");

		ws.onopen = () => {
			console.log("Opened connection")
			ws.send("Hallo")
		}

		ws.onclose = () => {
			console.log("Closed")
		}

		console.log(this)
		ws.onmessage = (event) => {
			console.log(event)
			console.log(this)
			debugger
		}
	}


	render() {
		return (
			<div>Hello</div>
		)
	}
}
