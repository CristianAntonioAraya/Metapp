import DisplayInfo from '../components/DisplayInfo'
import SearchBar from '../components/SearchBar'

const HomePage = () => {

  return (
    <div className='app__container'>
        <div className='app__card'>
            <SearchBar/>
            <DisplayInfo/>
        </div>
    </div>
  )
}

export default HomePage