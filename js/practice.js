const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadComments()
const displayComments = comments => {
  const commentContainer = document.getElementById
    ('comment-container');
  const firs10Comments = comments.slice(0, 10);
  // for (const comment of firs10Comments) {
  // console.log(comment)
  // const div = document.createElement('div')
  // div.classList.add = ("col-lg-4");
  // div.innerHTML = `
  //     <h2>${comment.name}</h2>
  //     <h3>${comment.email}</h3>
  //     <p>${comment.body}</p>
  // `
  // commentContainer.appendChild(div);
  // }
  firs10Comments.forEach(comment => {
    const div = document.createElement('div')
    div.classList.add = ("col-lg-4");
    div.innerHTML = `
        <h2>${comment.name}</h2>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
    `
    commentContainer.appendChild(div);
  })

}