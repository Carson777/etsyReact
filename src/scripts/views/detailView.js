import React from "react"
import Header from "./header"

var DetailView = React.createClass({
	render: function(){
		console.log("DetailView component", this)
		return (
			<div className="home-view">
				<Header />
				<ItemContainer model={this.props.model}/>
			</div>
			)
	}
})









export default DetailView