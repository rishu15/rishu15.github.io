var form = document.getElementById("myForm");
form.addEventListener('submit', function(e){
    e.preventDefault();
    var search = document.getElementById("name").value;
    var fullName = search.split(' ').join('');

    fetch("https://api.github.com/users/"+fullName)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = `https://github.com/${data.login}`;
    }).catch(()=>
    {
        alert("user doesn't exist");
    });
})
