"use client";

import { useEffect, useState } from "react";

/* ── Contact details ─────────────────────────────────────────── */
const WHATSAPP_NUMBER = "254708204344"; 
const PHONE_NUMBERS = [
  { display: "+254 708 204 344", tel: "+254708204344" },
  { display: "+254 799 654 737", tel: "+254799654737" },
  { display: "+254 748 176 521", tel: "+254748176521" },
];

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WHATSAPP_LINK = whatsappLink(
  "Hi WIFI MTAANI, I'd like to enquire about your internet packages."
);

/* ── Content data ────────────────────────────────────────────── */
const packages = [
  { speed: "8", price: "1,500" },
  { speed: "10", price: "1,800" },
  { speed: "12", price: "2,000" },
  { speed: "15", price: "2,500", popular: true },
  { speed: "18", price: "2,800" },
  { speed: "20", price: "3,000" },
];

const benefits = [
  { icon: "◉", title: "Easy to get started", text: "Tell us where you are in Ihururu and the kind of connection you need. We’ll help you choose the right option." },
  { icon: "⌁", title: "Options that fit your needs", text: "Connect through convenient hotspot access or a dedicated home connection — with packages from 8 Mbps to 20 Mbps." },
  { icon: "▣", title: "CCTV installation", text: "Keep your home or business secure. We install CCTV systems, with pricing discussed and tailored to your budget." },
  { icon: "↗", title: "Local support", text: "Speak to our team when you need help, want to check coverage in Nyeri or make a plan enquiry." },
];

const faqs = [
  { q: "What is the difference between hotspot and PPPoE?", a: "Hotspot gives you access through a Wi-Fi network using a login or access package. PPPoE is generally used for a more consistent subscriber connection, commonly set up for a home or premises. Contact us and we’ll help you choose." },
  { q: "How much do your internet packages cost?", a: "Our packages start at 8 Mbps for KSh 1,500 per month and go up to 20 Mbps for KSh 3,000 per month. See the packages section above or contact us to confirm availability in Ihururu, Nyeri." },
  { q: "How much does installation cost?", a: "A one-time installation fee of KSh 5,500 – 7,500 applies depending on your specific location within Ihururu and the connection type (Hotspot or PPPoE)." },
  { q: "Do you cover my area?", a: "We proudly serve the Ihururu community in Nyeri. Send us your specific estate or landmark and our team will confirm availability." },
  { q: "How do I get connected?", a: "Reach us on WhatsApp or call any of our numbers, tell us your location in Ihururu, then our team will guide you through availability and setup." },
];

