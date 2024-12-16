export const todoReducer = (initialState, action) =>{

    switch (action.type) {
        case 'ABC':
            //en caso tengamos una accion que aun no implementamos
            throw new Error('Action.type ABC no esta implementado')
        default:
            return initialState
    }
}