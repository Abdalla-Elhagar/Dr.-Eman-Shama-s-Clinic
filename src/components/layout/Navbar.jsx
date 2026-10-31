import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Heart, MessageCircle } from 'lucide-react';
import { siteSettings } from '../../data/settings';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
      isActive
        ? 'text-forest-800 font-bold bg-forest-100/70'
        : 'text-charcoal-700 hover:text-forest-800 hover:bg-forest-50/60'
    }`;

  return (
    <>
      {/* Top subtle emergency/announcement bar */}
      <div className="bg-forest-900 text-sand-100 text-xs py-2 px-3 sm:px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="inline-block w-2 h-2 rounded-full bg-forest-300 animate-pulse shrink-0" />
            <span className="leading-snug">عيادة التغذية العلاجية وإدارة الوزن • استشارات بالحجز المسبق</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3 text-sand-200 text-[11px] sm:text-xs">
            <a
              href={`https://wa.me/${siteSettings.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest-300 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>واتساب العيادة: <span dir="ltr">{siteSettings.displayPhone}</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-sand-200/60 py-2.5 sm:py-3'
            : 'bg-sand-100/95 backdrop-blur-sm border-b border-sand-200/40 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-800 flex items-center justify-center text-sand-50 shadow-soft group-hover:bg-forest-900 transition-colors shrink-0">
                <Heart className="w-5 h-5 text-forest-300" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-xl font-extrabold text-forest-950 group-hover:text-forest-800 transition-colors font-cairo truncate">
                  {siteSettings.doctorName}
                </span>
                <span className="text-[11px] sm:text-xs text-forest-600 font-medium hidden sm:block truncate">
                  {siteSettings.doctorTitle}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="القائمة الرئيسية">
              {siteSettings.navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={navLinkClass}>
                  {link.title}
                </NavLink>
              ))}
            </nav>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-forest-800 bg-sand-200 hover:bg-sand-300 rounded-xl transition-all"
                title="تواصل مباشر عبر الواتساب"
              >
                <MessageCircle className="w-4 h-4 text-forest-700" />
                <span>استفسار سريع</span>
              </a>

              <Button
                to="/booking"
                variant="primary"
                size="md"
                icon={Calendar}
                iconPosition="start"
                className="shadow-soft"
              >
                احجزي موعدكِ الآن
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <Button
                to="/booking"
                variant="primary"
                size="sm"
                className="text-xs px-2.5 sm:px-3 sm:hidden"
              >
                حجز موعد
              </Button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-forest-900 hover:bg-sand-200 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800"
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-sand-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header in Drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center text-sand-50">
                    <Heart className="w-4 h-4 text-forest-300" />
                  </div>
                  <span className="font-bold text-forest-900">{siteSettings.doctorName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-charcoal-700 hover:bg-sand-200"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {siteSettings.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-forest-800 text-white font-bold'
                          : 'text-charcoal-800 hover:bg-sand-200'
                      }`
                    }
                  >
                    <span>{link.title}</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-sand-200 flex flex-col gap-3">
              <Button
                to="/booking"
                variant="primary"
                size="lg"
                fullWidth
                icon={Calendar}
                iconPosition="start"
              >
                احجزي موعدكِ الآن
              </Button>

              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-forest-900 bg-sand-200 hover:bg-sand-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-forest-700" />
                <span>محادثة واتساب مباشرة</span>
              </a>

              <p className="text-xs text-center text-charcoal-400 mt-1">
                {siteSettings.clinicHours}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
