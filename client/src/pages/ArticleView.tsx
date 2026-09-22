import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../siteData.json';
import { useRoute, Link } from 'wouter';
import { 
  ArrowLeft, 
  Sparkles, 
  Calendar, 
  User, 
  Share2, 
  BookOpen, 
  ShieldCheck,
  Layers,
  ExternalLink
} from 'lucide-react';

export default function ArticleView() {
  const [, params] = useRoute('/creator/p/:slug');
  const slug = params?.slug || 'class-of-87-reunion';

  // Find page entry in siteData
  const matched = siteData.pages.find(p => p.path === `/creator/p/${slug}`);
  const title = matched ? matched.title : slug.replace(/-/g, ' ').toUpperCase();
  const description = matched ? matched.description : 'Official RecLora community and creator update.';

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C8B6E2] hover:text-[#FFEAA7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Announcements & Hub Articles
          </Link>
        </div>

        {/* Article Container */}
        <article className="rounded-3xl border border-[#3A2268] bg-[#180D2E] p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4 pb-6 border-b border-[#2C1854]">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-bold">
                {matched ? matched.category : 'Announcement'}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#120A21] text-[#C8B6E2] border border-[#3A2268] text-xs font-semibold">
                Official RecLora Notice
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#C8B6E2]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg overflow-hidden border border-[#F5B041] bg-[#120A21]">
                  <img src="/logo.png" alt="RecLora Studio" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[#FFEAA7]">RecLora Studio Team</p>
                  <p className="text-[10px]">Published September 2026</p>
                </div>
              </div>

              <button
                onClick={() => alert('Article link copied to clipboard!')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3A2268] bg-[#120A21] hover:text-[#FFEAA7] transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                Share
              </button>
            </div>
          </div>

          {/* Hero Banner for Article */}
          <div className="rounded-2xl overflow-hidden border border-[#2C1854] h-64 sm:h-80 relative bg-[#120A21]">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180D2E] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFEAA7]">
              <span className="backdrop-blur-md bg-[#120A21]/80 px-3 py-1 rounded-xl border border-[#F5B041]/50">
                RecLora Verified Article
              </span>
            </div>
          </div>

          {/* Body Prose Content */}
          <div className="space-y-5 text-sm sm:text-base text-[#C8B6E2] leading-relaxed">
            <p className="text-base sm:text-lg text-[#F8F9FA] font-medium leading-relaxed bg-[#120A21]/60 p-4 rounded-xl border border-[#2C1854]">
              {description}
            </p>

            <p>
              Welcome to the official <strong>RecLora</strong> briefing. Our community creators continue to innovate with Maker Pens, custom Circuit nodes, and interactive multiplayer experiences. As part of our purple and gold brand identity, we are rolling out streamlined discovery features, enhanced room permissions, and dedicated rewards for top builders.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#F8F9FA] font-heading pt-4 text-[#FFEAA7]">
              What You Need to Know
            </h2>

            <p>
              Whether you are architecting a competitive PvP arena, designing an atmospheric hangout lounge, or publishing custom avatar accessories to the Shop, RecLora provides end-to-end tooling to bring your vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
              <div className="p-4 rounded-xl bg-[#120A21] border border-[#2C1854] space-y-1">
                <span className="text-xs font-bold text-[#F5B041] uppercase tracking-wider">High Fidelity</span>
                <p className="text-xs text-[#C8B6E2]">Optimized physics, dynamic lighting rigs, and cross-play stability across desktop, VR, and mobile.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#120A21] border border-[#2C1854] space-y-1">
                <span className="text-xs font-bold text-[#F5B041] uppercase tracking-wider">Creator Economy</span>
                <p className="text-xs text-[#C8B6E2]">Transparent token cashout program, verified gold creator badges, and tiered invention royalties.</p>
              </div>
            </div>

            <p>
              For further questions or technical support regarding room creation and Maker Pen mechanics, please consult the <Link href="/creator" className="text-[#F5B041] hover:underline font-semibold">RecLora Creator Hub</Link> or join the weekly builder workshops hosted in the Community Lounge.
            </p>
          </div>

          {/* Footer Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#241442] to-[#120A21] border border-[#F5B041]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-bold text-base text-[#FFEAA7]">Ready to Build in RecLora?</h3>
              <p className="text-xs text-[#C8B6E2]">Jump into the Creator Hub to start creating your own rooms and inventions.</p>
            </div>
            <Link
              href="/creator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold hover:brightness-110 shadow-md transition-all whitespace-nowrap"
            >
              Go to Creator Hub
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
