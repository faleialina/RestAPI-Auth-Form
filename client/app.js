const btnReg = document.querySelector('.btn-reg');
const inpUsernameReg = document.querySelector('.Username-inp-reg');
const inpEmailReg = document.querySelector('.E-mail-inp-reg');
const inpPhoneReg = document.querySelector('.Phone-inp-reg');
const inpPasswordReg = document.querySelector('.Password-inp-reg');
const inpConfirmPasswordReg = document.querySelector('.Confirm-Password-inp-reg');

const btnAuth = document.querySelector('.btn-auth');
const inpEmailAuth = document.querySelector('.E-mail-inp-auth');
const inpPasswordAuth = document.querySelector('.Password-inp-auth');

btnReg.addEventListener('click', async () => {
    const objectToSerwerReg = {
        username: inpUsernameReg.value,
        email: inpEmailReg.value,
        phone: inpPhoneReg.value,
        pwd: inpPasswordReg.value,
    };

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        body: JSON.stringify(objectToSerwerReg),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status);
    console.log(await response.json());

});

btnAuth.addEventListener('click', async () => {
    const objectToSerwerAuth = {
        email: inpEmailAuth.value,
        pwd: inpPasswordAuth.value,
    };
    const response = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        body: JSON.stringify(objectToSerwerAuth),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status);
    console.log(await response.json());
})