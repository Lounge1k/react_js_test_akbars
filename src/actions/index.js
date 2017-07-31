export const switchMonth = (month) => ({
    type: 'SWITCH_MONTH',
    month
})
export const book = (id,booked) => ({
    type: 'BOOK_TIME',
    id,
    booked
})
