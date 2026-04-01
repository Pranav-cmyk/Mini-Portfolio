import { blogPosts } from "./data.js";

function renderBlogPosts(posts) {
  document.querySelector("#blog-container").innerHTML = getFeedHTML(posts);
}

function getFeedHTML(posts) {
  let feedHTML = "";
  posts.forEach((post, index) => {
    feedHTML += `
    <a href="#" aria-label="" class="blog-${index + 1}">
        <div>
            <img
                src="${post.image}"
                alt="${post.title}"
            />
        </div>
        <article>
            <h3 class="blog-date">${post.date}</h3>
            <h2 class="blog-title">${post.title}</h2>
            <p class="blog-description">
                ${post.description}
            </p>
        </article>
    </a>
    `;
  });
  return feedHTML;
}

renderBlogPosts(blogPosts);
