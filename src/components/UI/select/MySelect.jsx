import React from "react";
import { v4 as uuidv4 } from 'uuid';


const MySelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(opt =>
                <option key={uuidv4()} value={opt.value}>
                    {opt.name}
                </option>)}
        </select>
    )
}

export default MySelect;
