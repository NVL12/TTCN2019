class PostDetailModel {
    id: number;
    title: string;
    content: string;
    imageLinks: string[];
    constructor(init?: Partial<PostDetailModel>) {
        (<any>Object).assign(this, init);
    }
}

function getRandomPostDetail(): PostDetailModel {
    return new PostDetailModel({
        id: 1,
        title: '6 Lake District locations to visit this autumn',
        imageLinks: [
            'https://dulichmocchau.org/nview/at_==TYPENAME==_68b2bd8fb16bc17167b62e013ab3a3d9.jpg',
            '',
            ''
        ],
        content: "<h1>Travelling around Britain</h1>"
        + "<p>It&#39;s worth remembering that Britain is a relatively small country, so travelling to the many&nbsp;"+'<a href="https://www.visitbritain.com/gb/en/britains-most-spectacular-gardens">beautiful places</a>&nbsp;is actually&nbsp;pretty easy. If you&#39;re planning on visiting different areas of the UK there are a number of ways you can reach your destination in style.&nbsp;</p>'
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
    const id = sessionStorage.getItem('id');
    const detail: PostDetailModel = getRandomPostDetail();
    var slideDiv = document.getElementById('slide');

    document.getElementById('detail').innerHTML = detail.content;
    
    for (const imageLink of detail.imageLinks) {
        console.log('1');
        var div = document.createElement('div');
        div.setAttribute('class', 'intro-section');
        div.setAttribute('style', "background-image: url('" + imageLink + "')");
        slideDiv.appendChild(div);
    }
    // fetch('https://localhost:44381/api/values/' + id)
    // .then(response => response.json())
    // .then(data => {
    //     detail = data; // Prints result from `response.json()` in getRequest
    //     console.log(detail);

    //     const h1 = document.createElement('h1');
    //     h1.setAttribute('style', 'color: #2689e7');
    //     h1.innerHTML = detail.title;
    //     const p = document.createElement('p');
    //     p.innerHTML = detail.content;
    //     p.setAttribute('style', 'color: #000');
    //     document.getElementById('detail').appendChild(h1);
    //     document.getElementById('detail').appendChild(p);
        
    //     for (const imageLink of detail.imageLinks) {
    //         console.log('1');
    //         var div = document.createElement('div');
    //         div.setAttribute('class', 'intro-section');
    //         div.setAttribute('style', "background-image: url('" + imageLink + "')");
    //         slideDiv.appendChild(div);
    //     }
    //     console.log('2');
    // })
}

// class LocationDetail {
//     id: number;
//     title: string;
//     content: string;
//     imageLink: string[];
//     constructor(init?: Partial<LocationDetail>) {
//         (<any>Object).assign(this, init);
//     }
// }

// function onLoad() {
//     // var CKEDITOR: any;
//     // CKEDITOR.replace( 'post' );
//     const id = sessionStorage.getItem('id');
//     const detail = new LocationDetail({
//         title: '6 Lake District locations to visit this autumn',
//         content: 'Since being awarded UNESCO World Heritage status in 2017, the popularity of the Lake District National Park in north-west England has continued to soar. While the summer is, undoubtedly, a lovely time to visit, savvy travellers will find the Lakes and their towns and villages are an equally beautiful destination in the autumn. The scenery is ablaze with colour, the summer crowds have thinned out and there’s plenty to see and do during, no matter the weather.',
//         imageLink: [
//             'images/anh.jpg',
//             'https://southeastasiabackpacker.com/wp-content/uploads/2018/01/Halong-bay-autumn.jpg',
//             'https://vietnam.travel/sites/default/files/360Tour/HaLong/socialThumbnail2.jpg'
//         ]
//     });
//     const h1 = document.createElement('h1');
//     h1.setAttribute('style', 'color: #2689e7');
//     h1.innerHTML = detail.title;
//     const p = document.createElement('p');
//     p.innerHTML = detail.content;
//     p.setAttribute('style', 'color: #000');
//     document.getElementById('detail').appendChild(h1);
//     document.getElementById('detail').appendChild(p);

//     var slideDiv = document.getElementById('slide');
//     for (const imageLink of detail.imageLink) {
//         var div = document.createElement('div');
//         div.setAttribute('class', 'intro-section');
//         div.setAttribute('style', "background-image: url('" + imageLink + "')");
//         slideDiv.appendChild(div);
//     }
// }