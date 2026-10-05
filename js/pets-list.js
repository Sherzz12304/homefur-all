/* ==========================================================================
   HomeFur All — pets-list.js
   --------------------------------------------------------------------------
   Adopt page data & logic.
   ========================================================================== */

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
    new Pet(2, 'Ube', 'cat', 'Puspin', '1 yr', 'Noah\'s Ark Dog and Cat Shelter', 'images/landing/adopt2-ube.jpeg'),
    new Pet(3, 'Biscuit', 'dog', 'Shih Tzu Mix', '5 yrs', 'PAWS Animal Rehabilitation Center', 'images/landing/adopt3-biscuit.jpeg'),
    new Pet(4, 'Luna', 'cat', 'Puspin', '8 mos', 'LYKA\'s Dog and Cat Shelter', 'images/landing/adopt4-luna.jpeg'),
    new Pet(5, 'Hanni', 'dog', 'Aspin', '1.5 yrs', 'The Pawject'),
    new Pet(6, 'Dani', 'cat', 'Puspin', '2 yrs', 'LYKA\'s Dog and Cat Shelter'),
    new Pet(7, 'Jiro', 'dog', 'Aspin', '3 yrs', 'Noah\'s Ark Dog and Cat Shelter'),
    new Pet(8, 'Kloi', 'cat', 'Puspin', '6 mos', 'The Home of Well-Loved Strays'),

    // Page 2
    new Pet(9, 'Hiroshi', 'cat', 'Lynx Siamese Mix', '2 yrs', 'The Pawject', 'images/adopt/adopt9-hiroshi.jpeg'),
    new Pet(10, 'Pepper', 'cat', 'Puspin', '1 yr', 'PAWSsion Project'),
    new Pet(11, 'Teddy', 'dog', 'Hound Mix', '6 yrs', 'Hound Haven PH Inc.'),
    new Pet(12, 'Simba', 'cat', 'Puspin', '2 yrs', 'Animal Rescue PH'),
    new Pet(13, 'Bruno', 'dog', 'Aspin', '1 yr', 'Quezon City Animal Care and Adoption Center (Government Office)'),
    new Pet(14, 'Nala', 'cat', 'Puspin', '3 yrs', 'PAWS Animal Rehabilitation Center'),
    new Pet(15, 'Rocky', 'dog', 'Aspin Mix', '2 yrs', 'Panotxa Kayumanggi OPC (Biyaya Animal Care)'),
    new Pet(16, 'Matcha', 'cat', 'Puspin', '5 mos', 'PAWS Animal Rehabilitation Center'),

    // Page 3
    new Pet(17, 'Oreo', 'dog', 'Aspin', '3.5 yrs', 'The Pawject'),
    new Pet(18, 'Felix', 'cat', 'Puspin', '4 yrs', 'LYKA\'s Dog and Cat Shelter'),
    new Pet(19, 'Buster', 'dog', 'Aspin', '1 yr', 'Noah\'s Ark Dog and Cat Shelter'),
    new Pet(20, 'Tofu', 'cat', 'Puspin', '7 mos', 'The Home of Well-Loved Strays'),
    new Pet(21, 'Bear', 'dog', 'German Shepherd Mix', '8 yrs', 'Hound Haven PH Inc.'),
    new Pet(22, 'Garfield', 'cat', 'Puspin', '2 yrs', 'PAWS Animal Rehabilitation Center'),
    new Pet(23, 'Copper', 'dog', 'Aspin', '2 yrs', 'Animal Kingdom Foundation Inc.'),
    new Pet(24, 'Hazel', 'cat', 'Puspin', '1.5 yrs', 'PAWS Animal Rehabilitation Center'),

    // Page 4
    new Pet(25, 'Duke', 'dog', 'Aspin', '5 yrs', 'PAWSsion Project'),
    new Pet(26, 'Shadow', 'cat', 'Puspin', '3 yrs', 'PAWS Animal Rehabilitation Center'),
    new Pet(27, 'Ziggy', 'dog', 'Aspin', '9 mos', 'Animal Rescue PH'),
    new Pet(28, 'Mocha', 'cat', 'Puspin', '1 yr', 'The Home of Well-Loved Strays'),
    new Pet(29, 'Lucky', 'dog', 'Aspin', '2.5 yrs', 'Quezon City Animal Care and Adoption Center (Government Office)'),
    new Pet(30, 'Kiwi', 'cat', 'Puspin', '4 mos', 'The Pawject'),
    new Pet(31, 'Jax', 'dog', 'Aspin Mix', '3 yrs', 'Panotxa Kayumanggi OPC (Biyaya Animal Care)'),
    new Pet(32, 'Penelope', 'cat', 'Puspin', '2 yrs', 'PAWS Animal Rehabilitation Center')
];

/* ---- Helper to find shelter across variations ---- */
function findMatchingShelter(petShelterName) {
  if (typeof shelters === 'undefined' || !Array.isArray(shelters)) return null;
  
  const target = petShelterName.toLowerCase().trim();
  
  return shelters.find(s => {
    const name = s.name.toLowerCase();
    return (name.includes('noah') && target.includes('noah')) ||
           name.includes(target) || 
           target.includes(name);
  });
}

