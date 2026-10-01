class Contact {
  constructor(contactNo, socials, website) {
    this.contactNo = contactNo;
    this.socials = socials;
    this.website = website;
  }
}

const shelters = [
  {
    name: 'The Pawject',
    city: 'Angeles City',
    address: 'Doña Donya Aurora St, Angeles, 2009, Pampanga, Philippines',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('+63 928 783 4482', 'N/A', 'N/A'),
    maps: 'https://maps.app.goo.gl/tyy3qBw4o7aQqw7N7'
  },
  {
    name: "LYKA's Dog and Cat Shelter",
    city: 'Angeles City',
    address: '416 Sto. Niño, Angeles, Pampanga',
    description: 'Short one or two line description.',
    image: 'images/shelter-placeholder.jpg',
    contacts: new Contact('N/A', 'https://www.facebook.com/lykasdogandcatshelter', 'N/A'),
    maps: 'https://maps.app.goo.gl/5d5QtEPKtwUB2LBF7'
  }
];
