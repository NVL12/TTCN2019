// export = CKEDITOR;
import * as CKEDITOR from '../ckeditor/ckeditor';

function onLoad() {
    var CKEDITOR: any;
    CKEDITOR.repalce('post');
}

function submitForm() {
    // alert('submit form');
    // var CKEDITOR: any;
    alert(CKEDITOR.instances.post.getData());
}