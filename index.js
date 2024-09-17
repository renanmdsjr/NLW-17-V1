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

const { select, input }  = require('@inquirer/prompts')

const cadastrarMeta = async () => {}
   const meta = await input ({ message: "Digite a meta:"})

   if(meta.length == 0) {
         console.log("A meta não pode ser vazia.")
         return 
   }

const start = async () => {

   while(true){

      const opcao = await select({
         message: "Menu >",
         choices: [
            {
               name: "Cadastrar meta",
               value: "Cadastrar"
            },
            {
               name: "Listar metas",
               value: "Listar"
            },
            {
               name: "Sair",
               value: "Sair"

            },
         ]
      }) 
      

      switch(opcao) {
         case "Cadastrar":
          await cadastrarMeta()
            break
         case "Listar":
            console.log("Vamos listar")
            break
         case "Sair":
            console.log("Até a próxima!")
            return
      }
      
   }
}

start() 