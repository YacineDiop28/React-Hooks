import './App.css';
//import MovieList from './components/MovieList';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <h1 className='Title'>Movie App</h1>
      <MovieList className='List'/>
    </div>
  );
}

export default App;