//your JS code here. If required.
window.onload = function () {
  const button = document.querySelector('input[type="button"]');
  const select = document.getElementById('colorSelect');

  button.addEventListener('click', () => {
    // Get the selected index
    const selectedIndex = select.selectedIndex;

    // Check if any option is selected
    if (selectedIndex !== -1) {
      // Remove the selected option
      select.remove(selectedIndex);
    }
  });
};
