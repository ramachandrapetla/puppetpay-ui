import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoltLightning,
  faChartSimple,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { Section } from '../../layouts/Section'
import './Features.css'

const features = [
  {
    title: 'Fast Integration',
    description: 'Get started in minutes with our simple API and SDKs.',
    icon: faBoltLightning,
    class: 'card-integration',
  },
  {
    title: 'Real-time Insights',
    description: 'Track your revenue, payments, and customers in real time.',
    icon: faChartSimple,
    class: 'card-insights',
  },
  {
    title: 'Secure Payments',
    description:
      'PCI-DSS compliant and 2FA ready, keeping you and your users safe.',
    icon: faLock,
    class: 'card-secure',
  },
]

export const Features = () => {
  return (
    <Section className="features_section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Built for speed, <br className="hidden md:block" />
          scale, and security
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Everything you need to accept payments, track earnings, and grow your
          business <br />
          –&nbsp;all in one platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className={`glow-card ${feature.class}`}>
              <div className="text-3xl mb-4 card-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
