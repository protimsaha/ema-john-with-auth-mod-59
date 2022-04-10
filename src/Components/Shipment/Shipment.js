import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAdress(event.target.value)
    }
    const handlePhoneNumber = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, address, phone }
        console.log(shipping)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipment Indormation</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="Name">Name</label>
                        <input onBlur={handleNameBlur} type="name" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Phone">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="text" name="phone-number" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;