document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("error-message");
  const successDialog = document.getElementById("success-dialog");
  const userEmailSpan = document.getElementById("user-email");
  const closeBtn = document.getElementById("close-dialog");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Будь ласка, введіть коректний email.";
      return;
    }

    errorMsg.textContent = "";
    form.style.display = "none";

    userEmailSpan.textContent = email;
    successDialog.showModal();
  });

  closeBtn.addEventListener("click", () => {
    successDialog.close();
    form.reset();
    form.style.display = "block";
  });
});
