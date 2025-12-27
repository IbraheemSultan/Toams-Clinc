//  ==========  tabs ================

const tab = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tab.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const dataFilter = e.currentTarget.getAttribute("aria-controls");
    // remove effect of all element
    tab.forEach((btn) => {
      btn.setAttribute("aria-selected", "false");
    });
    // make effect for current btn
    e.currentTarget.setAttribute("aria-selected", "true");
    // hidden box depend on the data-filter ;
    tabContent.forEach((box) => {
      box.classList.add("!hidden");
      if (box.id === dataFilter) {
        box.classList.remove("!hidden");
      }
    });
  });
});
