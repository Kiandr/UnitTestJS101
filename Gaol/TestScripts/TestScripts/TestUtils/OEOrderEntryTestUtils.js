////////////my changes
///Columbus-Web/Sage.CA.SBS.ERP.Sage300.Web/Scripts/TestUtil/GlobalTestUtils.js; renamed ajax
var orderEntryResources = orderEntryResources || {}; //bit unknown where this gets declared. Most likely dynamically generated from c#

//orderEntryResources.FinderTitle = "";
//orderEntryResources.OrderNumber = "";

var createOrderGridColumns = createOrderGridColumns || {}; //bit unknown; likely kendo generates this on the fly
var commentsInstructionGridConfigHeader = commentsInstructionGridConfigHeader || {}; //unknown
var orderShipmentGridConfigHeader = orderShipmentGridConfigHeader || {}; //unknown
var orderDetailGridColumns = orderDetailGridColumns || {}; //kendo generates this on the fly

//created quickPreAuth ln 1842
////////////////////////////

var mainScreen = "<div id='orderEntryTabStrip'></div>" +
    "<button id='btnQuickPreAuth1' type='button' onclick='console.log(\"qqx\");'></button>" +
    "<button id='btnQuickPreAuth' type='button'></button>" +
    "<div id='OrderDetailGrid'></div>";

$(document).ready(function () {
    console.log('append body');
    $(mainScreen).appendTo("body");
});

var abc = $(function () {
    console.log('unit testing..' + $('body').html());
});