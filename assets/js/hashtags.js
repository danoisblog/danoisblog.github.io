// assets/js/hashtags.js
document.addEventListener("DOMContentLoaded", function() {
  const posts = document.querySelectorAll(".post p");
  
  posts.forEach(post => {
    let html = post.innerHTML;

    // Convertir hashtags (#ejemplo) en enlaces
    html = html.replace(/#(\w+)/g, '<a href="/tags/$1">#$1</a>');

    // Convertir URLs (https://ejemplo.com) en enlaces
    html = html.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');

    post.innerHTML = html;
  });
});

