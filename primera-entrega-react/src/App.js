import './App.css';
import itemListContainer from './components/itemListContainer'
import navBar from './components/navBar';


function App() {
  return (
    <div className='App'>
      <main>
      <navBar />
      <itemListContainer greeting={"Solo tenis"} />            
      </main>   
    </div>
  );
}

export default App;
