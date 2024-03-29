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
    const usernameP = document.querySelector('.username_p');
    const emailP = document.querySelector('.email_p');
    const phoneP = document.querySelector('.phone_p');
    const idP = document.querySelector('.id_p');


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
    const result = await response.json()

    usernameP.innerHTML = result[0].username;
    emailP.innerHTML = result[0].email;
    phoneP.innerHTML = result[0].phone;
    idP.innerHTML = result[0].id;

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