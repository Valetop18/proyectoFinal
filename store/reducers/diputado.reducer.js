import { SELECT_DIPUTADO} from '../actions/diputado.action'
import { FILTERED_DIPUTADOS, DISTRITO_SELECT } from '../actions/diputado.action'

import { DIPUTADOS } from "../../data/diputados"

const initialState = {
    selected: null,
    diputados: DIPUTADOS,
    filteredDiputados: [],
}

const DiputadoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERED_DIPUTADOS:
            return {
                ...state,
                filteredDiputados: state.diputados.filter(diputadosFilter => diputadosFilter.distrito === action.distritoID)
            }
        case SELECT_DIPUTADO:
            return {
                ...state,
                selected: state.diputados.find(diputado => diputado.id === action.diputadoID)
            }
        default:
            return state
    }
}

export default DiputadoReducer
