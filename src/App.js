
import { useState } from 'react';
import './App.css';

function App() {

  const [newHeading, setNewHeading] = useState('Old heading')

  const useNewHeading = () => {
    setNewHeading('New heading')
  }

  return (
    <div className="App">
      <h1>Hello from App</h1>
      <p className='newTxt'>{newHeading}</p>
      <button onClick={useNewHeading}>Use new Heading</button>
    </div>
  );
}

export default App;
