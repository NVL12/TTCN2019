"use strict";
exports.__esModule = true;
var CKEDITOR = require("../ckeditor/ckeditor.js");
function PostDetailModel(title, content, images) {
    this.title = title;
    this.content = content;
    this.images = images;
}
function onLoad() {
    // var CKEDITOR: any;
    // CKEDITOR.replace('post');
}
function submitForm() {
    let images;
    if (document.getElementById('image') && document.getElementById('image').files) {
        images = document.getElementById('image').files;
    }
    const postDetail = new PostDetailModel(
        document.getElementById('title').value,
        CKEDITOR.instances.content.getData(),
        images
    );
    console.log(JSON.stringify(postDetail));
    // fetch('https://api.github.com/users/KrunalLathiya', {
    //     method: 'POST',
    //     body: JSON.stringify(postDetail)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data) // Prints result from `response.json()` in getRequest
    // })
    // .catch(error => console.error(error));
}
function uploadImage(input) {
    console.log(input);
}
