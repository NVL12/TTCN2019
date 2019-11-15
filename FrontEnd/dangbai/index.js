"use strict";
exports.__esModule = true;
var CKEDITOR = require("../ckeditor/ckeditor.js");
var PostDetailModel = /** @class */ (function () {
    function PostDetailModel(init) {
        Object.assign(this, init);
    }
    return PostDetailModel;
}());
function onLoad() {
    // var CKEDITOR: any;
    // CKEDITOR.replace('post');
}
function submitForm() {
    // alert('submit form');
    // var CKEDITOR: any;
    alert(CKEDITOR.instances.content.getData());
    var postDetail = new PostDetailModel({
        id: 1,
        // @ts-ignore
        title: document.getElementById('title').value,
        content: CKEDITOR.instances.content.getData(),
        imageLinks: []
    });
    console.log(postDetail);
}
function uploadImage() {
    console.log('Call API');
}
