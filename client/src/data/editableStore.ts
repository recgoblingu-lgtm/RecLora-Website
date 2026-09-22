// Interactive editable store for RecLora content
// Enables instant real-time editing of the announcement banner, the sample profile, and the sample room
// All changes persist in localStorage so user can edit, reload, or clone easily!

export interface AnnouncementData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  date: string;
  details: string;
  bannerImage?: string;
}

export interface ProfileData {
  username: string;
  handle: string;
  bio: string;
  level: number;
  cheerCount: number;
  subscribers: number;
  joinedDate: string;
  avatarUrl: string;
  bannerUrl: string;
  tags: string[];
  featuredRooms: {
    id: string;
    name: string;
    category: string;
    visits: number;
    rating: number;
    image: string;
    description: string;
  }[];
  portfolioPhotos: {
    id: string;
    caption: string;
    likes: number;
    url: string;
    date: string;
  }[];
}

export interface RoomData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  creatorHandle: string;
  creatorName: string;
  creatorAvatar: string;
  visits: number;
  cheers: number;
  capacity: number;
  tags: string[];
  bannerUrl: string;
  screenshots: string[];
  description: string;
  rules: string[];
  circuitsVersion: string;
  features: string[];
}

export const DEFAULT_ANNOUNCEMENT: AnnouncementData = {
  id: "announcement-class-of-87",
  badge: "Official Event & Rebrand",
  title: "Welcome to RecLora: The Next Generation Creator Network",
  subtitle: "Experience the vibrant purple & gold era with upgraded creator rewards, high-performance rooms, and community showcases.",
  buttonText: "Explore Announcement",
  buttonLink: "/creator/p/class-of-87-reunion",
  date: "September 2026",
  details: "RecLora brings enhanced room discovery, dedicated creator tools, upgraded circuit nodes, and our bespoke aesthetic. Everything is customizable for your own server or community.",
  bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80"
};

export const DEFAULT_PROFILE: ProfileData = {
  username: "Lora Admin",
  handle: "@LoraAdmin",
  bio: "Lead World Builder & Systems Architect at RecLora Studio. Crafting immersive purple-neon multiplayer realms and custom game mechanics with Circuits V2.",
  level: 87,
  cheerCount: 14250,
  subscribers: 5820,
  joinedDate: "January 2024",
  avatarUrl: "/logo.png",
  bannerUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
  tags: ["Verified Creator", "Maker Pen Master", "Circuit Architect", "Studio 87"],
  featuredRooms: [
    {
      id: "room-1",
      name: "Cosmic Lounge",
      category: "Hangout",
      visits: 4820,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      description: "Neon rooftop sky lounge with custom ambient lighting and stage."
    },
    {
      id: "room-2",
      name: "CyberTag 2088",
      category: "Action PvP",
      visits: 8940,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80",
      description: "Fast-paced futuristic laser tag arena with vertical launch pads."
    },
    {
      id: "room-3",
      name: "The Quest for the Golden Chalice",
      category: "Quest RPG",
      visits: 12450,
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      description: "Co-op 4 player dungeon crawler through enchanted ruins."
    }
  ],
  portfolioPhotos: [
    {
      id: "photo-1",
      caption: "Inaugural RecLora VIP lounge opening night with friends!",
      likes: 342,
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      date: "Sep 20, 2026"
    },
    {
      id: "photo-2",
      caption: "Testing custom circuit-driven lighting rig on the main stage.",
      likes: 218,
      url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      date: "Sep 18, 2026"
    },
    {
      id: "photo-3",
      caption: "Midnight sunset view from the Golden Balcony rooftop.",
      likes: 512,
      url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      date: "Sep 15, 2026"
    },
    {
      id: "photo-4",
      caption: "New golden trophy pedestal ready for the Creator Awards.",
      likes: 429,
      url: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      date: "Sep 12, 2026"
    }
  ]
};

export const DEFAULT_ROOM: RoomData = {
  id: "room-sample-01",
  slug: "cosmic-lounge",
  name: "Cosmic Lounge",
  tagline: "The premier purple & gold social sky-lounge in RecLora",
  category: "Hangout / Social",
  creatorHandle: "@LoraAdmin",
  creatorName: "Lora Admin",
  creatorAvatar: "/logo.png",
  visits: 4820,
  cheers: 1290,
  capacity: 32,
  tags: ["Featured", "Hangout", "Neon", "Studio87", "Music", "Custom Circuits"],
  bannerUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
  screenshots: [
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80"
  ],
  description: "Cosmic Lounge is a premier community gathering space crafted with high-fidelity Maker Pen geometry, custom purple and gold ambient lighting, an interactive synthesizer stage, and private sky-booths for squad conversations. Easily edit this room template to fit your own custom games or events!",
  rules: [
    "Be respectful to all players in voice and text chat",
    "Keep maker pen prop spawning within personal dorm limits",
    "No spamming sound gizmos or particle emitters",
    "Have fun and cheer the creators!"
  ],
  circuitsVersion: "Circuits V2 (Optimized 60 FPS)",
  features: [
    "Interactive DJ Booth with 8 audio loops",
    "Dynamic purple-to-gold lighting mood controller",
    "Photo booth with instant snapshot camera",
    "VIP Balcony unlocked via community room badges",
    "Seamless cross-platform VR, PC and mobile support"
  ]
};
