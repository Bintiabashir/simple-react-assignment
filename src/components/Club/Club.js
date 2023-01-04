
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import List from '../List/List';

const Club = () => {
    const [activities, setActivities] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activity) => {
        const newList = [...list, activity];
        setList(newList);
    }



    return (

        <div className="grid lg:grid-cols-5 md:grid-cols-4 ">

            <div className="lg:col-span-4 md:col-span-3 ">

                <div className=' text-center'>

                    <div className="flex flex-row text-2xl text-bold justify-center my-4 text-error">
                        <FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon>
                        <h2 className='ml-3'>Kids-Entertained-Club</h2>
                    </div>

                    <h3 className='text-red-700'>Select your kids creative activities</h3>
                </div>

                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 m-7 mt-5">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToList={handleAddToList}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className="bg-white md:inline">
                <List list={list}></List>
            </div>
        </div>

    );
};

export default Club;