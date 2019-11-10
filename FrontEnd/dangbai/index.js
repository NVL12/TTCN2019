"use strict";
exports.__esModule = true;
// export = CKEDITOR;
var CKEDITOR = require("../ckeditor/ckeditor");
function onLoad() {
    var CKEDITOR;
    CKEDITOR.repalce('post');
}
function submitForm() {
    // alert('submit form');
    // var CKEDITOR: any;
    alert(CKEDITOR.instances.post.getData());
}
