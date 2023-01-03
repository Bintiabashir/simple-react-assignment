import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    return (
        <div className='mb-7 text-center'>
            <h1 className='text-xl font-bold text-red-700 pb-3 font-serif'>Young Artificer's Profile</h1>
            <div className=" bg-rose-50 rounded-lg p-1 m-1 text-rose-900 leading-none">
                <h2 className='font-semibold text-lg'>Bintia Binte Bashir</h2>
                <p className='pb-2'>
                    <small className='font-medium'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</small>
                </p>
                <p ><small className='text-xs text-red-800'>I'm very comfortable with being productive. I like making creative things.</small></p>
            </div>
        </div>
    );
};

export default Profile;