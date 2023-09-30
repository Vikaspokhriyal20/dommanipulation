let btn = document.getElementById('follow-btn');
let title = document.getElementById('status');

let count = 0;

btn.addEventListener('click', () => {
    if (count === 0) {
        title.innerText = 'Friend';
        title.style.color = 'green';
        btn.innerHTML = 'Unfollow';
        count = 1;
    } else {
        title.innerText = 'Stranger';
        title.style.color = 'red';
        btn.innerHTML = 'Follow';
        count = 0;
    }
})