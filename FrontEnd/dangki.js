const register=()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const headers = new Headers({
        'Content-Type': 'application/json',
      });
    fetch('http://127.0.0.1:9000/api/users', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      role: 'user',
      access_token: 'masterKey',
      email:email,
      password:password
    })
  })
  .then(result => result.json())
  .then(user => {
    console.log(user);
    //alert(user)
    //localStorage.setItem('token', user.token);
   window.location.replace('dangnhap.html');
  })
  .catch(err => {
    console.log(err);
  });
}