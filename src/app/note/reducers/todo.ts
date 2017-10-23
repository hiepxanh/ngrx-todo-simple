import * as Action from '../actions/todo'

interface Todo {
    // id: string;
    text: string;
    done: boolean;
}

export interface IAppState {
    todo: TodoState
}

export interface TodoState {
    total: number;
    todos: Array<Todo>;
}

export const initialState: TodoState = {
    total: 0,
    todos: []
}

const STATUS = {
    DONE: true,
    UNDONE: false
}

export function reducer(state = initialState, action : Action.Actions): TodoState {
    switch (action.type) {
        case "ADD TODO": {
            return {
                ...state,
                total: state.total + 1,
                todos: [
                    ...state.todos,
                     {
                        text: action.text,
                        done:STATUS.UNDONE
                    }
                ]
               
            }
        }

        case "REMOVE TODO": {
            return {
                 ...state,
                 total: state.total -1,
                 todos: [
                     ...state.todos.slice(0, action.index),
                     ...state.todos.slice(action.index + 1)
                 ]
            }
        }

        case "DONE TODO" : {
            const todo = {
                text: state.todos[action.index].text,
                done: STATUS.DONE
            }
            return {
                ...state,
                todos: [
                     ...state.todos.slice(0, action.index),
                    todo,
                    ...state.todos.slice(action.index + 1)
                ]
            }
        }
        case "UNDONE TODO" : {
            const todo = {
                text: state.todos[action.index].text,
                done: STATUS.UNDONE
            }
            return {
                ...state,
                todos: [
                     ...state.todos.slice(0, action.index),
                    todo,
                    ...state.todos.slice(action.index + 1)
                ]
            }
        }
        default:
            return state
    }
}