/* ---- 2. Card rendering ---- */
function renderPetCard(pet) {
  const shelter = findMatchingShelter(pet.shelterName);

  let contactLinksHtml = '';
  let mapLink = '#';

  if (shelter) {
    if (shelter.contacts) {
      const c = shelter.contacts;
      let links = [];

      if (c.contactNo && c.contactNo !== 'N/A') {
        const cleanNo = c.contactNo.replace(/[^\d+]/g, '');
        links.push(`Call: <a href="tel:${cleanNo}">${c.contactNo}</a>`);
      }
      if (c.email && c.email !== 'N/A') {
        links.push(`<a href="mailto:${c.email}">Email Shelter ↗</a>`);
      }
      if (c.socials && c.socials !== 'N/A') {
        links.push(`<a href="${c.socials}" target="_blank" rel="noopener">Facebook Page ↗</a>`);
      }
      if (c.website && c.website !== 'N/A') {
        const webUrl = c.website.startsWith('http') ? c.website : `https://${c.website}`;
        links.push(`<a href="${webUrl}" target="_blank" rel="noopener">Official Website ↗</a>`);
      }

      contactLinksHtml = links.length ? links.join(' · ') : 'Contact shelter for adoption details';
    }

    if (shelter.maps && shelter.maps !== 'N/A') {
      mapLink = shelter.maps;
    }
  } else {
    contactLinksHtml = 'Contact shelter for adoption details';
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
            <p class="contact-info">${contactLinksHtml}</p>
            ${mapLink !== '#' ? `<a href="${mapLink}" target="_blank" rel="noopener" class="pet-map-link">View Location →</a>` : ''}
          </div>
        </div>
      </div>
      <div class="pet-body">
        <h3>${pet.name}</h3>
        <p>${pet.age} · ${pet.breed} · ${pet.shelterName}</p>
      </div>
    </article>
  `;
}

// Render temporary skeleton cards
function renderSkeleton(count = 0) {
  if (!petGrid) return;

  const skeletonCard = `
    <article class="pet-card skeleton-card">
      <div class="pet-card-image-wrap skeleton-box"></div>
      <div class="pet-body">
        <div class="skeleton-box skeleton-text title"></div>
        <div class="skeleton-box skeleton-text">
        <div class="skeleton-box skeleton-text short"></div>
      </div>
    </article>
  `;

  petGrid.innerHTML = Array(count).fill(skeletonCard).join('');
}

/* ---- 3. Filtering + pagination ---- */
const PETS_PAGE_SIZE = 8;
let currentPetPage = 1;

const petGrid = document.getElementById('pet-grid');
const petFilterGroup = document.querySelector('.filter-pills[data-filter-key="type"]');
const petShelterInput = document.getElementById('pet-shelter-filter');
const petShelterDatalist = document.getElementById('pet-shelters-datalist');
const petPagerPrev = document.getElementById('pager-prev');
const petPagerNext = document.getElementById('pager-next');
const petPagerStatus = document.getElementById('pager-status');

/* Populate Shelter Datalist dynamically */
function populatePetShelterDatalist() {
  if (!petShelterDatalist) return;
  
  // Extract unique shelter names from pets array
  const uniqueShelters = [...new Set(pets.map(p => p.shelterName))].sort();
  
  uniqueShelters.forEach(shelterName => {
    const option = document.createElement('option');
    option.value = shelterName;
    petShelterDatalist.appendChild(option);
  });
}

function getActiveType() {
  if (!petFilterGroup) return 'all';
  const activePill = petFilterGroup.querySelector('.pill.active');
  return activePill ? activePill.dataset.filter : 'all';
}

function getFilteredPets() {
  const type = getActiveType();
  const shelterQuery = petShelterInput ? petShelterInput.value.trim().toLowerCase() : '';

  return pets.filter(p => {
    const matchesType = (type === 'all' || p.type === type);
    const matchesShelter = (!shelterQuery || shelterQuery === 'all shelters' || p.shelterName.toLowerCase().includes(shelterQuery));
    return matchesType && matchesShelter;
  });
}

function renderPetPage() {
  if (!petGrid) return;

  // Show skeletons immediately
  renderSkeleton(PETS_PAGE_SIZE);

  // Render actual cards after a short transition frame
  setTimeout(() => {
    const filtered = getFilteredPets();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PETS_PAGE_SIZE));
    currentPetPage = Math.min(currentPetPage, totalPages);

    const start = (currentPetPage - 1) * PETS_PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PETS_PAGE_SIZE);

    petGrid.innerHTML = pageItems.length
      ? pageItems.map(renderPetCard).join('')
      : '<p class="no-results">No pets match this shelter or category right now.</p>';

    if (petPagerStatus) petPagerStatus.textContent = `Page ${currentPetPage} of ${totalPages}`;
    if (petPagerPrev) petPagerPrev.disabled = currentPetPage === 1;
    if (petPagerNext) petPagerNext.disabled = currentPetPage === totalPages;
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  populatePetShelterDatalist();
  renderPetPage();
});