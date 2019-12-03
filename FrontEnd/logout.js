const removeToken = () => {
    localStorage.removeItem('token');
    window.location.replace('index.html');
}
