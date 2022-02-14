const calcula = document.querySelector("#botao-calcula");

const chatao = document.querySelector("#chato");

let altura = document.querySelector("#input-altura");

let peso = document.querySelector("#input-peso").value;

let titulo = document.querySelector("#title-imc");

let magro = document.querySelector(".magro");

let normal = document.querySelector(".normal");

let sobrepeso = document.querySelector(".sobrepeso")

let gordo = document.querySelector(".gordo");

let imenso = document.querySelector(".imenso");

let tirano = document.querySelector(".tirano");

let digite = document.querySelector("#digite");

let header = document.querySelector("#header");

let main = document.querySelector("#main");

let botaoDigite = document.querySelector("#botao-digite");

botaoDigite.addEventListener('click', function() {
  digite.style.display="none";
  header.style.display="block";
  main.style.display="block";
});

  calcula.addEventListener('click', function(e) {
    e.preventDefault();
    
  if (document.querySelector("#input-altura").value === "") {
    
    digite.style.display="block";
    header.style.display="none";
    main.style.display="none";
  } else {
    
  let altura = document.querySelector("#input-altura").value;

  let peso = document.querySelector("#input-peso").value;

  let resultAltura = parseFloat(altura.value);
  
  let resultPeso = parseFloat(peso.value);
  
  let tot = peso / (altura * altura);
  
  let imc = document.createTextNode(tot.toFixed(1));
  
  titulo.appendChild(imc);
  
  if (tot <= 18.5) {
    magro.style.display="block";
  };
  
  if (tot >18.5 && tot<= 24.9) {
    normal.style.display="block";
  };
  
  if (tot >=25 && tot <= 29.9) {
     sobrepeso.style.display = "block";
   };
   
  if (tot >=30 && tot <=39.9) {
    gordo.style.display = "block";
  };
  
  if (tot >=40 && tot <=80) {
    imenso.style.display = "block";
  };
  
  if (tot >=81) {
    tirano.style.display = "block";
  };
  calcula.disabled="true";
};
  
  
  
});
  
  
const limpa = document.querySelector("#botao-limpa");

limpa.addEventListener('click', function(e) {
  e.preventDefault();
  
  location.reload();
});

altura.addEventListener('keyup', function (event) { 
  if (event.which >= 37 && event.which <= 40) return;
  
  this.value = this.value.replace(/\D/g, '').replace(/\B(?=(\d{2})+(?!\d))/g, '.');
});
