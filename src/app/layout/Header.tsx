import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black border-b border-teal-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Travio
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/destinations" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Destinations
            </Link>
            <Link 
              href="/trips" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Trips
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/profile" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Profile
            </Link>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile menu button (for future implementation) */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
