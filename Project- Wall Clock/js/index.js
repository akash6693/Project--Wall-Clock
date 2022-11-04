console.log("This is JavaScript File");

function updateClock()
{
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();      
    let currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

    let timeOfDay = (currentHour < 12 ) ? "AM" : "PM" ;
    
    currentHour = (currentHour > 12) ?  currentHour- 12 : currentHour ;
    currentHour = (currentHour == 00) ?  12 : currentHour ;
    
    
    let currentTimeSTR = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    document.getElementById("clock").innerHTML = currentTimeSTR;  

}