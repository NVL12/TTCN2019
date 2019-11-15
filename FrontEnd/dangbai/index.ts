import * as CKEDITOR from '../ckeditor/ckeditor';

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
    CKEDITOR.repalce('post');
}

function submitForm() {
    // alert(CKEDITOR.instances.post.getData());
    // const postDetail: PostDetailModel = new PostDetailModel({
    //     title: document.getElementById('title').getAttribute('value'),
    //     content: CKEDITOR.instances.post.getData()
    // });
    console.log(document.getElementById('title').value)
}