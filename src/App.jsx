import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchGiphyForm from './SearchGiphyForm/SearchGiphyForm'


function App() {

  const [searchTerm, setSearchTerm] = useState('cheeseburger');
const [giph, setGiph] = useState({})

  const giphyUrl = `api.giphy.com/v1/gifs/search?api_key=Owou6qtq7DnLcxn4oaRdZGEdcZ5oM8RK&q=${searchTerm}`

  return (
    <>
    <SearchGiphyForm/>
     <p>The user is searching for {searchTerm}</p> 
    </>
  )
}

export default App
