
const cards = [
  {
    title: "Hometask 8",
    desc: "Hometask bajarilgan.",
    github: "https://github.com/Asilbek-Xan/4-oy-8-hometask.git",
    vercel: "https://4-oy-8-hometask-git-main-asilbek20000012s-projects.vercel.app"
  },
  {
    title: "Hometask 6",
    desc: "Hometask bajarilgan.",
    github: "https://github.com/Asilbek-Xan/4-oy-6-hometask.git",
    vercel: "https://4-oy-6-hometask-git-main-asilbek20000012s-projects.vercel.app"
  },
  {
    title: "Hometask 5",
    desc: "Hometask bajarilgan.",
    github: "https://github.com/Asilbek-Xan/4-oy-5-dars",
    vercel: "https://4-oy-5-dars-git-main-asilbek20000012s-projects.vercel.app"
  },
  {
    title: "Hometask 3",
    desc: "Hometask bajarilgan.",
    github: "https://github.com/Asilbek-Xan/4-oy-3-hometask.git",
    vercel: "https://4-oy-3-hometask-git-main-asilbek20000012s-projects.vercel.app"
  },
  
  {
    title: "Hometask 2",
    desc: "Hometask bajarilgan.",
    github: "https://github.com/Asilbek-Xan/4-oy-2-hometask.git",
    vercel: "https://4-oy-2-hometask-git-main-asilbek20000012s-projects.vercel.app"
  },
  
  
];

const cardsContainer = document.getElementById('cards');

cards.forEach(cardData => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-info">
      <div class="card-title">${cardData.title}</div>
      <div class="card-desc">${cardData.desc}</div>
    </div>
    <div class="buttons">
      <a href="${cardData.vercel}" target="_blank" class="button">
        <span style="font-weight: bold;">P</span> Vercel
      </a>
      <a href="${cardData.github}" target="_blank" class="button">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
    </div>
  `;

  cardsContainer.appendChild(card);
});
