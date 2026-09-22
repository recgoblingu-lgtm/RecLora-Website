import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEFAULT_PROFILE, ProfileData } from '../data/editableStore';
import { Link } from 'wouter';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  Compass, 
  Image as ImageIcon, 
  Edit3, 
  Calendar, 
  Share2, 
  Star,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export default function ProfileView() {
  const [copied, setCopied] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('reclora_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('reclora_profile');
      if (saved) setProfile(JSON.parse(saved));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-[#180D2E] border-b border-[#3A2268]">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
            alt="Profile Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E071A] via-transparent to-black/40" />

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Link
              href="/editor"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#120A21]/90 backdrop-blur-md border border-[#F5B041]/70 text-xs font-bold text-[#FFEAA7] hover:bg-[#F5B041] hover:text-[#0E071A] transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Account</span>
            </Link>
            <button
              onClick={handleCopyProfile}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#120A21]/90 backdrop-blur-md border border-[#3A2268] text-xs font-bold text-[#C8B6E2] hover:text-[#FFEAA7] transition-all"
              title="Copy JSON to create another profile"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#F5B041]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Clone JSON'}</span>
            </button>
          </div>
        </div>

        {/* Profile Card Header Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-[#180D2E] border border-[#3A2268] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Left: Avatar & Identity */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-[#F5B041] shadow-[0_0_25px_rgba(245,176,65,0.4)] bg-[#120A21] flex-shrink-0">
                  <img
                    src="/logo.png"
                    alt={profile.username}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#2ECC71] border-2 border-[#120A21]" title="Online" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8F9FA] font-heading">
                      {profile.username}
                    </h1>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5B041]/20 border border-[#F5B041] text-[#FFEAA7] text-xs font-bold">
                      <Sparkles className="w-3 h-3 text-[#F5B041]" />
                      Level {profile.level}
                    </span>
                  </div>
                  
                  <p className="text-sm font-semibold text-[#F5B041]">{profile.handle}</p>

                  <p className="text-xs text-[#C8B6E2] max-w-xl leading-relaxed pt-1">
                    {profile.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {profile.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Creator Stats */}
              <div className="grid grid-cols-3 gap-3 w-full sm:w-auto p-4 rounded-2xl bg-[#120A21] border border-[#2C1854] text-center">
                <div className="px-3">
                  <p className="text-lg font-black text-[#FFEAA7]">{profile.cheerCount.toLocaleString()}</p>
                  <p className="text-[10px] font-bold text-[#C8B6E2] uppercase tracking-wider flex items-center justify-center gap-1 mt-0.5">
                    <Heart className="w-2.5 h-2.5 text-[#F5B041] fill-[#F5B041]" /> Cheers
                  </p>
                </div>
                <div className="px-3 border-x border-[#2C1854]">
                  <p className="text-lg font-black text-[#FFEAA7]">{profile.subscribers.toLocaleString()}</p>
                  <p className="text-[10px] font-bold text-[#C8B6E2] uppercase tracking-wider flex items-center justify-center gap-1 mt-0.5">
                    <Users className="w-2.5 h-2.5 text-[#F5B041]" /> Subs
                  </p>
                </div>
                <div className="px-3">
                  <p className="text-lg font-black text-[#FFEAA7]">{profile.featuredRooms.length}</p>
                  <p className="text-[10px] font-bold text-[#C8B6E2] uppercase tracking-wider flex items-center justify-center gap-1 mt-0.5">
                    <Compass className="w-2.5 h-2.5 text-[#F5B041]" /> Rooms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED ROOMS BY CREATOR */}
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8F9FA] font-heading flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#F5B041]" />
                  Published Rooms ({profile.featuredRooms.length})
                </h2>
                <p className="text-xs text-[#C8B6E2] mt-0.5">Rooms built and maintained by this creator.</p>
              </div>

              <Link
                href="/editor"
                className="text-xs font-semibold text-[#F5B041] hover:underline flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Customize Rooms
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profile.featuredRooms.map((room) => (
                <div
                  key={room.id}
                  className="rounded-2xl overflow-hidden border border-[#3A2268] bg-[#180D2E] hover:border-[#F5B041] transition-all group"
                >
                  <div className="h-44 relative overflow-hidden bg-[#120A21]">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#120A21]/80 backdrop-blur-sm border border-[#3A2268] text-[11px] font-bold text-[#FFEAA7]">
                      {room.category}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F8F9FA]">
                      <span className="flex items-center gap-1 font-semibold text-[#FFEAA7]">
                        <Star className="w-3.5 h-3.5 fill-[#F5B041] text-[#F5B041]" />
                        {room.rating}
                      </span>
                      <span className="text-xs font-semibold text-[#C8B6E2]">
                        {room.visits.toLocaleString()} visits
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-base text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#C8B6E2] line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO SNAPSHOTS / PHOTOS */}
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8F9FA] font-heading flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#F5B041]" />
                  RecLora Portfolio & Moments ({profile.portfolioPhotos.length})
                </h2>
                <p className="text-xs text-[#C8B6E2] mt-0.5">In-game share-camera captures and project milestones.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {profile.portfolioPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-2xl overflow-hidden border border-[#3A2268] bg-[#180D2E] group hover:border-[#9B51E0] transition-all"
                >
                  <div className="h-48 relative overflow-hidden bg-[#120A21]">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#120A21]/80 text-[10px] text-[#FFEAA7] font-semibold border border-[#3A2268]">
                      {photo.date}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-[#F8F9FA] font-medium leading-relaxed">
                      {photo.caption}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#2C1854] text-xs text-[#C8B6E2]">
                      <span className="flex items-center gap-1 text-[#F5B041] font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-[#F5B041]" />
                        {photo.likes} Cheers
                      </span>
                      <span className="text-[11px]">RecLora Camera</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
