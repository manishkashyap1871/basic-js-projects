// choosing random colors
const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalid

//funtion for changing color every second
const startchangingcolor = function(){
    intervalid = setInterval(changebgcolor,1000);
    function changebgcolor() {
        document.body.style.backgroundColor = randomcolor();
    }
};

//function to stop changing bg color
const stopchangingcolor = function(){
     clearInterval(intervalid);
};

//selecting start button 
document.querySelector("#start").addEventListener('click',startchangingcolor);

//selecting stop button
document.querySelector("#stop").addEventListener('click',stopchangingcolor)


