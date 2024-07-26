import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokemonCard = (props) => {
    
    const [weight,setWeight]=useState();
    const [height,setHeight]=useState();
    const [abilities,setAbilities]=useState();
    const apicall1=async()=>{
        const data=await axios.get(props.url);
       
        setWeight(data.data.weight)
        setHeight(data.data.height)
        setAbilities(data.data.abilities)
        console.log(data.data);  
      }
    
      useEffect(()=>{
        apicall1();
      },[])
  return (
    <div className='w-96 mb-4 rounded-lg'>
        <div className='h-10 bg-emerald-300 p-2 rounded-t-lg'>
            <h1 className='text-lg text-blue-800 font-bold'>{props.name.toUpperCase()}</h1>
        </div>
        <div className='flex min-h-20 bg-white'>
            <ul className=' w-2/4 pl-2'>
            <li className='font-bold'>ABILITES:</li>
            {
                abilities?.map((e)=>
                    {
                        console.log(e)
                        return(
                    <li className='font-semibold'>{e.ability.name}</li>
                        )
                })
            }
            </ul>
            <ul className='w-2/4 pl-2'>
            <li className='font-semibold'><span className='font-bold'>WEIGHT:</span>{weight}</li>
            <li className='font-semibold'><span className='font-bold'>HEIGHT:</span>{height}</li>
            </ul>

        </div>

    </div>
  )
}

export default PokemonCard