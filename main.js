let altura =document.getElementById('metros').value;

function imc() {
    let peso=document.getElementById('kilos').value;
     altura=document.getElementById('metros').value;
     if ((altura - Math.floor(altura)==0)) {
        altura=altura*0.01;
    }
    let IMC=peso/(altura*altura);
    IMC=parseFloat(IMC);
    let respuesta =document.getElementById('imc').innerText = IMC.toFixed(2);
    (IMC<18.5) ? document.getElementById('imc').style.backgroundColor="yellow" : (IMC>=18.5 && IMC<=24.9) ? document.getElementById('imc').style.backgroundColor="green" : (IMC>=25 && IMC<=29.9) ? document.getElementById('imc').style.backgroundColor="orange" : document.getElementById('imc').style.backgroundColor="red";
}

function reiniciar() {
    document.getElementById('kilos').value = " ";
    document.getElementById('metros').value = " ";
    document.getElementById('imc').style.backgroundColor="white";
    document.getElementById('imc').innerText=" ";

}