import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Card } from '../components/ui/Card'
import { HeartIcon, TargetIcon, UsersIcon } from 'lucide-react'
export function About() {
  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="bg-linear-to-br from-teal-50 via-white to-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Mental health support that gets it
          </h1>
          <p className="text-xl text-slate-600">
            We're building a space where developers can find understanding,
            support, and resources for the unique mental health challenges in
            tech.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <HeartIcon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To provide accessible, specialized mental health support that
                understands the unique pressures and challenges faced by
                software developers.
              </p>
            </Card>

            <Card>
              <TargetIcon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Approach
              </h3>
              <p className="text-slate-600">
                We combine AI-powered support, professional therapy, and curated
                resources to create a comprehensive wellness platform designed
                specifically for developers.
              </p>
            </Card>

            <Card>
              <UsersIcon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Community
              </h3>
              <p className="text-slate-600">
                A safe, supportive space where developers can find understanding
                and connection with others who share similar experiences and
                challenges.
              </p>
            </Card>
          </div>

          {/* Story Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why we built devspace
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                The tech industry moves fast. Deadlines are tight, expectations
                are high, and the pressure to constantly learn and adapt is
                relentless. While these challenges drive innovation, they also
                take a toll on mental health.
              </p>
              <p>
                Burnout, imposter syndrome, and work-life balance issues are
                common in software development, yet traditional mental health
                resources often don't understand the specific context of our
                work. Generic advice doesn't address the reality of on-call
                rotations, production incidents at 3am, or the constant feeling
                that you're not keeping up with the latest technologies.
              </p>
              <p>
                devspace was created to fill this gap. We believe developers
                deserve mental health support that truly understands their
                world—from therapists who know what "deploy anxiety" means to
                resources that address the specific stressors of remote work and
                async communication.
              </p>
              <p>
                Our platform combines the accessibility of AI-powered support
                with the expertise of licensed therapists who specialize in tech
                industry challenges. We're building a community where developers
                can find understanding, support, and practical tools for
                maintaining mental wellness in a demanding field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Privacy First
              </h3>
              <p className="text-slate-600">
                Your mental health journey is deeply personal. We maintain the
                highest standards of privacy and confidentiality, ensuring your
                data is secure and never shared.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Accessibility
              </h3>
              <p className="text-slate-600">
                Mental health support should be available when you need it. Our
                24/7 AI chatbot and flexible therapy scheduling ensure help is
                always accessible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Evidence-Based
              </h3>
              <p className="text-slate-600">
                All our therapeutic approaches and resources are grounded in
                proven mental health practices, adapted for the unique context
                of software development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Community & Understanding
              </h3>
              <p className="text-slate-600">
                We foster a supportive community where developers can connect
                with others who truly understand the challenges they face,
                reducing isolation and stigma.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
