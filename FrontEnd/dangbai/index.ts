import * as CKEDITOR from '../ckeditor/ckeditor.js';

class PostDetailModel {
    id: number;
    title: string;
    content: string;
    imageLinks: string[];
    constructor(init?: Partial<PostDetailModel>) {
        (<any>Object).assign(this, init);
    }
}

function onLoad() {
    // var CKEDITOR: any;
    // CKEDITOR.replace('post');
}

function submitForm() {
    // alert('submit form');
    // var CKEDITOR: any;
    alert(CKEDITOR.instances.content.getData());

    // const postDetail: PostDetailModel = new PostDetailModel({
    //     id: 1,
    //     // @ts-ignore
    //     title: document.getElementById('title').value,
    //     content: CKEDITOR.instances.content.getData(),
    //     imageLinks: []
    // });
    console.log(new PostDetailModel({
        id: 1,
        // @ts-ignore
        title: document.getElementById('title').value,
        content: CKEDITOR.instances.content.getData(),
        imageLinks: []
    }));
}

function uploadImage() {
    console.log('Call API');
}