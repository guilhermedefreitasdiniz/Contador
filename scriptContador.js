let quantidadeCentsTotal = 0
let quantidadeCentsIn5 = 0
let quantidadeCentsIn10 = 0
let quantidadeCentsIn25 = 0
let quantidadeCentsIn50 = 0
let quantidadeCentsIn100 = 0

document.getElementById('qt5').innerText = quantidadeCentsIn5
document.getElementById('qt10').innerText = quantidadeCentsIn10
document.getElementById('qt25').innerText = quantidadeCentsIn25
document.getElementById('qt50').innerText = quantidadeCentsIn50
document.getElementById('qt100').innerText = quantidadeCentsIn100
document.getElementById('qtTotal').innerText = quantidadeCentsTotal

//5 CENTAVOS
function minus5Cents() {
    if(quantidadeCentsIn5 > 0){
        quantidadeCentsIn5 = quantidadeCentsIn5 - 1;
    }
    document.getElementById('qt5').innerText = `${quantidadeCentsIn5}`;

    updateValue5();

    var audio = new Audio("/sounds/ab.wav")
    audio.play();
}

function add5cents(){
    quantidadeCentsIn5 = quantidadeCentsIn5 + 1;
    document.getElementById('qt5').innerText = `${quantidadeCentsIn5}`;

    updateValue5();

    var audio = new Audio("/sounds/aa.wav")
    audio.play();
}

function delete5(){
    document.getElementById('qt5').innerText = `${0.0}`;
    quantidadeCentsIn5 = 0.0
    document.getElementById('valueOf5').innerText = `${(0.0).toFixed(2)}`;
    var audio = new Audio("/sounds/ac.wav")
    audio.play();
    updateValue5();
}

function updateValue5() {
    document.getElementById('valueOf5').innerText = `${(quantidadeCentsIn5 * 0.05).toFixed(2)}`;

    updateValuesGeral();
}

//10 CENTAVOS
function minus10Cents() {
    if(quantidadeCentsIn10 > 0){
        quantidadeCentsIn10 = quantidadeCentsIn10 - 1;
    }
    document.getElementById('qt10').innerText = `${quantidadeCentsIn10}`;

    updateValue10();

    var audio = new Audio("/sounds/ab.wav")
    audio.play();
}

function add10cents(){
    quantidadeCentsIn10 = quantidadeCentsIn10 + 1;
    document.getElementById('qt10').innerText = `${quantidadeCentsIn10}`;

    updateValue10();

    var audio = new Audio("/sounds/aa.wav")
    audio.play();
}

function delete10(){
    document.getElementById('qt10').innerText = `${0.0}`;
    quantidadeCentsIn10 = 0.0
    document.getElementById('valueOf10').innerText = `${(0.0).toFixed(2)}`;
    var audio = new Audio("/sounds/ac.wav")
    audio.play();
    updateValue10();
}

function updateValue10() {
    document.getElementById('valueOf10').innerText = `${(quantidadeCentsIn10 * 0.1).toFixed(2)}`;

    updateValuesGeral();
}

//25 CENTAVOS
function minus25Cents() {
    if(quantidadeCentsIn25 > 0){
        quantidadeCentsIn25 = quantidadeCentsIn25 - 1;
    }
    document.getElementById('qt25').innerText = `${quantidadeCentsIn25}`;

    updateValue25();

    var audio = new Audio("/sounds/ab.wav")
    audio.play();
}

function add25cents(){
    quantidadeCentsIn25 = quantidadeCentsIn25 + 1;
    document.getElementById('qt25').innerText = `${quantidadeCentsIn25}`;

    updateValue25();

    var audio = new Audio("/sounds/aa.wav")
    audio.play();
}

function delete25(){
    document.getElementById('qt25').innerText = `${0.0}`;
    quantidadeCentsIn25 = 0.0
    document.getElementById('valueOf25').innerText = `${(0.0).toFixed(2)}`;
    var audio = new Audio("/sounds/ac.wav")
    audio.play();
    updateValue25();
}

function updateValue25() {
    document.getElementById('valueOf25').innerText = `${(quantidadeCentsIn25 * 0.25).toFixed(2)}`;

    updateValuesGeral();
}

//50 CENTAVOS
function minus50Cents() {
    if(quantidadeCentsIn50 > 0){
        quantidadeCentsIn50 = quantidadeCentsIn50 - 1;
    }
    document.getElementById('qt50').innerText = `${quantidadeCentsIn50}`;

    updateValue50();

    var audio = new Audio("/sounds/ab.wav")
    audio.play();
}

function add50cents(){
    quantidadeCentsIn50 = quantidadeCentsIn50 + 1;
    document.getElementById('qt50').innerText = `${quantidadeCentsIn50}`;

    updateValue50();

    var audio = new Audio("/sounds/aa.wav")
    audio.play();
}

function delete50(){
    document.getElementById('qt50').innerText = `${0.0}`;
    quantidadeCentsIn50 = 0.0
    document.getElementById('valueOf50').innerText = `${(0.0).toFixed(2)}`;
    var audio = new Audio("/sounds/ac.wav")
    audio.play();
    updateValue50();
}

function updateValue50() {
    document.getElementById('valueOf50').innerText = `${(quantidadeCentsIn50 * 0.5).toFixed(2)}`;

    updateValuesGeral();
}

//1 real
function minus100Cents() {
    if(quantidadeCentsIn100 > 0){
        quantidadeCentsIn100 = quantidadeCentsIn100 - 1;
    }
    document.getElementById('qt100').innerText = `${quantidadeCentsIn100}`;

    updateValue100();

    var audio = new Audio("/sounds/ab.wav")
    audio.play();
}

function add100cents(){
    quantidadeCentsIn100 = quantidadeCentsIn100 + 1;
    document.getElementById('qt100').innerText = `${quantidadeCentsIn100}`;

    updateValue100();

    var audio = new Audio("/sounds/aa.wav")
    audio.play();
}

function delete100(){
    document.getElementById('qt100').innerText = `${0.0}`;
    quantidadeCentsIn100 = 0.0
    document.getElementById('valueOf100').innerText = `${(0.0).toFixed(2)}`;
    var audio = new Audio("/sounds/ac.wav")
    audio.play();
    updateValue100();
}

function updateValue100() {
    document.getElementById('valueOf100').innerText = `${(quantidadeCentsIn100).toFixed(2)}`;

    updateValuesGeral();
}


/////////////////////////
function updateValuesGeral(){
    //geral
    document.getElementById('valueOfTotal').innerText = `${((quantidadeCentsIn5 * 0.05)+(quantidadeCentsIn10 * 0.1)+(quantidadeCentsIn25 * 0.25)+(quantidadeCentsIn50 * 0.5)+(quantidadeCentsIn100)).toFixed(2)}`;
    document.getElementById('qtTotal').innerText = `${(quantidadeCentsIn5)+(quantidadeCentsIn10)+(quantidadeCentsIn25)+(quantidadeCentsIn50)+(quantidadeCentsIn100)}`;
}
/////////////////