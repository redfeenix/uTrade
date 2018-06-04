$(document).on("pagecreate", "#getContact", function () {
    $.ajax({
        type: "GET",
        url: "tsconfig.json",
        dataType: "json",
        success: getmap
    });

    function getmap(data) {
        lat = data.company.lat;
        long = data.company.long;
        map = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: map,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var contentString = "<h1> Information </h1>" +
            "<b>Name : </b> Anton <br>" +
            "<b>Name : </b> Ditij</b>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        var company = new google.maps.Marker({
            map: map,
            title: "Company",
            icon: "http://www.clker.com/cliparts/H/K/G/j/k/7/google-pushpin-th.png",
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(lat, long)
        });
        company.addListener('click', function () {
            infowindow.open(map, company);
        });
    }
});
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Total Value of all My Assets"
        },
        axisY: {
            title: "Percentage",
            includeZero: false,
            interval: .2,
            suffix: "%",
            valueFormatString: "#.0"
        },
        data: [{
            type: "stepLine",
            yValueFormatString: "#0.0" % "",
            xValueFormatString: "MMM YYYY",
            markerSize: 5,
            dataPoints: [
                { x: new Date(2016, 9), y: 4.8 },
                { x: new Date(2016, 10), y: 4.8 },
                { x: new Date(2016, 11), y: 4.8 },
                { x: new Date(2017, 0), y: 4.7 },
                { x: new Date(2017, 1), y: 4.7 },
                { x: new Date(2017, 2), y: 4.6 },
                { x: new Date(2017, 3), y: 4.6 },
                { x: new Date(2017, 4), y: 4.5 },
                { x: new Date(2017, 5), y: 4.4 },
                { x: new Date(2017, 6), y: 4.3 },
                { x: new Date(2017, 7), y: 4.3 },
                { x: new Date(2017, 8), y: 4.3 }
            ]
        }]
    });
    chart.render();
}

$(document).on("pagecreate", "#settings", function () {
	

var db;
var databaseName = 'utradeDB';
var databaseVersion = 1;

var $fname = $("#fname");
var $username = $("#username");
var $lname = $("#lname");
var $email = $("#email");
var $pass = $("#pass");
var $cpass = $("#cpass");
var $dob = $("#dob");
var $isSocial = $("#isSocial");
var $aboutMe = $("#aboutMe");
var $errMsg='';
function loadProfile(){
	$fname.val(localStorage.fname);
	$username.val(localStorage.username);
	$lname.val(localStorage.lname);
	$email.val(localStorage.email);
	$pass.val(localStorage.pass);
	$dob.val(localStorage.dob);
	$isSocial.val(localStorage.isSocial).slider("refresh");
	$aboutMe.val(localStorage.aboutMe);
}
$("#saveProfile").click(function saveProfile(){
	localStorage.fname= $fname.val();
	localStorage.lname= $lname.val();
	localStorage.username= $username.val();
	localStorage.email= $email.val();
	localStorage.pass= $pass.val();
	localStorage.dob= $dob.val();
	localStorage.isSocial= $isSocial.val();
	localStorage.aboutMe= $aboutMe.val();
	window.location="#home";
});
loadProfile();




/*
function displayData(){
	var storeRequest=db.transaction(["profile"],"readwrite").objectStore("profile").get(1);
	storeRequest.onsuccess=function() {
	if (storeRequest.result) {
                    $fname.val(storeRequest.result.fname);
                    $isSocial.val(storeRequest.result.isSocial).slider("refresh");
				$username.val(storeRequest.result.username);
				$lname.val(storeRequest.result.lname);
				$email.val(storeRequest.result.email);
				$pass.val(storeRequest.result.pass);
				$dob.val(storeRequest.result.dob);
				$aboutMe.val(storeRequest.result.aboutMe);
				
                }
                else {
                    showPopup("Profile doesnt exist in the database");
	}};
}

	
$("profileForm").submit(function(e){
	e.preventDefault();
var fname = $fname.val();
var username = $username.val();
var lname = $lname.val();
var email = $email.val();
var pass = $pass.val();
var cpass = $cpass.val();
var dob = $dob.val();
var isSocial = $isSocial.val();
var aboutMe = $aboutMe.val();

	
if (username.length<1) errMsg +='Username cannot be empty' ;
if (email.length<1) errMsg +='Email cannot be empty';
if (fname.length<1) errMsg +='First Name cannot be empty';
if (pass.length<1) errMsg +='Password cannot be empty';
if (pass!=cpass) errMsg +='Passwords do not match!';

if ( errMsg.length>1 ) {
                showPopup(errMsg);
                return true;
            }

var profile ={fname:fname, username:username, lname:lname, email:email, pass:pass, dob:dob, isSocial:isSocial, aboutMe:aboutMe}
var transaction =db.transaction(["profile"],"readwrite");
var storeRequest=transaction.objectStore("profile").put(profile);	
 storeRequest.onsuccess =function() {
                showPopup("Profile Info Saved");
            };
            storeRequest.onerror=function() {
                 showPopup("Database Error: cannot save Profile Info");
             };
	
	
	
});
*/



});
/*
$(document).on("pagecreate", "#wallet", function () {
	   
      
        var db, openRequest;

        var click_event = $.support.touch ? "tap" : "click";

        var dbSupported=("indexedDB" in window) ? true : false;

        if (dbSupported) {
            var openRequest=window.indexedDB.open("transactionDB", 1);

            openRequest.onupgradeneeded = function(event) {
                console.log("DB upgrading");
                //db = event.target.result;
                db=openRequest.result;
                if (!db.objectStoreNames.contains("txRecord")) {

		    // Notice: we use here email as DB key since email will be unique for each student
                    db.createObjectStore("txRecord", {keyPath:"txTime"});
                }

            };
            openRequest.onsuccess=function(event) {
                console.log("DB success");
             
                //db=openRequest.result;
            };

            openRequest.onerror=function(event) {
                console.log("DB error");
                //db = event.target.result;
                console.dir(event);
            };
		}
			        function addTransaction(event){
         // db = event.target.result;
    	    // Notice: we use here email as DB key!
            //var student={name:name, email:email, age:age};
			var txRecord={txTime:new Date(), txAmount:"10.00" };

	    // Initiate a transaction
           // var transaction = db.transaction(["txRecord"],"readwrite");

	    // No need to use in production .oncomplete and .onerror event handlers below.
	    // We use it here for demonstration / debugging purposes only! -> must remove in production!
            transaction.oncomplete = function(event) {
                console.log("Transaction Complete");
            };
            transaction.onerror=function(event) {
                console.log("Transaction Failed");

            };

	    // Add/Update student info. Notice the difference: .add() vs .put()  !!!
            var storeRequest=transaction.objectStore("txRecord").put(txRecord);


            storeRequest.onsuccess =function() {
                showPopup("Student Info Saved");
            };

            storeRequest.onerror=function() {
                 showPopup("Database Error: cannot save Student Info");
             };

        }


        function getTransactions(){

             var storeRequest=db.transaction(["txRecord"],"readwrite").objectStore("txRecord").get(1);

             storeRequest.onsuccess=function() {

		// storeRequest.result will have the result of the query above! It'll have the JS student Object we put before!
               if (storeRequest.result) {
                    $name.val(storeRequest.result.name);
                    $age.val(storeRequest.result.age).slider("refresh");
                }
                else {
                    showPopup("E-mail doesn't exist in the database");
                };

             };

        }

      


addTransaction();
getTransactions();
    });*/
