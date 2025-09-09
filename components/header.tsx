"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border-2 border-white relative">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="font-bold text-xl text-gray-900">AlertaCare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              <span>Inicio</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              <span>Soluciones</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <a href="#resultados" className="text-gray-700 hover:text-gray-900 transition-colors">
              Resultados
            </a>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              <span>Recursos</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              <span>Nosotros</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </nav>

          {/* CTA Button and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 font-medium bg-transparent"
              onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Demo
            </Button>
            <Search className="h-5 w-5 text-teal-600 cursor-pointer" />
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Inicio
              </a>
              <a href="#soluciones" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Soluciones
              </a>
              <a href="#resultados" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Resultados
              </a>
              <a href="#recursos" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Recursos
              </a>
              <a href="#nosotros" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Nosotros
              </a>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
