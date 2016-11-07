import React from "react"
import Header from "./header"

var ListView = React.createClass({
	render: function(){
		console.log("ListView component", this)
		return (
			<div className="home-view">
				<Header />
				<ItemContainer collection={this.props.collection}/>
			</div>
			)
	}
})

var ItemContainer = React.createClass({
	_makeItems: function(){
		var jsxArray = []
		for(var i = 0; i < this.props.collection.models.length; i ++){
			var itemModel = this.props.collection.models[i]
			jsxArray.push(<Item model={itemModel} />)
		}
		return jsxArray
		console.log(jsxArray)
	},
	render: function(){
		console.log("collection as seen from articleContainer", this.props.collection)
		return (
			<div className="article-container">
				{this._makeItems()}
			</div>
			)
	}
})
var Item = React.createClass({
	_clickedDiv: function() {
		location.hash = 'detail/' + this.props.model.get("category_id")
	},
	render: function(){
		var model = this.props.model
		console.log("Model from inside the article component", model)
		return (
			<div className="item" onClick={this._clickedDiv}>
				<h5>{model.get("title")}</h5>
				<p>{model.get("price")}</p>
				<img src={model.get("Images")[0].url_75x75} />

			</div>
			)
	}
})



export default ListView