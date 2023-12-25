function mostarhora(){
const Elesau= document.getElementById('saudacao')
let hr= document.getElementById('horas')
let data= new Date();
let hora= data.getHours()
let saudacao
if(hora>=12 && hora<=18){
    saudacao=`Boa tarde, agora são `
} else if(hora>=6 && hora<12){
    saudacao=`Bom dia, agora são `
} else{
    saudacao=`Boa noite, agora são `
}
const horaAtual= data.toLocaleTimeString()
Elesau.textContent=saudacao;
hr.textContent=saudacao + horaAtual
}
setInterval(mostarhora, 1000)
mostarhora()

function btt(){
let bot= document.getElementById('bt')
let nm= document.getElementById('nome')
let emai= document.getElementById('email')
let dt= document.getElementById('data')
let sexo= document.getElementsByName('sex')
let re= document.getElementById('res')
    if( nm.value.length===0 || (emai.value.length===0) || (dt.value.length===0 )){
        alert('Ops?! Pelo visto faltou alguma informação.')
    } else{
        re.innerHTML=`<footer>Obrigado ${nm.value}! Pode prosseguir.<button class="bt"><a href="running.html">Seguir </a></button></footer>`}
    }


function Menu() {   
 let navv= document.getElementById('redes')
    if(navv.style.display =='block'){
      navv.style.display='none'
    } else{
        navv.style.display='block'
    }

}

