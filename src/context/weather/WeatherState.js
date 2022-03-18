import { useReducer } from "react"
import WeatherContext from "./WeatherContext"
import WeatherReducer from './WeatherReducer'
import { SET_SEARCH } from '../types'

const WeatherState = ({ children }) => {

    const initialState = {
        location: null,
        forecast: null,
        current: null,
        search: null
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState)

    const setSearch = ( search ) => {
        dispatch( { type: SET_SEARCH, payload: search } )
    }

    return (
        <WeatherContext.Provider value={
            { 
                location: state.location,
                forecast: state.forecast,
                current: state.current,
                search: state.search,
                setSearch
            }
        }>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherState