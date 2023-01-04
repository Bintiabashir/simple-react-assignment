import React from 'react';

const Break = (props) => {

    const { handleShowToList, times } = props;

    return (
        <div className='my-5'>
            <h2 className='font-bold text-red-700 pb-3 text-lg'>Break Time</h2>
            <div className=" bg-rose-100 rounded-lg py-2 m-1 mr-0.5 text-rose-900 font-bold">

                {
                    times.map(time => <button
                        onClick={() => handleShowToList(time)}
                        key={times.indexOf(time)}
                        className="btn-circle btn-secondary ml-1.5 btn-sm text-xs">
                        <small>{time}min</small>
                    </button>)
                }

            </div>
        </div>
    );
};

export default Break;