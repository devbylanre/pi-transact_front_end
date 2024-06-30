const plans = [
  {
    name: 'Free',
    price: 0,
    description:
      'Everything you need to get started with 10,500 free MAU. No setup fees, monthly fees, or hidden fees.',
    features: [
      ' SSO with unlimited social connections and MFA',
      'Custom domains',
      'Basic role and permission management',
      'View and manage users',
      'Unlimited team members',
      'Up to 2,000 machine to machine (M2M) connections',
    ],
  },
  {
    name: 'Enterprise',
    price: undefined,
    description:
      'For teams with more complex needs requiring the highest levels of support.',
    features: [
      'Advanced deployment options',
      'Dedicated infrastructure',
      'Volume discounts on MAU, organizations, enterprise connections and M2M connections',
      'Unlimited environments',
      'Custom SLAs and enterprise support',
      'Pi-Transact engineers will work with you on your integration',
    ],
  },
  {
    name: 'Pro',
    price: 25,
    description:
      'Everything you need to get started. Upgrade when you want, cancel anytime.',
    features: [
      'SSO with unlimited social connections and MFA',
      'View and manage users',
      'Unlimited MAU, organizations, and M2M connections as you grow',
      'Unlimited roles and permissions',
      'Unlimited team members',
      'Custom domains',
    ],
  },
  {
    name: 'Plus',
    price: 75,
    description:
      'Advanced features to help you grow your business - no limits.',
    features: [
      'Early access to new features',
      'Reduced pricing for MAU, organizations, and M2M connections as you grow',
      'API permissions (scopes)',
      'User analysis with Hotjar',
      'Domain allow list on self sign up (Coming soon)',
    ],
  },
  {
    name: 'Scale',
    price: 175,
    description:
      'For businesses at scale or ready to take on Enterprise customers.',
    features: [
      'Unlimited enterprise connections (5 included)',
      'Powerful organisation level management of authentication options, domains, and restrictions',
      'Reduced pricing of MAU, organizations, and M2M connections to match your scale',
      'SCIM (Coming soon)',
      'Full ISO 27001 and SOC 2 reports',
    ],
  },
];

export default plans;
