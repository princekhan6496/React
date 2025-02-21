import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("olive")
  const [inputColor, setInputColor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputColor.trim()) {
      setColor(inputColor);
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center' style={{ backgroundColor: color }}>
      <form onSubmit={handleSubmit} className=" fixed mb-4 flex flex-wrap justify-center gap-1">
        <textarea 
          id='input' 
          className='bg-white w-60 h-10 p-2 rounded-lg'
          placeholder='Enter color name'
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
        />
        <input type='submit' value='Enter' className='ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer' />
      </form>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0'>
        <div className='flex flex-wrap justify-center px-3 py-2 gap-2'>
          {["red", "blue", "green", "pink", "white","aqua"].map((col) => (
            <button
              key={col}
              className='font-serif font-bold p-2 rounded-xl px-3 py-1 shadow-lg'
              style={{ backgroundColor: col }}
              onClick={() => setColor(col)}
            >
              {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
