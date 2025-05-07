import './style.css';
import viteLogo from './assets/im.png'
import React from 'react';

export default function Biodata() {
    const biodata = {
        nama : "Zulfiqar Silmy Setiawan",
        umur : 15,
        lokasi : "Kudus",
        profesi : "Pelajar SMK RUS",
        hobi : "Ngoding",

    }


    return (
        <div className="biodata">
            
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
            <h2>Biodata {biodata.nama}</h2>
            <p>Nama    : {biodata.nama}</p>
            <p>Umur    : {biodata.umur}</p>
            <p>Lokasi  : {biodata.lokasi}</p>
            <p>Profesi : {biodata.profesi}</p>
            <p>Hobi    : {biodata.hobi}</p>
        </div>
        
    );
}
