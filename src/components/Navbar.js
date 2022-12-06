import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-2 justify-around items-center h-[100px]">
        <div>
            <h1 className="font-bold text-stone-700 text-4xl italic ">Recordshop</h1>
        </div>
        <div className="flex w-52 justify-evenly gap-2">
        <Link to="/login"><button className="">Login</button></Link>
        <Link to="/register"><button className="">Register</button></Link>
        </div>
        </div>
    );
    };

export default Navbar;
