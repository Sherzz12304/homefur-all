/* ---- 1. Pet data ---- */
class Pet {
  constructor(id, name, type, breed, age, shelterName, image) {
    this.id = id;
    this.name = name;
    this.type = type; // 'dog' or 'cat'
    this.breed = breed;
    this.age = age;
    this.shelterName = shelterName;
    this.image = image || 'https://placehold.co/400x400/2C4A3B/FAF5E8?text=Photo+Coming+Soon';
  }
}

const pets = [
    // Page 1
    new Pet(1, 'Mochi', 'dog', 'Aspin', '2 yrs', 'The Pawject'),
    new Pet(2, 'Ube', 'cat', 'Puspin', '1 yr', 'Nine Lives Haven'),
    new Pet(3, 'Biscuit', 'dog', 'Shih Tzu Mix', '5 yrs', 'PAWS Animal Rehabilitation Center'),
    new Pet(4, 'Luna', 'cat', 'Puspin', '8 mos', 'Nine Lives Haven'),
    new Pet(5, 'Hanni', 'dog', 'Aspin', '1.5 yrs', 'The Pawject'),
    new Pet(6, 'Dani', 'cat', 'Puspin', '2 yrs', 'LYKA\'s Dog and Cat Shelter'),
    new Pet(7, 'Jiro', 'dog', 'Aspin', '3 yrs', 'Noah\'s Ark Shelter'),
    new Pet(8, 'Kloi', 'cat', 'Puspin', '6 mos', 'The Home of Well-Loved Strays'),
    // Page 2
    new Pet(9, 'Hiroshi Todoroki Calaguas', 'cat', 'Lynx Siamese Mix', '2 yrs', 'The Pawject')
];

/* ---- 2. Card rendering ---- */
function renderPetCard(pet) {
  return `
    <article class="pet-card">
      <img src="${pet.image}" alt="${pet.name}">
      <div class="pet-body">
        <h3>${pet.name}</h3>
        <p>${pet.age} · ${pet.breed} · ${pet.shelterName}</p>
      </div>
    </article>
  `;
}

/* ---- 3. Filtering + pagination ---- */
const PAGE_SIZE = 8;
let currentPage = 1;

const grid = document.getElementById('pet-grid');
const filterGroup = document.querySelector('.filter-pills[data-filter-key="type"]');
const pagerPrev = document.getElementById('pager-prev');
const pagerNext = document.getElementById('pager-next');
const pagerStatus = document.getElementById('pager-status');

function getActiveType() {
  if (!filterGroup) return 'all';
  const activePill = filterGroup.querySelector('.pill.active');
  return activePill ? activePill.dataset.filter : 'all';
}

function getFilteredPets() {
  const type = getActiveType();
  return pets.filter(p => type === 'all' || p.type === type);
}

function renderPage() {
  if (!grid) return;
  const filtered = getFilteredPets();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  grid.innerHTML = pageItems.length
    ? pageItems.map(renderPetCard).join('')
    : '<p class="no-results">No pets match this category right now.</p>';

  if (pagerStatus) pagerStatus.textContent = `Page ${currentPage} of ${totalPages}`;
  if (pagerPrev) pagerPrev.disabled = currentPage === 1;
  if (pagerNext) pagerNext.disabled = currentPage === totalPages;
}

if (pagerPrev) pagerPrev.addEventListener('click', () => { currentPage--; renderPage(); });
if (pagerNext) pagerNext.addEventListener('click', () => { currentPage++; renderPage(); });

if (filterGroup) {
  filterGroup.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    filterGroup.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p === pill));
    currentPage = 1;
    renderPage();
  });
}

document.addEventListener('DOMContentLoaded', renderPage);