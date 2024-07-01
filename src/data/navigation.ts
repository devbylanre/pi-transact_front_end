const navigation = {
  products: {
    categories: [
      {
        name: 'Users',
        subCategories: [
          { name: 'Authentication', path: '' },
          { name: 'Access management', path: '' },
          { name: 'Cookie policy', path: '' },
        ],
      },
      {
        name: 'Updates',
        subCategories: [
          { name: 'Features drop', path: '' },
          { name: 'Upcoming', path: '' },
        ],
      },
      {
        name: 'Monetization',
        subCategories: [
          { name: 'Manage business', path: '' },
          { name: 'Invoices', path: '' },
        ],
      },
      {
        name: 'B2B',
        subCategories: [{ name: 'Billing', path: '' }],
      },
    ],
  },
  resources: {
    categories: [
      {
        name: 'Learn',
        subCategories: [
          { name: 'Watch a demo', path: '' },
          { name: 'Documentation', path: '' },
          { name: 'Blog', path: '' },
          { name: 'Roadmap', path: '' },
          { name: 'Security', path: '' },
          { name: 'About Pi-Transact', path: '/about/' },
        ],
      },
      {
        name: 'Get help',
        subCategories: [
          { name: 'Twitter handle', path: '' },
          { name: 'Support', path: '/support/' },
          { name: 'Chat with an agent', path: '' },
          { name: 'System status', path: '' },
        ],
      },
    ],
  },
  customers: '',
  pricing: '',
  register: '/auth/new/',
  login: '/auth/me/',
};

export default navigation;
