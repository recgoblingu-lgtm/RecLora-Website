import React from 'react';
import { Link } from 'wouter';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="portal-footer">
      <div className="portal-footer-inner">
        <div>
          <Link href="/" className="footer-brand">Rec<span>Lora</span></Link>
          <p>Play. Create. Connect.</p>
        </div>
        <div className="footer-links">
          <Link href="/announcements">News</Link>
          <Link href="/events">Events</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/creator">Creator Hub</Link>
          <Link href="/creator/docs/terms-of-service">Terms</Link>
          <Link href="/creator/docs/privacy-policy">Privacy</Link>
        </div>
        <div className="footer-credit"><Sparkles /> Purple & Gold Edition</div>
      </div>
      <div className="footer-bottom">© 2026 RecLora Network. Rebranded community project with permission.</div>
    </footer>
  );
}
