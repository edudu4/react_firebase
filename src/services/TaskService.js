import { urlApi } from "./FirebaseConfig"
async function listaTarefas() {
   await fetch(urlApi)
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => {throw Error("Deu ruim")})
}

async function insereTarefa(tarefa) {
    await fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .catch((error) => {throw Error("Deu ruim")})
}

export {listaTarefas, insereTarefa }

//Obj JS
//{ nome: "Fazer algo", prioridade: 1}

//JSON
//{ "nome" : "Fazer algo", "prioridade" : 1}