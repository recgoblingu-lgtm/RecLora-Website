import React from 'react';
import { Link } from 'wouter';
import { Download, Settings, UserRound, ShoppingBag, BookOpen, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <header className="portal-header">
        <div className="portal-header-inner">
          <Link href="/" className="portal-brand" aria-label="RecLora home">
            <img src="/logo.png" alt="RecLora" />
            <span className="brand-wordmark">Rec<span>Lora</span></span>
          </Link>

          <nav className="portal-primary-nav" aria-label="Primary">
            <Link href="/shop"><ShoppingBag /> Shop</Link>
            <Link href="/creator"><BookOpen /> Creator Hub</Link>
          </nav>

          <div className="portal-actions">
            <Link href="/profile" className="portal-login"><UserRound /> <span>Login</span></Link>
            <Link href="/download" className="portal-download"><Download /> <span>Download</span></Link>
            <Link href="/editor" className="portal-settings" aria-label="Customize"><Settings /></Link>
          </div>
        </div>
      </header>

      <div className="community-banner">
        <div className="community-banner-inner">
          <div className="community-mark"><Sparkles /></div>
          <p>
            This website is a community tribute to <strong>RecLora</strong> built by Studio Lora. If you would like to learn more about what we've been working on, please join our community for the latest details and sneak peeks.
          </p>
          <button className="banner-close" aria-label="Close announcement">×</button>
        </div>
      </div>
    </>
  );
}
