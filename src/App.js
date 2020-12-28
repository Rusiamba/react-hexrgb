import './App.css';
import Input from "./Input";
import {useState} from "react";

function App() {
    const [rgb, setRgb] = useState('');
    const [value, setValue] = useState('');

    const colorTransform = (color) => {
        setValue(color);
        if(color.length === 7) {
            if(color.match( /#[a-f0-9]{6}\b/gi )) {
                const rgbColor = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                    , (m, r, g, b) => '#' + r + r + g + g + b + b)
                    .substring(1).match(/.{2}/g)
                    .map(x => parseInt(x, 16));
                setRgb(`rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`)
            }else {
                setRgb('wrong')
            }
        }
    }

    return (
        <div className="App" style={{backgroundColor: rgb}}>
            <Input className='input' onChange={colorTransform} value={value} type='text'/>
            <div className='rgb' style={{backgroundColor: rgb}}>{rgb}</div>
        </div>
    );
}

export default App;
