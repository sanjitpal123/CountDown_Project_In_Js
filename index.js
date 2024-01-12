var des=new Date("14feb,2024,10:00").getTime();
var  x=setInterval(function()
{



console.log(des);
var currenttime=new Date().getTime();
var diff=des-currenttime;
var day=Math.floor(diff/(1000*60*60*24));
var hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var min=Math.floor((diff%(1000*60*60))/(1000*60));
var sec=Math.floor((diff%(1000*60))/1000);

document.querySelector("#day").innerHTML=day+"D";
document.querySelector("#h").innerHTML=hours+"hrs";
document.querySelector("#m").innerHTML=min+"m";
document.querySelector("#s").innerHTML=sec+"s";

},1000);