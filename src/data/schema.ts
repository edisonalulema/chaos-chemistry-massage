// Schema.org JSON-LD definitions.
// Coordinates are approximate — verify against Google Maps and update before launch
// so the geo block in Search Console / Maps matches the GBP listing exactly.

const SITE = 'https://chaoschemistrymassage.com';
const SHARED_SERVICES = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Myofascial Release',
  'Trigger Point Therapy',
  'Cupping',
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MassageTherapy',
  '@id': `${SITE}/#organization`,
  name: 'Chaos & Chemistry Massage and Bodywork',
  alternateName: 'Chaos and Chemistry Massage',
  description:
    'Licensed massage therapy practice serving Granby and Winter Park, Colorado. Swedish, deep tissue, myofascial release, trigger point, and cupping.',
  url: SITE,
  email: 'chaos.chemistry.massage@gmail.com',
  image: `${SITE}/sarah.jpg`,
  logo: `${SITE}/sarah.jpg`,
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: 'Sarah',
    jobTitle: 'Licensed Massage Therapist',
    identifier: 'Colorado License #MT.0026235',
  },
  knowsAbout: SHARED_SERVICES,
  areaServed: [
    { '@type': 'City', name: 'Granby, Colorado' },
    { '@type': 'City', name: 'Winter Park, Colorado' },
    { '@type': 'City', name: 'Fraser, Colorado' },
    { '@type': 'AdministrativeArea', name: 'Grand County, Colorado' },
  ],
  department: [
    { '@id': `${SITE}/locations/granby/#location` },
    { '@id': `${SITE}/locations/winter-park/#location` },
  ],
};

export const granbyLocationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MassageTherapy',
  '@id': `${SITE}/locations/granby/#location`,
  name: 'Chaos & Chemistry Massage — Granby',
  parentOrganization: { '@id': `${SITE}/#organization` },
  url: `${SITE}/locations/granby`,
  telephone: '+1-970-281-3022',
  email: 'chaos.chemistry.massage@gmail.com',
  image: `${SITE}/sarah.jpg`,
  priceRange: '$$',
  description:
    'Therapeutic massage in downtown Granby, Colorado — located inside Mana Acupuncture. Integrated bodywork blending deep tissue, Swedish, myofascial release, trigger point, and cupping.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '55 1st St Unit A',
    addressLocality: 'Granby',
    addressRegion: 'CO',
    postalCode: '80446',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.0858,
    longitude: -105.9381,
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=55+1st+St+Unit+A,+Granby,+CO+80446',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '16:30',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '10:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '11:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Granby, Colorado' },
    { '@type': 'City', name: 'Grand Lake, Colorado' },
    { '@type': 'City', name: 'Fraser, Colorado' },
  ],
  makesOffer: SHARED_SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s },
  })),
};

export const winterParkLocationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MassageTherapy',
  '@id': `${SITE}/locations/winter-park/#location`,
  name: 'Chaos & Chemistry Massage — Winter Park',
  parentOrganization: { '@id': `${SITE}/#organization` },
  url: `${SITE}/locations/winter-park`,
  telephone: '+1-970-531-1324',
  email: 'chaos.chemistry.massage@gmail.com',
  image: `${SITE}/sarah.jpg`,
  priceRange: '$$',
  description:
    'Therapeutic massage in Winter Park, Colorado — located inside Blue Sky Massage, minutes from Winter Park Resort. Integrated bodywork blending deep tissue, Swedish, myofascial release, trigger point, and cupping for skiers, snowboarders, and locals.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21 Telemark Dr Unit 201',
    addressLocality: 'Winter Park',
    addressRegion: 'CO',
    postalCode: '80482',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.9067,
    longitude: -105.7625,
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=21+Telemark+Dr+Unit+201,+Winter+Park,+CO+80482',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Winter Park, Colorado' },
    { '@type': 'City', name: 'Fraser, Colorado' },
    { '@type': 'TouristAttraction', name: 'Winter Park Resort' },
  ],
  makesOffer: SHARED_SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s },
  })),
};
