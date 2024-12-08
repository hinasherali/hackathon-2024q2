import React from 'react';

export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <link href="/" className="text-lg font-bold">Comforty</link>
          <div className="space-x-4">
            <link href="/products" className="hover:underline">Products</link>
            <link href="/cart" className="hover:underline">Cart</link>
            <link href="/contact-us" className="hover:underline">Contact</link>
          </div>
        </nav>
      </header>
    );
  }
  