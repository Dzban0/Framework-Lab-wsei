
import PersonClass from '../components/PersonClass'
import {data} from '../data/module-data'
import { useParams } from 'react-router-dom';


function Lab2(){
    const { id } = useParams();
    const person = data.find(p => p.id === Number(id));
    if (!id) {
        return <h2>Brak identyfikatora osoby.</h2>;
      }
    
     
      if (!person) {
        return <h2>nie istnieje osoba o takim id: {id}.</h2>;
      }
    
      return (
        <div>
          <h1>Profil osoby</h1>
          <p><strong>Imię:</strong> {person.name}</p>
          <p><strong>Data urodzenia:</strong> {person.birth}</p>
          <p><strong>Kolor oczu:</strong> {person.eyes}</p>
        </div>
      );

}


export default Lab2