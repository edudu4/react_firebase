import { createContext, useState } from "react"
import { insereTarefa, listaTarefas, modificaTarefa, removeTarefa } from "../services/FirestoreService"

const TaskContext = createContext({
    tarefas: [],
    insereTarefa: () => { },
    listaTarefas: () => { },
    modificaTarefa: () => { },
    removeTarefa: () => { },
})

export function TaskContextProvider(props) {

    const [minhasTarefas, setMinhasTarefas] = useState([])

    async function inserir(tarefa) {
        try {
            await insereTarefa(tarefa)
            setMinhasTarefas([...minhasTarefas, tarefa])
        } catch (error) {
            throw Error(error.message)
        }

    }

    async function listar() {
        try {
            const data = await listaTarefas()
            setMinhasTarefas(data)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function modificar(tarefa) {
        try {
            await modificaTarefa(tarefa)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function remover(key) {
        try {
            await removeTarefa(key)
            setMinhasTarefas((prev) => prev.filter((item) => item.key != key))
        } catch (error) {
            throw Error(error.message);
        }
    }

    const contexto = {
        tarefas: minhasTarefas,
        listaTarefas: listar,
        insereTarefa: inserir,
        modificaTarefa: modificar,
        removeTarefa: remover,

    }

    return (
        <TaskContext.Provider value={contexto}>
            {props.children}          
        </TaskContext.Provider>
    )

}

export default TaskContext