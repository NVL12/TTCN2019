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
         console.log(data);
         let listData = [];
         let i = 0;
         $.each(data.results, function(){
            listData[i] = `<li class="position: ">
               <img src="` + data.results[i].images + `" class="card-img-top" alt="...">
               <h5>` + data.results[i].title + `</h5>
               <p>` + shortingDescription(data.results[i].description) + `</p>
               <div id="post-data">
                  <a href="update.html" class="btn btn-primary btn-crud">Edit</a>
                  <a href="#" class="btn btn-danger btn-crud">Remove</a>               
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

  

// <li>
// <img src="anh.jpg" class="card-img-top" alt="...">  
// <h5>Card title</h5>
// <p>Some quick example text to build on the card title and make up</p>
// <a href="#" class="btn btn-primary btn-crud">Edit</a>
// <a href="#" class="btn btn-danger btn-crud">Remove</a>
// </li>

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