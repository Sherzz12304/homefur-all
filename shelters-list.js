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
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Angeles City',
    citySlug: 'angeles',
    address: 'Doña Donya Aurora St, Angeles, 2009, Pampanga, Philippines',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('+63 928 783 4482', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/tyy3qBw4o7aQqw7N7'
  },
  {
    name: "LYKA's Dog and Cat Shelter",
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Angeles City',
    citySlug: 'angeles',
    address: '416 Sto. Niño, Angeles, Pampanga',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'N/A', 'https://www.facebook.com/lykasdogandcatshelter', 'N/A'),
    maps: 'https://maps.app.goo.gl/5d5QtEPKtwUB2LBF7'
  },
  {
    name: 'Golden Wolf Loft',
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Angeles City',
    citySlug: 'angeles',
    address: '5H6X+9CW, De Ocera Ave Sitio Pader, Angeles, 2009 Pampanga',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/ocN6pMCvU2rb6B4U8'
  },
  {
    name: 'Veterinary Office - Lungsod ng Angeles (Government Office)',
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Angeles City',
    citySlug: 'angeles',
    address: 'City Hall Building, Aniceto Gueco St, Pulung Maragul, Angeles, 2009 Pampanga',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('(045) 322 0485', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/k8Yc6Tz6vSmzr13t6'
  },
  {
    name: "Noah's Ark Dog and Cat Shelter",
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Mabalacat City',
    citySlug: 'mabalacat',
    address: 'Sitio Irung Brgy. Tabun, Mabalacat, Philippines, 2010',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('+63 933 824 0324', 'leahibuna@yahoo.com', 'https://facebook.com/Noahsarkdogandcatshelter/', 'N/A'),
    maps: 'https://maps.app.goo.gl/kVgrzfG8qDAjqWNN6'
  },
  {
    name: 'The Home of Well-Loved Strays',
    province: 'Pampanga',
    provinceSlug: 'pampanga',
    city: 'Floridablanca',
    citySlug: 'floridablanca',
    address: 'Macapagal, Pabanlag, Floridablanca, 2006 Pampanga',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('+63 909 141 4744', 'N/A', 'https://facebook.com/thehowsph/', 'N/A'),
    maps: 'https://maps.app.goo.gl/CZVtZKZLxnX9rrjp6'
  },
  {
    name: 'PAWS Animal Rehabilitation Center',
    province: 'Metro Manila',
    provinceSlug: 'metro-manila',
    city: 'Quezon City',
    citySlug: 'quezon-city',
    address: 'Aurora Blvd, Quezon City, 1108 Metro Manila',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'paws.org.ph'),
    maps: 'https://maps.app.goo.gl/bXzpCwUvgTK2BKoS7'
  },
  {
    name: 'Quezon City Animal Care and Adoption Center (Government Office)',
    province: 'Metro Manila',
    provinceSlug: 'metro-manila',
    city: 'Quezon City',
    citySlug: 'quezon-city',
    address: 'P485+CMV, Clemente, Quezon City, Metro Manila',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('(02) 8988 4242', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/CUtc3HpHv9u7J6YV9'
  },
  {
    name: 'Mandaluyong Animal Shelter & Pound',
    province: 'Metro Manila',
    provinceSlug: 'metro-manila',
    city: 'Mandaluyong',
    citySlug: 'mandaluyong',
    address: '588 Nueve de Febrero, Mandaluyong City, 1550 Kalakhang Maynila',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/U4vPAYMH9skr73cy7'
  },
  {
    name: 'Parañaque Animal Control and Adoption Facility (Government Office)',
    province: 'Metro Manila',
    provinceSlug: 'metro-manila',
    city: 'Parañaque',
    citySlug: 'paranaque',
    address: 'FXWW+V3J, Parañaque, Metro Manila',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'N/A', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/RejSaTF6zbscSaVF7'
  }
];

function renderShelterCard(shelter) {
  return `
    <article class="shelter-card" data-province="${shelter.provinceSlug}" data-city="${shelter.citySlug}">
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

function renderShelters(list) {
  const grid = document.getElementById('shelter-grid');
  grid.innerHTML = list.map(renderShelterCard).join('');
}

renderShelters(shelters);