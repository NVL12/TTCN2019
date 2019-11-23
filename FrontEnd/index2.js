const usersUrl = "http://127.0.0.1:9000/api/users";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDhhNDA2NTU2YTA5NTRmODlkM2I0MyIsImlhdCI6MTU3NDQ3ODkzM30.CsP57Lkmczre8yDe0RTU4HqHEFoObxkPw3W3yNQ_LOs';

$("#v-pills-accounts-tab").click(function(){
   $.ajax({  
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      },
      type: 'GET',  
      url: usersUrl,  
      dataType: 'json',  
      success: function (data) {  
         console.log(data);
         $("#list-users").append('<button class="btn btn-primary" id="page"</li></button>');
             
      }  
   }); 
});
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