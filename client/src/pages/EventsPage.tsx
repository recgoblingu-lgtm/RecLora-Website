import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Users, MapPin, Clock, Sparkles, ArrowRight, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function EventsPage() {
  const events = [
    {
      id: "ev-1",
      title: "RecLora Class of '87 Mega Reunion Party",
      host: "RecLora Studio & Community Leads",
      date: "Friday, Sep 25, 2026 • 6:00 PM EST",
      room: "The Reunion Hall",
      category: "Official Festival",
      desc: "Put on your retro neon threads and dance to live DJ sets, win exclusive throwback dormitory posters, and tour community memory halls.",
      attendees: 1840
    },
    {
      id: "ev-2",
      title: "Circuits V2 Masterclass: Dynamic Logic & Boss Fights",
      host: "@LoraAdmin",
      date: "Saturday, Sep 26, 2026 • 2:00 PM EST",
      room: "Cosmic Lounge Workshop Stage",
      category: "Workshop",
      desc: "Live interactive tutorial on building multi-phase boss fight health bars, trigger volumes, and synchronized sound effects with Circuits V2.",
      attendees: 620
    },
    {
      id: "ev-3",
      title: "Weekly Speed-Building Jam: Golden Era Dorms",
      host: "Maker Pen Guild",
      date: "Sunday, Sep 27, 2026 • 4:00 PM EST",
      room: "Creative Sandbox 04",
      category: "Contest",
      desc: "2-hour speed building tournament! Compete for 50,000 community tokens and the coveted Golden Maker Pen skin.",
      attendees: 940
    },
    {
      id: "ev-4",
      title: "Community Trivia & Game Show Night",
      host: "Studio 87 Live",
      date: "Tuesday, Sep 29, 2026 • 8:00 PM EST",
      room: "Golden Screen Drive-In",
      category: "Game Show",
      desc: "Answer rapid-fire trivia questions on gaming, sci-fi, and RecLora history. Custom buzzer podiums and confetti blasters enabled!",
      attendees: 410
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="pb-8 border-b border-[#3A2268] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#F5B041]" />
              Live Experiences & Gatherings
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading">
              Community <span className="gold-text-gradient">Events & Meetups</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Join live concerts, creator classes, speed-building tournaments, and game nights happening across RecLora.
            </p>
          </div>

          <Link
            href="/rooms/cosmic-lounge"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold shadow-md hover:brightness-110 transition-all"
          >
            <Play className="w-4 h-4 fill-[#0E071A]" />
            <span>Join Cosmic Lounge Event</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40">
                    {ev.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#C8B6E2]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{ev.attendees.toLocaleString()} RSVP'd</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors leading-snug">
                  {ev.title}
                </h3>

                <div className="space-y-1 text-xs text-[#FFEAA7]">
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#F5B041]" />
                    {ev.date}
                  </p>
                  <p className="flex items-center gap-2 text-[#C8B6E2]">
                    <MapPin className="w-3.5 h-3.5 text-[#F5B041]" />
                    Room: <span className="font-semibold text-[#F8F9FA]">{ev.room}</span> (Hosted by {ev.host})
                  </p>
                </div>

                <p className="text-xs text-[#C8B6E2] leading-relaxed pt-1">
                  {ev.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2C1854] flex items-center justify-between">
                <button
                  onClick={() => alert(`RSVP confirmed for ${ev.title}! Added to your calendar.`)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-bold hover:brightness-110 transition-all shadow-sm"
                >
                  RSVP for Event
                </button>

                <Link
                  href="/rooms/cosmic-lounge"
                  className="text-xs font-semibold text-[#F5B041] hover:underline flex items-center gap-1"
                >
                  Preview Venue →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
