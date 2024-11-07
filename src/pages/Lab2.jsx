import { useParams } from 'react-router-dom';
import { data } from '../data/randomData/module-data.js'; // Importuj dane

function Lab2() {
  const { id } = useParams(); // Pobierz id z parametrów URL

  // Znajdź osobę na podstawie id
  const person = data.find(p => p.id === Number(id));

  // Obsługa braku identyfikatora
  if (!id) {
    return <h2>Brak identyfikatora osoby.</h2>;
  }

  // Obsługa sytuacji, gdy osoba nie została znaleziona
  if (!person) {
    return <h2>Nie znaleziono osoby o tym identyfikatorze: {id}.</h2>;
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

export default Lab2;