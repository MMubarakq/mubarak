const answer=Math.floor(Math.random()*10+1)
     let guesses=0

     document.getElementById("bb").onclick=function(){

      let guess =  document.getElementById("gg").value;
      guesses+=1;
     
      if(guess==answer){
        alert(`${answer} is the #.it too you ${guesses} guess`)
      }
       else if(guess<answer){
        alert("too small")
       }

       else{ alert("too big");
     }

    }