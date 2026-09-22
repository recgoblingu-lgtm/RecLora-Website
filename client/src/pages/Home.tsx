import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';
import { ArrowRight, CalendarDays, Compass, Home as HomeIcon, Sparkles, Star, Users, X } from 'lucide-react';
import siteData from '../siteData.json';
import { DEFAULT_ANNOUNCEMENT } from '../data/editableStore';

const roomImages = [
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
];

const newsItems = [
  ['announcement', "RecLora's Class of '87 Reunion", 'Old RecLora is back! Hang out in a classic rec center, explore community favorites from years past, and earn your very own alumni shirt.'],
  ['news', 'Raising the Level Cap', 'We’re raising the level cap from 50 to 87. This expansion means more XP to earn, new milestones to hit, and a whole new endgame for the community.'],
  ['news', 'Room Boosts Expansion!', 'Room boost chips are expanding to all creators in RecLora, along with a special weekly leaderboard challenge to celebrate the roll-out!'],
  ['news', 'Referee Levels Up!', 'Read more about our new approach to detecting and deterring hackers and cheats while keeping community play fun.'],
  ['creator', 'Introducing Maker Clubs', 'Build together, share your process, and learn from the creators shaping the next generation of RecLora rooms.'],
  ['creator', 'New Room Tagging System', 'Find the rooms you would enjoy more easily with better tags, categories, and recommendations.'],
  ['creator', 'Full Body Avatar Beta', 'More ways to show off your style are coming to RecLora, including new avatar studio creations.'],
  ['creator', 'Creator Academy Update', 'New Rooms 2.0 tutorials are live with building assets, hierarchies, circuits, and player properties.']
];

export default function Home() {
  const [announcement, setAnnouncement] = useState(() => {
    try { return JSON.parse(localStorage.getItem('reclora_announcement') || 'null') || DEFAULT_ANNOUNCEMENT; } catch { return DEFAULT_ANNOUNCEMENT; }
  });
  const [bannerVisible, setBannerVisible] = useState(true);
  const rooms = siteData.sample_rooms.slice(0, 5);

  return (
    <div className="portal-page">
      <Navbar />

      {bannerVisible && (
        <section className="notice-strip">
          <div className="notice-strip-inner">
            <p><strong>RecLora Baby ✨</strong> &nbsp; {announcement.subtitle}</p>
            <div className="notice-actions">
              <Link href="/editor">Edit notice</Link>
              <button onClick={() => setBannerVisible(false)} aria-label="Dismiss notice"><X /></button>
            </div>
          </div>
        </section>
      )}

      <main>
        <section className="showcase-row" aria-label="Featured links">
          <ShowcaseCard href="/creator" image="https://cdn.recroom.network/static/home/showcase/CreatorStats.jpg" title="View Creator Hub" />
          <ShowcaseCard href="/download" image="https://cdn.recroom.network/static/home/showcase/RecRoom_Keyart_AllPlatforms.jpg" title="Download For Free" />
          <ShowcaseCard href="/creator/p/class-of-87-reunion" image="https://cdn.recroom.network/wwwcontent/assets/Thumbnail_ffd62263a0.jpg" title={announcement.title} />
        </section>

        <nav className="portal-section-nav" aria-label="Section navigation">
          <Link href="/announcements"><Sparkles /> News</Link>
          <Link href="/events"><CalendarDays /> Events</Link>
          <Link href="/rooms"><HomeIcon /> Rooms</Link>
        </nav>

        <section className="portal-content-grid">
          <aside className="featured-rail">
            <div className="rail-heading"><h2>Featured Rooms</h2><Link href="/rooms">View all</Link></div>
            <div className="rail-list">
              {rooms.map((room, index) => {
                const slug = String(room[0]);
                return <Link href={`/rooms/${slug}`} className="rail-room" key={slug}>
                  <img src={roomImages[index % roomImages.length]} alt={String(room[1])} />
                  <div className="rail-room-copy">
                    <strong>{String(room[1])}</strong>
                    <span>{String(room[2])} · <Star /> {Number(room[4]).toFixed(1)}</span>
                  </div>
                </Link>;
              })}
            </div>
          </aside>

          <section className="news-feed">
            <div className="feed-heading">
              <div>
                <p className="eyebrow">Take a look at what’s happening right now in RecLora</p>
                <h1>Latest News</h1>
              </div>
              <Link href="/announcements">View all news <ArrowRight /></Link>
            </div>
            <div className="feed-list">
              {newsItems.map(([kind, title, body], index) => (
                <article key={`${kind}-${index}`} className="news-card">
                  <div className={`news-thumb thumb-${index % 4}`}><span>{kind === 'creator' ? 'Creator' : kind === 'announcement' ? 'Event' : 'News'}</span></div>
                  <div className="news-copy">
                    <div className="news-meta"><span>{kind === 'creator' ? 'Creator News' : 'Top Player News'}</span><span>September 2026</span></div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <Link href={kind === 'creator' ? '/creator' : '/announcements'}>Read More <ArrowRight /></Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="social-band">
          <div><p className="eyebrow">Our socials</p><h2>Stay in the loop</h2></div>
          <div className="social-links"><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://discord.com" target="_blank" rel="noreferrer">Discord</a></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ShowcaseCard({ href, image, title }: { href: string; image: string; title: string }) {
  return <Link href={href} className="showcase-card">
    <img src={image} alt="" />
    <div className="showcase-overlay" />
    <div className="showcase-caption"><span>{title}</span><ArrowRight /></div>
  </Link>;
}
