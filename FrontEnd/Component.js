const comUrl = "http://127.0.0.1:9000/api/components";

$("#v-pills-posts-tab").click(function(){
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
            listData[i] = `<li class="position: ">
               <img src="../Back-end/` + data.results[i].images[0].path + `" class="card-img-top" alt="...">
               <h5>` + data.results[i].title + `</h5>
               <p>` + shortingDescription(data.results[i].description) + `</p>
               <div id="post-data">
                  <button class="btn btn-primary btn-crud" data-toggle="modal" data-target="#editModal" data-place-id="` + data.results[i].id + `">Edit</button>
                  <button class="btn btn-danger btn-crud" onclick="deleteItem('` + data.results[i].id + `')">Remove</button>            
               </div>
            </li>`;
            $("#list-place").append(listData[i]);        
            i++;
         })           
      }  
   }); 
});

function shortingDescription(text){
   return (text.length > 100) ? text.substring(11, 200) + "..." : text;
}

$("#editModal").on('shown.bs.modal', function(e){
   let placeId = $(e.relatedTarget).data('place-id');
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'GET',  
      url: comUrl + '/' + placeId,  
      dataType: 'json',  
      success: function (data) {  
         console.log(data); 
         $("#listImages").empty();
         let i = 0;
         $.each(data.images, function(){
            $("#listImages").append(`<img src="../Back-end/` + data.images[i].path + `" class="card-img-top" alt="...">`);
            i++;
         });
         $("#idItem").val(placeId); 
         $("#titleItem").val(data.title); 
         $("#desciptionItem") .val(data.description);   
      }  
   }); 
});

function deleteItem(id){
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'GET',  
      url: comUrl + '/' + id,  
      dataType: 'json',  
      success: function () {  
         $("#v-pills-posts-tab").click();
      }  
   }); 
}

$("#updateOk").click(function(){
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'GET',  
      url: comUrl + '/' + $("#idItem").val(), 
      dataType: 'json',  
      success: function () {  
         console.log("ok");
      }  
   }); 
});


// if(data.length < 6){
//    $("#pageList").empty();
//    for(let i = 0; i < data.length; i++){
//       $("#listPlace").append(listData[i]);
//    }
//    return false;
// }
// console.log(listData[0]);
// $("#page" + 1).click(function(){
//    $("#listPlace").empty();
//    for(let i = 0; i < 5; i++){
//       $("#listPlace").append(listData[i]);
//    }
// });    

// $("#page2").click(function(){
//    $("#listPlace").empty();
//    for(let i = 5; i < 10; i++){
//       $("#listPlace").append(listData[i]);
//    }
// });   

// $("#page3").click(function(){
//    $("#listPlace").empty();
//    for(let i = 10; i < 15; i++){
//       $("#listPlace").append(listData[i]);
//    }
// });

// $("#page4").click(function(){
//    $("#listPlace").empty();
//    for(let i = 15; i < 20; i++){
//       $("#listPlace").append(listData[i]);
//    }
// });   
// if(i % ItemPerPage == 0){
//    let pageNum = `<button class="btn btn-primary" id="page` + p + `"><li>` + (p++) + `</li></button>`;
//    $("#pageList").append(pageNum);
// }