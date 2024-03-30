const url = new URL(location.href); 
const movieId = url.searchParams.get("id")

const APILINK = 'https://f8f4fa41-f3f3-46d0-931f-58762a64311f-00-2xce7xarizccm.sisko.replit.dev/api/v1/reviews/';

const userlist = document.querySelector('.userlist')

returnReviews(APILINK);

function returnReviews(url){
fetch(url + "user/" + movieId).then(res => res.json())
.then(function(data){
console.log(data);
data.forEach(review => {
    const li_user = document.createElement('li');
    li_user.innerHTML = `
        <div class="card" id="${review._id}">
            <p><strong>User: </strong>${review.user}</p>
            <p><a href="#"onclick="editReview('${review._id}', '${review.user}')">✏️</a> <a href="#" onclick="deleteReview('${review._id}')">🗑</a></p>
        </div>
        `

    userlist.appendChild(li_user);
    });
});
}

function editReview(id, user) {

const element = document.getElementById(id);
const userInputId = "user" + id

element.innerHTML = `
            <p><strong>User: </strong>
                <input type="text" id="${userInputId}" value="${user}">
            </p>
            <p><a href="#" onclick="saveReview('${userInputId}', '${id}')">💾</a>
            </p>

`
}

function saveReview(userInputId, id="") {
const user = document.getElementById(userInputId).value;
document.getElementById(userInputId).value = "";

if (id) {
    fetch(APILINK + id, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"user": user})
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        location.reload();
    });        
} else {
    fetch(APILINK + "new", {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"user": user, "movieId": 1})
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        location.reload();
    });
}
}

function deleteReview(id) {
fetch(APILINK + id, {
    method: 'DELETE'
}).then(res => res.json())
    .then(res => {
    console.log(res)
    location.reload();
    });    
}

const button = document.querySelector('.cruser')
button.setAttribute("onclick", "saveReview('newuser')")
button.setAttribute("href", "#")