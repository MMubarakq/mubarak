const oo=document.getElementById("ooo");
window.addEventListener("keydown",move);
let x=0;
let y=0;
let a=0;
let b=0;
function move(event){
    
        
    }
switch (event.key) {
    case "ArrowDown":
        y+=5;
        oo.style.top= y +"px";
         break;

         case "ArrowUp":
                y-=5;
                oo.style.top= y +"px";
                 break;
                 

                 case "ArrowRight":
                    x+=5;
                    oo.style.left= x +"px";
                     break;
    
                     case "ArrowLeft":
                    x-=5;
                    oo.style.left= x +"px";
                     break;
                 case "q":
               
                x=0
                y=0
                oo.style.top= x +"px";
                oo.style.left= y +"px";
                 break;

                 
         }

         
         
            
           
        }


        const ooo=document.getElementById("oo");
window.addEventListener("keydown",movee);


function movee(event,){

   
   
switch (event.key) {
    case "s":
        b+=5;
        ooo.style.top= b +"px";
         break;

         case "w":
                b-=5;
                ooo.style.top= b +"px";
                 break;
                 

                 case "d":
                a+=5;
                ooo.style.left= a +"px";
                 break;

                 case "a":
                a-=5;
                ooo.style.left= a +"px";
                 break;
                 
                 case "q":

               
                a=0
                b=0
                ooo.style.top= a +"px";
                ooo.style.left= b +"px";
                 break;

                 
                     break;
         }

         
         
            
           
        }

        const o=document.getElementById("o");

        
            
        function u(){
             const r1=oo.getBoundingClientRect();
             const r2=ooo.getBoundingClientRect();


             if (r1.left<r2.right &&
                r1.left<r2.right &&
                r1.top<r2.bottom&&
                r1.top>r2.bottom  ) {
                console.log("hello")
             }
        
        }