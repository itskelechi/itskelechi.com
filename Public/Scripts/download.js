function viewDocument() {
  window.open('KAResume.pdf', '_blank');
}

function downloadDoc() {
  const downloadLink = document.createElement('a');
  downloadLink.href = 'KAResume.pdf'; 
  downloadLink.download = 'KelechiAriwodoResume.pdf'; 
  downloadLink.click();
}
