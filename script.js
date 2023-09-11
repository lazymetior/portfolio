const prjBtn = document.getElementById("prjBtn");

prjBtn.addEventListener("click", function () {
  const prjSec = document.getElementById("projects");
  prjSec.scrollIntoView({ behavior: "smooth" });
});




function downloadPDF() {
  // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
  var pdfUrl = 'Resume.pdf';

  // Create a temporary anchor element
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Resume.pdf'; // You can specify the downloaded file name here

  // Trigger the click event to initiate the download
  link.click();
}

// Attach the downloadPDF function to the button click event
let downloadButton = document.getElementById('rsdBtn');
downloadButton.addEventListener('click', downloadPDF);