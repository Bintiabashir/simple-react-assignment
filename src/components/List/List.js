import React, { useState } from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';

const List = ({ list }) => {

    const breakTimes = [5, 10, 15, 20, 25];

    const [breakTime, setBreakTime] = useState(0);

    const handleShowToList = (breakTime) => {
        setBreakTime(breakTime);
    }

    let totalTime = 0;
    for (const activity of list) {
        totalTime = totalTime + activity.time;
    }

    return (
        <div className='sticky top-0 py-7 mx-auto text-center'>
            <Profile></Profile>
            <Break handleShowToList={handleShowToList} breakTimes={breakTimes}></Break>


            <h2 className='my-4 font-bold text-red-700 pt-3 text-lg'>Activities Details</h2>

            <div className="py-3 bg-rose-100 rounded-lg py-2 m-1 mr-2 text-rose-900">

                <p className='font-semibold'>Total Activities time:</p>
                <p className='font-medium text-red-400 text-lg pb-2'> {totalTime} minutes</p>

                <p className='font-semibold'>Break time: <span className='font-medium text-red-400 text-lg pb-2'>{breakTime} minutes</span></p>
            </div>

        </div>
    );
};

export default List;