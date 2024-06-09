const promise1 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((users) => users[0]);
const promise2 = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((todos) => todos[0]);
const promise3 = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((posts) => posts[0]);

Promise.all([promise1, promise2, promise3])
    .then(([user, todo, post]) => {
        console.log(user);
        console.log(todo);
        console.log(post)
    });