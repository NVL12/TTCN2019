function navigateToDetail(id) {
   sessionStorage.setItem('id',id);
    window.location.href = 'post-detail/detail.html';
}
 function onLoadIndex() {

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });
    fetch('http://localhost:9000/api/components/',{
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let result=data.results;
        console.log(result);
        for (let index = 0; index < result.length; index++) {
            var img = result[index];
                    var newsFeed = document.getElementById("news-feed");
                    var div1 = document.createElement('div');
                    var id=img.id;
                    div1.setAttribute('onClick', "navigateToDetail('"+id+"')");
                    console.log(img.id);
                    div1.setAttribute('class', 'col-md-6 col-lg-4 mb-4');
                    var div = document.createElement("div");
                    div.setAttribute('class', 'service-39381');
                    var image = document.createElement('img');
                    let imageLink =  img.images[0].path;
                    let newImg = new Image;
                    newImg.src = '../Back-end/' + imageLink;
                    image.setAttribute('src',newImg.src);
                    image.setAttribute('class', 'img-fluid');
                    image.setAttribute('class', 'image');
                    var div2 = document.createElement('div');
                    div2.setAttribute('class', 'p-4');
                    var h3 = document.createElement('h3');
                    h3.innerHTML = img.title;
                    div2.appendChild(h3);
                    div.appendChild(image);
                    div.appendChild(div2);
                    div1.appendChild(div);
                    newsFeed.appendChild(div1);
            
        }
    })
 }
