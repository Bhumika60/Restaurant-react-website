import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Spiced Chaas Cooler',
    price: '₹180',
    tags: 'Yogurt | mint | cumin | black salt | ice'
  },
  {
    title: 'Nimbu Pudina Shikanji',
    price: '₹120',
    tags: 'Lemon | mint | sugar | black salt | water'
  },
  {
    title: 'Rose Petal Delight',
    price: '₹200',
    tags: 'Rose syrup | milk | basil seeds | ice cream | rose petals'
  },
  {
    Title: 'Tamarind Twist',
    Price: '₹180',
    Tags: 'Tamarind pulp | lime | sugar | black salt | chilled water'
  },
  {
    title: 'Minty Masala Mojito',
    price: '₹250',
    tags: 'Fresh mint | lime | sugar | cumin | black salt | soda water'
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
