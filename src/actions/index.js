export const INCREMRNT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = () => ({
    type: INCREMRNT
})

export const decrement = () => ({
    type: DECREMENT
})