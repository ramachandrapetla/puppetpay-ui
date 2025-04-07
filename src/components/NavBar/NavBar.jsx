import { useState } from 'react'
import logo from '../../assets/logo-dark.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-center pt-2">
      <div className="max-w-[1080px] w-full px-3 relative z-50">
        <nav className="flex justify-between items-center max-h-[64px] py-3 bg-transparent">
          <img src={logo} alt="PUPPET PAY" className="h-10 w-auto" />
          {/* Desktop Menu */}
          <div className="hidden desktop:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-black">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Pricing
            </a>
            <button className="px-4 py-2 bg-primary text-white rounded">
              Sign In
            </button>
          </div>

          {/* Hamburger Button */}
          <div className="desktop:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu - Absolutely positioned */}
        {isOpen && (
          <div className="absolute top-[64px] left-0 w-full bg-white shadow-lg px-4 py-6 space-y-4 desktop:hidden">
            <a href="#" className="block text-gray-700">
              Products
            </a>
            <a href="#" className="block text-gray-700">
              Pricing
            </a>
            <button className="w-full text-left px-4 py-2 bg-primary text-white rounded">
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
