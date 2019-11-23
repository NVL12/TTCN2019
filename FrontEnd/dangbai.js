"use strict";
exports.__esModule = true;
var CKEDITOR = require("ckeditor/ckeditor.js");

function PostDetailModel(title, content, images) {
    this.title = title;
    this.description = content;
    this.images = images;
}
var imagesUploaded = [];
function submitForm() {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });
    let postDetail = new PostDetailModel(
        document.getElementById('title').value,
        CKEDITOR.instances.content.getData(),
        imagesUploaded
    );
    console.log(JSON.stringify(postDetail));

    fetch('http://localhost:9000/api/components/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postDetail)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error));
}

function uploadImage(input) {

    const headers = new Headers({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });
    let imagesReceived = [];
    let imageFiles;
    if (document.getElementById('image') && document.getElementById('image').files) {
        imageFiles = document.getElementById('image').files;
    }
    console.log(imageFiles);
    let form_data = new FormData();
    for (const image of imageFiles) {
        console.log(image);
        form_data.append('files', image);
    }

    fetch('http://localhost:9000/api/images', {
        method: 'POST',
        headers: headers,
        body: form_data
    })
    .then(response => {
        console.log('@ ', response);
        return response.json()
    })
    .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
        imagesReceived = data;
        let temp = [];
        imagesReceived.forEach((item) => {
            temp.push(item.id);
        });
        imagesUploaded = temp;
        console.log('result');
        console.log(imagesUploaded);
    })
    .catch(error => console.error(error));
}