import React, { useState, KeyboardEvent } from 'react';
import * as C from './styled'

type Props = {
    onEnter: (taskName: string) => void
}



function AddArea({onEnter}: Props) {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {

        console.log(e.code);
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== ''){
            onEnter(inputText);
            setInputText('')
        }

    }


    return (
        <C.Container>
            <div className="image">➕</div>

            <input 
                type="text" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Adicione uma tarefa"
            />

        </C.Container>
    );
}

export default AddArea;