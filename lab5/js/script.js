function menu() {
    document.querySelector('.menubutton').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');
}
function chat() {
    document.querySelector('.chatbutton').classList.toggle('open');
    document.querySelector('.chat').classList.toggle('open');
}
const user = document.querySelector('.userbroad')
user.innerHTML = '<a class="pageword" href="user.html?id=1">User</a>'
var ul = document.querySelector('.tweet table');
var text = document.querySelector('.post');
var btn = document.querySelector('button')
btn.onclick = function() {
    var li = document.createElement('td');
    var date = document.createElement('td');
    var row = document.createElement('tr');
    var time = new Date();
    li.className = date.className = "story";
    li.innerHTML = text.value;
    text.value = ''
    date.innerHTML = time.toLocaleString();
    row.appendChild(li);
    row.appendChild(date);
    ul.insertBefore(row,ul.children[0]);
}