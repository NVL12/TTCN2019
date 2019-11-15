"use strict";
exports.__esModule = true;
var CKEDITOR = require("../ckeditor/ckeditor");
var PostDetailModel = /** @class */ (function () {
    function PostDetailModel(init) {
        Object.assign(this, init);
    }
    return PostDetailModel;
}());
function onLoad() {
    CKEDITOR.repalce('post');
}
function submitForm() {
    // alert(CKEDITOR.instances.post.getData());
    // const postDetail: PostDetailModel = new PostDetailModel({
    //     title: document.getElementById('title').getAttribute('value'),
    //     content: CKEDITOR.instances.post.getData()
    // });
    console.log(document.getElementById('title').value);
}
