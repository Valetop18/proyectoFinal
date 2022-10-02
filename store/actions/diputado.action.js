export const SELECT_DIPUTADO = 'SELECT_DIPUTADO'
export const FILTERED_DIPUTADOS = 'FILTERED_DIPUTADOS'

export const selectDiputado = (id) => ({
    type: SELECT_DIPUTADO,
    diputadoID: id,
})

export const filteredDiputados = (distrito) => ({
    type: FILTERED_DIPUTADOS,
    distritoID: distrito
})
