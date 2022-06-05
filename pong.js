const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

canvas.width = 650; 
canvas.height = 400; 

let pontosP1 = 0; 
let pontosP2 = 0; 

class Element{
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width ;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.speed || 2;
        this.gravity = options.gravity;
    }
}

//primeiro marcador
const jogador1 = new Element({
    x: 10, 
    y: canvas.height/2, 
    width: 10, 
    height: 100, 
    color: "#ffffff", 
    gravity: 2, 
});
//segundo marcador
const jogador2 = new Element({
    x: 630,
    y: canvas.height/2, 
    width: 10, 
    height: 100, 
    color: "#ffffff", 
    gravity: 2, 
});
//bola

const bola = new Element({
    x: 650/2, 
    y: 400/2, 
    width: 15, 
    height: 15, 
    color: "red", 
    gravity: 1,
    speed: 1, 
});

//cria elemento
function criaElemento(elemento){
    context.fillStyle = elemento.color; 
    context.fillRect(elemento.x, elemento.y, elemento.width, elemento.height); 
}

//jogador 1 pontuação

function exibePontuacao1(){
    context.font = '36px Arial';
    context.fillStyle = "#fff";
    context.fillText(pontosP1, canvas.width/2-60, 30); 
}

//jogador 2 pontuação 

function exibePontuacao2(){
    context.font = '36px Arial';
    context.fillStyle = "#fff";
    context.fillText(pontosP2, canvas.width/2+60,30); 
}

//faz a bola quicar
function bolaQuica(){
    if(bola.y + bola.gravity<= 0 || bola.y + bola.gravity >= canvas.height){
        bola.gravity = bola.gravity * -1; 
        bola.y += bola.gravity; 
        bola.x += bola.speed; 
    }
    else{
        bola.y += bola.gravity; 
        bola.x += bola.speed; 
    }
    bolaColide();
}

//detecta colisão
function bolaColide(){
    if(bola.x + bola.speed <= 0 || 
        bola.x + bola.speed + bola.width >= canvas.width){
        
        bola.y += bola.gravity; 
        bola.speed = bola.speed * - 1; 
        bola.x += bola.speed; 

    }else{

        bola.y += bola.gravity; 
        bola.x += bola.speed; 

    }
    mostraElementos();
}

// mostra elemento na tela

function mostraElementos(){
    context.clearRect(0,0, canvas.width,canvas.height)
    criaElemento(jogador1);
    criaElemento(jogador2); 
    criaElemento(bola);
    exibePontuacao1(); 
    exibePontuacao2(); 
}

//loop do jogo

function loop(){
    bolaQuica()
    window.requestAnimationFrame(loop)
}

loop()