const navLinks = [
  { href: "#services", label: "Our services" },
  { href: "#packages", label: "Packages" },
  { href: "#why-us", label: "Why WIFI Mtaani" },
  { href: "#faq", label: "FAQs" },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("wifi-mtaani-theme", next); } catch {}
    setTheme(next);
  };

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="WIFI MTAANI home">
          <span className="brand-mark">
            <img src="/WifiMtaani-logo.png" alt="WIFI MTAANI Logo" className="brand-logo" />
          </span>
          <span className="brand-copy"><strong>WIFI MTAANI</strong><small>BY VEKNET TECHNOLOGIES</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Get connected <span>↗</span></a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i /><i /><i />
          </button>
        </div>
        <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          {PHONE_NUMBERS.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}<span>CALL</span></a>)}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Chat on WhatsApp <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-content">
          <div className="eyebrow"><span className="live-dot" /> YOUR CONNECTION. YOUR COMMUNITY.</div>
          <h1>Good internet.<br /><em>Right around</em> the corner.</h1>
          <p className="hero-lede">Stay connected with WIFI MTAANI — flexible hotspot access, home internet from 8 to 20 Mbps and CCTV installation, serving the Ihururu, Nyeri community.</p>
          <div className="hero-actions"><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Find your connection <span>↗</span></a><a className="text-link" href="#packages">View our packages <span>↓</span></a></div>
          <div className="hero-note"><span className="signal-icon">⌁</span><span>For everyday browsing, streaming, learning and work.</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract illustration of a connected neighbourhood">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="wifi-symbol"><span /><span /><span /><i /></div>
          <div className="connection-tag tag-top"><b className="tag-dot" /> CONNECTED</div>
          <div className="connection-tag tag-bottom"><span>WIFI</span><b>MTAANI</b><small>IHURURU, NYERI</small></div>
          <div className="node node-a" /><div className="node node-b" /><div className="node node-c" />
        </div>
        <div className="hero-bottom"><span>VEKNET TECHNOLOGIES</span><span>CONNECTING IHURURU, ONE HOME AT A TIME</span><span>01 — 05</span></div>
      </section>

      <section className="trust-strip"><p>INTERNET FOR THE WAY YOU LIVE</p><div><span>HOME</span><i /> <span>COMMUNITY</span><i /> <span>BUSINESS</span><i /> <span>ON THE GO</span></div></section>

      <section className="section services-section reveal" id="services">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">01 / OUR SERVICES</div><h2>Choose how you<br /><em>stay connected.</em></h2></div><p>Whether you need convenient Wi-Fi access, a dedicated home connection or security for your premises in Ihururu, WIFI MTAANI has options to explore.</p></div>
        <div className="service-grid">
          <article className="service-card hotspot-card"><div className="service-top"><span className="service-number">01</span><span className="service-icon">⌁</span></div><div className="service-art hotspot-art"><div className="hotspot-ring ring-one" /><div className="hotspot-ring ring-two" /><div className="hotspot-center">Wi-Fi</div><span className="art-label label-one">ACCESS</span><span className="art-label label-two">MTAANI</span></div><div className="service-copy"><div className="service-kicker">FLEXIBLE WI-FI ACCESS</div><h3>Hotspot<br />packages.</h3><p>Get online through WIFI MTAANI hotspot access. A convenient option for browsing, social media, study and everyday internet use.</p><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="card-link">Enquire about hotspot <span>↗</span></a></div></article>
          <article className="service-card pppoe-card"><div className="service-top"><span className="service-number">02</span><span className="service-icon">⌂</span></div><div className="service-art home-art"><div className="home-shape"><div className="roof" /><div className="house"><div className="window window-left" /><div className="window window-right" /><div className="door" /></div></div><div className="home-waves"><i /><i /><i /></div><span className="art-label home-label">HOME NETWORK</span></div><div className="service-copy"><div className="service-kicker">HOME &amp; PREMISES INTERNET</div><h3>PPPoE<br />connections.</h3><p>Looking for an internet connection for your home in Nyeri? Ask about our PPPoE service and available packages in your area.</p><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="card-link">Enquire about PPPoE <span>↗</span></a></div></article>
          <article className="service-card cctv-card"><div className="service-top"><span className="service-number">03</span><span className="service-icon">◉</span></div><div className="service-art cctv-art"><div className="cctv-ring ring-one" /><div className="cctv-ring ring-two" /><div className="cctv-lens" /><span className="art-label label-one">24/7</span><span className="art-label label-two">SECURITY</span></div><div className="service-copy"><div className="service-kicker">SECURITY &amp; SURVEILLANCE</div><h3>CCTV<br />installation.</h3><p>Keep your home or business secure with professional CCTV installation. Every property is different, so pricing is discussed with you based on your budget.</p><a href={whatsappLink("Hi WIFI MTAANI, I'd like a CCTV installation quote.")} target="_blank" rel="noreferrer" className="card-link">Request a CCTV quote <span>↗</span></a></div></article>
        </div>
      </section>

      <section className="section packages-section reveal" id="packages">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">02 / PACKAGES</div><h2>Pick the speed<br /><em>that fits you.</em></h2></div><p>Simple monthly home internet packages from WIFI MTAANI. Reach out to confirm availability in Ihururu and get set up.</p></div>
        
        {/* ── Cost Breakdown Banner ── */}
        <div className="cost-breakdown-banner">
          <div className="breakdown-item">
            <span className="breakdown-icon">📦</span>
            <div>
              <strong>Monthly Subscription</strong>
              <p>Choose a speed from 8 to 20 Mbps. Prices range from <strong>KSh 1,500 to 3,000</strong> per month, billed monthly.</p>
            </div>
          </div>
          <div className="breakdown-divider" />
          <div className="breakdown-item">
            <span className="breakdown-icon">🔧</span>
            <div>
              <strong>One-Time Installation</strong>
              <p>A single setup fee of <strong>KSh 5,500 – 7,500</strong> applies for locations across <strong>Ihururu, Nyeri</strong>, depending on connection type.</p>
            </div>
          </div>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <article className={`package-card${pkg.popular ? " popular" : ""}`} key={pkg.speed}>
              {pkg.popular && <span className="popular-badge">MOST POPULAR</span>}
              <div className="package-speed">{pkg.speed}<small> Mbps</small></div>
              <div className="package-price">KSh {pkg.price}<span> / MONTH</span></div>
              <small className="install-note">+ One-time installation fee</small>
              <a className="package-cta" href={whatsappLink(`Hi WIFI MTAANI, I'd like to get the ${pkg.speed} Mbps package at KSh ${pkg.price} per month.`)} target="_blank" rel="noreferrer">Get this package <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="service-footnote"><span>*</span> Prices are in Kenyan Shillings. We serve the Ihururu community. Exact installation costs will be confirmed by our team based on your specific location.</div>
      </section>

      <section className="why-section" id="why-us"><div className="why-inner"><div className="why-intro reveal"><div className="eyebrow"><span className="live-dot" /> 03 / THE WIFI MTAANI DIFFERENCE</div><h2>Internet should<br />bring us <em>closer.</em></h2><p>We believe staying connected should feel simple. That’s why we focus on practical internet options and approachable support for the Ihururu community.</p><a className="button button-light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Talk to our team <span>↗</span></a></div><div className="benefit-list">{benefits.map((item, index) => <div className="benefit reveal" key={item.title}><div className="benefit-index">0{index + 1}</div><div className="benefit-icon">{item.icon}</div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="benefit-arrow">↗</span></div>)}</div></div></section>

      <section className="coverage-section"><div className="coverage-pattern" /><div className="coverage-content reveal"><div className="eyebrow dark-eyebrow">04 / CHECK AVAILABILITY</div><h2>Is WIFI MTAANI<br />available <em>near you?</em></h2><p>We are expanding our coverage across Ihururu, Nyeri. Let us check what’s possible at your specific location.</p><a className="button button-dark" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Check my area on WhatsApp <span>↗</span></a><small>Share your estate, village or nearest landmark in Ihururu.</small></div><div className="coverage-stamp"><span>LOCAL</span><b>Wi-Fi</b><span>IHURURU<br />CONNECTED</span></div></section>

      <section className="section faq-section" id="faq"><div className="faq-heading reveal"><div className="eyebrow dark-eyebrow">05 / GOOD TO KNOW</div><h2>Questions?<br /><em>We’ve got you.</em></h2><p>A few quick answers to help you get started.</p></div><div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.q}><summary><span className="faq-index">0{index + 1}</span><strong>{faq.q}</strong><span className="faq-plus">+</span></summary><p>{faq.a}</p></details>)}</div></section>

      <section className="final-cta"><div className="eyebrow"><span className="live-dot" /> LET’S GET YOU CONNECTED</div><h2>Your people.<br /><em>Your place.</em> Your Wi-Fi.</h2><p>Call, WhatsApp or chat with WIFI MTAANI — serving Ihururu, Nyeri — and let’s find the right way to get you online.</p><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Chat with us on WhatsApp <span>↗</span></a>
        <div className="cta-phones">
          {PHONE_NUMBERS.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>)}
        </div>
        <div className="cta-orbit orbit-cta-one" /><div className="cta-orbit orbit-cta-two" /></section>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <img src="/WifiMtaani-logo.png" alt="WIFI MTAANI Logo" className="brand-logo" />
            </span>
            <span className="brand-copy"><strong>WIFI MTAANI</strong><small>BY VEKNET TECHNOLOGIES</small></span>
          </a>
          <p>WIFI MTAANI, a VEKNET Technologies company — keeping the Ihururu community connected with hotspot access, home internet and CCTV installation.</p>
          <div className="footer-contact">
            <span>CALL OR WHATSAPP — READY WHEN YOU ARE</span>
            {PHONE_NUMBERS.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>)}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Start a WhatsApp chat ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VEKNET TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
          <div className="powered-by-badge">
            <span className="powered-text">Crafted with</span>
            <span className="heart-icon">♥</span>
            <span className="powered-text">& Powered by</span>
            <span className="masterkimaru-glow">Masterkimaru</span>
            <span className="sparkle">✦</span>
          </div>
          <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}