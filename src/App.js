import{  useState } from 'react'
import Swal from 'sweetalert2'
import DisplayInfo from './components/DisplayInfo'
import { getApiDataForecast } from './utils/GetApiData'

const App = () => {

  const [weatherData, setWeatherData] = useState(null)
  const [inputText, setInputText] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();

    if( inputText === ''){
      console.log('empty field')
      return
    }
    const resp = await getApiDataForecast(inputText)
    if(resp === 'Error'){
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Write a valid city name',
        timer: '1500'
      })
      setInputText('')
      setWeatherData(null)
      return;
    }
    setInputText('')
    setWeatherData(resp)
  }

  return (
    <div className='app__container'>
        <div className='app__card'>
            <form className='app__form' onSubmit={ handleSubmit } >
                <input className='app__input' value={inputText} onChange={ e => setInputText(e.target.value) }/>
                <button className='app__button' type='submit'>Submit</button>
            </form>
            {
              weatherData === null
              ? <p>Loading</p>
              : <DisplayInfo location={ weatherData.location } current={weatherData.current} forecast={weatherData.forecast.forecastday}/>
            }
        </div>
    </div>
  )
}

export default App