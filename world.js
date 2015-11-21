window.onload = function(){
    
            
    
            var myWord = document.getElementById("term");
              var lookUpbutton = document.getElementById("lookup");
              lookUpbutton.onclick = clicked;
              var checkBox = document.getElementById("all");
              checkBox.onchange = function(){
                        if(this.checked){
                        new Ajax.Request("world.php?all=true",
                       {
                          method: "get",
                          onSuccess: returnAll
                         });
                        }
              }
                //   allRequest.open("GET","world.php",false);
                //   allRequest.send();
                //   var info = allRequest.responseText;
                //   var result = document.getElementById("result");
                //   result.innerHTML += (info);
                //         }
//}
              
              function clicked() {
                   var word = myWord.value;
                    new Ajax.Request("world.php?lookup=" + word,
                       {
                          method: "get",
                          onSuccess: returnResult
                         });
                  
           }
function returnResult(data) {
                          var result = document.getElementById("result");
                          result.innerHTML = (data.responseText);
                        }
                        
        //                 function everything() {
        //           //var word = myWord.value;
        //             new Ajax.Request("world.php",
        //               {
        //                   method: "get",
        //                   onSuccess: returnAll
        //                  });
                  
        //   }
function returnAll(data) {
                          var result = document.getElementById("result");
                          result.innerHTML = (data.responseText);
                        }
}
          // }   
            //       var myRequest = new XMLHttpRequest();
            //       myRequest.open("GET","world.php?lookup=" + word,false);
            //       myRequest.send();
            //       var mytext = myRequest.responseText;
            //       var result = document.getElementById("result");
            //       result.innerHTML += (mytext);
            //       //console.log(mytext);
            //       //console.log(word);
            //       //alert(mytext);
            //   }
              
              
            //       var allRequest = new XMLHttpRequest();
            //       allRequest.open("GET","world.php",false);
            //       allRequest.send();
            //       var info = allRequest.responseText;
            //       var result = document.getElementById("result");
            //       result.innerHTML += (info.responseText);
            //   }
            //   }
              
//                              "click", function(){
//                 // go out and get result from request.php
//                  new Ajax.Request("world.php?all=true",
//                       {
//                           method: "get",
//                           onSuccess: returnResult
//                          });
                  
//           });
// function returnResult(data) {
//                           var result = document.getElementById("result");
                          
                        
            
              
              
              
              // getting the value from the form field
              
              // 
                
