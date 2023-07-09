const userId = document.querySelector(".user__id");
const userPicture = document.querySelector(".user__picture");
const card = document.querySelector(".card");
const popup = document.querySelector(".popup");

const activePopup = () => popup.classList.add("active");

userId.addEventListener("mouseover", activePopup);
userPicture.addEventListener("mouseover", activePopup);
popup.addEventListener("mouseover", activePopup);

card.addEventListener("mouseout", () => popup.classList.remove("active"));
