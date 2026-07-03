// 1. Get the current page filename (e.g., /events.html)
  const currentPage = window.location.pathname;

  // 2. Select all links in your nav
  const links = document.querySelectorAll('.nav-links a');

  // 3. Loop through each link
  links.forEach(link => {
    // Check if the link's href matches the current page
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });

  //Translation
const tag = document.querySelector(".tag");
const heading = document.querySelector(".heading");

tag.addEventListener("click", () => {
    if (tag.textContent.trim() === "ENG") {
        tag.textContent = "KH";
        heading.innerHTML = "<span class='heading-kh'>ស្វែងយល់ និង ​កក់ <br> <span class='highlight'>ព្រឹត្តិការណ៍ល្អៗ</span> <br> យ៉ាងឆាប់រហ័សនៅក្នុងដៃរបស់អ្នក</span>";

    } else {
        tag.textContent = "ENG";
        heading.innerHTML = "<span class='heading-eng'>Understand and book <br> <span class='highlight'>good events</span> <br> quickly in your hand</span>";
    }
});

//dark mode
const body = document.body;
const toggleBtn = document.getElementById("toggle-btn");
let isDark = false;
toggleBtn.addEventListener("click", () => {
  isDark =! isDark;

  if(isDark){
    body.classList.remove("light");
    body.classList.add("dark");
  }
  else{
    body.classList.remove("dark");
    body.classList.add("light");
  }
})