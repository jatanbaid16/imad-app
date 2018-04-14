

//Submit button

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //Make a request to the server and send the name
    //create a request
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE){
        //Take some action
        if(request.status===200){
            alert('Logged in successfully');
        }else if(request.status===403){
            alert('username/password is incorrect');
        }else if(request.status===500){
            alert('Something went wrong on the server');
        }
       } 
       //Not done yet
    
    };
    //Make the request
    var username=document.getElementById('username');
    var password=document.getElementById('password');
    console.log('username');
    console.log('password');
    request.setRequestHeader('Content-Type','application/json');
    request.open('POST','http://jatanbaid16.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username:username,password:password}));
    
    
};
