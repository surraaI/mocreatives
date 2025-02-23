"use client";
import { Footer } from "@/components/footer";
import { Title, Text, Container, Grid, List, Button } from "@mantine/core";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const services = [
  {
    image: "/assets/marketing.jpg",
    title: "Marketing",
    items: [
      "Brand Strategy & Positioning",
      "Advertising & Campaign Development (TVCs, Radio, Digital)",
      "Content Creation & Storytelling",
      "Social Media Management & Growth",
      "Public Relations & Corporate Communication"
    ]
  },
  {
    image: "/assets/training.jpg",
    title: "Training & Consulting",
    items: [
      "Corporate & Business Training (Marketing, Branding, Digital Strategy)",
      "Brand Development Consulting",
      "Customer Experience & Service Training",
      "Market Research & Consumer Insights"
    ]
  },
  {
    image: "/assets/digital.jpg",
    title: "Digital Solutions",
    items: [
      "Website Design & Development",
      "SEO & Digital Advertising",
      "E-Commerce & UI/UX Solutions",
      "Data Analytics & Performance Optimization",
      "Motion Graphics & Video Production"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-tech-grey">
      {/* Enhanced Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-neuro-blue via-[#3A86FF]/40 to-[#3A86FF]/10">
        {/* Animated Grid Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] mix-blend-overlay"
        />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: Math.random() > 0.5 ? 'var(--neuro-blue)' : 'var(--creative-yellow)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-100, 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFD166/10%,transparent_70%)]" />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex flex-col items-center justify-center h-full text-center px-6"
        >
          {/* Main Title */}
          <div className="relative">
            <Title className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-creative-yellow to-white bg-clip-text text-transparent">
                Our Core
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-creative-yellow bg-clip-text text-transparent">
                Services
              </span>
            </Title>
            
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1.5 bg-creative-yellow mx-auto w-1/3 rounded-full origin-center"
            />
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Text className="text-xl md:text-2xl max-w-3xl text-white/90 font-medium leading-relaxed">
              Transform your digital presence with{" "}
              <span className="bg-creative-yellow/20 px-2 py-1 rounded-md border border-creative-yellow/30">
                end-to-end solutions
              </span>{" "}
              designed to drive exceptional results
            </Text>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-6 h-10 rounded-full border-2 border-creative-yellow flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-creative-yellow rounded-full"
              />
            </div>
            <Text className="text-creative-yellow/80 text-sm mt-2">Explore Services</Text>
          </motion.div>
        </motion.div>
      </div>

    
      {/* Services Section */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        {services.map((service, index) => (
          <Grid 
            key={index} 
            gutter="xl" 
            className="mb-20 md:mb-24"
            justify="center"
            align="center"
          >
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl aspect-video shadow-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full bg-black/20"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-luminosity"
                  />
                </motion.div>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:px-6"
              >
                <Title order={2} className="text-3xl md:text-4xl mb-6 text-neuro-blue">
                  {service.title}
                </Title>
                
                <List spacing="md" size="lg" icon={<ChevronRight size={16} className="text-cultural-red" />} className="mb-8">
                  {service.items.map((item, itemIndex) => (
                    <List.Item key={itemIndex} className="text-gray-300 hover:text-white transition-colors group">
                      <span className="group-hover:translate-x-2 transition-transform">
                        {item}
                      </span>
                    </List.Item>
                  ))}
                </List>

                <Button
                  rightSection={<ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />}
                  variant="filled"
                  color="cultural-red"
                  size="lg"
                  className="group hover:bg-[#D72638]/90"
                >
                  Explore Service
                </Button>
              </motion.div>
            </Grid.Col>
          </Grid>
        ))}
      </Container>

      <Footer />
    </div>
  );
}

