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
    new Pet(1, 'Mochi', 'dog', 'Aspin', '2 yrs', 'The Pawject', 'images/landing/adopt1-mochi.jpeg'),
    new Pet(2, 'Ube', 'cat', 'Puspin', '1 yr', 'Noah\'s Ark Shelter', 'images/landing/adopt2-ube.jpeg'),
    new Pet(3, 'Biscuit', 'dog', 'Shih Tzu Mix', '5 yrs', 'PAWS Animal Rehabilitation Center', 'images/landing/adopt3-biscuit.jpeg'),
    new Pet(4, 'Luna', 'cat', 'Puspin', '8 mos', 'LYKA\'s Dog and Cat Shelter', 'images/landing/adopt4-luna.jpeg'),
    new Pet(5, 'Hanni', 'dog', 'Aspin', '1.5 yrs', 'The Pawject'),
    new Pet(6, 'Dani', 'cat', 'Puspin', '2 yrs', 'LYKA\'s Dog and Cat Shelter'),
    new Pet(7, 'Jiro', 'dog', 'Aspin', '3 yrs', 'Noah\'s Ark Shelter'),
    new Pet(8, 'Kloi', 'cat', 'Puspin', '6 mos', 'The Home of Well-Loved Strays'),

    // Page 2
    new Pet(9, 'Hiroshi', 'cat', 'Lynx Siamese Mix', '2 yrs', 'The Pawject', 'images/adopt/adopt-hiro.jpeg'),
    new Pet(10, 'Pepper', 'cat', 'Puspin', '1 yr', 'PAWSsion Project'),
    new Pet(11, 'Teddy', 'dog', 'Hound Mix', '6 yrs', 'Hound Haven PH'),
    new Pet(12, 'Simba', 'cat', 'Puspin', '2 yrs', 'Animal Rescue PH'),
    new Pet(13, 'Bruno', 'dog', 'Aspin', '1 yr', 'Quezon City Animal Care'),
    new Pet(14, 'Nala', 'cat', 'Puspin', '3 yrs', 'PART Sanctuary'),
    new Pet(15, 'Rocky', 'dog', 'Aspin Mix', '2 yrs', 'Panotxa Kayumanggi'),
    new Pet(16, 'Matcha', 'cat', 'Puspin', '5 mos', 'CARA Welfare Philippines'),

    // Page 3
    new Pet(17, 'Oreo', 'dog', 'Aspin', '3.5 yrs', 'The Pawject'),
    new Pet(18, 'Felix', 'cat', 'Puspin', '4 yrs', 'LYKA\'s Dog and Cat Shelter'),
    new Pet(19, 'Buster', 'dog', 'Aspin', '1 yr', 'Noah\'s Ark Shelter'),
    new Pet(20, 'Tofu', 'cat', 'Puspin', '7 mos', 'The Home of Well-Loved Strays'),
    new Pet(21, 'Bear', 'dog', 'German Shepherd Mix', '8 yrs', 'Hound Haven PH'),
    new Pet(22, 'Garfield', 'cat', 'Puspin', '2 yrs', 'PAWS Animal Rehabilitation Center'),
    new Pet(23, 'Copper', 'dog', 'Aspin', '2 yrs', 'Animal Kingdom Foundation'),
    new Pet(24, 'Hazel', 'cat', 'Puspin', '1.5 yrs', 'PART Sanctuary'),

    // Page 4
    new Pet(25, 'Duke', 'dog', 'Aspin', '5 yrs', 'PAWSsion Project'),
    new Pet(26, 'Shadow', 'cat', 'Puspin', '3 yrs', 'CARA Welfare Philippines'),
    new Pet(27, 'Ziggy', 'dog', 'Aspin', '9 mos', 'Animal Rescue PH'),
    new Pet(28, 'Mocha', 'cat', 'Puspin', '1 yr', 'Nine Lives Haven'),
    new Pet(29, 'Lucky', 'dog', 'Aspin', '2.5 yrs', 'Quezon City Animal Care'),
    new Pet(30, 'Kiwi', 'cat', 'Puspin', '4 mos', 'The Pawject'),
    new Pet(31, 'Jax', 'dog', 'Aspin Mix', '3 yrs', 'Panotxa Kayumanggi'),
    new Pet(32, 'Penelope', 'cat', 'Puspin', '2 yrs', 'PAWS Animal Rehabilitation Center')
];

/* ---- 2. Card rendering with Hover Details ---- */
function renderPetCard(pet) {
  // Look up shelter details from shelters-list.js if available
  const shelter = (typeof shelters !== 'undefined') 
    ? shelters.find(s => s.name.toLowerCase().includes(pet.shelterName.toLowerCase()) || pet.shelterName.toLowerCase().includes(s.name.toLowerCase())) 
    : null;

  let shelterContact = 'Contact shelter for adoption details';
  let mapLink = '#';

  if (shelter && shelter.contacts) {
    const c = shelter.contacts;
    if (c.contactNo !== 'N/A') shelterContact = `Call: ${c.contactNo}`;
    else if (c.email !== 'N/A') shelterContact = `Email: ${c.email}`;
    else if (c.socials !== 'N/A') shelterContact = 'Available via Facebook';
    
    if (shelter.maps && shelter.maps !== 'N/A') mapLink = shelter.maps;
  }

    const typeIcon = pet.type === 'dog' ? 'images/icon-dog.png' : 'images/icon-cat.png';
    const typeLabel = pet.type === 'dog' ? 'Dog' : 'Cat';

    return `
        <article class="pet-card">
            <div class="pet-card-image-wrap">
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-card-hover-overlay">
                    <span class="pet-badge">
                        <img src="${typeIcon}" alt="" class="badge-icon" width="14" height="14">
                        ${typeLabel}
                    </span>
                    <div class="hover-details">
                        <p class="shelter-info"><strong>Shelter:</strong> ${pet.shelterName}</p>
                        <p class="contact-info">${shelterContact}</p>
                        ${mapLink !== '#' ? `<a href="${mapLink}" target="_blank" rel="noopener" class="pet-map-link">View Shelter Location →</a>` : ''}
                    </div>
                </div>
            </div>
            <div class="pet-body">
                <h3>${pet.name}</h3>
                <p>${pet.age} · ${pet.breed}</p>
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