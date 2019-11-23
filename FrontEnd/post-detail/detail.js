var PostDetailModel = /** @class */ (function () {
    function PostDetailModel(init) {
        Object.assign(this, init);
    }
    return PostDetailModel;
}());
function getRandomPostDetail() {
    return new PostDetailModel({
        id: 1,
        title: '6 Lake District locations to visit this autumn',
        imageLinks: [
            'https://dulichmocchau.org/nview/at_==TYPENAME==_68b2bd8fb16bc17167b62e013ab3a3d9.jpg',
            '',
            ''
        ],
        content: "<h1>Travelling around Britain</h1>"
            + "<p>It&#39;s worth remembering that Britain is a relatively small country, so travelling to the many&nbsp;" + '<a href="https://www.visitbritain.com/gb/en/britains-most-spectacular-gardens">beautiful places</a>&nbsp;is actually&nbsp;pretty easy. If you&#39;re planning on visiting different areas of the UK there are a number of ways you can reach your destination in style.&nbsp;</p>'
            + "<h2><strong>Travel by train</strong></h2>"
            + '<p>If you&#39;re looking to visit any of Britain&#39;s major cities then travelling by train is a great option. Not only will you get from place to place swiftly, you&#39;ll also get to view some spectacular&nbsp;British&nbsp;sights as you&#39;re driven through. If you plan to do much travelling within Britain, invest in a&nbsp;<a href="https://www.visitbritainshop.com/world/britrail-gb-pass/" target="_blank">rail pass</a>. You can buy one before you arrive in the UK and a number of the schemes available cater to overseas visitors. If you&#39;re looking for an alternative&nbsp;option,&nbsp;<a href="https://www.visitbritain.com/gb/en/plan-your-trip/getting-around-britain/travelling-coach">coaches</a>&nbsp;cover a wide number of UK destinations and are cheaper than trains.&nbsp;</p>'
            + '<h2><strong>Hire a car</strong></h2>'
            + '<p>C<a href="https://www.visitbritain.com/gb/en/plan-your-trip/getting-around-britain/travelling-car">ar rental</a>&nbsp;can be arranged at major airports, large train stations and city centre&nbsp;outlets.&nbsp;To get the best deals, do your research and&nbsp;book before you arrive in the UK.&nbsp;</p>'
            + "<h2><strong>Travel by bike, narrowboat or horse</strong></h2>"
            + '<p>You may prefer more leisurely forms of transport such as bike,&nbsp;<a href="https://www.visitbritain.com/gb/en/explore-britain-narrowboat">narrowboat</a>&nbsp;or horse. Sometimes there are unusual picturesque local options, like the rowing-boat ferry between Southwold and Walberswick on the Blyth Estuary. Larger car ferries travel to Britain&rsquo;s islands and there is always the option of flying by plane from far southerly to far northerly destinations.</p>'
            + "<p>Taxis are available at all main coach and train stations</p>"
    });
}
function onLoad() {
    var id = sessionStorage.getItem('id');
    var detail = getRandomPostDetail();
    var slideDiv = document.getElementById('slide');
    document.getElementById('detail').innerHTML = detail.content;
    for (var _i = 0, _a = detail.imageLinks; _i < _a.length; _i++) {
        var imageLink = _a[_i];
        console.log('1');
        var div = document.createElement('div');
        div.setAttribute('class', 'intro-section');
        div.setAttribute('style', "background-image: url('" + imageLink + "')");
        slideDiv.appendChild(div);
    }
    // fetch('https://localhost:44381/api/values/' + id)
    // .then(response => response.json())
    // .then(data => {
    //     const detail = data; // Prints result from `response.json()` in getRequest
    //     var slideDiv = document.getElementById('slide');
    //     document.getElementById('detail').innerHTML = detail.content;
    //     for (var _i = 0, _a = detail.imageLinks; _i < _a.length; _i++) {
    //         var imageLink = _a[_i];
    //         console.log('1');
    //         var div = document.createElement('div');
    //         div.setAttribute('class', 'intro-section');
    //         div.setAttribute('style', "background-image: url('" + imageLink + "')");
    //         slideDiv.appendChild(div);
    //     }
    // })
}
