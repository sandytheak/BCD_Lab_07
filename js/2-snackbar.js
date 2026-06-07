
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const delayInput = Number(form.elements.delay.value);
    const stateInput = form.elements.state.value;

    const notificationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (stateInput === 'fulfilled') {
                resolve(delayInput);
            } else {
                reject(delayInput);
            }
        }, delayInput);
    });

    notificationPromise
        .then((delay) => {
            iziToast.success({
                title: '✅ OK',
                message: `Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: '❌ Error',
                message: `Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
    
    form.reset();
});