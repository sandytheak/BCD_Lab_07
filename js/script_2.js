const formData = {email: "", message: ""};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
    // Check if the input element (or its parent) matches our target element
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim(); // eliminate space on the edge

    formData[fieldName] = fieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
