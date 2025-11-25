export const personalInfo = {
  name: "Niten Rai",
  title: "Creative Graphic Designer",
  tagline: "Transforming ideas into visual masterpieces",
  email: "nitendesign@gmail.com",
  location: "Sikkim",
  social: {
    linkedin: "https://linkedin.com/in/niten-rai-926a111b9/",
    instagram: "https://instagram.com/niten.design"
  }
};

export const services = [
  {
    id: 1,
    title: "Logo Design",
    description: "I design logos that do more than just look good — they connect. Whether it's modern minimalism or deep symbolism, my goal is to create visual identities that reflect a brand's core vision and speak directly to its audience.",
    additionalText: "Every logo I create is grounded in strong design principles, aligned with current trends, and crafted to tell a story that feels real and relevant.",
    quote: "I believe a great logo isn't just seen — it's felt. That's what I aim to deliver with every project.",
    image: "services/service-0.png",
    aspectRatio: "square"
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "I build brand identities that go beyond visuals. From color palettes to typography, every detail is chosen with purpose, shaped by the brand's personality and what it stands for.",
    additionalText: "I help brands find their voice and express it clearly across all touchpoints, so they feel consistent, memorable, and real. Blending strategic thinking with clean, thoughtful design, I craft identities that not only look sharp but resonate with the people they're meant for.",
    image: "services/service-1.png",
    aspectRatio: "portrait"
  }
];

export const projects = [
  {
    id: "kotha",
    title: "Kotha",
    type: "Brand Design",
    description: "A modern property rental platform with a clean and minimal identity designed to reflect simplicity, trust, and scalability.",
    thumbnail: "/works/kotha/thumbnail.png",
    image: "/works/kotha/image.png",
    overview: [
      "Kotha is a scalable property rental platform that makes listings, bookings, and management simple for both users and staff. The brand identity needed to feel modern, professional, and minimal to match its vision."
    ],
    contribution: [
      "I designed a sleek and minimal logo that reflects Kotha's simplicity and trust, while building a clean identity system adaptable for both light and dark use. The modern blue palette was chosen to represent reliability and clarity, giving the brand a professional yet approachable feel."
    ]
  },
  {
    id: "aroha",
    title: "Aroha",
    type: "Brand Design",
    description: "A gender-neutral fashion brand merging minimalist design with traditional handloom fabrics, crafted in collaboration with rural artisans.",
    thumbnail: "/works/aroha/thumbnail.png",
    image: "/works/aroha/image.png",
    overview: [
      "Aroha is a gender-neutral fashion brand that bridges modern minimalism with India's rich handloom heritage. The project aimed to create a brand identity that reflects inclusivity, sustainability, and timeless design, while highlighting the craftsmanship of rural artisans."
    ],
    contribution: [
      "I researched Aroha's values, audience, and the cultural context of handlooms to shape an identity that feels modern yet rooted in tradition. The logo embodies connection and harmony, while the minimalist palette and typography convey sophistication and neutrality. I also created branding guidelines to ensure consistency across digital, print, and packaging."
    ]
  },
  {
    id: "wild-nest",
    title: "Wild Nest",
    type: "Brand Design",
    description: "An eco-conscious hospitality brand with a nature-inspired identity, blending sustainability, comfort, and harmony with the wild.",
    thumbnail: "/works/wild-nest/thumbnail.png",
    image: "/works/wild-nest/image.png",
    overview: [
      "WildNest is an eco-conscious hospitality brand that redefines nature getaways by blending sustainability with comfort. Nestled in India's forests, it offers travelers a chance to slow down, reconnect with nature, and experience the wild in its purest form. The brand identity needed to capture harmony with nature while remaining modern, versatile, and memorable."
    ],
    contribution: [
      "I designed a brand identity that reflects WildNest's core values of sustainability, care, and harmony with nature. The logo was inspired by the structure of a bird's nest, symbolizing shelter, safety, and connection. I developed a cohesive visual system with earthy green tones, modern typography, and flexible logo variations, ensuring adaptability across digital, print, and merchandise. The result is a calming yet strong identity that communicates WildNest's promise of eco-living and immersive experiences."
    ]
  }
];

// Other Works - Static gallery images
export const otherWorks = {
  vertical: [
    { id: 1, src: "/works/gallery/vertical-1.jpg", alt: "Design Work 1" },
    { id: 2, src: "/works/gallery/vertical-2.jpg", alt: "Design Work 2" },
    { id: 3, src: "/works/gallery/vertical-3.jpg", alt: "Design Work 3" },
    { id: 4, src: "/works/gallery/vertical-4.jpg", alt: "Design Work 4" },
    { id: 5, src: "/works/gallery/vertical-5.jpg", alt: "Design Work 5" },
    { id: 6, src: "/works/gallery/vertical-6.jpg", alt: "Design Work 6" },
    { id: 7, src: "/works/gallery/vertical-7.jpg", alt: "Design Work 7" },
  ],
  horizontal: [
    { id: 1, src: "/works/gallery/horizontal-1.jpg", alt: "Design Work 8" },
    { id: 2, src: "/works/gallery/horizontal-2.jpg", alt: "Design Work 9" },
    { id: 3, src: "/works/gallery/horizontal-3.jpg", alt: "Design Work 10" },
    { id: 4, src: "/works/gallery/horizontal-4.jpg", alt: "Design Work 11" },
  ]
};

export const navItems = [
  { id: 0, label: "Home", section: "hero" },
  { id: 1, label: "About", section: "about" },
  { id: 2, label: "Services", section: "services" },
  { id: 3, label: "Works", section: "portfolio" },
  { id: 4, label: "Contact", section: "contact" }
];