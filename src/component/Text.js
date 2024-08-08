import React, { useState } from 'react'


export default function Text(props) {
    const [text, setText] = useState("Enter the text");
    const [from, setFrom] = useState("text");
    const [to, setTo] = useState("text");

    const handleToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('UpperCase Converted','success');
    }
    const handleToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const handleFrom = (event) => {
        setFrom(event.target.value);
    }
    const handleTo = (event) => {
        setTo(event.target.value);
    }
    const convert = () => {
        switch (from) {
            case 'text':
                switch (to) {
                    case 'text':
                        break;
                    case 'binary':
                        let newText = '';
                        let binary = '';
                        for (let i = 0; i < text.length; i++) {


                            let ch = text.charCodeAt(i);//104
                            while (ch > 0) {
                                if (ch % 2 === 1) {
                                    newText += '1';
                                }
                                else {
                                    newText += '0';
                                }
                                ch = Math.floor(ch / 2);
                            }

                            let str = newText.split('').reverse().join('').padStart(8, '0');
                            newText = '';
                            binary = binary + str;

                        }

                        setText(binary.trim());
                        break;
                    case 'hexadecimal':
                        let hexText = '';
                        for (let i = 0; i < text.length; i++) {
                            hexText += text.charCodeAt(i).toString(16).padStart(2, '0') + ' ';
                        }
                        setText(hexText);
                        break;
                    case 'decimal':
                        let deciText = '';
                        for (let i = 0; i < text.length; i++) {
                            deciText += text.charCodeAt(i).toString() + ' ';
                        }
                        setText(deciText);
                        break;
                    case 'octal':
                        let octText = '';
                        for (let i = 0; i < text.length; i++) {
                            octText += text.charCodeAt(i).toString(8) + ' ';
                        }
                        setText(octText);
                        break;
                    default:
                        break;

                }
                break;
            case 'binary':
                switch (to) {
                    case 'text':
                        let binary = '';
                        let size = 8;
                        for (let i = text.length; i > 0; i = i - size) {
                            let decimal = 0;
                            let binaryElement = text.substring(Math.max(0, i - size), i);
                            decimal = parseInt(binaryElement, 2);
                            let ch = String.fromCharCode(decimal);
                            binary += ch;
                        }

                        setText(binary.split('').reverse().join(''));
                        break;
                    case 'binary':
                        break;
                    case 'hexadecimal':
                        let hexText = '';
                        for (let i = text.length; i > 0; i = i - 8) {
                            let decimal = 0;
                            let binaryElement = text.substring(Math.max(0, i - 8), i);
                            decimal = parseInt(binaryElement, 2);
                            hexText = decimal.toString(16) + ' ' + hexText;
                        }
                        setText(hexText.trim());
                        break;
                    case 'decimal':
                        let deciText = '';
                        for (let i = text.length - 1; i > 0; i = i - 8) {
                            let decimal = 0;
                            let binaryElement = text.substring(Math.max(0, i - 8), i);
                            decimal = parseInt(binaryElement, 2);
                            deciText = decimal.toString() + ' ' + deciText;
                        }
                        setText(deciText);
                        break;
                    case 'octal':
                        let octText = '';
                        for (let i = text.length - 1; i > 0; i = i - 8) {
                            let decimal = 0;
                            let binaryElement = text.substring(Math.max(0, i - 8), i);
                            decimal = parseInt(binaryElement, 2);
                            octText = decimal.toString(8) + ' ' + octText;
                        }
                        setText(octText);
                        break;
                    default:
                        break;

                }
                break;
            case 'hexadecimal':
                switch (to) {
                    case 'text':
                        let hexText = '';
                        for (let i = 0; i < text.length; i += 2) {
                            let hexElement = text.substring(i, i + 2);
                            let decimal = parseInt(hexElement, 16);
                            hexText += String.fromCharCode(decimal);
                        }
                        setText(hexText);
                        break;
                    case 'decimal':
                        let dec=0;
                        let txt=text;
                        dec=parseInt(txt,16);
                        setText(dec.toString());
                        break;
                    case 'binary':
                        let bi=0;
                        dec=parseInt(txt,16);
                        setText(bi.toString(2));
                        break;
                    case 'octal':
                        let octalHexText = '';
                        for (let i = 0; i < text.length; i += 2) {
                        let hexElement = text.substring(i, i + 2);
                        let decimal = parseInt(hexElement, 16);
                        octalHexText += decimal.toString(8) + ' ';
                    }
                    setText(octalHexText.trim());
                    break;
                    default:
                        break;
                }
                break;
            case 'decimal':
                switch (to) {
                    case 'text':
                        let decimalText = '';
                        let decArray = text.split(' ');
                        for (let i = 0; i < decArray.length; i++) {
                            let decimal = parseInt(decArray[i], 10);
                            decimalText += String.fromCharCode(decimal);
                        }
                        setText(decimalText);
                        break;
                    case 'binary':
                        let binaryDecText = '';
                        let decArrayToBinary = text.split(' ');
                        for (let i = 0; i < decArrayToBinary.length; i++) {
                            let decimal = parseInt(decArrayToBinary[i], 10);
                            binaryDecText += decimal.toString(2).padStart(8, '0') + ' ';
                        }
                        setText(binaryDecText.trim());
                        break;
                    case 'decimal':
                        break;
                    case 'hexadecimal':
                        let hexDecText = '';
                        let decArrayToHex = text.split(' ');
                        for (let i = 0; i < decArrayToHex.length; i++) {
                            let decimal = parseInt(decArrayToHex[i], 10);
                            hexDecText += decimal.toString(16) + ' ';
                        }
                        setText(hexDecText.trim());
                        break;
                    case 'octal':
                        let octDecText = '';
                        let decArrayToOct = text.split(' ');
                        for (let i = 0; i < decArrayToOct.length; i++) {
                            let decimal = parseInt(decArrayToOct[i], 10);
                            octDecText += decimal.toString(8) + ' ';
                        }
                        setText(octDecText.trim());
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    return (
        
        <>
            <div className="container" style={{backgroundColor :props.mode==='dark'?'#355c84':'white',width: '100%',color:props.mode==='dark'?'white':'black'}}> 
                <h1>{props.header}</h1>
                <div className='navbar' style={{backgroundColor :props.mode==='dark'?'#355c84':'white'}}>
                    <label htmlFor="from-#355c84" className="form-label">From</label>
                    <select className="form-select" id="from" style={{backgroundColor:'#7db1e5'}} value={from} onChange={handleFrom}>
                        <option value="text">Text</option>
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="decimal">Decimal</option>
                        <option value="octal">Octal</option>
                    </select>

                    <label htmlFor="to" className="form-label" >To</label>
                    <select className="form-select" id="to" style={{backgroundColor: '#7db1e5'}} value={to} onChange={handleTo}>
                        <option value="text">Text</option>
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="decimal">Decimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={onChange} id="myBox" row="8" style={{backgroundColor : props.mode==='dark'?'#355c84':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleToUpper}>convert to upper case</button>
                <button className='btn btn-primary mx-2' onClick={handleToLower}>convert to lowerCase</button>
                <button className='btn btn-primary mx-2' onClick={convert}>convert</button>
            </div>
            <div className='container my-3' style={{backgroundColor : props.mode==='dark'?'#355c84':'white',color:props.mode==='dark'?'white':'black'}} >
                <h2>Text Summary</h2>
                <p>{text.split(" ").length}</p>
                <p>{text.length}</p>
                <p>Text read in {0.0008 * text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
