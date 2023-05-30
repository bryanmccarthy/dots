import './Controls.css';

const colors = [
  'white',
  'orange',
  'lightgreen',
  'aqua',
  'coral',
];

const sizes = [
  10,
  20,
  30,
  40,
  50,
]

interface ControlsProps {
  handleUndo: () => void;
  handleRedo: () => void;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: number) => void;
}

function Controls({ handleUndo, handleRedo, setSelectedColor, setSelectedSize }: ControlsProps) {

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
      <div className="SizeSelection">
        {sizes.map((size, index) => (
          <div
            key={index}
            className="Size"
            style={{ height: size, width: size }}
            onClick={() => setSelectedSize(size)}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default Controls;