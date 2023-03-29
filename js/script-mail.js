
let isPresent = false;
const output = document.getElementById('output-email');
const listaEmail = ['andrescayambe99@hotmail.com',
                    'andrescambe99@hotmail.com', 
                    'andrescayambe@hotmail.com', 
                    'andrescayambe9@hotmail.com', 
                    'andrescaybe99@hotmail.com'];

const emailInserita = prompt('Inserisci email');


for (let i = 0; i < listaEmail.length; i++) {
  if (emailInserita === listaEmail[i]) {
    isPresent = true;
  }
}

if (isPresent) {
  output.innerHTML = 'Puoi accedere!';
} else{
    output.innerHTML = "Non puoi accedere!";
}