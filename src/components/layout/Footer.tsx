import { Link } from 'react-router-dom'
import {
  BrainCircuitIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuitIcon className="w-6 h-6 text-teal-600" />
              <span className="text-lg font-bold text-slate-900">devspace</span>
            </div>
            <p className="text-sm text-slate-600">
              Mental wellness support built for developers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/resources"
                  className="text-sm text-slate-600 hover:text-teal-600"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-600 hover:text-teal-600"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-600 hover:text-teal-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-teal-600"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-teal-600">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-teal-600">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-teal-600">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-600">
            © 2024 devspace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
