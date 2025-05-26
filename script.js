
const cardsContainer = document.getElementById('cards');

for (let i = 1; i <= 9; i++) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h2>Uyga vazifa ${i}</h2>
    <div class="buttons">
      <a href="https://github.com/user/repo-${i}" target="_blank" class="button">GitHub</a>
      <a href="https://vercel.com/example-${i}" target="_blank" class="button">Vercel</a>
    </div>
  `;

  cardsContainer.appendChild(card);
}
