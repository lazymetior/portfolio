const prjBtn = document.getElementById("prjBtn");

prjBtn.addEventListener("click", function () {
  const prjSec = document.getElementById("projects");
  prjSec.scrollIntoView({ behavior: "smooth" });
});

const cntBtn = document.getElementById("cntBtn");

cntBtn.addEventListener("click", function () {
  const cntSec = document.getElementById("contact");
  cntSec.scrollIntoView({ behavior: "smooth" });
});
