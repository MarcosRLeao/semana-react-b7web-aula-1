import React, { useState } from 'react';
import * as C from './styled'
import {Item} from '../../types/Item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}


function ListItem({item, onChange} : Props) {

    return (
        <C.Container done={item.done}>
            <input 
            type="checkbox" 
            checked={item.done} 
            name="" 
            id={`list${item.id}`}
            onChange={e => onChange(item.id, e.target.checked)}
            
            />
            <label htmlFor={`list${item.id}`}>{item.name}</label>
        </C.Container>
    );
}

export default ListItem;