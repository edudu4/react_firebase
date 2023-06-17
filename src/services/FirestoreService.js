import { getFirestore, getDocs, collection, query, where, limit } from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function listaTarefas() {
  const tarefas = []
    const resposta =  await getDocs( query(collection(db, "tarefas"), where("prioridade", '==', 1), limit(10))
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