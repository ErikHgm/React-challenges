import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
//import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';


function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
    </div>
  );
}

export default App;