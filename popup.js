document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.querySelector("img");

  if (imgElement) {
    const imageUrls = [
      "https://th.bing.com/th/id/OIP.qx-b28qCi0CpTOrpWUEaoAHaD4?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.eOyslx718fMrGp8uSbO2pgHaEK?rs=1&pid=ImgDetMain",
      "https://i.pinimg.com/originals/f0/40/2f/f0402f5df4a3c67d27355c4cfb102ce5.jpg",
      "https://i.seadn.io/gae/Bo32py9_0d2aKhJOElncV9dwr7REKNi2izZSz3jRqOamKcYIf4Vy6ZV0LvKtwsTND7jtgwbfeVh2W4hbqfV8PJqjGXngGJ-EM_WH?auto=format&w=3840",
      "https://i.pinimg.com/originals/a3/fc/22/a3fc22a3534bdc81bdd71c0ef0ae7f36.jpg",
    ];

    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    imgElement.src = randomImage;
  }
});
