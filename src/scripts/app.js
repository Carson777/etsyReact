import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListView from './views/listView'



var app = function() {

	var DetailModel = Backbone.Model.extend({
		url: "https://openapi.etsy.com/v2/listings/active.js?",
		_key: "6f60tk5ueotsm8pbgzucea4h"
	})

	var ItemCollection = Backbone.Collection.extend({
		url: "https://openapi.etsy.com/v2/listings/active.js?",
		_key: "6f60tk5ueotsm8pbgzucea4h",
		parse: function(rawResponse){
			var  parsedResponse = rawResponse.results
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
			var itemCollection = new ItemCollection()
			var promise = itemCollection.fetch({
				dataType: 'jsonp',
				data:{
					'api_key': itemCollection._key,
					'limit': '100',
					'includes': 'Images'

				}
			})
			console.log(itemCollection)
			promise.then(
				function(){
					console.log(itemCollection)
					ReactDOM.render(<ListView collection={itemCollection} />, document.querySelector('.container'))
			})
		},
		handleSearch: function(){
			console.log("Handling Search")
		},
		handleDetail: function(){
			console.log("Handling Detail")
			var detailModel = new DetailModel()
			var promise = detailModel.fetch({
				dataType: 'jsonp',
				data:{
					'api_key': detailModel._key,
					'includes': 'Images',
					'listings': id
				}
			})
			console.log(detailModel)
			promise.then(
				function(){
					console.log(detailModel)
					ReactDOM.render(<DetailView model={detailModel} />, document.querySelector('.container'))
			})
		}, 
		//listings/:463400335
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