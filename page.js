var enterTrue;



function redirectYoutube(){
    document.getElementById("redirectText").textContent ="Redirecting to youtube..."   
    window.location.href ="https://www.youtube.com/"
    document.getElementById("cancelbutton").hidden = false
    

}


function redirectGmail(){
    document.getElementById("redirectText").textContent ="Redirecting to gmail..."   
    window.location.href ="https://www.gmail.com/"
    document.getElementById("cancelbutton").hidden = false

} 


function redirectWeather(){
   
        document.getElementById("redirectText").textContent ="Redirecting to weather.com..."   
        window.location.href ="https://www.weather.com/"     
        document.getElementById("cancelbutton").hidden = false


}




function cancelredirect(){
    document.getElementById("redirectText").textContent =""
   location.reload()
    document.getElementById("cancelbutton").hidden = true
}