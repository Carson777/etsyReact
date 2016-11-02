import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListView from './views/listView'


var app = function() {

	var ArticleCollection = Backbone.Collection.extend({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		_key: "a30a58a6e722476eb77532b42ca43c9b",
		parse: function(rawResponse){
			var  parsedResponse = rawResponse.response.docs
			return parsedResponse
		}
	})
	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			'search/:term': 'handleSearch',
			'detail/:id': 'handleDetail',
			'*default': 'handleDefault'
		},
		handleHome: function(){
			var articleCollection = new ArticleCollection()
			var promise = articleCollection.fetch({
				data:{
					'apikey': articleCollection._key
				}
			})
			console.log(articleCollection)
			promise.then(
				function(){
					ReactDOM.render(<ListView collection={articleCollection} />, document.querySelector('.container'))
			})


		},
		handleSearch: function(){
			console.log("Handling Search")
		},
		handleDetail: function(){
			console.log("Handling Detail")
		},
		handleDefault: function(){
			location.hash = "home"
		},
		initialize: function(){
			Backbone.history.start()
		}

	})
	var controller = new Controller();
}

app()