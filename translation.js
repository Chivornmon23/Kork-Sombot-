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