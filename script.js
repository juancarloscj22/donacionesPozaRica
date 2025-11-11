// Referencias a elementos del DOM
const donationForm = document.getElementById('donationForm');
const donationsList = document.getElementById('donations');
const donationCount = document.getElementById('donationCount');

let donations = [];

// Función para actualizar la lista de donaciones
function updateDonations() {
    donationsList.innerHTML = '';
    donations.forEach((donation, index) => {
        const li = document.createElement('li');
        li.textContent = `${donation.name} donó "${donation.item}" en ${donation.location}`;
        donationsList.appendChild(li);
    });
    donationCount.textContent = donations.length;
}

// Evento al enviar el formulario
donationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const item = document.getElementById('item').value.trim();
    const location = document.getElementById('location').value.trim();

    if(name && item && location) {
        donations.push({ name, item, location });
        updateDonations();
        donationForm.reset();
    }
});
