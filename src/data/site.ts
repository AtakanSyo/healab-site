export const site = {
  name: 'HEALAB',
  institution: 'Sabancı University',
  description:
    'Exploring compact objects, cosmic dust, and the high-energy universe through observation, simulation, and instrumentation.',
  address:
    'Sabancı University, Üniversite Caddesi No:27, Orta Mahalle, 34956 Tuzla, İstanbul, Türkiye',
  facultyUrl: 'https://myweb.sabanciuniv.edu/ekalemci/',
};
export const navigation = [
  ['/', 'Home'],
  ['/team/', 'Team'],
  ['/projects/', 'Projects'],
  ['/publications/', 'Publications'],
  ['/contact/', 'Contact'],
];
export const projectCategories = [
  { id: 'current', title: 'Current projects' },
  { id: 'past', title: 'Past projects' },
  { id: 'observatory', title: 'Observatory time' },
] as const;
export const publicationCategories = [
  { id: 'proceedings', title: 'Conference proceedings' },
  { id: 'refereed', title: 'Refereed publications' },
  { id: 'non-refereed', title: 'Non-refereed publications' },
  { id: 'presentations', title: 'Presentations & posters' },
] as const;
