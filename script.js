//Untuk menyembunyikan form saat web baru di buka
let forms = document.querySelectorAll('form');
for (let i = 0; i < forms.length; i++) {
  forms[i].style.display = 'none';
}

//memunculkan form saat button edit di klik
const editBtn = document.getElementById('edit-btn');

editBtn.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.display === 'none') {
        //memunculkan form
        form.style.display = 'block';
    } else {
        //menyembunyikan form
        form.style.display = 'none';
    }
});

//function untuk memunculkan value pada form
function editBiodata() {
    document.getElementById("nama-input").value = namaTeks.textContent;
    document.getElementById("role-input").value = roleTeks.textContent;
    document.getElementById("availability-input").value = availabilityTeks.textContent;
    document.getElementById("usia-input").value = usiaTeks.textContent;
    document.getElementById("lokasi-input").value = lokasiTeks.textContent;
    document.getElementById("pengalaman-input").value = pengalamanTeks.textContent;
    document.getElementById("email-input").value = emailTeks.textContent;

    submitButton.textContent = 'Update';

    // Show form and hide biodata 
    form.style.display = 'block';
    biodataHeading.style.display = 'none';
}

// variabel input form
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const usiaInput = document.querySelector('#usia-input');
const lokasiInput = document.querySelector('#lokasi-input');
const pengalamanInput = document.querySelector('#pengalaman-input');
const emailInput = document.querySelector('#email-input');

// variabel untuk Mengambil elemen teks yang akan diganti
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const usiaTeks = document.querySelector('#usia');
const lokasiTeks = document.querySelector('#lokasi');
const pengalamanTeks = document.querySelector('#pengalaman');
const emailTeks = document.querySelector('#email');

//membuat button submit berfungsi
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Merubah data sesuai inputan yg di masukan di form
    namaTeks.textContent = namaInput.value;
    roleTeks.textContent = roleInput.value;
    availabilityTeks.textContent = availabilityInput.value;
    usiaTeks.textContent = usiaInput.value;
    lokasiTeks.textContent = lokasiInput.value;
    pengalamanTeks.textContent = pengalamanInput.value;
    emailTeks.textContent = emailInput.value;

    // Mengosongkan input form
    namaInput.value = '';
    roleInput.value = '';
    availabilityInput.value = '';
    usiaInput.value = '';
    lokasiInput.value = '';
    pengalamanInput.value = '';
    emailInput.value = '';

    // Sembunyikan form setelah di-submit
    form.style.display = 'none';
    biodataHeading.style.display = 'block';
});

