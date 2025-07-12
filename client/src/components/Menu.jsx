import React from 'react'
import home from '../assets/home.svg'
import analyse from '../assets/analyse.svg'
import accounts from '../assets/calendar.svg'
import more from '../assets/others.svg'
const Menu = () => {
  return (
    <>
      <div className="menu bg-(--primary-color) hidden md:flex flex-col px-6 py-8 rounded-xl gap-4 h-full">
        <button className="w-10 h-10 bg-white rounded-[100%] text-2xl text-(--primary-color)">
          +
        </button>
        <div className="menu-option">
          <img src={home} alt="home" className="turn-white" />
          <p className="menu-option-name">Menu</p>
        </div>
        <div className="menu-option">
          <img src={analyse} alt="" className="turn-white" />
          <p className="menu-option-name">analyse</p>
        </div>
        <div className="menu-option">
          <img src={accounts} alt="" className="turn-white" />
          <p className="menu-option-name">accounts</p>
        </div>
        <div className="menu-option">
          <img src={more} alt="" className="turn-white" />
          <p className="menu-option-name">more</p>
        </div>
      </div>
      <div className="menu bg-(--primary-color) flex justify-between items-center py-2 relative h-full md:hidden">
        <div className="flex justify-around w-1/3">
          <div className="menu-option">
            <img src={home} alt="home" className="turn-white" />
          </div>
          <div className="menu-option">
            <img src={analyse} alt="" className="turn-white" />
          </div>
        </div>
        <button className="w-18 h-18 bg-white rounded-[100%] text-4xl text-(--primary-color) absolute -top-8 left-[42%] cursor-pointer">
          +
        </button>
        <div className="flex justify-around w-1/3">
          <div className="menu-option">
            <img src={accounts} alt="" className="turn-white" />
          </div>
          <div className="menu-option">
            <img src={more} alt="" className="turn-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu