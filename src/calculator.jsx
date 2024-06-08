import { useState } from 'react';
import './calculator.css';

export default function Calculator() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const btnArr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setOutput('');
        } else if (value === '=') {
            try {
                if (input.trim() === '') {
                    setOutput('Error');
                    return;
                }
                const result = eval(input);
                if (result === Infinity) {
                    setOutput('Infinity');
                } else if (isNaN(result)) {
                    setOutput('NaN');
                } else {
                    setOutput(result.toString());
                }
            } catch {
                setOutput('Error');
            }
        } else {
            setInput(input + value);
            setOutput('');
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <div className="input-output">
                <input type="text" name="input" value={input} readOnly />
    
                {output}
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
