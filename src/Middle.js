import React, { useState, forwardRef } from 'react';

const Middle = forwardRef((props, ref) => {
    const [text, setText] = useState('');
    const [saveText1, setsaveText1] = useState('-------');
    const [saveText2, setsaveText2] = useState('-------');
    const [saveText3, setsaveText3] = useState('-------');
    const [saveText4, setsaveText4] = useState('-------');
    const [translateText, setTranslateText] = useState('');
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('en');

    const handleTranslate = async () => {
        if (sourceLang === targetLang) {
            setTranslateText(text)
            return;
        }
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbz0U1LPSArTQd31JD51l9i9-OA7Dun31qtzFys0F6bK058htb7d9TN1WUoWROWvHQGSOg/exec?text=${encodeURIComponent(text)}&sourceLang=${encodeURIComponent(sourceLang)}&targetLang=${encodeURIComponent(targetLang)}`);
            const translatedText = await response.text();
            setTranslateText(translatedText);
        } catch (error) {
            setTranslateText('Error');
        }
    };

    const handleClear = () => {
        setText('');
        setTranslateText('');
    };

    const handleSave = () => {
        if (text !== '' && text !== saveText1 && text !== saveText2 && text !== saveText3 && text !== saveText4) {
            if (saveText1 === '-------') {
                setsaveText1(text);
            } else if (saveText2 === '-------') {
                setsaveText2(saveText1);
                setsaveText1(text);
            } else if (saveText3 === '-------') {
                setsaveText3(saveText2);
                setsaveText2(saveText1);
                setsaveText1(text);
            } else if (saveText4 === '-------') {
                setsaveText4(saveText3);
                setsaveText3(saveText2);
                setsaveText2(saveText1);
                setsaveText1(text);
            } else {
                setsaveText4(saveText3);
                setsaveText3(saveText2);
                setsaveText2(saveText1);
                setsaveText1(text);
            }
        }
    };

    const handleHistory = (historyText) => {
        if (historyText !== '-------') {
        setText(historyText);}
    };

    return (
        <div className='complete'>
            <div className='list'>
                <label htmlFor="lang_input">Choose input language:</label>
                <select id="lang_input" onChange={(e) => setSourceLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="hi">Hindi</option>
                    <option value="zh-CN">Chinese</option>
                </select>
                <label htmlFor="lang_output">Choose output language:</label>
                <select id="lang_output" onChange={(e) => setTargetLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="hi">Hindi</option>
                    <option value="zh-CN">Chinese</option>
                </select>
            </div>
            <div className='writing'>
                <div className='box'>
                    <label htmlFor="input_text">Enter text:</label>
                    <textarea id="input_text" name="input" rows="10" cols="50" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className='box'>
                    <label htmlFor="output_text">Output text:</label>
                    <div id="output_text" className="output-area">{translateText}</div>
                </div>
            </div>
            <div className='trans_save'>
                <button id='trans_save' className='trans_save1' onClick={handleClear}>Clear</button>
                <button id='trans_save' className='trans_save2' onClick={handleTranslate}>Translate</button>
                <button id='trans_save' className='trans_save2' onClick={handleSave}>Save</button>
            </div>
            <label className='recent_Search' htmlFor="recent">Recent Search</label>
            <div className='search'>
                <div id="history1" className="output-area2" onClick={() => handleHistory(saveText1)}>{saveText1}</div>
                <div id="history2" className="output-area2" onClick={() => handleHistory(saveText2)}>{saveText2}</div>
                <div id="history3" className="output-area2" onClick={() => handleHistory(saveText3)}>{saveText3}</div>
                <div id="history4" className="output-area2" onClick={() => handleHistory(saveText4)}>{saveText4}</div>
            </div>
            <h1 ref={ref}>Word of the Day: </h1>
            <div className='newword' >
                <div className='word'>Esoteric</div>
                <div className='pronunciation'>[ˌesəˈterik]</div>
                <label htmlFor="synonym">Synonym</label>
                <div className='synonym'>abstruse, obscure, arcane</div>
                <label htmlFor="acronym">Acronym</label>
                <div className='acronym'>ESOT</div>
                <label htmlFor="examples">Examples</label>
                <ul>
                    <li>Many of the laws were esoteric and understood only by the legal scholars.</li>
                    <li>The philosopher's lectures were so esoteric that only a few students could comprehend them.</li>
                </ul>
            </div>
        </div>
    );
});

export default Middle;