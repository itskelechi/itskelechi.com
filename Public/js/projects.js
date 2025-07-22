document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    let prefix 

    if (targetTab === 'graphic-design'){
      prefix = 'graphic'
    } else if (targetTab === 'web-dev'){
      prefix = 'web'
    }

    // Toggle active button
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Toggle active content pane
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(targetTab).classList.add('active');

    createGallery(targetTab, prefix)
    
  });
});


function createGallery(folderName, prefix) {
  let galleryData = [];
  let currentIndex = 0;

  const title = document.getElementById(`title-${prefix}`);
  const viewer = document.getElementById(`viewer-${prefix}`);
  const desc = document.getElementById(`desc-${prefix}`);
  const prevBtn = document.getElementById(`prev-${prefix}`);
  const nextBtn = document.getElementById(`next-${prefix}`);

  function updateViewer(index) {
    const item = galleryData[index];
    viewer.src = item.file;
    title.textContent = item.title;
    desc.textContent = item.description;
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
        title.textContent = "No items!";
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