//! get Artlce Info From Api
let recentNewsWrapper = document.querySelector(".recent-news__wrapper");
function getArticleInfo() {
  fetch("https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((article) => {
        recentNewsWrapper.insertAdjacentHTML(
          "beforeend",
          `
      <div class="recent-news__box">
      <img
        src="${article.image}"
        alt="image"
        class="recent-news__box-image"
      />
      <div class="recent-news__box-date">
        <span class="recent-news__box-date--name">${article.author}</span>
        <span class="recent-news__box-date--text">${article.createdAt}</span>
      </div>
      <span class="recent-news__box-title">
        ${article.subject}
      </span>
      <p class="recent-news__box-text">
        ${article.body.substring(0, 50) + "..."}
      </p>
  <button class="recent-news__box-btn" onclick='setArticleIdToSessionStorage(${
    article.id
  })'>Read More</button>
  
  
    </div>
      `
        );
      });
    });
}

// ! Set Article Id To Session Storage
function setArticleIdToSessionStorage(id) {
  sessionStorage.setItem("articleID", id);
  location.href = "./blog-info.html";
}

// ! Set Function For Load Event
window.addEventListener("load", getArticleInfo);
