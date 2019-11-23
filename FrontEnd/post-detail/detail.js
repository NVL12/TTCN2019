function PostDetailModel(title, description, images) {
    this.title = title;
    this.description = description;
    this.images = images;
}
function onLoad() {
    // let id = sessionStorage.getItem('id');
    let id = '5dd8d5b86976b622487619e0';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });

    fetch('http://localhost:9000/api/components/' + id, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let slideDiv = document.getElementById('slide');
        document.getElementById('detail').innerHTML = data.description;
        for (let image of data.images) {
            let imageLink = image.path;
            let newImg = new Image;
            newImg.src = '../../Back-end/' + imageLink;
            console.log(newImg.src);
            let div = document.createElement('div');
            div.setAttribute('class', 'intro-section');
            div.setAttribute('style', "background-image: url('" + newImg.src + "')");
            slideDiv.appendChild(div);
        }
    })
    .catch(error => console.error(error));
}
