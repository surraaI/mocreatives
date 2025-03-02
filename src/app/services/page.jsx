"use client";
import Footer from "@/components/footer";
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
                  Innovation meets excellence
                </Text>
                
                <Title className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-lato leading-tight">
                  <span className="text-neuro-blue">OUR CORE</span>{' '}
                  <span className="text-cultural-red">SERVICES</span>
                </Title>

                <Text className="text-xl md:text-2xl text-tech-grey font-medium font-open-sans max-w-xl mb-8">
                  Accelerate your growth with cutting-edge strategies and data-driven marketing solutions.
                </Text>

                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      size="xl"
                      className="bg-neuro-blue hover:bg-[#2F6ECD] transition-colors font-lato group"
                      rightSection={<ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />}
                    >
                      Explore Possibilities
                    </Button>
                  </motion.div>
                  <Text className="text-cultural-red font-semibold hidden sm:block">
                    15+ Years of Digital Excellence
                  </Text>
                </div>
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
                  src="/assets/services.jpg"
                  alt="Digital Solutions"
                  className="absolute inset-0 w-full h-full object-contain object-right rounded-2xl transform rotate-1 shadow-2xl"
                />
                <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-neuro-blue text-white p-3 rounded-lg text-center">
                    <Text className="text-2xl font-bold">200+</Text>
                    <Text className="text-sm">Successful Projects</Text>
                  </div>
                </div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronRight className="h-8 w-8 text-cultural-red rotate-90" />
          </motion.div>
        </div>
      </div>

   
      {/* Services Section */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        {services.map((service, index) => (
          <Grid 
            key={index} 
            gutter="xl" 
            className={`mb-20 md:mb-24 group ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'} py-12 px-6 rounded-xl`}
            justify="center"
            align="center"
          >
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative overflow-hidden rounded-2xl aspect-video shadow-xl hover:shadow-neuro-blue/20 transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-grey/20 to-transparent" />
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:px-6"
              >
                <div className="mb-6">
                  <Title order={2} className="text-3xl md:text-4xl text-tech-grey mb-2 font-lato">
                    {service.title}
                  </Title>
                  <div className="h-1 w-20 bg-gradient-to-r from-neuro-blue to-creative-yellow rounded-full" />
                </div>
                
                <List 
                  spacing="md" 
                  size="lg" 
                  icon={<ChevronRight size={16} className="text-neuro-blue" />} 
                  className="mb-8 font-open-sans"
                >
                  {service.items.map((item, itemIndex) => (
                    <List.Item 
                      key={itemIndex} 
                      className="text-tech-grey hover:text-cultural-red transition-colors"
                    >
                      {item}
                    </List.Item>
                  ))}
                </List>

                <Button
                  rightSection={<ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />}
                  size="lg"
                  className="bg-neuro-blue hover:bg-[#2F6ECD] group font-lato"
                >
                  Explore Service
                </Button>
              </motion.div>
            </Grid.Col>
          </Grid>
        ))}
      </Container>
    </div>
  );
}