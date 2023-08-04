const btnReg = document.querySelector('.btn-reg');
const inpUsernameReg = document.querySelector('.Username-inp-reg');
const inpEmailReg = document.querySelector('.E-mail-inp-reg');
const inpPhoneReg = document.querySelector('.Phone-inp-reg');
const inpPasswordReg = document.querySelector('.Password-inp-reg');
const inpConfirmPasswordReg = document.querySelector('.Confirm-Password-inp-reg');

btnReg.addEventListener('click', async () => {
    const objectToSerwer = {
        username: inpUsernameReg.value,
        email: inpEmailReg.value,
        phone: inpPhoneReg.value,
        pwd: inpPasswordReg.value,
    };

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        body: JSON.stringify(objectToSerwer),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status);
    console.log(await response.json());

});