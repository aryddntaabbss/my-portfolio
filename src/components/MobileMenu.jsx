import React, { useState } from 'react';

function MobileMenu ()
{
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <div className="md:hidden">
            <button onClick={ () => setIsOpen( !isOpen ) } className="px-2 py-2 bg-gray-200 dark:bg-gray-700">
                ☰
            </button>
            { isOpen && (
                <nav className="absolute bg-white dark:bg-gray-800 p-5 w-full">
                    <a href="#about" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                    <a href="#skill" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Skill</a>
                    <a href="#projects" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                    <a href="#contact" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                </nav>
            ) }
        </div>
    );
}

export default MobileMenu;
