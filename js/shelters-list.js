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
    description: 'A community-focused local rescue effort helping stray animals find immediate foster care and forever homes.',
    image: 'images/shelter/shelter-pawject.jpg',
    contacts: new Contact('+63 928 783 4482', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/tyy3qBw4o7aQqw7N7'
  },
  {
    name: "LYKA's Dog and Cat Shelter",
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: '416 Sto. Niño, Angeles, Pampanga',
    description: 'An independent sanctuary providing shelter, food, and basic veterinary care to neglected dogs and cats.',
    image: 'images/shelter/shelter-lykas.jpg',
    contacts: new Contact('N/A', 'N/A', 'https://www.facebook.com/lykasdogandcatshelter', 'N/A'),
    maps: 'https://maps.app.goo.gl/5d5QtEPKtwUB2LBF7'
  },
  {
    name: 'Veterinary Office - Lungsod ng Angeles (Government Office)',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Angeles City', citySlug: 'angeles',
    address: 'City Hall Building, Aniceto Gueco St, Pulung Maragul, Angeles, 2009 Pampanga',
    description: 'The city veterinary office handling local animal control, anti-rabies vaccinations, and adoption programs.',
    image: 'images/shelter/shelter-angeles-office.jpg',
    contacts: new Contact('(045) 322 0485', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/k8Yc6Tz6vSmzr13t6'
  },
  {
    name: "Noah's Ark Dog and Cat Shelter",
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Mabalacat City', citySlug: 'mabalacat',
    address: 'Sitio Irung Brgy. Tabun, Mabalacat, Philippines, 2010',
    description: 'A compassionate non-profit giving neglected strays a second chance through rehabilitation and adoption drives.',
    image: 'images/shelter/shelter-noahs-ark.jpeg',
    contacts: new Contact('+63 933 824 0324', 'leahibuna@yahoo.com', 'https://facebook.com/Noahsarkdogandcatshelter/', 'N/A'),
    maps: 'https://maps.app.goo.gl/kVgrzfG8qDAjqWNN6'
  },
  {
    name: 'The Home of Well-Loved Strays',
    province: 'Pampanga', provinceSlug: 'pampanga',
    city: 'Floridablanca', citySlug: 'floridablanca',
    address: 'Macapagal, Pabanlag, Floridablanca, 2006 Pampanga',
    description: 'A dedicated safe haven providing critical care and socialization to prepare local rescues for adoption.',
    image: 'images/shelter/shelter-hows.jpg',
    contacts: new Contact('+63 909 141 4744', 'N/A', 'https://facebook.com/thehowsph/', 'N/A'),
    maps: 'https://maps.app.goo.gl/CZVtZKZLxnX9rrjp6'
  },
  {
    name: 'PAWS Animal Rehabilitation Center',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Quezon City', citySlug: 'quezon-city',
    address: 'Aurora Blvd, Quezon City, 1108 Metro Manila',
    description: 'One of the pioneers in Philippine animal welfare, providing extensive behavioral rehabilitation and adoptions.',
    image: 'images/shelter/shelter-paws.jpeg',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'paws.org.ph'),
    maps: 'https://maps.app.goo.gl/bXzpCwUvgTK2BKoS7'
  },
  {
    name: 'Quezon City Animal Care and Adoption Center (Government Office)',
    province: 'Metro Manila', provinceSlug: 'metro-manila',
    city: 'Quezon City', citySlug: 'quezon-city',
    address: 'P485+CMV, Clemente, Quezon City, Metro Manila',
    description: 'A progressive local government pound actively promoting responsible pet ownership and street dog adoption.',
    image: 'images/shelter/shelter-qc-center.jpeg',
    contacts: new Contact('(02) 8988 4242', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/CUtc3HpHv9u7J6YV9'
  },
  {
    name: 'Animal Kingdom Foundation Inc.',
    province: 'Tarlac', provinceSlug: 'tarlac',
    city: 'Capas', citySlug: 'capas',
    address: 'No. 8 Purante St., Brgy. Cub-cub, Capas, Tarlac',
    description: 'Committed to rescuing dogs from the illegal meat trade, rehabilitating them at their large center before adoption.',
    image: 'images/shelter/shelter-akf.jpeg',
    contacts: new Contact('+63 939 914 2403', 'hello@akfrescues.org', 'https://facebook.com/AKFanimalrescue', 'akfrescues.org'),
    maps: 'https://maps.app.goo.gl/Ysa4VTghcEFcv6ku7'
  },
  {
    name: 'PAWSsion Project',
    province: 'Bulacan', provinceSlug: 'bulacan',
    city: 'San Jose del Monte', citySlug: 'san-jose-del-monte',
    address: 'Paradise Drive, Tungkong Mangga, City of San Jose Del Monte, Bulacan',
    description: 'A rapidly growing, passion-driven initiative operating as a massive halfway home for death-row pound dogs.',
    image: 'images/shelter/shelter-pawssion.jpeg',
    contacts: new Contact('+63 977 821 0271', 'N/A', 'https://facebook.com/PAWSsionProject', 'pawssionproject.org.ph'),
    maps: 'https://maps.google.com/?cid=12269425812427530439'
  },
  {
    name: 'Hound Haven PH Inc.',
    province: 'Bulacan', provinceSlug: 'bulacan',
    city: 'Angat', citySlug: 'angat',
    address: 'No. 353 Pinaglagarian St., Brgy. Pulong Yantok, Angat, Bulacan',
    description: 'A specialized non-profit serving as the country\'s first retirement center for K-9 working dogs and rescued hounds.',
    image: 'images/shelter/shelter-hound-haven.jpeg',
    contacts: new Contact('N/A', 'contact@houndhavenph.org', 'https://facebook.com/houndhavenph', 'houndhavenph.org'),
    maps: 'https://maps.google.com/?cid=15917202635282087284'
  },
  {
    name: 'Animal Rescue PH',
    province: 'Bulacan', provinceSlug: 'bulacan',
    city: 'San Miguel', citySlug: 'san-miguel',
    address: 'Zone Barangay Partida, San Miguel, Bulacan 3011',
    description: 'A dedicated sanctuary providing a safe space and medical attention to distressed and abandoned strays.',
    image: 'images/shelter/shelter-animal-ph.jpeg',
    contacts: new Contact('+63 995 449 1376', 'N/A', 'https://facebook.com/animalrescueph', 'N/A'),
    maps: 'https://maps.google.com/?cid=14799264856635830227'
  },
  {
    name: 'Panotxa Kayumanggi OPC (Biyaya Animal Care)',
    province: 'Cavite', provinceSlug: 'cavite',
    city: 'Alfonso', citySlug: 'alfonso',
    address: 'Barangay Palumlum, Alfonso, Cavite',
    description: 'A heavily active organization providing accessible spay/neuter services and sheltering hundreds of strays.',
    image: 'images/shelter/shelter-biyaya.jpeg',
    contacts: new Contact('N/A', 'biyayaanimalcare@gmail.com', 'https://facebook.com/biyayaanimalcare', 'N/A'),
    maps: 'N/A'
  }
];

