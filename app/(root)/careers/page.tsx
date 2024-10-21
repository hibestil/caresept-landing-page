import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Globe, Users, HeartPulse, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our core engineering team to build and scale our healthcare platform using modern technologies like Next.js, React, and Node.js."
    },
    {
      title: "Healthcare Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead the strategic development of our healthcare products, working closely with healthcare providers and tech teams."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Create intuitive and accessible interfaces for our healthcare platform, ensuring excellent user experience for patients and providers."
    },
    {
      title: "Healthcare Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze healthcare data to drive insights and improve our platform's effectiveness and user experience."
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our distributed team"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Comprehensive Healthcare",
      description: "Full medical, dental, and vision coverage for you and your family"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Growth",
      description: "Learning stipend and regular development opportunities"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Equity Package",
      description: "Be an owner in the company with competitive equity compensation"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join the Caresept Team</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help us revolutionize healthcare delivery and make a meaningful impact in people&apos;s lives.
        </p>
      </div>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="grid gap-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{job.department}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;