import React, { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';

const List = ({ list }) => {

    const times = [5, 10, 15, 20, 25];

    const [time, setTime] = useState(0);

    const handleShowToList = (time) => {
        setTime(time);
        addToDb(time);
    }

    let totalActivityTime = 0;
    for (const activity of list) {
        totalActivityTime = totalActivityTime + activity.time;
    }

    return (
        <div className='sticky top-0 py-7 mx-auto text-center'>
            <Profile></Profile>
            <Break handleShowToList={handleShowToList} times={times}></Break>


            <h2 className='my-4 font-bold text-red-700 pt-3 text-lg'>Activities Details</h2>

            <div className="py-3 bg-rose-100 rounded-lg py-2 m-1 mr-2 text-rose-900">

                <p className='font-semibold'>Total Activities time:</p>
                <p className='font-medium text-red-400 text-lg pb-2'> {totalActivityTime} minutes</p>

                <p className='font-semibold'>Break time: <span className='font-medium text-red-400 text-lg pb-2'>{time} minutes</span></p>
            </div>

        </div>
    );
};

export default List;