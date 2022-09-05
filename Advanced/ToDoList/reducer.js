const init = {
    todos: [
        {
            title: 'Learn Js',
            completed: false
        },
        {
            title: 'Learn Html',
            completed: true
        },
    ]
}

export default function reducer(state = init, action, args) {
    switch(action) {
        default:
            return state
    }
}