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
        <div className='sticky top-0 py-7 '>
            <Profile></Profile>
            <Break handleShowToList={handleShowToList} breakTimes={breakTimes}></Break>
            <p>listed activities:{list.length}</p>
            <h2>Exercise Details</h2>
            <p>Exercise time: {totalTime} minutes</p>
            <p>Break time: {breakTime} minutes</p>

        </div>
    );
};

export default List;