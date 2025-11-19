import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { CheckCircleIcon, ClockIcon, AwardIcon } from 'lucide-react'
export interface TherapistProfile {
  id: string
  name: string
  image: string
  licenseNumber: string
  specializations: string[]
  yearsExperience: number
  bio: string
  sessionRate: number
  isAcceptingClients: boolean
  availableSlots?: string[]
}
interface TherapistCardProps {
  therapist: TherapistProfile
  onBookSession: (therapist: TherapistProfile) => void
}
export function TherapistCard({
  therapist,
  onBookSession,
}: TherapistCardProps) {
  return (
    <Card className="h-full overflow-hidden group">
      {/* Therapist Image */}
      <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={therapist.image}
          alt={therapist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>

        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          {therapist.isAcceptingClients ? (
            <span className="flex items-center space-x-1 bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <CheckCircleIcon className="w-3 h-3" />
              <span>Accepting Clients</span>
            </span>
          ) : (
            <span className="flex items-center space-x-1 bg-slate-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <ClockIcon className="w-3 h-3" />
              <span>Waitlist Only</span>
            </span>
          )}
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {therapist.name}
          </h3>
          <p className="text-sm text-slate-200 flex items-center space-x-2">
            <AwardIcon className="w-4 h-4" />
            <span>Licensed Therapist • {therapist.licenseNumber}</span>
          </p>
        </div>
      </div>

      {/* Experience & Rate */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
        <div>
          <p className="text-sm text-slate-600">Experience</p>
          <p className="text-lg font-semibold text-slate-900">
            {therapist.yearsExperience} years
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Session Rate</p>
          <p className="text-lg font-semibold text-teal-600">
            ${therapist.sessionRate}/hr
          </p>
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-700 mb-2">
          Specializations
        </p>
        <div className="flex flex-wrap gap-2">
          {therapist.specializations.slice(0, 3).map((spec, idx) => (
            <span
              key={idx}
              className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
          {therapist.specializations.length > 3 && (
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              +{therapist.specializations.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
        {therapist.bio}
      </p>

      {/* CTA Button */}
      <Button
        variant={therapist.isAcceptingClients ? 'primary' : 'ghost'}
        size="md"
        className="w-full"
        onClick={() => onBookSession(therapist)}
        disabled={!therapist.isAcceptingClients}
      >
        {therapist.isAcceptingClients ? 'Book Session' : 'Join Waitlist'}
      </Button>
    </Card>
  )
}
