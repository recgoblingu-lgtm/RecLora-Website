import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEFAULT_ROOM, RoomData } from '../data/editableStore';
import siteData from '../siteData.json';
import { useRoute, Link } from 'wouter';
import { 
  Compass, 
  Users, 
  Heart, 
  Star, 
  ShieldCheck, 
  Edit3, 
  Share2, 
  Play, 
  Check, 
  ArrowLeft,
  Sparkles,
  Info,
  Layers
} from 'lucide-react';

export default function RoomDetail() {
  const [, params] = useRoute('/rooms/:slug');
  const slug = params?.slug || 'cosmic-lounge';

  const [customRoom, setCustomRoom] = useState<RoomData>(() => {
    const saved = localStorage.getItem('reclora_room');
    return saved ? JSON.parse(saved) : DEFAULT_ROOM;
  });

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('reclora_room');
      if (saved) setCustomRoom(JSON.parse(saved));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Determine if viewing the editable primary sample room or one of the 25 catalog rooms
  const isSample = slug === 'cosmic-lounge' || slug === customRoom.slug;
  
  // Find catalog room metadata if not primary sample
  const catalogEntry = siteData.sample_rooms.find(r => r[0] === slug);

  const roomName = isSample ? customRoom.name : (catalogEntry ? String(catalogEntry[1]) : 'Featured Community Room');
  const category = isSample ? customRoom.category : (catalogEntry ? String(catalogEntry[2]) : 'Social');
  const visits = isSample ? customRoom.visits : (catalogEntry ? Number(catalogEntry[3]) : 5000);
  const rating = isSample ? 4.9 : (catalogEntry ? Number(catalogEntry[4]) : 4.8);
  const description = isSample ? customRoom.description : (catalogEntry ? String(catalogEntry[5]) : 'An exciting community room created by RecLora world builders.');

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb & Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C8B6E2] hover:text-[#FFEAA7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Rooms
          </Link>

          {isSample && (
            <Link
              href="/editor"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/50 text-xs font-bold hover:bg-[#3A2268] transition-all"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#F5B041]" />
              Edit This Sample Room
            </Link>
          )}
        </div>

        {/* Hero Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#3A2268] bg-[#180D2E] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-bold">
                      {category}
                    </span>
                    {isSample && (
                      <span className="px-3 py-1 rounded-full bg-[#F5B041] text-[#0E071A] text-xs font-extrabold uppercase tracking-wider">
                        Primary Editable Sample
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-black text-[#F8F9FA] font-heading leading-tight">
                    {roomName}
                  </h1>

                  <p className="text-sm sm:text-base text-[#C8B6E2] mt-3 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Creator & Room Stats */}
                <div className="space-y-4 pt-4 border-t border-[#2C1854]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <Link href="/profile" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#F5B041] bg-[#120A21]">
                        <img src="/logo.png" alt="Creator" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#C8B6E2]">World Architect</p>
                        <p className="text-xs font-bold text-[#FFEAA7] group-hover:underline">
                          {isSample ? customRoom.creatorName : 'RecLora Master Builder'}
                        </p>
                      </div>
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5 text-[#FFEAA7]">
                        <Star className="w-4 h-4 fill-[#F5B041] text-[#F5B041]" />
                        <span>{rating} Stars</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#C8B6E2]">
                        <Users className="w-4 h-4" />
                        <span>{visits.toLocaleString()} Visits</span>
                      </div>
                    </div>
                  </div>

                  {/* Play in RecLora CTA */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href="/download"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-sm font-extrabold shadow-[0_0_20px_rgba(245,176,65,0.4)] hover:brightness-110 transition-all"
                    >
                      <Play className="w-4 h-4 fill-[#0E071A]" />
                      Launch Room in RecLora
                    </Link>

                    <button
                      onClick={() => alert('Room link copied to clipboard!')}
                      className="p-3.5 rounded-xl border border-[#3A2268] bg-[#120A21] text-[#C8B6E2] hover:text-[#FFEAA7] hover:border-[#F5B041]/50 transition-all"
                      title="Share Room"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Media Gallery */}
              <div className="lg:col-span-5 h-72 lg:h-full min-h-[340px] relative bg-[#120A21]">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
                  alt={roomName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#180D2E] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Room Specifications & Rules */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features Column */}
          <div className="bg-[#180D2E] border border-[#3A2268] rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-base text-[#F8F9FA] font-heading flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5B041]" />
              Interactive Room Features
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C8B6E2]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5B041] flex-shrink-0 mt-0.5" />
                <span>Synchronized spatial 3D audio & synthesizer stage</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5B041] flex-shrink-0 mt-0.5" />
                <span>Circuits V2 dynamic purple & gold lighting controls</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5B041] flex-shrink-0 mt-0.5" />
                <span>Instant photo-booth with direct share to RecLora feed</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5B041] flex-shrink-0 mt-0.5" />
                <span>Cross-play enabled across VR headsets, PC, and mobile</span>
              </li>
            </ul>
          </div>

          {/* Rules Column */}
          <div className="bg-[#180D2E] border border-[#3A2268] rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-base text-[#F8F9FA] font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F5B041]" />
              Room Guidelines
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C8B6E2]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B041] mt-1.5 flex-shrink-0" />
                <span>Respect all community members in voice and text channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B041] mt-1.5 flex-shrink-0" />
                <span>Maker Pen props are limited to private party booths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B041] mt-1.5 flex-shrink-0" />
                <span>Do not spam sound gizmos or particle emitters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B041] mt-1.5 flex-shrink-0" />
                <span>Enjoy your stay and cheer the architects!</span>
              </li>
            </ul>
          </div>

          {/* Technical Specs */}
          <div className="bg-[#180D2E] border border-[#3A2268] rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-base text-[#F8F9FA] font-heading flex items-center gap-2">
              <Info className="w-4 h-4 text-[#F5B041]" />
              Technical Specifications
            </h3>
            <div className="space-y-2 text-xs text-[#C8B6E2]">
              <div className="flex justify-between py-1.5 border-b border-[#2C1854]">
                <span>Room Capacity</span>
                <span className="font-bold text-[#FFEAA7]">32 Players</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#2C1854]">
                <span>Scripting Engine</span>
                <span className="font-bold text-[#FFEAA7]">Circuits V2 (Optimized)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#2C1854]">
                <span>Ink Optimization</span>
                <span className="font-bold text-[#FFEAA7]">72% Utilized (Green)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Age Rating</span>
                <span className="font-bold text-[#FFEAA7]">Everyone (E)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
