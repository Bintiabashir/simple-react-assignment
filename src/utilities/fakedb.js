const addToDb = breakTime => {
    let breakTimes;

    const storedTime = localStorage.getItem('break-times');
    if (storedTime) {
        breakTimes = (JSON.parse(storedTime));
    }
    else {
        breakTimes = {}
    }
    const quantity = breakTimes[breakTime];
    if (quantity) {

        const newQuantity = quantity + 1;
        breakTimes[breakTime] = newQuantity;

        breakTime = (JSON.stringify(breakTime));
        const keys = Object.keys(breakTimes);
        let restTimeString = keys.filter(rt => rt !== breakTime);
        const restTimes = restTimeString.map(parseFloat);
        restTimes.forEach(restTime =>
            delete breakTimes[restTime]
        );
    }
    else {
        breakTimes = {};
        breakTimes[breakTime] = 1;
    }

    localStorage.setItem('break-times', JSON.stringify(breakTimes));
}

const getStoredTime = () => {
    let breakTimes = {};

    const storedTime = localStorage.getItem('break-times');
    if (storedTime) {
        breakTimes = JSON.parse(storedTime);
    }

    return breakTimes;
}

export { addToDb, getStoredTime }