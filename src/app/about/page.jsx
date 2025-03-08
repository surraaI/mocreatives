"use client";
import Footer from "@/components/footer";
import { Title, Text, Container, Grid, Card, Image, AspectRatio } from "@mantine/core";
import { motion } from "framer-motion";
import { ChevronRight, Target, Eye, ShieldCheck } from "lucide-react";

// Color constants for consistency
const colors = {
  primaryRed: "#D72638",
  darkAccent: "#0A0A0A",
  lightAccent: "#F5F5F5",
  gold: "#FFD700"
};

const aboutCards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To craft transformative brand experiences by combining marketing, training, and digital innovation to drive sustainable business growth.",
    color: colors.primaryRed
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading storytelling and digital transformation agency in Ethiopia, empowering businesses through strategic marketing and innovation.",
    color: colors.darkAccent
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    description: [
      "✅ Innovation - Embrace emerging trends & technologies",
      "✅ Strategic Growth - Focus on long-term brand impact",
      "✅ Creativity - Develop unique & compelling narratives",
      "✅ Integrity - Maintain ethical professional standards",
      "✅ Client-Centric - Custom solutions for maximum impact"
    ],
    color: colors.primaryRed
  }
];

// Animation configurations
const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const descVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 } 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      delay: 0.2 
    } 
  }
};

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
      {/* Enhanced Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-red-800 via-cultural-red to-black">
        <div className="absolute inset-0 bg-[url('/assets/grid.jpg')] opacity-10 mix-blend-overlay" />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: Math.random() > 0.5 ? colors.gold : colors.primaryRed,
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

        <Container size="xl" className="h-full flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text className={`text-[${colors.gold}] uppercase font-semibold tracking-wider mb-6`}>
                Pioneering Ethiopian Innovation
              </Text>
              
              <Title className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                <span className="text-black">ABOUT</span>{' '}
                <span className="text-white">US</span>
              </Title>

              <Text className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto mb-12">
                Transforming brands through innovative storytelling and digital mastery since 2023
              </Text>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Company History Section */}
      <Container size="xl" className="py-20 px-4 sm:px-6 bg-white">
        <Grid gutter="xl" className="mb-20">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <AspectRatio ratio={16/9}>
                <Image
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
              className="flex flex-col justify-center h-full"
            >
              <Title order={2} className={`text-3xl md:text-4xl text-[${colors.darkAccent}] mb-6`}>
                Our Ethiopian Journey
              </Title>
              <Text className="text-lg text-gray-600 mb-4">
                Founded in October 2023 in the heart of Finfinne (Addis Ababa), Mo Creatives has rapidly become a catalyst for digital transformation in Ethiopia. As a Private Limited Company (PLC), we combine global expertise with local cultural insights.
              </Text>
              <Text className="text-lg text-gray-600">
                From our first campaign with local businesses to partnering with major financial institutions, we've remained committed to elevating Ethiopian brands through innovative marketing and digital solutions.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Mission/Vision/Values Cards */}
      <Container size="xl" className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
        <Grid gutter="xl" className="mb-20">
          {aboutCards.map((card, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                style={{ backgroundColor: card.color }}
              >
                <div className="p-8 h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white/20 rounded-full">
                    <card.icon className="w-12 h-12 text-white" />
                  </div>
                  <Title order={3} className="text-white text-2xl mb-4">
                    {card.title}
                  </Title>
                  
                  <motion.div
                    initial="hidden"
                    animate="hidden"
                    whileHover="visible"
                    variants={descVariants}
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

      {/* Leadership Team Section */}
      <Container size="xl" className="py-20 px-4 sm:px-6 bg-white">
        <Title order={2} className={`text-3xl md:text-4xl text-[${colors.darkAccent}] mb-16 text-center`}>
          Leadership Team
        </Title>

        <Grid gutter="xl">
          {teamMembers.map((member, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: index === 0 ? 12 : 3 }}>
              <Card 
                shadow="md" 
                padding="lg" 
                className={`border-0 rounded-2xl ${index === 0 ? 'bg-[#F8F9FA]' : 'bg-white'} hover:shadow-xl transition-shadow`}
              >
                <Grid gutter="xl">
                  <Grid.Col span={{ base: 12, md: index === 0 ? 4 : 12 }}>
                    <AspectRatio ratio={1/1}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="rounded-xl object-cover"
                      />
                    </AspectRatio>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: index === 0 ? 8 : 12 }}>
                    <div className={index === 0 ? "md:pt-8" : ""}>
                      <Title order={4} className={`text-[${colors.darkAccent}] text-xl`}>
                        {member.name}
                      </Title>
                      <Text className={`text-[${colors.primaryRed}] mb-2`}>
                        {member.role}
                      </Text>
                      {member.bio && (
                        <Text className="text-gray-600 text-sm">
                          {member.bio}
                        </Text>
                      )}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`text-[${colors.primaryRed}] mt-4 flex items-center gap-2 hover:text-[${colors.darkAccent}] transition-colors`}
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
