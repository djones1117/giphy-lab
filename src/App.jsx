import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchGiphyForm from './SearchGiphyForm/SearchGiphyForm'
import GiphInfo from './GiphInfo/GiphInfo'


function App() {

  const [searchTerm, setSearchTerm] = useState('cheeseburger');
const [giph, setGiph] = useState({})



function getGiphySearch(giphTitle){
  setSearchTerm(giphTitle)
}


useEffect(() => {

const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=Owou6qtq7DnLcxn4oaRdZGEdcZ5oM8RK&q=${searchTerm}`

async function getGiphyInfo(){

try {
  const apiResponse = await fetch(giphyUrl);
  
  const data = await apiResponse.json();
  console.log(data)

setGiph(data)
} catch(err){
  console.log(err, 'error from api call')
}

}
getGiphyInfo();

}, [searchTerm])
  return (
    <>
    <SearchGiphyForm getGiphySearch={getGiphySearch}/>
     <p>The user is searching for {searchTerm}</p>
     
     {giph.Title ? <GiphInfo giph={giph}/> : null}
    </>
  )
}

export default App
