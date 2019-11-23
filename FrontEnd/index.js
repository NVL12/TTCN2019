function navigateToDetail(id) {
    sessionStorage.setItem('id', id);
    window.location.href = 'post-detail/detail.html';
}
// var ImageModel = /** @class */ (function () {
//     function ImageModel(init) {
//         Object.assign(this, init);
//     }
//     return ImageModel;
// }());
//var imgs = [];
// fetch('https://localhost:9000/api/components')
//     .then(function (response) { return response.json(); })
//     .then(function (data) {
//     imgs = data; // Prints result from `response.json()` in getRequest
//     console.log(imgs);
// });
fetch('https://localhost:9000/api/components',{
    method:'GET',
    
})
// function onLoadIndex() {
//     for (var _i = 0, imgs_1 = imgs; _i < imgs_1.length; _i++) {
//         var img = imgs_1[_i];
//         var newsFeed = document.getElementById("news-feed");
//         var div1 = document.createElement('div');
//         div1.setAttribute('onClick', 'navigateToDetail(' + img.id + ')');
//         div1.setAttribute('class', 'col-md-6 col-lg-4 mb-4');
//         var div = document.createElement("div");
//         div.setAttribute('class', 'service-39381');
//         var image = document.createElement('img');
//         image.setAttribute('src', img.link);
//         image.setAttribute('class', 'img-fluid');
//         image.setAttribute('class', 'image');
//         var div2 = document.createElement('div');
//         div2.setAttribute('class', 'p-4');
//         var h3 = document.createElement('h3');
//         h3.innerHTML = img.name;
//         div2.appendChild(h3);
//         div.appendChild(image);
//         div.appendChild(div2);
//         div1.appendChild(div);
//         newsFeed.appendChild(div1);
//     }
// }
