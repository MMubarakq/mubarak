const display = document.querySelector("#display");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const restbtn = document.querySelector("#resetbtn");




   let startime=0
   let elapstime=0
   paused=true
   let intervalid;
   let count=0;
   let hr=0;
   let min=0;
   let sec= 0;
    
   
   startbtn.addEventListener("click",()=>{
    if (paused) {
        paused=false;
        startime=Date.now()- elapstime;
        intervalid=setInterval(updateTime,75)
        
    }
   });
   pausebtn.addEventListener("click",()=>{});
   restbtn.addEventListener("click",()=>{});



    function updateTime() {
        elapstime=Date.now()-startime;


        sec=Math.floor((elapstime/1000)%60);
        min=Math.floor((elapstime/(1000*60))%60);
        hr=Math.floor((elapstime/ (1000*60*60))%60);
     
        sec=pad(sec);
        min=pad(min);
        hr=pad(hr);
        display.textContent=`${hr}:${min}:${sec}`
        
        function pad(unit) {
            return (("0")+ unit).length >2 ? unit :"0"+unit
            
        }
    }

