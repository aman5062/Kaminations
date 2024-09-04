
        // Get the button element by ID
        const downloadBtn = document.getElementById('doone');

        // Check if the button exists to avoid errors
        if (downloadBtn) {
            // Add the click event listener
            downloadBtn.addEventListener('click', () => {
                // Create a link element
                const link = document.createElement('a');
                link.href = 'index.html'; // Path to your index.html file
                link.download = 'index.html'; // Name the downloaded file

                // Trigger the download
                link.click();
            });
        } else {
            console.error('Button with ID "doone" not found.');
        }
