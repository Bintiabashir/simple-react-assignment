
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Club = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (

        <div className="grid grid-cols-5">

            <div className="col-span-4">

                <div className=' text-center'>

                    <div className="flex flex-row text-2xl text-bold justify-center my-4 text-error">
                        <FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon>
                        <h2 className='ml-3'>Kids-Entertained-Club</h2>
                    </div>

                    <h3 className='text-red-700'>Select your kids creative activities</h3>
                </div>

                <div className=" grid grid-cols-3 gap-5 m-7 mt-5">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className="bg-white">
                <h4>list Summary</h4>
            </div>
        </div>

    );
};

export default Club;