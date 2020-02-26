// agar function arrow HelloComponent bisa berjalan di react maka tambahkan react
import React from 'react';
import './HelloComponent.css'

const HelloComponent = () => {
    return <p className='text-p'> Ini Adalah Arrow Function yang Ada di Folder Component </p>
}

// agar component ini dapat dipakai dimana saja
export default HelloComponent;