const authenticated = () => {
    const email = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert('Email sai định dạng, vui lòng nhập lại!');
        window.location.reload();
        return;
    }
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${email}:${password}`)
    });
    fetch('http://127.0.0.1:9000/api/auth', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            access_token: 'masterKey'
        })
    })
        .then(result => result.json())
        .then(user => {
            localStorage.setItem('token', user.token);
            user.role === 'user' ?
                window.location.replace('index.html') :
                window.location.replace('Admin.html');
        })
        .catch(err => {
            alert('Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại!');
        });
}
