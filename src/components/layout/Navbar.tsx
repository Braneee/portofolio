"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
  const [navContainerRect, setNavContainerRect] = useState<DOMRect | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateRects = () => {
      if (activeLinkRef.current && containerRef.current) {
        setActiveRect(activeLinkRef.current.getBoundingClientRect());
        setNavContainerRect(containerRef.current.getBoundingClientRect());
      }
    };
    
    // Defer calculation slightly to let layouts fully render
    const timer = setTimeout(updateRects, 50);
    
    window.addEventListener("resize", updateRects);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateRects);
    };
  }, [pathname]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredRect(rect);
    setHoveredLink(href);
    if (containerRef.current) {
      setNavContainerRect(containerRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Monitor scroll for header background blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden bg-black shadow-md shadow-primary-500/10 group-hover:scale-105 transition-transform duration-200">
              <img src="/grhi-logo.png" className="h-full w-full object-cover scale-[1.25]" alt="GRHI Logo" />
            </span>
            <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
              GRHI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={containerRef}
            className="hidden md:flex items-center gap-1 relative py-1 px-1.5 bg-surface-raised/20 border border-border/40 rounded-full backdrop-blur-sm select-none"
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding Pill Background Indicator */}
            {((hoveredLink ? hoveredRect : activeRect)) && navContainerRect && (
              <span
                className="absolute h-7 rounded-full bg-[#8b5cf6]/8 dark:bg-[#8b5cf6]/12 border border-[#8b5cf6]/10 dark:border-primary-500/20 transition-all duration-300 ease-out pointer-events-none -z-10"
                style={{
                  left: `${((hoveredLink ? hoveredRect : activeRect))!.left - navContainerRect.left}px`,
                  width: `${((hoveredLink ? hoveredRect : activeRect))!.width}px`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
            )}

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={isActive ? activeLinkRef : null}
                  onMouseEnter={(e) => handleMouseEnter(e, link.href)}
                  className={`font-sans text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full transition-colors duration-300 ${
                    isActive ? "text-primary-500 dark:text-primary-300" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-all duration-200"
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-warning" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-all duration-200"
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-warning" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-all duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-40 h-[calc(100vh-57px)] w-full bg-bg/95 backdrop-blur-md md:hidden animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-xl font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-primary-500 scale-105" : "text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
