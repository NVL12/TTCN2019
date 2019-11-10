function navigateToDetail(id) {
    sessionStorage.setItem('id', id);
    window.location.href = './detail.html';
}
var ImageModel = /** @class */ (function () {
    function ImageModel(init) {
        Object.assign(this, init);
    }
    return ImageModel;
}());
var imgs = [];
fetch('https://localhost:44381/api/values')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    imgs = data; // Prints result from `response.json()` in getRequest
    console.log(imgs);
});
// imgs.push(new ImageModel({
//     id: 1,
//     link: 'https://dulichmocchau.org/nview/at_==TYPENAME==_68b2bd8fb16bc17167b62e013ab3a3d9.jpg',
//     name: "Croatia"
// }));
// imgs.push(new ImageModel({
//     id: 2,
//     link: 'https://mangthuvien.net/Uploads/Post/tonyteo-150118030113-hoc-tu-vung-tieng-anh-du-lich-travel.jpg',
//     name: "Croatia"
// }));
// imgs.push(new ImageModel({
//     id: 3,
//     link: 'https://previews.123rf.com/images/tanjakrstevska/tanjakrstevska1107/tanjakrstevska110700018/10089486-travel-%C3%A2%E2%82%AC%E2%80%9C-collection-of-the-world-monuments.jpg',
//     name: "Croatia"
// }));
// imgs.push(new ImageModel({
//     id: 4,
//     link: 'https://dulichmocchau.org/nview/at_==TYPENAME==_68b2bd8fb16bc17167b62e013ab3a3d9.jpg',
//     name: "Croatia"
// }));
function onLoadIndex() {
    for (var _i = 0, imgs_1 = imgs; _i < imgs_1.length; _i++) {
        var img = imgs_1[_i];
        var newsFeed = document.getElementById("news-feed");
        var div1 = document.createElement('div');
        div1.setAttribute('onClick', 'navigateToDetail(' + img.id + ')');
        div1.setAttribute('class', 'col-md-6 col-lg-4 mb-4');
        var div = document.createElement("div");
        div.setAttribute('class', 'service-39381');
        var image = document.createElement('img');
        image.setAttribute('src', img.link);
        image.setAttribute('class', 'img-fluid');
        image.setAttribute('class', 'image');
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'p-4');
        var h3 = document.createElement('h3');
        h3.innerHTML = img.name;
        div2.appendChild(h3);
        div.appendChild(image);
        div.appendChild(div2);
        div1.appendChild(div);
        newsFeed.appendChild(div1);
    }
}
