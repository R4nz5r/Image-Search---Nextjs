"use client";

import {
  Users,
  Target,
  Eye,
  Heart,
  Award,
  Lightbulb,
  TrendingUp,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Calendar,
} from "lucide-react";
import type { AboutContent } from "@/types/index.ts";
import Link from "next/link";
import type { FC, SVGProps } from "react";

export default function AboutPage() {
  const aboutContent: AboutContent = {
    hero: {
      title: "About Our Company",
      subtitle: "Building the Future, Together",
      description:
        "We are a forward-thinking technology company dedicated to creating innovative solutions that make a difference in people's lives. Our journey started with a simple idea: to bridge the gap between technology and human needs.",
      ctaText: "Get in Touch",
      ctaLink: "/contact",
    },
    mission: {
      title: "Our Mission & Vision",
      description:
        "Our mission is to empower individuals and businesses through cutting-edge technology solutions. We believe in the power of innovation to transform the way people work, live, and connect with each other.",
      vision:
        "To be the leading provider of technology solutions that drive positive change and create lasting impact in communities around the world.",
    },
    values: [
      {
        icon: "Lightbulb",
        title: "Innovation",
        description:
          "We constantly push boundaries and explore new possibilities to create groundbreaking solutions.",
      },
      {
        icon: "Heart",
        title: "Integrity",
        description:
          "We conduct our business with honesty, transparency, and ethical practices in everything we do.",
      },
      {
        icon: "Users",
        title: "Collaboration",
        description:
          "We believe that the best solutions come from diverse perspectives working together as one team.",
      },
      {
        icon: "Award",
        title: "Excellence",
        description:
          "We strive for excellence in every project, delivery, and customer interaction.",
      },
    ],
    team: {
      title: "Meet Our Team",
      description:
        "Our diverse team of passionate professionals brings together expertise from various fields to deliver exceptional results.",
      members: [
        {
          name: "Sarah Johnson",
          role: "Chief Executive Officer",
          bio: "Sarah brings over 15 years of experience in technology leadership, with a passion for innovation and team building.",
          linkedin: "https://linkedin.com/in/sarahjohnson",
          twitter: "https://twitter.com/sarahjohnson",
        },
        {
          name: "Michael Chen",
          role: "Chief Technology Officer",
          bio: "Michael is a visionary technologist who leads our engineering teams with deep expertise in scalable systems.",
          linkedin: "https://linkedin.com/in/michaelchen",
          twitter: "https://twitter.com/michaelchen",
        },
        {
          name: "Emily Rodriguez",
          role: "Head of Product",
          bio: "Emily combines user-centered design thinking with strategic product vision to create meaningful experiences.",
          linkedin: "https://linkedin.com/in/emilyrodriguez",
          twitter: "https://twitter.com/emilyrodriguez",
        },
        {
          name: "David Kim",
          role: "Head of Marketing",
          bio: "David drives our brand narrative and market presence with his creative marketing strategies and data-driven approach.",
          linkedin: "https://linkedin.com/in/davidkim",
          twitter: "https://twitter.com/davidkim",
        },
      ],
    },
    stats: [
      {
        number: "500K+",
        label: "Active Users",
        description: "People using our solutions daily",
      },
      {
        number: "50+",
        label: "Countries",
        description: "Global reach across continents",
      },
      {
        number: "99.9%",
        label: "Uptime",
        description: "Reliable service delivery",
      },
      {
        number: "5+",
        label: "Years",
        description: "Of continuous innovation",
      },
    ],
    timeline: {
      title: "Our Journey",
      milestones: [
        {
          year: "2019",
          title: "Company Founded",
          description:
            "Started with a vision to revolutionize the industry through innovative technology solutions.",
        },
        {
          year: "2020",
          title: "First Product Launch",
          description:
            "Launched our flagship product, receiving overwhelming positive feedback from early adopters.",
        },
        {
          year: "2021",
          title: "Series A Funding",
          description:
            "Secured $10M in funding to accelerate growth and expand our team.",
        },
        {
          year: "2022",
          title: "Global Expansion",
          description:
            "Opened offices in three new countries and reached 100K active users milestone.",
        },
        {
          year: "2023",
          title: "Strategic Partnerships",
          description:
            "Formed key partnerships with industry leaders to enhance our platform capabilities.",
        },
        {
          year: "2024",
          title: "Innovation Award",
          description:
            "Recognized as Industry Leader in Technology Innovation by TechCrunch.",
        },
      ],
    },
    cta: {
      title: "Ready to Join Our Journey?",
      description:
        "Whether you're looking to partner with us, join our team, or learn more about our solutions, we'd love to hear from you.",
      primaryButton: {
        text: "Contact Us",
        link: "/contact",
      },
      secondaryButton: {
        text: "View Careers",
        link: "/careers",
      },
    },
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
      Users,
      Target,
      Eye,
      Heart,
      Award,
      Lightbulb,
      TrendingUp,
      Globe,
    };
    return icons[iconName] || Lightbulb;
  };

  return (
    <>
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, #a0d2eb, #e5eaf5, #d0bdf4, #8458B3, #a28089)`,
        }}
      ></div>
      <main className="relative z-10 min-h-screen mt-15">
        {/* <div className="min-h-screen bg-white"> */}
        {/* Hero Section */}
        <section className="relative  text-black">
          <div className="absolute inset-0"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {aboutContent.hero.title}
              </h1>
              <p className="text-2xl lg:text-3xl  mb-8 font-semibold text-indigo-500">
                {aboutContent.hero.subtitle}
              </p>
              <p className="text-lg lg:text-xl text-indigo-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {aboutContent.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                >
                  {aboutContent.hero.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {aboutContent.mission.title}
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {aboutContent.mission.description}
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-indigo-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {aboutContent.mission.vision}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 text-center">
                    <Globe className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Global Impact
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Creating solutions that transcend borders and make a
                      positive impact on communities worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The principles that guide everything we do and define who we
                  are as a company.
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutContent.values.map((value, index) => {
                  const IconComponent = getIconComponent(value.icon);
                  return (
                    <div key={index} className="text-center group">
                      <div className="bg-linear-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-linear-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  These numbers represent the trust our users place in us and
                  the impact we strive to make every day.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
                      <div className="text-4xl lg:text-5xl font-bold mb-2 text-indigo-500">
                        {stat.number}
                      </div>
                      <div className="text-xl font-semibold mb-2 text-indigo-300">
                        {stat.label}
                      </div>
                      <div className="text-indigo-400 text-sm">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {aboutContent.team.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {aboutContent.team.description}
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutContent.team.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-square bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {member.twitter && (
                          <Link
                            href={member.twitter}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20  ">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {aboutContent.timeline.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A look at the key milestones that have shaped our journey and
                  defined our growth.
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

                <div className="space-y-12">
                  {aboutContent.timeline.milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                        }`}
                      >
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center mb-3">
                            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-blue-600 font-bold text-lg">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="relative z-10">
                        <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {aboutContent.cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                {aboutContent.cta.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  {aboutContent.cta.primaryButton.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  {aboutContent.cta.secondaryButton.text}
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
      </main>
    </>
  );
}
