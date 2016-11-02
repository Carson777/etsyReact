import React from "react"
import Header from "./header"

var ListView = React.createClass({
	render: function(){
		console.log("ListView component", this)
		return (
			<div className="home-view">
				<Header />
				<ArticleContainer collection={this.props.collection}/>
			</div>
			)
	}
})

var ArticleContainer = React.createClass({
	_makeArticles: function(){
		var jsxArray = []
		for(var i = 0; i < this.props.collection.models.length; i ++){
			var articleModel = this.props.collection.models[i]
			jsxArray.push(<Article model={articleModel} />)
		}
		return jsxArray
	},
	render: function(){
		console.log("collection as seen from articleContainer", this.props.collection)
		return (
			<div className="article-container">
				{this._makeArticles()}
			</div>
			)
	}
})
var Article = React.createClass({
	_clickedDiv: function() {
		location.hash = 'detail/' + this.props.model.get("_id")
	},
	render: function(){
		var model = this.props.model
		console.log("Model from inside the article component", model)
		return (
			<div className="article" onClick={this._clickedDiv}>
				<h5>{model.get("headline").main}</h5>
				<p>{model.get("snippet")}</p>
			</div>
			)
	}
})
export default ListView