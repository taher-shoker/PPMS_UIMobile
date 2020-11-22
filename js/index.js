// JavaScript Document

/****initialize main screen****/
/***in intialization we load the JSON and draw the screen for the main services***/

var hh;
function ChecSetting()
{
	//localStorage.removeItem("Downloaded");
	clearTimeout(hh);
	$(".wrapperpage").fadeOut(4000,function(){
			window.location.replace("home.html");
		});
}

$(document).ready(function(e) {
   
	
	$(".wrapperpage").fadeIn(2000,function(){
		hh=setTimeout( "ChecSetting()",1000);
	});
	
	$(".wrapperpage").click(function(e) {
		$(".wrapperpage").fadeOut(1000,function(){
			
		});
	});

});/*****end doc ready***/
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();