import { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = props => {
    const [input, setInput] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(1);
    const [blinkCursor, setBlinkCursor] = useState(true);
    const [erase, setErase] = useState(false);

    useEffect(() => {
        if(props) {
            setInput(props.words);
        }
    }, []);

    useEffect(() => {
        const blinkTimeout = setTimeout(() => {
            setBlinkCursor(!blinkCursor);
        }, 500);
        return () => clearTimeout(blinkTimeout);
    }, [blinkCursor])

    useEffect(() => {

        if(wordIndex === input.length) {
            return;
        }

        if(letterIndex === 1 && erase) {
            setErase(false);
            setWordIndex(wordIndex + 1 === input.length ? 0 : wordIndex + 1);
            return;
        }

        if(letterIndex === input[wordIndex].length + 1 && wordIndex !== input.length && !erase) {
            setTimeout(() => {
                setErase(true);
                setBlinkCursor(true);
            }, input[wordIndex].length * 25 + 1500)
            setBlinkCursor(false);
            return;
        }

        setTimeout(() => {
            setLetterIndex(erase ? letterIndex - 1 : letterIndex + 1);
        }, 10);
    }, [wordIndex, letterIndex, erase, input])

    return (
        <div className='text'>
            {input.length > 0 ? ` ${input[wordIndex].substring(0, letterIndex)}${blinkCursor ? "|" : " "}` : ""}
        </div>
      );
}

export default TypeWriter;