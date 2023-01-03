import React from 'react';
import Profile from '../Profile/Profile';

const List = ({ list }) => {

    let totalTime = 0;
    for (const activity of list) {
        totalTime = totalTime + activity.time;
    }

    return (
        <div className='sticky top-0 py-7 '>
            <Profile></Profile>
            <p>listed activities:{list.length}</p>
            <h2>Exercise Details</h2>
            <p>Exercise time: {totalTime}min</p>
            <p>Break time</p>

        </div>
    );
};

export default List;