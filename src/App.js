import './App.scss';
import Header from './pages/Header'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' component={Home}/>
    </Routes>
    </>
  );
}

export default App;
