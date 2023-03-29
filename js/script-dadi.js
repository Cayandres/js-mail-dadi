/*const eventiPossibili = [1,2,3,4,5,6];
const randomIndexUser = Math.floor(Math.random() * eventiPossibili.length);
const randomIndexComp = Math.floor(Math.random() * eventiPossibili.length);
const button = document.querySelector('#bottone');
const output = document.getElementById('output');


button.addEventListener('click', function(){
    document.querySelector('#output-giocatore').innerHTML = eventiPossibili[randomIndexUser];
}); 


button.addEventListener('click', function(){
    document.querySelector('#output-computer').innerHTML = eventiPossibili[randomIndexComp];


    if(randomIndexUser > randomIndexComp){
      output.innerHTML = 'Hai vinto tu';
    } else if (randomIndexUser < randomIndexComp) {
      output.innerHTML = 'Ha vinto il computer';
    } else {
      output.innerHTML = "Pareggio";
    }
});*/