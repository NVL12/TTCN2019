const usersUrl = "http://127.0.0.1:9000/api/users";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDhhNDA2NTU2YTA5NTRmODlkM2I0MyIsImlhdCI6MTU3NDQ3ODkzM30.CsP57Lkmczre8yDe0RTU4HqHEFoObxkPw3W3yNQ_LOs';

$("#v-pills-accounts-tab").click(createListUser);

function createListUser(){
   $("#list-users").empty();
   $.ajax({  
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      },
      type: 'GET',  
      url: usersUrl,  
      dataType: 'json',  
      success: function (data) {  
         let listData = [];
         let i = 0;
         $.each(data.results, function(){
            listData[i] = `<tr><th scope="row">` + (i + 1) + `</th>
                     <td>` + data.results[i].name + `</td>
                     <td>` + data.results[i].email + `</td>
                     <td>` + data.results[i].role + `</td>
                     <td>` + data.results[i].createdAt + `</td>
                     <td><button class="btn btn-danger btn-crud" onclick="deleteUser('` + data.results[i].id + `')">Remove</button></td>
                     </tr>`;   
            $("#list-users").append(listData[i]);         
            i++;
         })       
      }  
   });
}

$('#passwordUser, #retypedPasswordUser').on('keyup', function () {
   if ($('#passwordUser').val() != $('#retypedPasswordUser').val()) {
      $("#userCreateBtn").attr("disabled", true);
   } else 
      $("#userCreateBtn").attr("disabled", false);
});

$("#userCreateBtn").click(function(){
   if($("#emailUser").val().length === 0){
      $("#message").text("Email required");
      return;
   }
   if($("#passwordUser").val().length === 0){
      $("#message").text("Password required");
      return;
   }
   if($("#retypedPasswordUser").val().length === 0){
      $("#message").text("Confirm Password required");
      return;
   }
   let postData = {
      "access_token": "masterKey",
      "email": $("#emailUser").val(),
      "password": $("#passwordUser").val(),
      "name": $("#nameUser").val(),
      "role": $("#roleUser").val()
   };
   $.ajax({  
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      },
      type: 'post',
      url: usersUrl,        
      contentType: 'application/json',
      data: JSON.stringify(postData), 
      success: function () {  
         createListUser();
      }  
   });
   $('#createUserModal').modal('toggle');
})

function deleteUser(id){
   $.ajax({ 
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }, 
      type: 'DELETE',  
      url: userUrl + '/' + id,  
      dataType: 'json',  
      success: function () {  
         $("#v-pills-posts-tab").click();
      }  
   }); 
}