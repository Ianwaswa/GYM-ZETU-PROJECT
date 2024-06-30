// scripts.js

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const createAccountModal = document.getElementById('createAccountModal');
    const loginModal = document.getElementById('loginModal');
    if (event.target == createAccountModal) {
        createAccountModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your account creation logic here
    alert('Account created successfully!');
    closeModal('createAccountModal');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    alert('Logged in successfully!');
    closeModal('loginModal');
});
