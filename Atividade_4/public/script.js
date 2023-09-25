document.addEventListener('DOMContentLoaded', () => {
    const getDataButton = document.getElementById('getDataButton');
    const jsonDataElement = document.getElementById('jsonData');
  
    getDataButton.addEventListener('click', () => {
      fetch('/dados-json')
        .then((response) => response.json())
        .then((data) => {
          jsonDataElement.textContent = `Chave 1: ${data.key1}, Chave 2: ${data.key2}`;
        })
        .catch((error) => {
          console.error('Erro:', error);
        });
    });
  });
  