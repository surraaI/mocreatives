"use client";
import Footer from "@/components/footer";
import { Title, Text, Container, Grid, Card, Image, AspectRatio } from "@mantine/core";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const aboutCards = [
  {
    image: "/assets/mission.jpg",
    title: "Our Mission",
    description: "To craft transformative brand experiences by combining marketing, training, and digital innovation to drive sustainable business growth."
  },
  {
    image: "/assets/vision.jpg",
    title: "Our Vision",
    description: "To be the leading storytelling and digital transformation agency in Ethiopia, empowering businesses through strategic marketing and innovation."
  },
  {
    image: "/assets/values.jpg",
    title: "Core Values",
    description: [
      "✅ Innovation - Embrace emerging trends & technologies",
      "✅ Strategic Growth - Focus on long-term brand impact",
      "✅ Creativity - Develop unique & compelling narratives",
      "✅ Integrity - Maintain ethical professional standards",
      "✅ Client-Centric - Custom solutions for maximum impact"
    ]
  }
];

const teamMembers = [
  { 
    image: "/assets/team2.jpg", 
    name: "Moti Abelti Tufa", 
    role: "Founder & Creative Director",
    bio: "Marketing strategist and branding expert with expertise in digital transformation"
  },
  { image: "/assets/team1.jpg", name: "Sarah Mengistu", role: "Digital Strategist" },
  { image: "/assets/team2.jpg", name: "Dawit Kebede", role: "Creative Lead" },
  { image: "/assets/team3.jpg", name: "Amina Ahmed", role: "Client Relations Manager" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-neuro-blue via-white to-creative-yellow">
        <div className="absolute inset-0 bg-[url('/assets/grid.jpg')] opacity-10 mix-blend-overlay" />
        
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: Math.random() > 0.5 ? '#FFD166' : '#3A86FF',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-100, 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <Container size="xl" className="h-full">
          <Grid gutter="xl" align="center" className="h-full">
            <Grid.Col span={{ base: 12, md: 6 }} className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
              >
                <Text className="text-cultural-red uppercase font-semibold tracking-wider mb-4">
                  Pioneering Ethiopian Innovation
                </Text>
                
                <Title className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-lato leading-tight">
                  <span className="text-neuro-blue">ABOUT</span>{' '}
                  <span className="text-cultural-red">US</span>
                </Title>

                <Text className="text-xl md:text-2xl text-tech-grey font-medium font-open-sans max-w-xl mb-8">
                  Transforming brands through innovative storytelling and digital mastery since 2023
                </Text>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} className="relative">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neuro-blue/10 to-creative-yellow/10 -rotate-6 rounded-3xl transform scale-105" />
                <img
                  src="/assets/creative.jpg"
                  alt="Mo Creatives Team"
                  className="absolute inset-0 w-full h-full object-cover object-right rounded-2xl transform rotate-1 shadow-2xl"
                />
                <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-neuro-blue text-white p-3 rounded-lg text-center">
                    <Text className="text-2xl font-bold">20+</Text>
                    <Text className="text-sm">Successful Projects</Text>
                  </div>
                </div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* Company History */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        <Grid gutter="xl" className="mb-20">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <AspectRatio ratio={16/9}>
                <img
                  src="/assets/about-hero.jpg"
                  alt="Mo Creatives Headquarters"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Title order={2} className="text-3xl md:text-4xl text-tech-grey mb-6 font-lato">
                Our Ethiopian Journey
              </Title>
              <Text className="text-lg text-tech-grey mb-4">
                Founded in October 2023 in the heart of Finfinne (Addis Ababa), Mo Creatives has rapidly become a catalyst for digital transformation in Ethiopia. As a Private Limited Company (PLC), we combine global expertise with local cultural insights.
              </Text>
              <Text className="text-lg text-tech-grey">
                From our first campaign with local businesses to partnering with major financial institutions, we've remained committed to elevating Ethiopian brands through innovative marketing and digital solutions.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Mission/Vision/Values Cards */}
      <Container size="xl" className="py-20 px-4 sm:px-6 bg-[#F9FAFB]">
        <Grid gutter="xl" className="mb-20">
          {aboutCards.map((card, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Title order={3} className="text-white text-2xl mb-2">{card.title}</Title>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-white text-lg"
                  >
                    {Array.isArray(card.description) ? (
                      <ul className="space-y-2">
                        {card.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      card.description
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Full Team Photo */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <AspectRatio ratio={16/6}>
            <Image
              src="/assets/team.jpg"
              alt="Mo Creatives Full Team"
              className="rounded-2xl shadow-xl object-cover"
            />
          </AspectRatio>
        </motion.div>
      </Container>

      {/* Leadership Team */}
      <Container size="xl" className="py-20 px-4 sm:px-6 bg-[#F9FAFB]">
        <Title order={2} className="text-3xl md:text-4xl text-tech-grey mb-16 text-center font-lato">
          Leadership Team
        </Title>

        <Grid gutter="xl">
          {teamMembers.map((member, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: index === 0 ? 12 : 3 }}>
              <Card 
                shadow="md" 
                padding="lg" 
                className={`border-0 rounded-2xl ${index === 0 ? 'bg-neuro-blue/10' : 'bg-white'}`}
              >
                <Grid gutter="xl">
                  <Grid.Col span={{ base: 12, md: index === 0 ? 4 : 12 }}>
                    <AspectRatio ratio={1/1}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="rounded-xl"
                      />
                    </AspectRatio>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: index === 0 ? 8 : 12 }}>
                    <div className={index === 0 ? "md:pt-8" : ""}>
                      <Title order={4} className="text-tech-grey text-xl">{member.name}</Title>
                      <Text className="text-cultural-red mb-2">{member.role}</Text>
                      {member.bio && (
                        <Text className="text-tech-grey text-sm">{member.bio}</Text>
                      )}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-tech-grey mt-4 flex items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        <span>View Profile</span>
                      </motion.div>
                    </div>
                  </Grid.Col>
                </Grid>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      
    </div>
  );
}