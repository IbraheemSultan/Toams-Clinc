//  ========== filter tabs ================

const tab = document.querySelectorAll(".tab-btn");
const fig = document.querySelectorAll(".gallery-grid figure");
console.log();

// tab.addEventListener("click",e =>{

// })
tab.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const dataFilter = e.currentTarget.dataset.filter;
    // remove effect of all element
    tab.forEach((btn) => {
      btn.setAttribute("aria-selected", "false");
    });
    // make effect for current btn
    e.currentTarget.setAttribute("aria-selected", "true");
    // hidden box depend on the data-filter ;
    fig.forEach((box) => {
      box.classList.add("!hidden");
      if (box.dataset.category === dataFilter || dataFilter === "all") {
        box.classList.remove("!hidden");
      }
    });
  });
});


// rember to solve bug after hidden some fig ;
//  ========== full screen ================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryItem = document.querySelectorAll(".gallery-item");

// نجمع كل الصور في array
const galleryImages = Array.from(
  document.querySelectorAll(".gallery-item img")
).filter((img) => {
  const figure = img.closest(".gallery-item");
  return !figure.classList.contains("hidden");
});

let currentIndex = 0;

// فتح المودال عند الضغط على أي zoomBtn
document.querySelectorAll(".zoomBtn").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const figure = e.target.closest("figure");
    const img = figure.querySelector("img");
    modalImg.src = img.src;
    modal.classList.remove("hidden");

    // تحديث currentIndex
    currentIndex = galleryImages.indexOf(img);
  });
});

// زرار اغلاق
closeBtn.onclick = () => modal.classList.add("hidden");

// اغلاق عند الضغط على المودال نفسه
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};

// زرار التالي
nextBtn.onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
};

// زرار السابق
prevBtn.onclick = (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
};

// اغلاق بالمفتاح Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.add("hidden");
  else if (e.key === "ArrowRight") nextBtn.click();
  else if (e.key === "ArrowLeft") prevBtn.click();
});
