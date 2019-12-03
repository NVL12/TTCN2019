const authenticated = () => {
  const email = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(`${email}:${password}`)
  });
  fetch('http://127.0.0.1:9000/api/auth', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      role: 'user',
      access_token: 'masterKey'
    })
  })
  .then(result => result.json())
  .then(user => {
    localStorage.setItem('token', user.token);
    window.location.replace('index.html');
  })
  .catch(err => {
    console.log('@ err ', err)
    alert(err);
  });
}
