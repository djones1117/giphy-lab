import { useState} from 'react'
export default function SearchGiphyForm({getGiphySearch}){
    const [giphyFormState, setGiphyFormState] = useState('');
   
   
   function handleChange(g){
    console.log(g.target.value)
    setGiphyFormState(g.target.value);
   }
   function handleSubmit(g){
    g.preventDefault();
    getGiphySearch(giphyFormState);
    setGiphyFormState()
   }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Giphy" value={giphyFormState} onChange={handleChange} name='giphy'/>
            <button>Search</button>
        </form>
    )
}