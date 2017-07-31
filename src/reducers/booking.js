const booking = (state = [], action) => {
    switch (action.type) {
        case 'BOOK_TIME':
            if(action.booked === true) {
                return [
                    ...state,{
                        id: action.id,
                        booked: true
                    }
                ]
            }else{
                return state.filter(({ id }) => id !== action.id);
            }
        default:
            return state
    }
}

export default booking
