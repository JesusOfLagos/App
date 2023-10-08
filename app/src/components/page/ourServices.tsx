import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Needs Assessment and Outreach',
    description:
      'At [Organization Name], our first step is to conduct a comprehensive needs assessment within the communities we serve. We engage with local stakeholders, healthcare providers, and residents to understand their unique healthcare challenges. This approach ensures that our services are tailored to address the most pressing health needs of the community.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Community Health Education',
    description:
      'Education is empowerment. [Organization Name] focuses on providing comprehensive health education programs. We empower individuals with the knowledge and resources they need to make informed healthcare decisions. By promoting health literacy, we empower communities to take control of their well-being and prevent health disparities.',
    icon: LockClosedIcon,
  },
  {
    name: 'Collaborative Partnerships',
    description:
      'Collaboration is at the heart of our approach. We actively seek partnerships with local healthcare facilities, nonprofits, and governmental agencies. By working together, we create a network of support that enhances healthcare access. These collaborations amplify our impact and enable us to reach a broader audience, ensuring no one is left behind when it comes to healthcare.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Tele-Health Integrations',
    description:
      'We are committed to leveraging technology to improve healthcare access. Our strategy includes the seamless integration of telehealth solutions. This allows individuals to access medical consultations remotely, especially in underserved or remote areas. Through telehealth, we bridge the gap between patients and healthcare providers, ensuring timely and convenient care.',
    icon: FingerPrintIcon,
  },
]

export default function OurServices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
