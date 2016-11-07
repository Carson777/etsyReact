import React from "react"


var Header = React.createClass({
	render: function(){
		return (
			<header>
				<a href="#home"><h1>Betsy</h1></a>
				<input type="text" placeholder="Search items"/>
			</header>
			)
	}
})
export default Header