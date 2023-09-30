// first project
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

// secound project

let userImg = document.getElementById('user-img');
let like = document.getElementById('like');

userImg.addEventListener('dblclick', () => {
    like.style.transform = 'translate(-50px,-50px) scale(1)';
    like.style.opacity = 0.8;

    setTimeout(() => {
        like.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        like.style.transform = 'translate(-50px,-50px) scale(0)';
    }, 3000);
})
