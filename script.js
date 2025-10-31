// Form elementlarini olish
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// LocalStorage'dan ma'lumotlarni yuklash
window.addEventListener("load", () => {
  nameInput.value = localStorage.getItem("name") || "";
  emailInput.value = localStorage.getItem("email") || "";
  messageInput.value = localStorage.getItem("message") || "";
});

// Har bir input o'zgarganda avtomatik saqlash
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener("input", () => {
    localStorage.setItem(input.id, input.value);
  });
});

// Form yuborilganda alert chiqadi
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Ma'lumotlaringiz saqlandi! ✅");
});
