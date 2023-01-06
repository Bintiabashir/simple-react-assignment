import React, { useEffect, useState } from 'react';
import { addToDb, getStoredTime } from '../../utilities/fakedb';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import QuestionAnswer from '../QuestionsAnswers/QuestionAnswer';

const List = ({ list }) => {
    const notify = () => toast("Congratulations! You are done with your activities.");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const times = [5, 10, 15, 20, 25];

    const [time, setTime] = useState(0);

    useEffect(() => {

        const storedTime = getStoredTime();
        for (let breakTime in storedTime) {
            breakTime = (JSON.parse(breakTime))
            const addedTime = times.find(time => time === breakTime);
            if (addedTime) {
                setTime(addedTime);
            }

        }
    }, [times])

    const handleShowToList = (time) => {
        setTime(time);
        addToDb(time);
    }

    let totalActivityTime = 0;
    for (const activity of list) {
        totalActivityTime = totalActivityTime + activity.time;
    }

    return (
        <div className='sticky top-0 py-7 lg:py-4 mx-auto text-center'>
            <Profile></Profile>
            <Break handleShowToList={handleShowToList} times={times}></Break>


            <h2 className='my-4 font-bold text-red-700 pt-3 lg:pt-0 text-lg'>Activities Details</h2>

            <div className="py-3 bg-rose-100 rounded-lg py-2 m-1 mb-4 mr-2 text-rose-900">

                <p className='font-semibold'>Total Activities time:</p>
                <p className='font-medium text-red-400 text-lg pb-2'> {totalActivityTime} minutes</p>

                <p className='font-semibold'>Break time: <span className='font-medium text-red-400 text-lg pb-2'>{time} minutes</span></p>
            </div>

            <button onClick={notify} className=' btn-secondary btn mt-4 mb-3'>Activity Completed</button>
            <ToastContainer />

            <div className="md:hidden">
                <QuestionAnswer ></QuestionAnswer>
            </div>
        </div>
    );
};

export default List;