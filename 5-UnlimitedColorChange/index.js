const randomColor= ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#";
for (let i= 0; i<6; i++) {
    color+=hex[Math.floor(Math.random() * 16)];  
}
return color
}
let st;
const changeColor = ()=>{
    document.body.style.backgroundColor = randomColor()
}

const start = ()=>{
    
    st=setInterval(changeColor, 1000)
}
const endGame= ()=>{
    clearInterval(st)
    st=null;
}
 document.querySelector('#start').addEventListener('click',start);
 document.querySelector('#stop').addEventListener('click',endGame);

// const api = new XMLHttpRequest();
// api.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
// api.send();
