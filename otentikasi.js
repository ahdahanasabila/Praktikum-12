function checkLogin() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Check if the entered username and password match the predefined values
    if (usernameInput === 'ahmad2017' && passwordInput === 'integrity') {
        alert('Login Sukses');
        window.location.href = 'halaman_baru.html'; // Redirect to a new page on successful login
    } else {
        alert('Login Gagal');
    }
}