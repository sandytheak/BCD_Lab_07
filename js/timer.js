let userSelectedDate;
const btnStart = document.querySelector("button[data-start]");
btnStart.disabled = true;

const options = {
    enableTime: true,

    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const today = new Date();
        userSelectedDate = selectedDates[0];

        if (userSelectedDate <= today) {
            iziToast.error({
                title: 'Ooops',
                message: 'Please choose a date in the future!',
                position: 'center'
            });;
            btnStart.disabled = true;
        } else {
            btnStart.disabled = false;
        }
    },
};

const fp = flatpickr("#datetime-picker", options); // flatpickr

const inputElement = document.querySelector('#datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', () => {
    
    btnStart.disabled = true;
    inputElement.disabled = true;

    timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = userSelectedDate - currentTime;

        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            inputElement.disabled = false;
            
            updateTimerInterface(0, 0, 0, 0);
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeDifference);

        updateTimerInterface(days, hours, minutes, seconds);

    }, 1000); // 1000 ms = 1 s
});

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimerInterface(days, hours, minutes, seconds) {
    daysElement.textContent = addLeadingZero(days); 
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
}