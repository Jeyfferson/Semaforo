const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
   //event.target.id
   stopAutomatic();
   turnOn[event.target.id](); //Modo de chamar um metodo do objeto é ex: turnOn['red'] (mas usarei event...)
   
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; //Por ser arrayfaction e ternário, excluise a {} se quiser

   /*
   if ( colorIndex < 2) {
      colorIndex++;
   }else{
      colorIndex = 0
   }
   */


const changeColor = () => {
   const colors = ['red','yellow','green'];
   const color = colors[ colorIndex ];
   turnOn[color]();
   nextIndex();
}

const stopAutomatic = () => {
   clearInterval ( intervalId )
}

//Object
const turnOn = {
   'red':    () => img.src = "./img/vermelho.png",
   'yellow': () => img.src = "./img/amarelo.png",
   'green': () => img.src = "./img/verde.png",
   'automatic': () => intervalId = setInterval ( changeColor, 1000) //setInterval executa a cada segundo que vc coloca
}

buttons.addEventListener('click', trafficLight);

