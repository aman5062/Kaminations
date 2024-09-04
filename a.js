const downloadBtn = document.createElement('button');
        downloadBtn.textContent = 'Download index.html';
        downloadBtn.style.margin = '20px';
        document.body.insertBefore(downloadBtn, document.body.firstChild);

        // Add the click event listener
        downloadBtn.addEventListener('click', () => {
            // Create a link element
            const link = document.createElement('a');
            link.href = 'index.html'; // Path to your index.html file
            link.download = 'index.html'; // Name the downloaded file

            // Trigger the download
            link.click();
        });