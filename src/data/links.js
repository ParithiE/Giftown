export const navLinks = [
  { to: "/", icon: "bi-house-door", text: "Home" },
  { to: "/categories", text: "Categories" },
  { to: "/offers", text: "Offers" },
];

export const supportLinks = [
  { to: "/support", icon: "bi-headset", text: "Support" },
  { to: "/faq", icon: "bi-question-circle", text: "FAQ" },
];

export const navItems = [
  { text: "Home", link: "/category", },
  {
    text: "Photo Frame", link: "/category", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
  {
    text: "Key Chain", link: "/category", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
  {
    text: "Phone Case", link: "/category", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
  {
    text: "Photo Gifts", link: "/category", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
  {
    text: "Custom Gifts", link: "/category", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
  {
    text: "Documentation", link: "/documentation", subCategories: [
      { text: 'Subcategory 1-1', link: '/category1/sub1' },
      { text: 'Subcategory 1-2', link: '/category1/sub2' }
    ]
  },
];