import React, { useState } from 'react'
import TodoList from '../../components/todolist'
import CriarTodo from '../../components/criarTodo'
import { TodoProps } from '../../@types/todo'

enum TodoPages {
  'criar' = 'criar',
  'listar' = 'listar'
}

const Todo = () => {
  const [getTodos, setTodos] = useState<TodoProps[]>([
    { id: 1, titulo: 'tarefa 1' },
    { id: 2, titulo: 'tarefa 2' },
    { id: 3, titulo: 'tarefa 3' },
    { id: 4, titulo: 'tarefa 4' },
    { id: 5, titulo: 'tarefa 5' }
  ])

  const [getPaginaAtual, setPaginaAtual] = useState<TodoPages>(TodoPages.listar);

  const renderizarBotoes = () => (
    <div>
      <button onClick={() => setPaginaAtual(TodoPages.criar)}>Criar</button>
      <button onClick={() => setPaginaAtual(TodoPages.listar)}>Listar</button>
    </div>
  )

  const renderizarComponentes = () => {
    switch (getPaginaAtual) {

      case TodoPages.criar:
        return <CriarTodo criarTodo={(novoTodo: TodoProps) => {
          const id: number = getTodos.length + 1
          novoTodo.id = id
          const tmpTodos: TodoProps[] = [...getTodos, novoTodo]
          setTodos(tmpTodos)
        }} />

      case TodoPages.listar:
        return <TodoList
          getTodos={getTodos}
          setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)} />
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      {renderizarBotoes()}
      {renderizarComponentes()}
    </div>
  );
}

export default Todo;

