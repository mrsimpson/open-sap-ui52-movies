sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	"../model/formatter"
], function (Controller, Log, formatter) {
	"use strict";

	return Controller.extend("oj.movies.controller.App", {

		// publish the formatter namespace to the view
		formatter,

		onInit: function () {

		},
		onPressFindMovies: function (sCity, oEvent){
			sap.ui.require(["sap/m/MessageToast"], function(Toast){
				Toast.show("Searching...");
			});
		}
	});
});