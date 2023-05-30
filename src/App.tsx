import { useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls';

interface Dot {
  x: number;
  y: number;
  color: string;
  size: number;
}

function App() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [undoStack, setUndoStack] = useState<Dot[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('white');
  const [selectedSize, setSelectedSize] = useState<number>(30);

  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.clientX, event.clientY);
    setDots([...dots, {x: event.clientX, y: event.clientY, color: selectedColor, size: selectedSize}]);
  }

  const handleUndo = () => {
    if (dots.length > 0) {
      setUndoStack([...undoStack, dots[dots.length - 1]]);
      setDots(dots.slice(0, dots.length - 1));
    }
  }

  const handleRedo =() => {
    if (undoStack.length > 0) {
      setDots([...dots, undoStack[undoStack.length - 1]]);
      setUndoStack(undoStack.slice(0, undoStack.length - 1));
    }
  }

  return (
    <div className="App">
      <Controls 
        handleUndo={handleUndo} 
        handleRedo={handleRedo} 
        setSelectedColor={setSelectedColor} 
        setSelectedSize={setSelectedSize} 
      />
      <div className="Canvas" onClick={handleMouseClick}>
        {dots.map((dot, index) => (
          <div 
            className="Dot"
            key={index} 
            style={{
              position: 'absolute', 
              left: dot.x, 
              top: dot.y - 98,
              height: `${dot.size}px`,
              width: `${dot.size}px`,
              borderRadius: '50%', 
              backgroundColor: dot.color,
              transform: 'translate(-50%, -50%)'
            }}>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
