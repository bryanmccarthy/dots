import { useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls';

interface Dot {
  x: number;
  y: number;
  color: string;
}

function App() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('white');

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.clientX, event.clientY);
    setDots([...dots, {x: event.clientX, y: event.clientY, color: selectedColor}]);
  }    

  return (
    <div className="App">
      <Controls />
      <div className="Canvas" onClick={handleMouseClick}>
        {dots.map((dot, index) => (
          <div 
            className="Dot"
            key={index} 
            style={{
              position: 'absolute', 
              left: dot.x, 
              top: dot.y,
              height: '30px',
              width: '30px',
              borderRadius: '50%', 
              backgroundColor: dot.color,
            }}>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
