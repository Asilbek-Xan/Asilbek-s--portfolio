
const cards = [
  {
    title: "Uyga vazifa 1",
    desc: "Bu vazifa 1-raqamli darsga oid topshiriq.",
    github: "https://github.com/user/repo-1",
    vercel: "https://vercel.com/example-1"
  },
  
  {
    title: "Uyga vazifa 1",
    desc: "Bu vazifa 1-raqamli darsga oid topshiriq.",
    github: "https://github.com/user/repo-1",
    vercel: "https://vercel.com/example-1"
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
