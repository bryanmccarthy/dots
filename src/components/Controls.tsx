import './Controls.css';

const colors = [
  'white',
  'orange',
  'lightgreen',
  'aqua',
  'coral',
]

interface ControlsProps {
  setSelectedColor: (color: string) => void;
}

function Controls({ setSelectedColor }: ControlsProps) {

  return (
    <div className="Controls">
      <button>Undo</button>
      <button>Redo</button>
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