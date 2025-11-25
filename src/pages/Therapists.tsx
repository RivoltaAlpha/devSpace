import { useState } from 'react'
import { motion } from 'framer-motion'
import { TherapistCard } from '../components/TherapistCard'
import type { TherapistProfile } from '../components/TherapistCard'
import { BookingModal } from '../components/BookingModal'
import { FilterIcon } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
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
    duration: 0.5,
  },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
// Mock therapist data
const therapists: TherapistProfile[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    licenseNumber: 'LPC-12345',
    specializations: [
      'Burnout Prevention',
      'Work-Life Balance',
      'Anxiety Management',
      'Career Transitions',
    ],
    yearsExperience: 8,
    bio: 'Specializing in tech industry burnout and work-life balance. I understand the unique pressures of software development and help developers build sustainable careers while maintaining mental wellness.',
    sessionRate: 150,
    isAcceptingClients: true,
  },
  {
    id: '2',
    name: 'Dr. Michael Torres',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    licenseNumber: 'LMFT-67890',
    specializations: [
      'Imposter Syndrome',
      'Performance Anxiety',
      'Team Dynamics',
      'Leadership Stress',
    ],
    yearsExperience: 12,
    bio: 'Former software engineer turned therapist. I combine technical understanding with therapeutic expertise to help developers overcome imposter syndrome and thrive in their careers.',
    sessionRate: 175,
    isAcceptingClients: true,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
    licenseNumber: 'PsyD-24680',
    specializations: [
      'Depression',
      'Anxiety',
      'Remote Work Challenges',
      'Social Isolation',
    ],
    yearsExperience: 10,
    bio: 'Focused on helping remote developers manage isolation and maintain mental health. I provide evidence-based strategies for thriving in distributed work environments.',
    sessionRate: 160,
    isAcceptingClients: true,
  },
  {
    id: '4',
    name: 'Dr. James Kim',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
    licenseNumber: 'PhD-13579',
    specializations: [
      'Stress Management',
      'Mindfulness',
      'On-Call Anxiety',
      'Sleep Issues',
    ],
    yearsExperience: 15,
    bio: 'Expert in stress management and mindfulness techniques tailored for high-pressure tech roles. I help developers manage on-call stress and deployment anxiety effectively.',
    sessionRate: 180,
    isAcceptingClients: false,
  },
  {
    id: '5',
    name: 'Dr. Aisha Patel',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    licenseNumber: 'LCSW-98765',
    specializations: [
      'Career Transitions',
      'Confidence Building',
      'Communication Skills',
      'Boundary Setting',
    ],
    yearsExperience: 7,
    bio: 'Helping developers navigate career changes and build confidence. I specialize in communication skills and setting healthy boundaries in fast-paced tech environments.',
    sessionRate: 140,
    isAcceptingClients: true,
  },
  {
    id: '6',
    name: 'Dr. David Nguyen',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    licenseNumber: 'LPC-54321',
    specializations: [
      'ADHD',
      'Focus & Productivity',
      'Time Management',
      'Learning Overwhelm',
    ],
    yearsExperience: 9,
    bio: 'Specializing in ADHD and focus challenges in tech. I help developers optimize their productivity while managing the constant learning demands of the industry.',
    sessionRate: 155,
    isAcceptingClients: true,
  },
]
const allSpecializations = Array.from(
  new Set(therapists.flatMap((t) => t.specializations)),
).sort()
export function Therapists() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null)
  const [selectedTherapist, setSelectedTherapist] =
    useState<TherapistProfile | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const filteredTherapists = selectedSpecialization
    ? therapists.filter((t) =>
        t.specializations.includes(selectedSpecialization),
      )
    : therapists
  const handleBookSession = (therapist: TherapistProfile) => {
    setSelectedTherapist(therapist)
    setIsBookingModalOpen(true)
  }
  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1637245048732-adf1a547835e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional therapist"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-900/80 to-teal-900/70"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center py-20"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Therapist
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Connect with licensed therapists who understand the unique
            challenges of software development and tech culture.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <FilterIcon className="w-5 h-5 text-slate-600" />
            <h3 className="font-semibold text-slate-900">
              Filter by Specialization
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSpecialization(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSpecialization === null ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All Therapists
            </button>
            {allSpecializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSpecialization === spec ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {filteredTherapists.map((therapist) => (
              <motion.div key={therapist.id} variants={fadeInUp}>
                <TherapistCard
                  therapist={therapist}
                  onBookSession={handleBookSession}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredTherapists.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="text-center py-20"
            >
              <p className="text-xl text-slate-600 mb-4">
                No therapists found with this specialization.
              </p>
              <button
                onClick={() => setSelectedSpecialization(null)}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                View all therapists
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Browse Therapists
              </h3>
              <p className="text-sm text-slate-600">
                Review profiles, specializations, and availability to find the
                right match.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Book a Session
              </h3>
              <p className="text-sm text-slate-600">
                Choose a convenient time slot and confirm your appointment
                online.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Start Your Journey
              </h3>
              <p className="text-sm text-slate-600">
                Join your secure video session and begin working toward better
                mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        therapist={selectedTherapist}
      />
    <Footer />
    </div>
  )
}
