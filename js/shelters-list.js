/* ==========================================================================
   HomeFur All — shelters-list.js
   --------------------------------------------------------------------------
   Shelters page only.
   1. Shelter data (Contact class + shelters array)
   2. Card rendering
   3. Filtering (province + city pills) + pagination (6 per page)
   ========================================================================== */


/* ---- 1. Shelter data ---- */
class Contact {
  constructor(contactNo, email, socials, website) {
    this.contactNo = contactNo;
    this.email = email;
    this.socials = socials;
    this.website = website;
  }
}

const shelters = [
  {
    name: 'The Pawject',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: 'Doña Donya Aurora St, Angeles, 2009, Pampanga, Philippines',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('+63 928 783 4482', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/tyy3qBw4o7aQqw7N7'
  },
  {
    name: "LYKA's Dog and Cat Shelter",
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: '416 Sto. Niño, Angeles, Pampanga',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('N/A', 'N/A', 'https://www.facebook.com/lykasdogandcatshelter', 'N/A'),
    maps: 'https://maps.app.goo.gl/5d5QtEPKtwUB2LBF7'
  },
  {
    name: 'Golden Wolf Loft',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: '5H6X+9CW, De Ocera Ave Sitio Pader, Angeles, 2009 Pampanga',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/ocN6pMCvU2rb6B4U8'
  },
  {
    name: 'Veterinary Office - Lungsod ng Angeles (Government Office)',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: 'City Hall Building, Aniceto Gueco St, Pulung Maragul, Angeles, 2009 Pampanga',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('(045) 322 0485', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/k8Yc6Tz6vSmzr13t6'
  },
  {
    name: "Noah's Ark Dog and Cat Shelter",
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Mabalacat City', citySlug: 'mabalacat',
    address: 'Sitio Irung Brgy. Tabun, Mabalacat, Philippines, 2010',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('+63 933 824 0324', 'leahibuna@yahoo.com', 'https://facebook.com/Noahsarkdogandcatshelter/', 'N/A'),
    maps: 'https://maps.app.goo.gl/kVgrzfG8qDAjqWNN6'
  },
  {
    name: 'The Home of Well-Loved Strays',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Floridablanca', citySlug: 'floridablanca',
    address: 'Macapagal, Pabanlag, Floridablanca, 2006 Pampanga',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('+63 909 141 4744', 'N/A', 'https://facebook.com/thehowsph/', 'N/A'),
    maps: 'https://maps.app.goo.gl/CZVtZKZLxnX9rrjp6'
  },
  {
    name: 'PAWS Animal Rehabilitation Center',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Quezon City', citySlug: 'quezon-city',
    address: 'Aurora Blvd, Quezon City, 1108 Metro Manila',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'paws.org.ph'),
    maps: 'https://maps.app.goo.gl/bXzpCwUvgTK2BKoS7'
  },
  {
    name: 'Quezon City Animal Care and Adoption Center (Government Office)',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Quezon City', citySlug: 'quezon-city',
    address: 'P485+CMV, Clemente, Quezon City, Metro Manila',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('(02) 8988 4242', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/CUtc3HpHv9u7J6YV9'
  },
  {
    name: 'Mandaluyong Animal Shelter & Pound',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Mandaluyong', citySlug: 'mandaluyong',
    address: '588 Nueve de Febrero, Mandaluyong City, 1550 Kalakhang Maynila',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/U4vPAYMH9skr73cy7'
  },
  {
    name: 'Parañaque Animal Control and Adoption Facility (Government Office)',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Parañaque', citySlug: 'paranaque',
    address: 'FXWW+V3J, Parañaque, Metro Manila',
    description: 'Short one or two line description.',
    image: 'https://placehold.co/400x300/2C4A3B/FAF5E8?text=Photo+Coming+Soon',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/RejSaTF6zbscSaVF7'
  }
];

const cityToProvince = {};
shelters.forEach(s => { cityToProvince[s.citySlug] = s.provinceSlug; });


/* ---- 2. Card rendering ---- */
function renderShelterCard(shelter) {
  return `
    <article class="shelter-card">
      <img src="${shelter.image}" alt="${shelter.name}">
      <div class="shelter-body">
        <h3>${shelter.name}</h3>
        <p class="shelter-loc">${shelter.city} · ${shelter.province}</p>
        <p>${shelter.description}</p>
        <div class="shelter-meta">
          <span>${shelter.contacts.contactNo}</span>
          <a href="${shelter.maps}" class="link-arrow" target="_blank" rel="noopener">View on map →</a>
        </div>
      </div>
    </article>
  `;
}


/* ---- 3. Filtering + pagination ---- */
const PAGE_SIZE = 6;
let currentPage = 1;

const grid = document.getElementById('shelter-grid');
const pagerPrev = document.getElementById('pager-prev');
const pagerNext = document.getElementById('pager-next');
const pagerStatus = document.getElementById('pager-status');

function getActiveFilter(key) {
  const group = document.querySelector(`.filter-pills[data-filter-key="${key}"]`);
  const activePill = group.querySelector('.pill.active');
  return activePill ? activePill.dataset.filter : 'all';
}

function getFilteredShelters() {
  const province = getActiveFilter('province');
  const city = getActiveFilter('city');
  return shelters.filter(s => {
    const matchesProvince = province === 'all' || s.provinceSlug === province;
    const matchesCity = city === 'all' || s.citySlug === city;
    return matchesProvince && matchesCity;
  });
}

function renderPage() {
  const filtered = getFilteredShelters();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  grid.innerHTML = pageItems.length
    ? pageItems.map(renderShelterCard).join('')
    : '<p class="no-results">No shelters match these filters yet.</p>';

  pagerStatus.textContent = `Page ${currentPage} of ${totalPages}`;
  pagerPrev.disabled = currentPage === 1;
  pagerNext.disabled = currentPage === totalPages;
}

pagerPrev.addEventListener('click', () => {
  currentPage--;
  renderPage();
});
pagerNext.addEventListener('click', () => {
  currentPage++;
  renderPage();
});

// Filter pills: clicking one re-filters, auto-syncs province/city, and resets to page 1
document.querySelectorAll('.filter-pills[data-filter-key]').forEach(group => {
  const key = group.dataset.filterKey;

  group.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    group.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p === pill));

    if (key === 'city' && pill.dataset.filter !== 'all') {
      const province = cityToProvince[pill.dataset.filter];
      const provinceGroup = document.querySelector('.filter-pills[data-filter-key="province"]');
      provinceGroup.querySelectorAll('.pill').forEach(p => {
        p.classList.toggle('active', p.dataset.filter === province);
      });
    }

    if (key === 'province') {
      const cityGroup = document.querySelector('.filter-pills[data-filter-key="city"]');
      const activeCityPill = cityGroup.querySelector('.pill.active');
      const activeCity = activeCityPill ? activeCityPill.dataset.filter : 'all';
      const cityStillValid = activeCity === 'all' || cityToProvince[activeCity] === pill.dataset.filter || pill.dataset.filter === 'all';
      if (!cityStillValid) {
        cityGroup.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p.dataset.filter === 'all'));
      }
    }

    currentPage = 1;
    renderPage();
  });
});

renderPage();