const cityToProvince = {};
shelters.forEach(s => { cityToProvince[s.citySlug] = s.provinceSlug; });

function renderShelterCard(shelter) {
  const c = shelter.contacts;
  
  let contactDetails = '';
  if (c.contactNo !== 'N/A') contactDetails += `<li><strong>Phone:</strong> ${c.contactNo}</li>`;
  if (c.email !== 'N/A') contactDetails += `<li><strong>Email:</strong> <a href="mailto:${c.email}">${c.email}</a></li>`;
  if (c.socials !== 'N/A') contactDetails += `<li><a href="${c.socials}" target="_blank" rel="noopener">Facebook Page ↗</a></li>`;
  if (c.website !== 'N/A') contactDetails += `<li><a href="https://${c.website.replace(/^https?:\/\//, '')}" target="_blank" rel="noopener">Official Website ↗</a></li>`;

  if (!contactDetails) {
    contactDetails = '<li>No direct contact info available</li>';
  }

  return `
    <article class="shelter-card">
      <img src="${shelter.image}" alt="${shelter.name}">
      <div class="shelter-body">
        <h3>${shelter.name}</h3>
        <p class="shelter-loc">${shelter.city} · ${shelter.province}</p>
        <p>${shelter.description}</p>
        <div class="shelter-meta">
          <div class="contact-popover-wrapper">
            <button class="contact-trigger" type="button">Contact info 🛈</button>
            <div class="contact-popover">
              <ul>
                ${contactDetails}
              </ul>
            </div>
          </div>
          <a href="${shelter.maps}" class="link-arrow" target="_blank" rel="noopener">View on map →</a>
        </div>
      </div>
    </article>
  `;
}

