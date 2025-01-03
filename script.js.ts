document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorMessages = [];

    // Validasi nama
    if (name === '') {
        errorMessages.push('Nama tidak boleh kosong.');
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        errorMessages.push('Email tidak valid.');
    }

    // Validasi nomor telepon
    const phonePattern = /^[0-9]{10,15}$/; // Misalnya, nomor telepon harus terdiri dari 10-15 digit
    if (phone === '' || !phonePattern.test(phone)) {
        errorMessages.push('Nomor telepon tidak valid. Harus terdiri dari 10-15 digit.');
    }

    // Menampilkan pesan kesalahan
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = ''; // Menghapus pesan kesalahan sebelumnya

    if (errorMessages.length > 0) {
        errorMessages.forEach(function(message) {
            const p = document.createElement('p');
            p.textContent = message;
            errorMessagesDiv.appendChild(p);
        });
    } else {
        // Jika tidak ada kesalahan, form dapat dikirim
        alert('Form berhasil dikirim!');
        // Di sini Anda bisa menambahkan logika untuk mengirim form, misalnya menggunakan AJAX
        // this.submit(); // Jika ingin mengirim form secara normal
    }
});