import React from "react";
import { BiDrink } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    return(
        <nav className="flex bg-gray-700 h-16 justify-between items-center" >
            <div className="flex ml-6">
                <BiDrink className="text-5xl text-gray-200"/>
            </div>
            <ul className="flex text-white text-lg gap-12 mr-16">
                <li onClick={() => navigate('/')} className="hover:text-gray-400 cursor-pointer">Home</li>
                <li onClick={() => navigate('/nonalcohol')} className="hover:text-gray-400 cursor-pointer">Non Alcholic</li>
                <li onClick={() => navigate('/alcoholic')} className="hover:text-gray-400 cursor-pointer">Alcholic</li>
            </ul>
        </nav>
    )
}

export default NavBar