/* Rules for Local Weather APP

1. Can see weather in current location

2. different icon and background image depending on the weather

3. toggle between Farenheit and Celsius.

4. to use two api calls. one to get the current location IP Geolocation API and the other for the weather/icons OpenWeather API. 
*/

$(document).ready(function(){
 
 $.getJSON("http://ip-api.com/json", function(isp){
    var lat = isp.lat;
   var lon = isp.lon;
    var city = isp.city;
    var country = isp.country;
 //this what i need to pull from ip geo api and store them in these variables to use for other api
     var location = city;
$(".location").html(location);

    
$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=3fa55b3619599e47b4cfcd0c0d12900d&units=metric", function(val){
    var weather = val.weather[0].main;
    var tempCel = val.main.temp;
    var tempFar = Math.floor(((tempCel * 1.8) + 32));
    var description = val.weather[0].description
    var icon = val.weather[0].icon;
    
 var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
   var iconImage = " "; 
    iconImage += "<img src="+iconUrl+" width=150px; height=140px;>"+"<p>"+weather+"</p>";
    
    $(".temperature").html(tempFar);
     $(".description").html(description);
     $(".icon").html(iconImage);
    
    
  }); 
});    
    
});

