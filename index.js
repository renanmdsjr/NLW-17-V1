// AULA 01
// hello world!
/*const mensagem = "Olá eu"

{
   const mensagem = "olá, mundo!"
   
console.log(mensagem)
}

console.log(mensagem);*/

// AULA 02

// arrays, objetos
/*let metas = [",","Oie", "Renan!", "Me chamo Giovanna! Tudo bem?", "Respondendo a sua pergunta, eu tenho", 26, "anos!"]
console.log(metas[1] + metas[0] + " " + metas[2] + " " + metas[3] + " " + metas[4] + " " + metas[5] + " " + metas[6])*/

// AULA 03

// arrays, objetos
// Vídeo 2 = voltaremos
/*
let meta = {
   value: 'ler um livro por mês',
   checked: true,
}

let metas = [
   meta,
   {
      value: "Caminhar 20 minutos todos os dias",
      checked: false
   }
]

console.log(metas[1].value)
*/
// arrow function
// const criarMeta = () => {}

// function 
// function criarMeta() {}

/* const start = () => {
   let count = 1
   while(count <= 10){
      console.log(count)
      count ++
      
   }
}

start() */

const start = () => {

   while(true){
      let opcao = "Sair"
      switch(opcao) {
         case "Cadastrar":
            console.log("Vamos cadastrar")
            break
         case "Listar":
            console.log("Vamos listar")
            break
         case "Sair":
            return
      }
      
   }
}

start() 