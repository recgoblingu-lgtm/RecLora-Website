import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../siteData.json';
import { Link } from 'wouter';
import { 
  Compass, 
  Search, 
  Star, 
  Users, 
  Filter, 
  Sparkles, 
  Play,
  ArrowRight 
} from 'lucide-react';

const ROOM_IMAGES = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
];

export default function RoomsList() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Hangout', 'Action', 'Quest', 'PvP', 'Social', 'Puzzle', 'Sports'];

  const filteredRooms = siteData.sample_rooms.filter((room) => {
    const slug = String(room[0]);
    const name = String(room[1]);
    const cat = String(room[2]);
    const desc = String(room[5]);

    const matchesSearch = name.toLowerCase().includes(search.toLowerCase()) || 
                          desc.toLowerCase().includes(search.toLowerCase()) ||
                          cat.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'All' || cat.toLowerCase().includes(selectedCat.toLowerCase());

    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#3A2268]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#F5B041]" />
              RecLora Room Directory
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading">
              Explore Community <span className="gold-text-gradient">Rooms</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Browse featured worlds, quests, multiplayer games, and lounges built by the RecLora community.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/rooms/cosmic-lounge"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold shadow-[0_0_15px_rgba(245,176,65,0.3)] hover:brightness-110 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Primary Sample Room</span>
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8B6E2]" />
            <input
              type="text"
              placeholder="Search rooms by name, genre or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#180D2E] border border-[#3A2268] text-xs text-[#F8F9FA] placeholder-[#C8B6E2]/50 focus:outline-none focus:border-[#F5B041]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCat === c
                    ? 'bg-[#F5B041] text-[#0E071A] font-bold shadow-md'
                    : 'bg-[#180D2E] text-[#C8B6E2] hover:text-[#FFEAA7] border border-[#3A2268]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Room Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, idx) => {
            const slug = String(room[0]);
            const name = String(room[1]);
            const cat = String(room[2]);
            const players = Number(room[3]);
            const rating = Number(room[4]);
            const desc = String(room[5]);
            const isSample = slug === 'cosmic-lounge';
            const imgSrc = ROOM_IMAGES[idx % ROOM_IMAGES.length];

            return (
              <Link
                key={slug}
                href={`/rooms/${slug}`}
                className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
                  isSample
                    ? 'border-[#F5B041] shadow-[0_0_20px_rgba(245,176,65,0.25)] bg-[#21113E]'
                    : 'border-[#3A2268] bg-[#180D2E] hover:border-[#9B51E0]'
                }`}
              >
                <div className="h-44 relative overflow-hidden bg-[#120A21]">
                  <img
                    src={imgSrc}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180D2E] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#120A21]/80 backdrop-blur-sm border border-[#3A2268] text-[11px] font-bold text-[#FFEAA7]">
                    {cat}
                  </span>

                  {isSample && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#F5B041] text-[#0E071A] text-[10px] font-black uppercase tracking-wider">
                      Sample Room
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F8F9FA]">
                    <span className="flex items-center gap-1 font-semibold text-[#FFEAA7]">
                      <Star className="w-3.5 h-3.5 fill-[#F5B041] text-[#F5B041]" />
                      {rating}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[#C8B6E2]">
                      <Users className="w-3.5 h-3.5" />
                      {players.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-base text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors">
                    {name}
                  </h3>
                  <p className="text-xs text-[#C8B6E2] line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
