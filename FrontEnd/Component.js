const comUrl = "http://127.0.0.1:9000/api/components";
const imgUrl = "http://127.0.0.1:9000/api/images";

$("#v-pills-posts-tab").click(createListComponent);

function createListComponent(){
   $("#list-place").empty();
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'GET',  
      url: comUrl,  
      dataType: 'json',  
      success: function (data) {  
         let listData = [];
         let i = 0;
         $.each(data.results, function(){
            listData[i] = `<li class="">`
               + `<img src="` + (typeof(data.results[i].images[0]) == "undefined" ? "anh.jpg" : `../Back-end/` + data.results[i].images[0].path)  + `" class="card-img-top" alt="...">`                
               + `<h5>` + data.results[i].title + `</h5>`
               + (typeof(data.results[i].description) == "undefined" ? "" : `<p>` + shortingDescription(data.results[i].description) + `</p>`)
               + ` <div id="post-data">
                  <button class="btn btn-primary btn-crud" data-toggle="modal" data-target="#editModal" data-place-id="` + data.results[i].id + `">Edit</button>
                  <button class="btn btn-danger btn-crud" onclick="deleteItem('` + data.results[i].id + `')">Remove</button>            
               </div>
            </li>`;
            $("#list-place").append(listData[i]);        
            i++;
         })           
      }  
   }); 
}

function shortingDescription(text){
   return (text.length > 100) ? text.substring(11, 200) + "..." : text;
}

$("#editModal").on('shown.bs.modal', function(e){
   let placeId = $(e.relatedTarget).data('place-id');
   if(placeId != "Create"){
      $("#modalTitle").text("Update post");
      $("#flag").val("put");
      $("#listImages").empty();
      $.ajax({ 
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
         }, 
         type: 'GET',  
         url: comUrl + '/' + placeId,  
         dataType: 'json',  
         success: function (data) {  
            let i = 0;
            let listImagesId = "";
            $.each(data.images, function(){
               listImagesId += "" + data.images[i].id + ",";
               $("#listImages").append(`<img src="../Back-end/` + data.images[i].path + `" class="card-img-top"  alt="...">
               <a href="#" class="btn btn-secondary position-absolute" style="z-index: 100; left: ` + (1 + i * 11) + `rem" onclick="deleteImage(\'` + data.images[i].id + `\');">x</a>`);
               i++;
            });
            $("#idImages").val(listImagesId); 
            $("#idItem").val(placeId); 
            $("#titleItem").val(data.title); 
            $("#desciptionItem") .val(data.description);   
         }  
      }); 
   }else{
      $("#modalTitle").text("Create post");
      $("#listImages").empty();
      $("#idImages").val(""); 
      $("#idItem").val(""); 
      $("#titleItem").val(""); 
      $("#desciptionItem") .val(""); 
      $("#flag").val("post");
   }
});

function deleteImage(id){   
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'DELETE',  
      url: imgUrl + '/' + id,  
      dataType: 'json',  
      success: function () {
         reloadImages();
         $("#idImages").val($("#idImages").val().replace(id + ',', ''));
      }  
   });
}

function reloadImages(){
   $("#listImages").empty();
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'GET',  
      url: comUrl + '/' + $("#idItem").val(),  
      dataType: 'json',  
      success: function (data) {  
         let i = 0;
         let listImagesId = "";
         $.each(data.images, function(){
            listImagesId += "" + data.images[i].id + ",";
            $("#listImages").append(`<img src="../Back-end/` + data.images[i].path + `" class="card-img-top"  alt="...">
            <a href="#" class="btn btn-secondary position-absolute" style="z-index: 100; left: ` + (1 + i * 11) + `rem" onclick="deleteImage(\'` + data.images[i].id + `\');">x</a>`);
            i++;
         });
      }  
   }); 
}

function deleteItem(id){
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'DELETE',  
      url: comUrl + '/' + id,  
      dataType: 'json',  
      success: function () {  
         $("#v-pills-posts-tab").click();
      }  
   }); 
}

$("#updateOk").click(function(){
   let imgs = $("#idImages").val().substring(0, $("#idImages").val().length - 1).split(",");
   let putData = {
      title: $("#titleItem").val(),
      description: $("#desciptionItem").val(),
      images: (imgs == "" ? [] : imgs)
   }

   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      },  
      type: $("#flag").val(),  
      url: comUrl + ($("#flag").val() == "put" ? '/' + $("#idItem").val() : ''),
      contentType: 'application/json',
      data: JSON.stringify(putData), 
      success: function () {  
         createListComponent();
      }  
   }); 
});

function uploadImage(input) {

    const headers = new Headers({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDg4ODJhZWUwNjJhMmQ4MDVhYzZjOCIsImlhdCI6MTU3NDQ3MTg2M30.flG8_lVAXy5D-Nt13nkB8_YS1PvehzhEY0YzSJ_5ZNI'
    });
    let imagesReceived = [];
    let imageFiles;
    if (document.getElementById('image') && document.getElementById('image').files) {
        imageFiles = document.getElementById('image').files;
    }
    console.log(imageFiles);
    let form_data = new FormData();
    for (const image of imageFiles) {
        form_data.append('files', image);
    }

    fetch('http://localhost:9000/api/images', {
        method: 'POST',
        headers: headers,
        body: form_data
    })
    .then(response => {
        console.log('@ ', response);
        return response.json()
    })
    .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
        imagesReceived = data;
        let temp = [];
        imagesReceived.forEach((item) => {
            temp.push(item.id + ',');
            $("#listImages").append(`<img src="../Back-end/` + item.path + `" class="card-img-top"  alt="...">`);
        });
        imagesUploaded = temp;
        $("#idImages").val($("#idImages").val() + temp);
    })
    .catch(error => console.error(error));
}
