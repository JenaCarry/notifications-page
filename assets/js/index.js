window.addEventListener("load", () => {
  const btn = document.querySelector("#btn");
  const notifications = document.querySelector("#notifications");
  const read = document.querySelectorAll(".read");

  btn.addEventListener("click", () => {
    notifications.innerHTML = "0";
    read.forEach((item) => {
      if (item.classList.contains("not-read")) {
        item.classList.remove("not-read");
      }
    });
  });

  read.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("not-read")) {
        item.classList.remove("not-read");
        if (notifications.innerHTML > 0) {
          notifications.innerHTML--;
        }
      }
    });
  });
});
