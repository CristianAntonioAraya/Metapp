import React, { useState } from 'react'

const SearchBar = () => {

    const [inputText, setInputText] = useState('')

    const handleSubmit = (e) => {
        e.preventDeafult();
    }


    return (
        <form className='app__form' onSubmit={ handleSubmit } >
            <input className='app__input' value={inputText} onChange={ e => setInputText(e.target.value) }/>
            <button className='app__button' type='submit'>Submit</button>
        </form>
    )
}

export default SearchBar