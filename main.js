document.querySelector('.login-btn').addEventListener('click', () => {
    document.querySelector('.user-form').classList.add('active');
    document.querySelector('.user.login').classList.add('active');
    document.querySelector('.user.signup').classList.remove('active');
});

document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.user-form').classList.remove('active');
});

document.querySelectorAll('.toggle-form').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        if (target === 'signup') {
            document.querySelector('.user.login').classList.remove('active');
            document.querySelector('.user.signup').classList.add('active');
        } else if (target === 'login') {
            document.querySelector('.user.signup').classList.remove('active');
            document.querySelector('.user.login').classList.add('active');
        }
    });
});