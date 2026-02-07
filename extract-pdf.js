const fs = require('fs');
const path = require('path');

// Simple PDF text extraction using basic PDF structure reading
const pdfPath = path.join(__dirname, 'Sachin Saailesh Jeyakkumran AI Engineer.pdf');

try {
  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfText = pdfBuffer.toString('utf-8', 0, Math.min(pdfBuffer.length, 50000));
  
  // Try to extract readable text from PDF structure
  // PDFs store text in specific patterns, try to find readable strings
  const textMatches = pdfText.match(/\(([^)]{3,})\)/g);
  
  if (textMatches) {
    const extractedText = textMatches
      .map(match => match.slice(1, -1))
      .filter(text => /[a-zA-Z]{3,}/.test(text))
      .join(' ');
    
    fs.writeFileSync('resume-extracted.txt', extractedText);
    console.log('Extraction complete. Check resume-extracted.txt');
    console.log('Preview:', extractedText.slice(0, 500));
  } else {
    console.log('Could not extract text. PDF may be image-based or encrypted.');
  }
} catch (error) {
  console.error('Error:', error.message);
}
