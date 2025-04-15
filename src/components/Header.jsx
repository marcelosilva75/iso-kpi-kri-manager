import React, { useState } from 'react';
import { ShieldCheck, BarChart3, Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Título */}
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-6 h-6 text-white" />
          <span className="text-xl font-bold">CyberRisk Manager</span>
        </div>

        {/* Botão Hamburguer (Mobile) */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-300 flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span>Início</span>
          </a>
          <a href="/riscos" className="hover:text-blue-300 flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Riscos</span>
          </a>
          <a href="/indicadores" className="hover:text-blue-300 flex items-center space-x-1">
            <BarChart3 className="w-4 h-4" />
            <span>Indicadores</span>
          </a>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
          <a href="/" className="block hover:text-blue-300">Início</a>
          <a href="/riscos" className="block hover:text-blue-300">Riscos</a>
          <a href="/indicadores" className="block hover:text-blue-300">Indicadores</a>
        </div>
      )}
    </header>
  );
};

export default Header;
