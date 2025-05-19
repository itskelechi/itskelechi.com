// Portfolio Gallery----------------------------------------------------

const pdfGallery = [
    {
    file: 'Site Images/portfolio/VdayWorkshop.png',
    title: 'WIT: Valentine\'s Day Workshop',
    description: 'Designed for WIT@GGC Valentine\'s Day Workshop'
  },
  
  {
    file: 'Site Images/portfolio/DayInTheLife.png',
    title: 'WIT: A Day in The Life Workshop',
    description: 'Designed for WIT@GGC Coca-cola\'s workshop'
  },
  {
    file: 'Site Images/portfolio/the-last-5-poster.png',
    title: 'The Last 5 Film Poster Design',
    description: 'Designed for a film I directed and produced, titled "The Last 5".'
  },
  {
    file: 'Site Images/portfolio/GreenScene.png',
    title: 'WIT: Green Scene',
    description: 'Designed for WIT@GGC green scene event'
  },
  
  {
    file: 'Site Images/portfolio/HacksggcPoster.png',
    title: 'Grizzly Hacks: Hack GCC Hackathon',
    description: 'Designed for Grizzly Hacks\' 2024 Hackathon'
  },

    {
    file: 'Site Images/portfolio/60PartyMenu.png',
    title: 'Birthday Dinner Party Menu',
    description: 'Designed dinner menu for a dinner party.'
  },
  {
    file: 'Site Images/portfolio/Grad-party-flier.png',
    title: 'Graduation Party Flier',
    description: 'Designed flier for a graduation party.'
  }
];


let currentIndex = 0;

const pdfViewer = document.getElementById('pdf-viewer');
const pdfTitle = document.getElementById('pdf-title');
const pdfDescription = document.getElementById('pdf-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


// Function to update the PDF viewer and details
function updateGallery(index) {
  const pdf = pdfGallery[index];
  pdfViewer.src = pdf.file;
  pdfTitle.textContent = pdf.title;
  pdfDescription.textContent = pdf.description;

  // Disable buttons at gallery end
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pdfGallery.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < pdfGallery.length - 1) {
    currentIndex++;
    updateGallery(currentIndex);
  }
});

// Initialize the gallery
window.onload = () => {
  if (pdfGallery.length > 0) {
    updateGallery(currentIndex);
  } 
  else {
    pdfTitle.textContent = 'No PDFs Available';
    pdfDescription.textContent = '';
    pdfViewer.src = '';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
};