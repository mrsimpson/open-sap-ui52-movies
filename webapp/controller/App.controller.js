sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Log, formatter, Filter, FilterOperator) {

	"use strict";

	return Controller.extend("oj.movies.controller.App", {

		// publish the formatter namespace to the view
		formatter,

		onInit: function () {

		},
		findMovies: function () {

			var sCity = this.byId('city').getValue(),
				sGenre = this.byId('genre').getSelectedItem().getKey(),
				oCalendar = this.byId("calendar"),
				oRowBinding = oCalendar.getBinding("rows"),
				oFilterGenre,
				oFilterCity;

			// Produce a message so that the user knows for sure the button was interacted with
			sap.ui.require(["sap/m/MessageToast"], function (Toast) {
				var oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
				sCity 
					? Toast.show(`${oResourceBundle.getText("search")} "${sCity}"...`)
					: Toast.show(`${oResourceBundle.getText("search")}...`);
			}.bind(this));

			// Create filters for genre and city according to user inputs
			oFilterGenre = sGenre ? new Filter("genre", FilterOperator.EQ, sGenre) : null;
			oFilterCity = sCity ? new Filter("info", FilterOperator.Contains, sCity) : null;

			// Apply genre filter to calendar rows (movies)
			oRowBinding.filter(oFilterGenre);

			// Apply city filter to row appointments - This will NOT hide movies without mathing appointments
			var aRows = oCalendar.getAggregation("rows");
			aRows.forEach(function (oItem) {
				var oAppointmentsBinding = oItem.getBinding("appointments");
				oAppointmentsBinding.filter(oFilterCity);
			});
		}
	});
});