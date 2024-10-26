document.addEventListener("DOMContentLoaded", () => {
  const detailsSection = document.getElementById("detailsSection");
  const detailsImage = document.getElementById("detailsImage");
  const detailsName = document.getElementById("detailsName");
  const detailsPosition = document.getElementById("detailsPosition");
  const detailsCompany = document.getElementById("detailsCompany");
  const detailsBio = document.getElementById("detailsBio");
  const detailsClose = document.getElementById("detailsClose");
  const cardSlider = document.getElementById("cardSlider");

  document.querySelectorAll(".speaker-slider__card").forEach((card) => {
    card.addEventListener("click", () => {
      detailsImage.src = card.querySelector("img").src;
      detailsName.textContent = card.getAttribute("data-name");
      detailsPosition.textContent = card.getAttribute("data-position");
      detailsCompany.textContent = card.getAttribute("data-company");
      detailsBio.textContent = card.getAttribute("data-bio");

      detailsSection.style.display = "block";
    });
  });

  detailsClose.addEventListener("click", () => {
    detailsSection.style.display = "none";
  });

  document.getElementById("prevButton").addEventListener("click", () => {
    cardSlider.scrollLeft -= 220;
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    cardSlider.scrollLeft += 220;
  });
});
