async function onLoad() {
    let id = sessionStorage.getItem('id');
    // let id = '5dd8d5b86976b622487619e0';
    let token = localStorage.getItem('token');
    let loginLogout = document.getElementById('login-logout');
    if (!token) {
        loginLogout.setAttribute('href', '../dangnhap.html');
        loginLogout.innerText = 'Đăng nhập';
    } else {
        loginLogout.innerText = 'Đăng xuất';
        loginLogout.setAttribute('onClick', 'logout()');
        const a = document.createElement('a');
        a.setAttribute('href', '../dangbai.html');
        a.innerText = 'Đăng bài';
        document.getElementById('post').appendChild(a);
    }
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    });
    await fetch('http://127.0.0.1:9000/api/components/' + id, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('detail').innerHTML = data.description;
        document.getElementById('title').innerHTML = data.title;
        let slideDiv = document.getElementById('carouselExampleIndicators');
        let indicator = document.getElementById('indicator');
        for (let i = 0; i < data.images.length; i++) {
            let li = document.createElement('li');
            li.setAttribute('data-target', '#carouselExampleIndicators');
            li.setAttribute('data-slide-to', i + '');
            let div = document.createElement('div');
            div.setAttribute('class', 'carousel-item');
            if (i === 0) {
                li.setAttribute('class', 'active');
                div.setAttribute('class', 'carousel-item active');
            }
            let imageLink = data.images[i].path;
            let newImg = new Image;
            newImg.src = '../../Back-end/' + imageLink;
            console.log(newImg.src);
            let imgDiv = document.createElement('img');
            imgDiv.setAttribute('class', 'd-block w-100');
            imgDiv.setAttribute('src', newImg.src);
            div.appendChild(imgDiv);
            let inner = document.getElementById('inner');
            inner.appendChild(div);
            indicator.appendChild(li);
            slideDiv.appendChild(indicator);
            slideDiv.appendChild(inner);
        }
        let prev = document.createElement('a');
        prev.setAttribute('class', 'carousel-control-prev');
        prev.setAttribute('href', '#carouselExampleIndicators');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        let prevSpan = document.createElement('span');
        prevSpan.setAttribute('class', 'carousel-control-prev-icon');
        prevSpan.setAttribute('aria-hidden', 'true');
        let prevSpan1 = document.createElement('span');
        prevSpan1.setAttribute('class', 'sr-only');
        prevSpan1.innerHTML = 'Previous';
        prev.appendChild(prevSpan);
        prev.appendChild(prevSpan1);

        let next = document.createElement('a');
        next.setAttribute('class', 'carousel-control-next');
        next.setAttribute('href', '#carouselExampleIndicators');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        let nextSpan = document.createElement('span');
        nextSpan.setAttribute('class', 'carousel-control-next-icon');
        nextSpan.setAttribute('aria-hidden', 'true');
        let nextSpan1 = document.createElement('span');
        nextSpan1.setAttribute('class', 'sr-only');
        nextSpan1.innerHTML = 'Next';
        next.appendChild(nextSpan);
        next.appendChild(nextSpan1);

        slideDiv.appendChild(prev);
        slideDiv.appendChild(next);
    })
    .catch(error => console.error(error));
}

function logout() {
    localStorage.removeItem('token');
    window.location.replace('../index.html');
}
