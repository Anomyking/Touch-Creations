"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, Menu, X, Printer, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Bundles",  href: "/#bundles"  },
  { label: "Business", href: "/business"  },
  { label: "Contact",  href: "/contact"   },
  { label: "Support",  href: "/faqs"      },
];

export default function Navbar() {
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const runSearch = () => {
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/shop?q=${encodeURIComponent(q)}`);
    setMobileOpen(false);
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
              <Printer size={16} className="text-white" />
            </div>
            <span className="font-semibold text-brand-950 text-lg tracking-tight">Touch creations</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-sm items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-2 focus-within:border-brand-400 transition-colors">
            <button onClick={runSearch} aria-label="Search" className="shrink-0">
              <Search size={14} className="text-brand-400 hover:text-brand-700" />
            </button>
            <input type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search products — press Enter"
              className="flex-1 bg-transparent text-xs text-brand-700 placeholder:text-brand-400 outline-none" />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-brand-400 hover:text-brand-700 text-xs">✕</button>
            )}
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-sm text-brand-600 hover:text-brand-800 px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* User menu */}
            {user ? (
              <div className="relative hidden md:block">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-800 px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors">
                  <User size={16} />
                  <span className="max-w-[80px] truncate">{user.email?.split("@")[0]}</span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-brand-100 rounded-xl shadow-lg py-1 z-50">
                    <Link href="/account" onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2.5 text-xs text-brand-700 hover:bg-brand-50">📦 My orders</Link>
                    <Link href="/account?tab=profile" onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2.5 text-xs text-brand-700 hover:bg-brand-50">👤 Profile</Link>
                    <div className="border-t border-brand-50 mt-1 pt-1">
                      <button onClick={() => { signOut(); setUserMenuOpen(false); }}
                        className="w-full text-left px-4 py-2.5 text-xs text-red-500 hover:bg-red-50">🚪 Sign out</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login" className="hidden md:block text-sm text-brand-600 hover:text-brand-800 px-3 py-2 transition-colors">
                Login
              </Link>
            )}

            <Link href="/quote" className="hidden md:block text-sm bg-brand-700 hover:bg-brand-600 text-white px-4 py-2 rounded-full transition-colors">
              Get a quote
            </Link>

            {/* Cart */}
            <button onClick={openCart} className="relative p-2 rounded-lg hover:bg-brand-50 transition-colors">
              <ShoppingCart size={20} className="text-brand-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-brand-50" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} className="text-brand-700" /> : <Menu size={20} className="text-brand-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-50 bg-white px-4 py-4">
          <div className="flex items-center gap-2 bg-brand-50 rounded-full px-4 py-2 mb-4">
            <Search size={14} className="text-brand-400" />
            <input type="text" placeholder="Search products…"
              className="flex-1 bg-transparent text-xs outline-none text-brand-700 placeholder:text-brand-400"
              onKeyDown={handleSearch} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-sm text-brand-700 px-3 py-3 rounded-lg hover:bg-brand-50 transition-colors"
                onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            {user ? (
              <>
                <Link href="/account" className="text-sm text-brand-700 px-3 py-3 rounded-lg hover:bg-brand-50" onClick={() => setMobileOpen(false)}>📦 My orders</Link>
                <button onClick={() => { signOut(); setMobileOpen(false); }} className="text-left text-sm text-red-500 px-3 py-3 rounded-lg hover:bg-red-50">🚪 Sign out</button>
              </>
            ) : (
              <Link href="/auth/login" className="text-sm text-brand-700 px-3 py-3 rounded-lg hover:bg-brand-50" onClick={() => setMobileOpen(false)}>Login</Link>
            )}
            <Link href="/quote" className="mt-2 inline-flex items-center justify-center bg-brand-700 hover:bg-brand-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors" onClick={() => setMobileOpen(false)}>
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

