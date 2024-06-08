import { useState } from 'react';
import './calculator.css';

export default function Calculator() {
    const [input, setInput] = useState('');

    const btnArr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '=') {
            try {
                if (input.trim() === '') {
                    setInput('Error');
                    return;
                }
                const result = eval(input);
                if (result === Infinity) {
                    setInput('Infinity');
                } else if (isNaN(result)) {
                    setInput('NaN');
                } else {
                    setInput(result.toString());
                }
            } catch {
                setInput('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <div className="output">
                <input type="text" name="output" value={input} readOnly />
            </div>
            <div className="buttons">
                {btnArr.map((btn, index) => (
                    <button 
                        key={index} 
                        value={btn}
                        onClick={(e) => handleButtonClick(e.target.value)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}
    