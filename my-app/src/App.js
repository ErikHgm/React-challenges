import css from './App.module.css';
import ContentAPI from './components/ContentAPI';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';


function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
     <ContentAPI />
    </div>
  );
}

export default App;