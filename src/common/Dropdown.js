import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Dropdown = ({ title, content, iconColor }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="flex justify-between items-center border-b-2 border-white cursor-pointer w-full" onClick={toggleDropdown}>
                <h3>{title}</h3>
                {isOpen ? (
                    <RiArrowDropUpLine color={!iconColor ? "#FFB800" : ""} size={32} />
                ) : (
                    <RiArrowDropDownLine color={!iconColor ? "#FFB800" : ""} size={32} />
                )}
            </div>

            {isOpen && (
            <div className="font-normal">
                {content}
            </div>)}
        </>
    );
};

export default Dropdown;
