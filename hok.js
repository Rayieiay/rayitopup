function selectTopup(topup) {
    document.getElementById('selectedTopup').value = topup;
    document.getElementById('topupName').textContent = topup;
    document.getElementById('selectedTopupDisplay').style.display = 'block';
    document.getElementById('paymentMethods').style.display = 'block';
}

function handlePayment(event) {
    event.preventDefault();
    const selectedTopup = document.getElementById('selectedTopup').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    processPayment(selectedTopup, paymentMethod);
}

function processPayment(selectedTopup, paymentMethod) {
    const prices = {
        "5 Diamonds": 5000,
        "10 Diamonds": 10000,
        "50 Diamonds": 50000,
        "100 Diamonds": 100000,
        "500 Diamonds": 500000,
        "1000 Diamonds": 1000000
    };

    if (prices[selectedTopup]) {
        const price = prices[selectedTopup];
        alert(`Pembayaran untuk ${selectedTopup} dengan harga RP ${price} menggunakan metode ${paymentMethod} berhasil diproses.`);
    } else {
        alert("Top-up yang dipilih tidak valid.");
    }
}

function togglePaymentPopup() {
    const popup = document.getElementById('paymentPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Ganti '/' dengan URL beranda Anda
});

document.querySelector('.konfirmasi-pesanan button').addEventListener('click', function() {
    const selectedTopup = document.getElementById('selectedTopup').value;
    const prices = {
        "5 Diamonds": 5000,
        "10 Diamonds": 10000,
        "50 Diamonds": 50000,
        "100 Diamonds": 100000,
        "500 Diamonds": 500000,
        "1000 Diamonds": 1000000
    };

    const totalPrice = prices[selectedTopup] ? prices[selectedTopup] : 0;
    document.getElementById('totalPrice').textContent = `RP ${totalPrice}`;
    togglePaymentPopup();
});
