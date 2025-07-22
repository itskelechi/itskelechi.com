function createGallery(folderName, prefix) {
  let galleryData = [];
  let currentIndex = 0;

  const titleEl = document.getElementById(`title-${prefix}`);
  const viewerEl = document.getElementById(`viewer-${prefix}`);
  const descEl = document.getElementById(`desc-${prefix}`);
  const prevBtn = document.getElementById(`prev-${prefix}`);
  const nextBtn = document.getElementById(`next-${prefix}`);

  function updateViewer(index) {
    const item = galleryData[index];
    viewerEl.src = item.file;
    titleEl.textContent = item.title;
    descEl.textContent = item.description;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === galleryData.length - 1;
  }

  fetch(`/projects/gallery?folder=${folderName}`)
    .then(res => res.json())
    .then(data => {
      galleryData = data;
      if (galleryData.length > 0) {
        updateViewer(currentIndex);
      } else {
        titleEl.textContent = "No items!";
      }
    });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateViewer(currentIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < galleryData.length - 1) {
      currentIndex++;
      updateViewer(currentIndex);
    }
  });
}

// Load both galleries on window load
window.onload = function () {
  createGallery('graphic-design', 'graphic');
  createGallery('web-dev', 'web');
};
