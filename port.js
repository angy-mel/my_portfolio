const contactButton = document.querySelector(".contact-btn");

contactButton.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.classList.add("contact-modal");
  const content = document.createElement("div");
  content.classList.add("contact-content");
  const closeButton = document.createElement("button");
  closeButton.classList.add("contact-close");
  closeButton.textContent = "×";
  const title = document.createElement("h2");
  title.textContent = "Contact Me";

  // Email
  const emailItem = document.createElement("div");
  emailItem.classList.add("contact-item");
  const emailIcon = document.createElement("span");
  emailIcon.textContent = "✉️";
  const emailInfo = document.createElement("div");
  const emailTitle = document.createElement("h3");
  emailTitle.textContent = "Email";
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:melnyk001@icloud.com";
  emailLink.textContent = "melnyk001@icloud.com";
  emailInfo.append(emailTitle, emailLink);
  emailItem.append(emailIcon, emailInfo);

  // Phone
  const phoneItem = document.createElement("div");
  phoneItem.classList.add("contact-item");
  const phoneIcon = document.createElement("span");
  phoneIcon.textContent = "📞";
  const phoneInfo = document.createElement("div");
  const phoneTitle = document.createElement("h3");
  phoneTitle.textContent = "Phone";
  const phoneLink = document.createElement("a");
  phoneLink.href = "tel:+393279139260";
  phoneLink.textContent = "+39 327 913 9260";
  phoneInfo.append(phoneTitle, phoneLink);
  phoneItem.append(phoneIcon, phoneInfo);

  // Telegram
  const telegramItem = document.createElement("div");
  telegramItem.classList.add("contact-item");
  const telegramIcon = document.createElement("span");
  telegramIcon.textContent = "✈️";
  const telegramInfo = document.createElement("div");
  const telegramTitle = document.createElement("h3");
  telegramTitle.textContent = "Telegram";
  const telegramLink = document.createElement("a");
  telegramLink.href = "#";
  telegramLink.textContent = "@angyelz";
  telegramInfo.append(telegramTitle, telegramLink);
  telegramItem.append(telegramIcon, telegramInfo);

  content.append(closeButton, title, emailItem, phoneItem, telegramItem);
  modal.append(content);
  document.body.append(modal);

  // Close modal
  closeButton.addEventListener("click", () => {
    modal.remove();
  });
});
const certCards = document.querySelectorAll(".cert-card");
const modal = document.querySelector("#certificateModal");
const modalImage = document.querySelector("#modalImage");
const closeButton = document.querySelector(".modal-close");

certCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const image = card.querySelector("img");

    modalImage.src = image.src;
    modal.style.display = "flex";
  });
});

if (closeButton) {
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
