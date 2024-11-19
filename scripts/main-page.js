const dropDown = document.querySelector('.dropdownarrow');

dropDown.addEventListener('click', () => {
    if (dropDown.style.transform === 'rotate(180deg)') {
        // Zet hem terug naar normaal
        dropDown.style.transform = 'rotate(0deg)';
      } else {
        // Draai hem 180 graden
        dropDown.style.transform = 'rotate(180deg)';
      }
});

