// ! get Blog Info From Api
let articleID = sessionStorage.getItem("articleID");
let mainBlogInfo = document.querySelector(".main");
window.addEventListener("load", () => {
  fetch("https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      let slectedObject;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === articleID) {
          slectedObject = data[i];
          break;
        }
      }
      mainBlogInfo.insertAdjacentHTML(
        "afterbegin",
        `
      <!-- *========Blog Title Section======== -->
      <section class="blog-title">
        <div class="blog-title__wrapper">
          <div class="blog-title__date">
            <span class="blog-title__date-name">${slectedObject.author}</span>
            <span class="blog-title__date-release">${slectedObject.createdAt}</span>
          </div>

          <h1 class="blog-title__title">
            ${slectedObject.subject}
          </h1>


          <img
            src="../../assets/images/blog-info-1.png"
            alt="image"
            class="blog-title__icon1"
          />
          <img
            src="../../assets/images/blog-info-2.png"
            alt="image"
            class="blog-title__icon2"
          />
        </div>
      </section>

      <!-- *========Blog Info Section======== -->
      <section class="blog-info">
        <div class="container">
          <div class="blog-info__wrapper">
            <div class="blog-info__imagebox">
              <img
                src="${slectedObject.image}"
                alt="image"
                class="blog-info__image"
              />
            </div>

            <div class="blog-info__texts">
              <p class="blog-info__texts-text">
                    ${slectedObject.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- *========Writer Section======== -->
      <section class="writer">
        <div class="container">
          <div class="writer__wrapper">
            <div class="writer__left">
              <img
                src="${slectedObject.authorImage}"
                alt="image"
                class="writer__left-image"
              />
            </div>

            <div class="writer__right">
              <div class="writer__right__top">
                <div class="writer__right__top-info">
                  <span class="writer__right__top-info-name">${slectedObject.author}</span>
                </div>

                <div class="writer__right__top-socials">
                  <span class="writer__right__top-socials-instagram">
                    <a
                      href="#"
                      class="writer__right__top-socials-instagram-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </a>
                  </span>

                  <span class="writer__right__top-socials-facebook">
                    <a
                      href="#"
                      class="writer__right__top-socials-facebook-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                        />
                      </svg>
                    </a>
                  </span>

                  <span class="writer__right__top-socials-x">
                    <a href="#" class="writer__right__top-socials-x-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        />
                      </svg>
                    </a>
                  </span>

                  <span class="writer__right__top-socials-pinterest">
                    <a
                      href="#"
                      class="writer__right__top-socials-pinterest-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              <div class="writer__right__bottom">
                <p class="writer__right__bottom-text">
        ${slectedObject.authorInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
      );
    });
});

// ! get Blog Comment From Api

// fetch('https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles')
// .then(res=>res.json())
// .then(data=>{
//   let commentsArray = data[articleID - 1].comments
//   // console.log(commentsArray);
//   commentsArray.forEach((comment)=>{
//     blogComments.insertAdjacentHTML('beforeend',`

//     <div class="blog__comments__box">
//     <div class="blog__comments__box-top">
//       <div class="blog__comments__box-top-left">
//         <img
//           src="${comment.image}"
//           alt="image"
//           class="blog__comments__box-top-left-image"
//         />
//       </div>
//       <div class="blog__comments__box-top-right">
//         <span class="blog__comments__box-top-right-name"
//           >${comment.user}</span
//         >
//         <span class="blog__comments__box-top-right-role">${comment.role}</span>
//       </div>
//     </div>

//     <div class="blog__comments__box-bottom">
//       <p class="blog__comments__box-bottom-text">
//     ${comment.body}
//       </p>
//     </div>
//   </div>
//     `)
//   })

// })

window.addEventListener("load", getCommentDatas);

let blogComments = document.querySelector(".blog__comments__wrapper");
function getCommentDatas() {
  fetch("https://660e35436ddfa2943b36123b.mockapi.io/api/v1/comments")
    .then((res) => res.json())
    .then((comments) => {
      comments.forEach((comment) => {
        console.log(comment);
        blogComments.insertAdjacentHTML(
          "beforeend",
          `
    <div class="blog__comments__box">
    <div class="blog__comments__box-top">
      <div class="blog__comments__box-top-left">
        <img
          src="${comment.image}"
          alt="image"
          class="blog__comments__box-top-left-image"
        />
      </div>
      <div class="blog__comments__box-top-right">
        <span class="blog__comments__box-top-right-name"
          >${comment.user}</span
        >
        <span class="blog__comments__box-top-right-role">${comment.role}</span>
      </div>
    </div>

    <div class="blog__comments__box-bottom">
      <p class="blog__comments__box-bottom-text">
    ${comment.body}
      </p>
    </div>
  </div>
    `
        );
      });
    });
}

// ! //////////////////////////////////////////////////////

let blogCommentsName = document.querySelector(
  ".blog__comments__input__left-name"
);
let blogCommentsUser = document.querySelector(
  ".blog__comments__input__left-user"
);
let blogCommentsiTeaxtArea = document.querySelector(
  ".blog__comments__input__right-input"
);

let commentBtn = document.querySelector(".blog__comments__input-btn");

commentBtn.addEventListener("click", () => {
  const apiUrl = "https://660e35436ddfa2943b36123b.mockapi.io/api/v1/comments";

  const newData = {
    image: "https://imgurl.ir/uploads/n035275_user.jpg",
    body: blogCommentsiTeaxtArea.value,
    role: blogCommentsUser.value,
    user: blogCommentsName.value,
  };

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const lastItem = data[data.length - 1];
      newData.id = lastItem.id + 1;
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
