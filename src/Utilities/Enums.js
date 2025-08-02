export const State = Object.freeze({
    FINISHED: 'Terminado',
    DEVELOPING: 'Desarrollando',
    PAUSED: 'Pausado'
})

export const StateColor = Object.freeze({
    [State.FINISHED]: "#17c42e",
    [State.DEVELOPING]: "#0687dd",
    [State.PAUSED]: "#f8d300",
})

export const Level = Object.freeze({
    LOW: 'Bajo',
    MEDIUM: 'Medio',
    HIGH: 'Alto',
    ADVANCED: 'Avanzado'
})

export const Frequency = Object.freeze({
    CONSTANT: 'Constante',
    RECURRENT: 'Recurrente',
    OCCASIONAL: 'Ocasional'
})