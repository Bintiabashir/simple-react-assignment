const addToDb = breakTime => {
    let breakTimes;

    const storedTime = localStorage.getItem('break-times');
    if (storedTime) {
        breakTimes = JSON.parse(storedTime);
    }
    else {
        breakTimes = {}
    }
    const quantity = breakTimes[breakTime];
    if (quantity) {

        const newQuantity = quantity + 1;
        breakTimes[breakTime] = newQuantity;
    }
    else {
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