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
  undoneCount: number;
  selectedColor: string;
  selectedSize: number;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: number) => void;
}

function Controls({ handleUndo, handleRedo, undoneCount, selectedColor, setSelectedColor, selectedSize, setSelectedSize }: ControlsProps) {

  return (
    <div className="Controls">
      <div className="UndoneCount">
        Undone: {undoneCount}
      </div>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="ColorSelection">
        {colors.map((color, index) => (
          <div
            key={index}
            className="Color"
            style={{ backgroundColor: color, opacity: selectedColor === color ? 1 : 0.5 }}
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
            style={{ height: size, width: size, opacity: selectedSize === size ? 1 : 0.5 }}
            onClick={() => setSelectedSize(size)}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default Controls;