import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Heart, Award, CheckCircle, Activity } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      number: '500K+',
      label: 'Active Users',
      icon: <Users className="h-6 w-6 text-blue-500" />,
    },
    {
      number: '10K+',
      label: 'Healthcare Providers',
      icon: <Heart className="h-6 w-6 text-blue-500" />,
    },
    {
      number: '50+',
      label: 'Cities Covered',
      icon: <Globe className="h-6 w-6 text-blue-500" />,
    },
    {
      number: '98%',
      label: 'Patient Satisfaction',
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Caresept was founded with a vision to revolutionize healthcare accessibility.',
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded to 20 major cities and secured Series A funding.',
    },
    {
      year: '2022',
      title: 'Technology Innovation',
      description: 'Launched AI-powered matching system and telemedicine platform.',
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became the fastest-growing healthcare platform in the region.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Former Stanford Medical Director with 15+ years of healthcare innovation experience.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Ex-Google engineer passionate about applying AI to healthcare challenges.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      bio: 'Board-certified physician with expertise in digital health transformation.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Chief Operations Officer',
      bio: 'Healthcare operations expert with experience scaling digital health startups.',
      image: '/api/placeholder/400/400',
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-500" />,
      title: 'Patient-First Approach',
      description: 'Every decision we make starts with patient well-being in mind.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: 'Excellence in Care',
      description: 'We maintain the highest standards in healthcare service delivery.',
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-500" />,
      title: 'Innovation',
      description: 'Continuously improving healthcare through technology and research.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Healthcare Access</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We&apos;re on a mission to make quality healthcare accessible to everyone through
              innovative technology and compassionate care.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {stat.icon}
                <h2 className="text-3xl font-bold mt-4 mb-2">{stat.number}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="font-bold text-blue-600 w-20">{item.year}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src="/api/placeholder/200/100"
                  alt={`Award ${index + 1}`}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
