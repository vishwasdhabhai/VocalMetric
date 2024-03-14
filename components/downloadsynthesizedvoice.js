import styles from "./downloadsynthesizedvoice.module.css";
import React from 'react';

const DownloadSynthesizedVoice = () => {
    const handleDownload = () => {
        // Assuming the file is located in the 'public' directory and named 'text.mp3'
        const filePath = '/test.mp3';

        // Creating a hidden link element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'text.mp3'; // Name of the file when downloaded
        link.style.display = 'none';

        // Appending the link to the body and triggering the click event
        document.body.appendChild(link);
        link.click();

        // Removing the link from the DOM
        document.body.removeChild(link);
    };

    return (
        <button 
  style={{ 
    backgroundColor: '#465be8', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease'
  }}
  onMouseOver={(e) => e.target.style.backgroundColor='#45a049'} 
  onMouseOut={(e) => e.target.style.backgroundColor='#465be8'}
  onClick={handleDownload}
>
  Click Download Synthesized Voice - In Female (Rachael) Voice
</button>
    );
};

export default DownloadSynthesizedVoice;
