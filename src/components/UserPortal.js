import React from 'react';
import CardDetails from './CardDetails';
import PetForm from './PetForm';
import BookingForm from './BookingForm';
import serviceData from '../components/servicedata.json';

import './UserPortal.css';
import Navbar8 from './navbar8';


const UserPortal = () => {
    return (
        <>
            <Navbar8 />
            <div className="card-container">
                {serviceData.map(item => {
                    return (<CardDetails key={item.id} id={item.id} serviceData={item} />)
                })}
            </div>
            <PetForm />
            <BookingForm />
        </>
    );
};

export default UserPortal;
