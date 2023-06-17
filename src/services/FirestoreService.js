import { getFirestore, getDocs, collection, query, where } from 'Firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function listaTarefa() {
  const tarefas = []
    const resposta =  await getDocs(query(db, collection(db, "tarefas"), 
    where("prioridade", '==', 1))
    )
    resposta.forEach((doc) => {
        tarefas.push({key: doc.id, ...doc.data()})
    })
   return tarefas
}

export async function insereTarefa(tarefa) {

}

export async function modificaTarefa(tarefa) {

}

export async function removeTarefa(key){

}