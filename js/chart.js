function piechart() {
	var chart = new CanvasJS.Chart("top1",
	{
		title:{
			text: "U.S Smartphone OS Market Share, Q3 2012",
			fontFamily: "Impact",
			fontWeight: "normal"
		},

		legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
		{
			//startAngle: 45,
			indexLabelFontSize: 20,
			indexLabelFontFamily: "Garamond",
			indexLabelFontColor: "darkgrey",
			indexLabelLineColor: "darkgrey",
			indexLabelPlacement: "outside",
			type: "doughnut",
			showInLegend: true,
			dataPoints: [
				{  y: 53.37, legendText:"Android 53%", indexLabel: "Android 53%" },
				{  y: 35.0, legendText:"iOS 35%", indexLabel: "Apple iOS 35%" },
				{  y: 7, legendText:"Blackberry 7%", indexLabel: "Blackberry 7%" },
				{  y: 2, legendText:"Windows 2%", indexLabel: "Windows Phone 2%" },
				{  y: 5, legendText:"Others 5%", indexLabel: "Others 5%" }
			]
		}
		]
	});

	chart.render();
}
