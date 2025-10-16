// AOS Init and Refresh on scroll
AOS.init();
window.onscroll = () => {
    AOS.refresh();
}

// --------------------------------------------------------------------------------------------------

// Functionality For Disclamer Modal show on page load in every 6 hours
// window.addEventListener('load', function() {
//   const modalElement = document.getElementById('agreeModal');
//   const agreeBtn = document.getElementById('agreeBtn');
//   const agreeModal = new bootstrap.Modal(modalElement);

//   // Check when the modal was last shown
//   const lastShown = localStorage.getItem('agreeModalLastShown');
//   const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

//   // Show modal if never shown or more than 6 hours have passed
//   if (!lastShown || (Date.now() - parseInt(lastShown, 10)) > sixHours) {
//     agreeModal.show();
//   }

//   // When "I Agree" is clicked
//   agreeBtn.addEventListener('click', function() {
//     agreeModal.hide();
//     localStorage.setItem('agreeModalLastShown', Date.now().toString());
//   });
// });

window.addEventListener('load', function () { var agreeModal = new bootstrap.Modal(document.getElementById('agreeModal')); agreeModal.show(); document.getElementById('agreeBtn').addEventListener('click', function() { agreeModal.hide(); }); });

// --------------------------------------------------------------------------------------------------