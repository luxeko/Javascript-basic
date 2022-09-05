import html from '../core.js'
import TodoItem from '../component/TodoItem.js'
import { connect } from '../store.js'

const connector = connect()
function TodoList({ todos }) {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${ 
                    todos.map((todo) => { 
                        return TodoItem({ todo }) 
                    })
                }
            </ul>
        </section>
    `
}
export default connector(TodoList)