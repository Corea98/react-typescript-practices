import logo from './logo.svg';
import './App.css';
import Counter from './components/counterFC';
import { useState } from 'react';

function App() {

  const [shouldRenderComponent, setShouldRenderComponent] = useState(true);

  const toggleUnmountComponent = () => {
    setShouldRenderComponent(!shouldRenderComponent);
  }

  return (
    <div className="App">

      <button onClick={toggleUnmountComponent}>Toggle mmount/unmount component</button>
      
      { shouldRenderComponent && <Counter /> }
    
    </div>
  );
}

export default App;
