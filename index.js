document.querySelector('.profileName').innerHTML = "rohit";

var random = Math.floor(Math.random() * 100)

document.querySelector('.numOfPost').innerHTML = random

var random1 = Math.floor(Math.random() * 1000)

var random2 = Math.floor(Math.random() * 1000)
document.querySelector('.numoffollower').innerHTML = random1
document.querySelector('.numoffollowing').innerHTML = random1

fetch('https://randomuser.me/api').then(response=>{
    response.json().then(data=>{
        let user =  data.results[0];
        document.querySelector('.profileName').innerHTML = user.name.first
        document.querySelector('.bioName').innerHTML = user.name.first + " " + user.name.last
        document.querySelector('.profilePic').src = user.picture.thumbnail

    })
})