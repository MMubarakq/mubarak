const label= document.getElementById("label");

update();
function update() {
    let date = new Date();
    label.innerHTML=formatime(date)
setInterval(update,1000)
    function formatime(){
        let hours =date.getHours();
        let min =date.getMinutes();
        let sec =date.getSeconds();
        let amorpm=hours >11? "pm":"am";
        hours=(hours%12) || 12;
        hours=formartzeros(hours);
        min=formartzeros(min);
        sec=formartzeros(sec);
        return `${hours}:${min}:${sec}:${amorpm}`
    }
       function formartzeros(time) {
        time=time.toString();
        return time.length<2? "0" + time :time;
        
       }
}