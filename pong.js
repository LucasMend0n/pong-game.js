const canvas = document.getElementById("pong");
const contexto = canvas.getContext("2d");

canvas.width = 1000; 
canvas.height = 750; 

let pontosP1 = 0; 
let pontosP2 = 0; 

class Element{
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width ;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.x || 2;
        this.gravity = options.x;
    }


}

//primeiro marcador
const jogador1 = new Element({
    x: 10, 
    y: 200, 
    width: 15, 
    height: 80, 
    color: "#ffffff", 
    gravity: 2, 
});
//segundo marcador
const jogador2 = new Element({
    x: 650, 
    y: 200, 
    width: 15, 
    height: 80, 
    color: "#ffffff", 
    gravity: 2, 
});
//bola

//jogador 1 pontuação 

//jogador 2 pontuação 

// mostra elementos na tela

function desenhaElemento(elemento){
    contexto.fillStyle = elemento.color; 
    contexto.fillRect(elemento.x, elemento.y, elemento.width, elemento.height); 

}
desenhaElemento(jogador1)
//detecta colisao



