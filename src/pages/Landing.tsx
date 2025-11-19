import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { motion } from 'framer-motion'
import {
  MessageSquareIcon,
  CalendarIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
} from 'lucide-react'
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
export function Landing() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[900px] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Developer workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-900/80 to-teal-900/70"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto py-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Mental wellness support built for{' '}
              <span className="text-teal-400">developers</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Navigate burnout, imposter syndrome, and work-life balance with
              AI-powered support, professional therapy, and resources designed
              specifically for the developer experience.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/register">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link to="/resources">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-lg px-8 py-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Explore Resources
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Support that understands your world
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We know the unique challenges developers face. Our platform
              provides specialized support for the mental health issues common
              in tech.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquareIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Chatbot Support
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  24/7 access to an AI companion trained on developer-specific
                  mental health challenges. Get immediate support when you need
                  it most.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <CalendarIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Professional Therapy
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Connect with licensed therapists who understand tech culture,
                  remote work challenges, and the pressures of software
                  development.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <BookOpenIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Curated Resources
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Access articles, exercises, and tools specifically designed to
                  address burnout, imposter syndrome, and work-life balance in
                  tech.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Devspace Section with Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80"
            alt="Supportive environment"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why developer-specific mental health matters
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeInUp}
            >
              <div className="bg-teal-50 p-3 rounded-lg shrink-0">
                <ShieldCheckIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  Safe & Confidential
                </h3>
                <p className="text-slate-600">
                  Your privacy is paramount. All conversations and sessions are
                  completely confidential and secure.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeInUp}
            >
              <div className="bg-teal-50 p-3 rounded-lg shrink-0">
                <ClockIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  Available Anytime
                </h3>
                <p className="text-slate-600">
                  Whether it's 2am debugging or Sunday deployment stress,
                  support is always available when you need it.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeInUp}
            >
              <div className="bg-teal-50 p-3 rounded-lg shrink-0">
                <UsersIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  Community Understanding
                </h3>
                <p className="text-slate-600">
                  Connect with therapists and peers who truly understand the
                  unique pressures of software development.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl"
              variants={fadeInUp}
            >
              <div className="bg-teal-50 p-3 rounded-lg shrink-0">
                <BookOpenIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  Evidence-Based Approach
                </h3>
                <p className="text-slate-600">
                  All our resources and therapeutic approaches are grounded in
                  proven mental health practices.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-slate-900/95"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to prioritize your mental wellness?
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Join devspace today and start your journey toward better mental
            health with support that truly understands the developer experience.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
