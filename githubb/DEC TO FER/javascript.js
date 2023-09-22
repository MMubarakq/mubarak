document.getElementById("bb").onclick=function(){

    let temp;
    
    if(document.getElementById("cc").checked){
    
        temp=document.getElementById("tt").value;
        temp=Number(temp);
        temp=tocelsius(temp);
        document.getElementById("g").innerHTML=temp+~"c"
    }
    
    
    else if(document.getElementById("ff").checked){
    
        temp=document.getElementById("tt").value;
        temp=Number(temp);
        temp=tofarenheit(temp);
        document.getElementById("g").innerHTML=temp+~"F"
    
    }
    
    else{
        document.getElementById("g").innerHTML="pls only number are allowed or pls select C or F"
    }
}

function tocelsius(temp){
    return (temp-32)*(5/9);
    }

    function tofarenheit(temp){
        return temp *9/5 + 32;  
    }