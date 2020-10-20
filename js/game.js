let hody = [];
let h;
let timer = false;
const tlacitko= document.getElementById("game");


document.getElementById('game').addEventListener('click',
    function(){
        hod();
        console.log(hody);
    }
);
function zvuk(){
    let zvuk=document.getElementById('zvuk');
    zvuk.currentTime = 0;
    zvuk.play();
}

function animace(){
    h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src='img/kostka' + h + '.png';
    tlacitko.innerText = 'Stop';
    zvuk();
}

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    if (!timer){
timer= setInterval(animace, 50);
tlacitko.innerText = 'Hraj';
    }
    else{
        clearInterval(timer);
        timer=false;
        hody.push(h);
        tlacitko.innerText = 'Hraj';
        vypisStatistiky();
    }
}

 function vypisStatistiky(){
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
    
}