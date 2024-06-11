import './App.css'
import Clock from './components/Clock/Clock';
import Movie from './components/Movie/Movie';
import Person from './components/Person/Person';
import Pet from './components/Pet/Pet';

function App() {
  return (
    <>
    <Clock></Clock>
    <Movie name='The Fast and the Furious' director='Rob Cohen' release={2001} studio='Universal Pictures' poster='https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg'></Movie>
    <Person name='Paul Walker' email='paulwalker@example.com' phone="+11111111111" city='Los Angeles, CA' skills='Acting, Racing' photo='https://m.media-amazon.com/images/M/MV5BMjIwODc0OTk2Nl5BMl5BanBnXkFtZTcwOTQ5MDA0Mg@@._V1_QL75_UX280_CR0,4,280,414_.jpg'></Person>
    <Pet name='Layka' age={68} notes='went to the moon' photo='https://tse1.mm.bing.net/th?id=OIP.KTpIw9TrMceQldlIryhvfgHaFn&pid=Api'></Pet>
    </>
  )
}

export default App
