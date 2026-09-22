import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  DEFAULT_ANNOUNCEMENT, 
  DEFAULT_PROFILE, 
  DEFAULT_ROOM, 
  AnnouncementData, 
  ProfileData, 
  RoomData 
} from '../data/editableStore';
import { Save, RotateCcw, Check, Sparkles, User, Compass, Layers, Info } from 'lucide-react';
import { Link } from 'wouter';

export default function ContentEditor() {
  const [activeTab, setActiveTab] = useState<'announcement' | 'profile' | 'room'>('announcement');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // States
  const [announcement, setAnnouncement] = useState<AnnouncementData>(() => {
    const saved = localStorage.getItem('reclora_announcement');
    return saved ? JSON.parse(saved) : DEFAULT_ANNOUNCEMENT;
  });

  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('reclora_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [room, setRoom] = useState<RoomData>(() => {
    const saved = localStorage.getItem('reclora_room');
    return saved ? JSON.parse(saved) : DEFAULT_ROOM;
  });

  const handleSave = () => {
    localStorage.setItem('reclora_announcement', JSON.stringify(announcement));
    localStorage.setItem('reclora_profile', JSON.stringify(profile));
    localStorage.setItem('reclora_room', JSON.stringify(room));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm('Reset all custom content back to the RecLora defaults?')) {
      localStorage.removeItem('reclora_announcement');
      localStorage.removeItem('reclora_profile');
      localStorage.removeItem('reclora_room');
      setAnnouncement(DEFAULT_ANNOUNCEMENT);
      setProfile(DEFAULT_PROFILE);
      setRoom(DEFAULT_ROOM);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#3A2268]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/50 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B041]" />
              Live Site Customizer
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading tracking-tight">
              Customize <span className="gold-text-gradient">RecLora Content</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Quickly edit the Announcement Banner, the Sample Creator Profile, or the Sample Room. All changes save directly in your browser or can be copied into your codebase.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#3A2268] bg-[#180D2E] text-xs font-bold text-[#C8B6E2] hover:text-[#FFEAA7] hover:border-[#F5B041]/60 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold shadow-[0_0_15px_rgba(245,176,65,0.4)] hover:brightness-110 transition-all"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {savedSuccess ? 'Changes Saved!' : 'Save & Apply'}
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#180D2E] border border-[#3A2268] max-w-md">
          <button
            onClick={() => setActiveTab('announcement')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'announcement'
                ? 'bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] shadow-md'
                : 'text-[#C8B6E2] hover:text-[#FFEAA7]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Announcement
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] shadow-md'
                : 'text-[#C8B6E2] hover:text-[#FFEAA7]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            Sample Profile
          </button>
          <button
            onClick={() => setActiveTab('room')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'room'
                ? 'bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] shadow-md'
                : 'text-[#C8B6E2] hover:text-[#FFEAA7]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Sample Room
          </button>
        </div>

        {/* Form Container */}
        <div className="mt-8 bg-[#180D2E] border border-[#3A2268] rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* TAB 1: Announcement */}
          {activeTab === 'announcement' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C1854]">
                <div>
                  <h2 className="text-xl font-bold text-[#FFEAA7]">Home Page Announcement Banner</h2>
                  <p className="text-xs text-[#C8B6E2] mt-0.5">Customize the featured announcement that greets users on the homepage.</p>
                </div>
                <Link href="/" className="text-xs font-semibold text-[#F5B041] hover:underline">
                  Preview on Home →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Banner Badge Text</label>
                  <input
                    type="text"
                    value={announcement.badge}
                    onChange={(e) => setAnnouncement({ ...announcement, badge: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Date / Edition Label</label>
                  <input
                    type="text"
                    value={announcement.date}
                    onChange={(e) => setAnnouncement({ ...announcement, date: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Announcement Headline</label>
                <input
                  type="text"
                  value={announcement.title}
                  onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Subtitle Description</label>
                <textarea
                  rows={2}
                  value={announcement.subtitle}
                  onChange={(e) => setAnnouncement({ ...announcement, subtitle: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Detailed Announcement Body</label>
                <textarea
                  rows={3}
                  value={announcement.details}
                  onChange={(e) => setAnnouncement({ ...announcement, details: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Button Action Label</label>
                  <input
                    type="text"
                    value={announcement.buttonText}
                    onChange={(e) => setAnnouncement({ ...announcement, buttonText: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Button Link Target</label>
                  <input
                    type="text"
                    value={announcement.buttonLink}
                    onChange={(e) => setAnnouncement({ ...announcement, buttonLink: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Sample Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C1854]">
                <div>
                  <h2 className="text-xl font-bold text-[#FFEAA7]">Single Sample User Profile</h2>
                  <p className="text-xs text-[#C8B6E2] mt-0.5">Edit this template account to test or duplicate across your platform.</p>
                </div>
                <Link href="/profile" className="text-xs font-semibold text-[#F5B041] hover:underline">
                  View Profile Page →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Display Name</label>
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">User Handle</label>
                  <input
                    type="text"
                    value={profile.handle}
                    onChange={(e) => setProfile({ ...profile, handle: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Profile Bio</label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Creator Level</label>
                  <input
                    type="number"
                    value={profile.level}
                    onChange={(e) => setProfile({ ...profile, level: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Cheers Received</label>
                  <input
                    type="number"
                    value={profile.cheerCount}
                    onChange={(e) => setProfile({ ...profile, cheerCount: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Subscribers</label>
                  <input
                    type="number"
                    value={profile.subscribers}
                    onChange={(e) => setProfile({ ...profile, subscribers: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Badges & Tags (Comma Separated)</label>
                <input
                  type="text"
                  value={profile.tags.join(', ')}
                  onChange={(e) => setProfile({ ...profile, tags: e.target.value.split(',').map((s) => s.trim()) })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Sample Room */}
          {activeTab === 'room' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C1854]">
                <div>
                  <h2 className="text-xl font-bold text-[#FFEAA7]">Sample Room Template</h2>
                  <p className="text-xs text-[#C8B6E2] mt-0.5">Customize the primary featured community room.</p>
                </div>
                <Link href="/rooms/cosmic-lounge" className="text-xs font-semibold text-[#F5B041] hover:underline">
                  Visit Sample Room →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Room Name</label>
                  <input
                    type="text"
                    value={room.name}
                    onChange={(e) => setRoom({ ...room, name: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Category</label>
                  <input
                    type="text"
                    value={room.category}
                    onChange={(e) => setRoom({ ...room, category: e.target.value })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Room Tagline</label>
                <input
                  type="text"
                  value={room.tagline}
                  onChange={(e) => setRoom({ ...room, tagline: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Full Room Description</label>
                <textarea
                  rows={4}
                  value={room.description}
                  onChange={(e) => setRoom({ ...room, description: e.target.value })}
                  className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Room Visits</label>
                  <input
                    type="number"
                    value={room.visits}
                    onChange={(e) => setRoom({ ...room, visits: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Cheers</label>
                  <input
                    type="number"
                    value={room.cheers}
                    onChange={(e) => setRoom({ ...room, cheers: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#C8B6E2] mb-1.5">Player Capacity</label>
                  <input
                    type="number"
                    value={room.capacity}
                    onChange={(e) => setRoom({ ...room, capacity: Number(e.target.value) })}
                    className="w-full bg-[#120A21] border border-[#3A2268] rounded-xl px-4 py-2.5 text-sm text-[#F8F9FA] focus:outline-none focus:border-[#F5B041]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
