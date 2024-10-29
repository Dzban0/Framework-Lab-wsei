import { useEffect, useState } from 'react'
import PersonClass from '../components/PersonClass'
import {data} from '../data/module-data'

function Lab1(){
    const [profiles, setProfiles]=useState([]);

    useEffect(()=>{
        setProfiles(data);
      }, []);
    return(
        <>
        {profiles.map(person=>(
            <PersonClass key={person.id} person={person} />
          ))}



        </>
    )



}

export default Lab1;