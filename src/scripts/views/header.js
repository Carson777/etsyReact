import React from "react"


var Header = React.createClass({
	render: function(){
		return (
			<header>
				<a href="#home"><h1>New York Times</h1></a>
				<input type="text" placeholder="Search articles"/>
			</header>
			)
	}
})
export default Header