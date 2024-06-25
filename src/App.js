import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  const downloadPDF = () => {
    const doc = document.getElementById('resume').innerHTML;
    const pdfContent = htmlToPdfmake(doc);
    const documentDefinition = { content: pdfContent };
    pdfMake.createPdf(documentDefinition).download('resume.pdf');
  };

  return (
    <div className="App">
      <div id="resume">
        <Header />
        <Summary />
        <Experience />
        <Skills />
        <Education />
      </div>
      <button onClick={downloadPDF}>Download Resume as PDF</button>
    </div>
  );
}

export default App;
