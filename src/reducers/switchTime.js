const switchTime = (state = Date.now(), action) => {
    switch (action.type) {
        case 'SWITCH_MONTH':
            return action.month
        default:
            return state
    }
}

export default switchTime
