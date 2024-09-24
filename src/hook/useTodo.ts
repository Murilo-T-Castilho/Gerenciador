import React, {useContext} from 'react';
import { TodoService } from '../utils/TodoService';
import { TodoContext } from '../context/TodoContext';

export const useTodo = () => {
    const context: {todoService: TodoService} | undefined = useContext(TodoContext)

    if(!context){
        throw new Error("o hook useTodo só pode ser utilizado dentro do contexto TodoContext")
    }

    return context.todoService
}