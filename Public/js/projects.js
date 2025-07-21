document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    const gallery = document.getElementById('gallery')

    // Toggle active button
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Toggle active content pane
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(targetTab).classList.add('active');

    fetch(`/projects/gallery?folder=${targetTab}`).then(res => res.json()).then(images => {
      gallery.innerHTML = '';
      images.forEach(img => {
        const pdf = document.createElement('div');
        pdf.className = 'tab-view';
        pdf.innerHTML = `
        <img src="${img.file}" alt="${img.title}" class="pdf-viewer" />
        <h4>${img.title}</h4>
        <p>${img.description}</p>
        `;
        gallery.appendChild(pdf);
      });

    })
    .catch(err => {
      console.error(err);
      gallery.innerHTML = `<p> Failed to load gallery </p>`
    });
  });
});
