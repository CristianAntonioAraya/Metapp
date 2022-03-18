import WeatherState from './context/weather/WeatherState'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <WeatherState>
      <HomePage/>
    </WeatherState>
  )
}

export default App