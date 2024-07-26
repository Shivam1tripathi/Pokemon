
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCard from './Component/PokemonCard';

function App() {
  const [pokemon,setPokemon]=useState([]);
  const [maindata,setMaindata]=useState([]);
  const [filter,setFilter]=useState("")

  const apicall=async()=>{

    const data=await axios.get("https://pokeapi.co/api/v2/pokemon");
    setPokemon(data.data.results);
    setMaindata(data.data.results);
  
  }
  const filterapicall=()=>{
   
    const data= maindata.filter((e)=>{if(e.name.includes(filter)) return e;
    })
  
    setPokemon(data);
  }

  useEffect(()=>{
    if(filter.length>0){
      filterapicall();
    }
  },[filter])
  useEffect(()=>{
  
    if(filter.length===0){
    apicall();
    }
  },[filter])
  return (
    <div className='bg-slate-400'>
     <div className='h-20 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl text-blue-900'>POKEMON</h1>
     <input className='h-8 w-56 rounded-lg pl-2 mt-2 ' onChange={(e)=>setFilter(e.target.value)} placeholder='Search Pokemon...' type="text" />
     
     </div>
     <div className='flex items-center flex-col p-4 min-h-screen'>
      {console.log(pokemon)}
     {
     pokemon?.map((e)=>(
        <PokemonCard name={e.name} url={e.url}/>
      ))

     }
     </div>
     
    </div>
  );
}

export default App;
