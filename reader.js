    const folderPath = './tickets'; // Pfad zum Ordner, der gelesen werden soll
      const fileExtension = '.txt'; // Dateierweiterung, die Sie lesen möchten

      const fileDisplayArea = document.getElementById('fileDisplayArea');

      fetch(folderPath)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          const parser = new DOMParser();
          const html = parser.parseFromString(text, 'text/html');
          const textFiles = html.querySelectorAll(`a[href$="${fileExtension}"]`);

          textFiles.forEach((file) => {
            fetch(`${folderPath}/${file.innerText}`)
              .then((response) => {
                return response.text();
              })
              .then((data) => {
                const text = document.createElement('p');
                text.textContent = data;
                fileDisplayArea.appendChild(text);
              });
          });
        });