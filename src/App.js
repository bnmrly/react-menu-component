import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  // I need something like this that I can add in app but i need to pass it down as props then I need to add a page to each link with lorem ipsum and add routes but start with home page hiding and showing then move on
  // const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  return (
    <div className="app__container">
      <header className="app__header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
