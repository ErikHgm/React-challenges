import css from './App.module.css';
import ContentHooks from './components/ContentHooks';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';


function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;