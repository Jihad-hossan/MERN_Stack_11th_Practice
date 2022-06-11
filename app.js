/* Making a form with custom DOM */

const login_form = document.createElement('form');
login_form.classList.add('login_form');
login_form.classList.add('p-5');
login_form.classList.add('my-3');
login_form.classList.add('rounded');
login_form.style.background = '#f1f1f1';

const nameField = document.createElement('input');
nameField.classList.add('form-control');
nameField.classList.add('my-3');
nameField.placeholder = 'Your name...'
nameField.type = 'text';

const emailField = document.createElement('input');
emailField.classList.add('form-control');
emailField.classList.add('my-3');
emailField.placeholder = 'Your email...'
emailField.type = 'email';

const password = document.createElement('input');
password.classList.add('form-control');
password.classList.add('my-3');
password.placeholder = 'Password...'
password.type = 'password';

const form_submit = document.createElement('input');
form_submit.classList.add('border-light');
form_submit.classList.add('px-3');
form_submit.classList.add('rounded');
form_submit.style.background = '#fff';
form_submit.type = 'submit';

login_form.append(nameField);
login_form.append(emailField);
login_form.append(password);
login_form.append(form_submit);

document.querySelector('#intro').append(login_form);
console.log(login_form);






