
const cardsContainer = document.getElementById('cards');

for (let i = 1; i <= 9; i++) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-info">
      <div class="card-title">Uyga vazifa ${i}</div>
      <div class="card-desc">Bu vazifa ${i}-raqamli darsga oid topshiriqni o'z ichiga oladi.</div>
    </div>
    <div class="buttons">
      <a href="https://vercel.com/example-${i}" target="_blank" class="button">
        <span style="font-weight: bold;">P</span> Vercel
      </a>
      <a href="https://github.com/user/repo-${i}" target="_blank" class="button">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
    </div>
  `;

  cardsContainer.appendChild(card);
}