/* ---- 3. Filtering + pagination ---- */
const SHELTER_PAGE_SIZE = 6;
let currentShelterPage = 1;

const shelterGrid = document.getElementById('shelter-grid');
const provinceGroup = document.querySelector('.filter-pills[data-filter-key="province"]');
const cityDropdown = document.getElementById('city-filter');
const pagerPrevShelter = document.getElementById('pager-prev');
const pagerNextShelter = document.getElementById('pager-next');
const pagerStatusShelter = document.getElementById('pager-status');

function getActiveProvince() {
  if (!provinceGroup) return 'all';
  const activePill = provinceGroup.querySelector('.pill.active');
  return activePill ? activePill.dataset.filter : 'all';
}

function getFilteredShelters() {
  const province = getActiveProvince();
  const city = cityDropdown ? cityDropdown.value : 'all';
  
  return shelters.filter(s => {
    const matchesProvince = province === 'all' || s.provinceSlug === province;
    const matchesCity = city === 'all' || s.citySlug === city;
    return matchesProvince && matchesCity;
  });
}

function renderShelterPage() {
  if (!shelterGrid) return;

  const filtered = getFilteredShelters();
  const totalPages = Math.max(1, Math.ceil(filtered.length / SHELTER_PAGE_SIZE));
  currentShelterPage = Math.min(currentShelterPage, totalPages);

  const start = (currentShelterPage - 1) * SHELTER_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + SHELTER_PAGE_SIZE);

  shelterGrid.innerHTML = pageItems.length
    ? pageItems.map(renderShelterCard).join('')
    : '<p class="no-results">No shelters match these filters yet.</p>';

  if (pagerStatusShelter) pagerStatusShelter.textContent = `Page ${currentShelterPage} of ${totalPages}`;
  if (pagerPrevShelter) pagerPrevShelter.disabled = currentShelterPage === 1;
  if (pagerNextShelter) pagerNextShelter.disabled = currentShelterPage === totalPages;
}

if (shelterGrid) {
  if (pagerPrevShelter) pagerPrevShelter.addEventListener('click', () => { currentShelterPage--; renderShelterPage(); });
  if (pagerNextShelter) pagerNextShelter.addEventListener('click', () => { currentShelterPage++; renderShelterPage(); });

  if (provinceGroup) {
    provinceGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill');
      if (!pill) return;

      provinceGroup.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p === pill));

      if (cityDropdown) {
        const cityProvince = cityToProvince[cityDropdown.value];
        const cityStillValid = cityDropdown.value === 'all' || pill.dataset.filter === 'all' || cityProvince === pill.dataset.filter;
        
        if (!cityStillValid) {
          cityDropdown.value = 'all';
        }
      }

      currentShelterPage = 1;
      renderShelterPage();
    });
  }

  if (cityDropdown) {
    cityDropdown.addEventListener('change', () => {
      if (cityDropdown.value !== 'all') {
        const province = cityToProvince[cityDropdown.value];
        if (provinceGroup) {
          provinceGroup.querySelectorAll('.pill').forEach(p => {
            p.classList.toggle('active', p.dataset.filter === province);
          });
        }
      }

      currentShelterPage = 1;
      renderShelterPage();
    });
  }

  renderShelterPage();
}