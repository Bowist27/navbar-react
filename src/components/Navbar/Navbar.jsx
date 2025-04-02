import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Trámites', href: '#', dropdown: true },
  { name: 'Contacto', href: '#' },
  { name: 'Nosotros', href: '#' }
];

const Navbar = () => {
  return (
      <nav className="bg-[#D07024] text-white py-4 shadow-md font-serif" style={{ fontFamily: 'Garamond, serif' }}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-lg font-semibold">
            <span className="text-xs block">NOTARÍAS ASOCIADAS</span>
            <span className="text-2xl">38 y 76</span>
          </div>
          <div className="hidden md:flex space-x-8 text-lg">
            {navigation.map((item) => (
              item.dropdown ? (
                <Menu as="div" key={item.name} className="relative">
                  <MenuButton className="hover:underline flex items-center">
                    {item.name} <span className="ml-1">▼</span>
                  </MenuButton>
                  <MenuItems className="absolute mt-2 w-40 bg-white text-black rounded-md shadow-lg py-1">
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Trámite 1</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Trámite 2</a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              ) : (
                <a key={item.name} href={item.href} className="hover:underline">
                  {item.name}
                </a>
              )
            ))}
          </div>
          <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#a66432] transition">
            Iniciar sesión
          </button>
        </div>
      </nav>
    );
}

export default Navbar