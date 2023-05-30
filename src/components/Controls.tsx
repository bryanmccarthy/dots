import './Controls.css';

const colors = [
  'white',
  'orange',
  'lightgreen',
  'aqua',
  'coral',
]

interface ControlsProps {
  handleUndo: () => void;
  handleRedo: () => void;
  setSelectedColor: (color: string) => void;
}

function Controls({ handleUndo, handleRedo, setSelectedColor }: ControlsProps) {

  return (
    <div className="Controls">
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="ColorSelection">
        {colors.map((color, index) => (
          <div
            key={index}
            className="Color"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default Controls;