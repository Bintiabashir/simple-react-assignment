import React from 'react';
import './Activity.css'

const Activity = ({ handleAddToList, activity }) => {

    const { picture, name, about, age, time } = activity;

    return (
        <div className='activity border-rose-100 bg-white border-2 rounded-lg relative'>
            <img className='w-52 h-44 rounded-lg m-auto mt-3 mb-2' src={picture} alt="" />
            <div className="px-3">
                <h4 className="text-center text-rose-700 text-medium font-semibold font-serif h-10 pb-1">{name}</h4>
                <p ><small className='text-rose-400 leading-2'>{about}</small></p>
                <h5 className='text-red-500 py-2'><span className=' font-medium'>For Age:</span> {age}</h5>
                <h6 className='text-red-600 font-medium pb-2'>Time for Making: <span className='font-bold text-rose-500'>{time}min</span></h6>
            </div>
            <button onClick={() => handleAddToList(activity)} className="btn btn-error hover:btn-secondary rounded-none rounded-b w-full border-none absolute bottom-0 left-0 right-0">
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;