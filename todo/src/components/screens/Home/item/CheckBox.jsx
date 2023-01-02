import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

const CheckBox = ({isCompleted, darkToggle}) => {
    return (
        <div
            className={`
            border-2 rounded-lg 
            ${darkToggle ? 'border-pink-400' : 'border-indigo-300'}
            ${isCompleted ? 'bg-pink-400' : ''}
            ${isCompleted&&!darkToggle ? 'bg-indigo-300' : ''}
                w-6 h-6 mr-3 flex align-center justify-center`
            }
        >
            {isCompleted&&
                <BsCheck2
                    size={24}
                    className={`${darkToggle ? 'text-gray-900' : 'text-white'}`}
                />
            }
        </div>
    );
};

export default CheckBox;