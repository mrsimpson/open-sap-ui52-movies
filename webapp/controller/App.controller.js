sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("oj.movies.controller.App", {
		onInit: function () {

		},
		onPressFindMovies: function (sCity, oEvent){
			sap.ui.require(["sap/m/MessageToast"], function(Toast){
				Toast.show("Searching...");
			});
		}
	});
});