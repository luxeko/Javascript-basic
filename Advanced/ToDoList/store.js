import { createStore } from '../ToDoList/core.js'
import reducer from '../ToDoList/reducer.js'
import withLogger from '../ToDoList/logger.js'
const { attach, connect, dispatch } = createStore(reducer)

window.dispatch = dispatch

export {
    attach,
    connect
}
