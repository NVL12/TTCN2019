const usersUrl = "http://127.0.0.1:9000/api/users";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDhhNDA2NTU2YTA5NTRmODlkM2I0MyIsImlhdCI6MTU3NDQ3ODkzM30.CsP57Lkmczre8yDe0RTU4HqHEFoObxkPw3W3yNQ_LOs';

$("#v-pills-accounts-tab").click(function(){
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
         console.log(data.results[6].name);
         let listData = [];
         let i = 0;
         $.each(data.results, function(){
            listData[i] = `<tr><th scope="row">` + (i + 1) + `</th>
                     <td>` + data.results[i].name + `</td>
                     <td>` + data.results[i].email + `</td>
                     <td>` + data.results[i].createdAt + `</td>
                     </tr>`;   
           $("#list-users").append(listData[i]);          
            i++;
         })          
      }  
   }); 
});

  