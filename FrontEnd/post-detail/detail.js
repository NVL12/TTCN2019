async function onLoad() {
     // let id = sessionStorage.getItem('id');
    let id = '5dd8d5b86976b622487619e0';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });
    await fetch('http://localhost:9000/api/components/' + id, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('detail').innerHTML = data.description;
        document.getElementById('title').innerHTML = data.title;
        let slideDiv = document.getElementById('carouselExampleIndicators');
        let indicator = document.getElementById('indicator');
        for (let i = 0; i < data.images.length; i++) {
            let li = document.createElement('li');
            li.setAttribute('data-target', '#carouselExampleIndicators');
            li.setAttribute('data-slide-to', i + '');
            let div = document.createElement('div');
            div.setAttribute('class', 'carousel-item');
            if (i === 0) {
                li.setAttribute('class', 'active');
                div.setAttribute('class', 'carousel-item active');
            }
            let imageLink = data.images[i].path;
            let newImg = new Image;
            newImg.src = '../../Back-end/' + imageLink;
            console.log(newImg.src);
            let imgDiv = document.createElement('img');
            imgDiv.setAttribute('class', 'd-block w-100');
            imgDiv.setAttribute('src', newImg.src);
            div.appendChild(imgDiv);
            let inner = document.getElementById('inner');
            inner.appendChild(div);
            indicator.appendChild(li);
            slideDiv.appendChild(indicator);
            slideDiv.appendChild(inner);
        }
        let prev = document.createElement('a');
        prev.setAttribute('class', 'carousel-control-prev');
        prev.setAttribute('href', '#carouselExampleIndicators');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        let prevSpan = document.createElement('span');
        prevSpan.setAttribute('class', 'carousel-control-prev-icon');
        prevSpan.setAttribute('aria-hidden', 'true');
        let prevSpan1 = document.createElement('span');
        prevSpan1.setAttribute('class', 'sr-only');
        prevSpan1.innerHTML = 'Previous';
        prev.appendChild(prevSpan);
        prev.appendChild(prevSpan1);

        let next = document.createElement('a');
        next.setAttribute('class', 'carousel-control-next');
        next.setAttribute('href', '#carouselExampleIndicators');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        let nextSpan = document.createElement('span');
        nextSpan.setAttribute('class', 'carousel-control-next-icon');
        nextSpan.setAttribute('aria-hidden', 'true');
        let nextSpan1 = document.createElement('span');
        nextSpan1.setAttribute('class', 'sr-only');
        nextSpan1.innerHTML = 'Next';
        next.appendChild(nextSpan);
        next.appendChild(nextSpan1);

        slideDiv.appendChild(prev);
        slideDiv.appendChild(next);
    })
    .catch(error => console.error(error));
}

// var PostDetailModel = /** @class */ (function () {
//     function PostDetailModel(init) {
//         Object.assign(this, init);
//     }
//     return PostDetailModel;
// }());
// function getRandomPostDetail() {
//     return new PostDetailModel({
//         id: 1,
//         title: '6 Lake District locations to visit this autumn',
//         imageLinks: [
//             'file:///D:/HK1-2019/Thuc%20tap%20cong%20nhan/TTCN2019/Back-end/src/uploads/1574491569435-4d3ce10d9848af7b234db40d8bd43bfe.jpg',
//             'file:///D:/HK1-2019/Thuc%20tap%20cong%20nhan/TTCN2019/Back-end/src/uploads/1574491569438-51869.jpg',
//             'file:///D:/HK1-2019/Thuc%20tap%20cong%20nhan/TTCN2019/Back-end/src/uploads/1574491569455-553439.jpg'
//         ],
//         content: "<h1>Travelling around Britain</h1>"
//             + "<p>It&#39;s worth remembering that Britain is a relatively small country, so travelling to the many&nbsp;" + '<a href="https://www.visitbritain.com/gb/en/britains-most-spectacular-gardens">beautiful places</a>&nbsp;is actually&nbsp;pretty easy. If you&#39;re planning on visiting different areas of the UK there are a number of ways you can reach your destination in style.&nbsp;</p>'
//             + "<h2><strong>Travel by train</strong></h2>"
//             + '<p>If you&#39;re looking to visit any of Britain&#39;s major cities then travelling by train is a great option. Not only will you get from place to place swiftly, you&#39;ll also get to view some spectacular&nbsp;British&nbsp;sights as you&#39;re driven through. If you plan to do much travelling within Britain, invest in a&nbsp;<a href="https://www.visitbritainshop.com/world/britrail-gb-pass/" target="_blank">rail pass</a>. You can buy one before you arrive in the UK and a number of the schemes available cater to overseas visitors. If you&#39;re looking for an alternative&nbsp;option,&nbsp;<a href="https://www.visitbritain.com/gb/en/plan-your-trip/getting-around-britain/travelling-coach">coaches</a>&nbsp;cover a wide number of UK destinations and are cheaper than trains.&nbsp;</p>'
//             + '<h2><strong>Hire a car</strong></h2>'
//             + '<p>C<a href="https://www.visitbritain.com/gb/en/plan-your-trip/getting-around-britain/travelling-car">ar rental</a>&nbsp;can be arranged at major airports, large train stations and city centre&nbsp;outlets.&nbsp;To get the best deals, do your research and&nbsp;book before you arrive in the UK.&nbsp;</p>'
//             + "<h2><strong>Travel by bike, narrowboat or horse</strong></h2>"
//             + '<p>You may prefer more leisurely forms of transport such as bike,&nbsp;<a href="https://www.visitbritain.com/gb/en/explore-britain-narrowboat">narrowboat</a>&nbsp;or horse. Sometimes there are unusual picturesque local options, like the rowing-boat ferry between Southwold and Walberswick on the Blyth Estuary. Larger car ferries travel to Britain&rsquo;s islands and there is always the option of flying by plane from far southerly to far northerly destinations.</p>'
//             + "<p>Taxis are available at all main coach and train stations</p>"
//     });
// }
// function onLoad() {
//     debugger;
//     var id = sessionStorage.getItem('id');
//     var detail = getRandomPostDetail();
//     var slideDiv = document.getElementById('slide');
//     var imgDiv = document.createElement('div');
//     imgDiv.setAttribute('class', 'hero-slide owl-carousel site-blocks-cover');
//     document.getElementById('detail').innerHTML = detail.content;
//     for (var i = 0; i < detail.imageLinks.length; i++) {
//         debugger;
//         var imageLink = new Image();
//         imageLink.src = detail.imageLinks[i];
//         console.log(imageLink.src);
//         var div = document.createElement('div');
//         div.setAttribute('class', 'intro-section');
//         div.setAttribute('style', "background-image: url('" + imageLink.src + "')");
//         imgDiv.appendChild(div);
//         slideDiv.appendChild(imgDiv);
//     }
// }
