const addToDb = time => {
    let breakTimes;

    const storedTime = localStorage.getItem('break-times');
    if (storedTime) {
        breakTimes = JSON.parse(storedTime);
    }
    else {
        breakTimes = {}
    }
    const quantity = breakTimes[time];

    if (quantity) {

        const newQuantity = quantity + 1;
        breakTimes[time] = newQuantity;
    }
    else {

        breakTimes[time] = 1;
    }
    localStorage.setItem('break-times', JSON.stringify(breakTimes));
}

export { addToDb }