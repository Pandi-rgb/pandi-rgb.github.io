const form = document.querySelector('form[name="contact-form"]');
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alertSuccess = document.querySelector(".alert-success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // sembunyikan alert lama
  alertSuccess.classList.add("d-none");

  // loading state
  btnKirim.classList.add("d-none");
  btnLoading.classList.remove("d-none");

  const formData = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbwYsbBNAjxEHQZ-aKN96yrglpLncmSmk1dd6pUHa5v0ixkyhXOC-ur-5kWqX4a_NbMk/exec",
    {
      method: "POST",
      body: formData,
      mode: "no-cors", // ⬅️ INI KUNCI UTAMA
    },
  )
    .then(() => {
      // ANGGAP BERHASIL
      alertSuccess.classList.remove("d-none");
      form.reset(); // ⬅️ TEKS PASTI HILANG
    })
    .catch(() => {
      alert("Koneksi bermasalah. Coba lagi.");
    })
    .finally(() => {
      btnKirim.classList.remove("d-none");
      btnLoading.classList.add("d-none");
    });
});
