function myfunction(){
    
   name  = document.getElementById('input-name').value;
     console.log(name);
     
     
// alert(name);
fetch("https://api.github.com/users/"+name)
    .then(res=>{return res.json()})
    .then( result =>{
        console.log(result);
        var user = JSON.stringify(result);
        console.log(user)
        var bio = result.bio;
        var publicrepo = result.public_repos;
        var following = result.following;
        var company = result.company;
        document.getElementById('information').innerHTML= user;
        //"User name" +username;
        
    } ).catch((err)=>{
        console.log(err);
    });
};


