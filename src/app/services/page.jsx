"use client";

import { useEffect, useState } from "react";
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
      "Public Relations & Corporate Communication",
    ],
  },
  {
    image: "/assets/training.jpg",
    title: "Training & Consulting",
    items: [
      "Corporate & Business Training (Marketing, Branding, Digital Strategy)",
      "Brand Development Consulting",
      "Customer Experience & Service Training",
      "Market Research & Consumer Insights",
    ],
  },
  {
    image: "/assets/digital.jpg",
    title: "Digital Solutions",
    items: [
      "Website Design & Development",
      "SEO & Digital Advertising",
      "E-Commerce & UI/UX Solutions",
      "Data Analytics & Performance Optimization",
      "Motion Graphics & Video Production",
    ],
  },
];

export default function ServicesPage() {
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate random floating elements on client-side only
  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      background: Math.random() > 0.5 ? "#FFD166" : "#3A86FF",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="min-h-screen bg-tech-grey">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-black to-tech-grey">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10 mix-blend-overlay" />

        {/* Floating Elements */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: element.background,
              left: element.left,
              top: element.top,
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-100, 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex flex-col items-center justify-center h-full text-center px-6"
        >
          <Title className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            <span className="text-creative-yellow">Our Core</span>
            <span className="text-white"> Services</span>
          </Title>

          <div className="relative mb-8">
            <div className="h-1.5 bg-neuro-blue w-1/3 mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Text className="text-xl md:text-2xl max-w-3xl text-white font-medium">
              Transform your digital presence with{" "}
              <span className="text-neuro-blue font-bold">
                end-to-end solutions
              </span>{" "}
              designed to drive exceptional results
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Button
              size="xl"
              className="bg-neuro-blue hover:bg-[#2F6ECD] transition-colors"
              rightSection={<ChevronRight size={20} />}
            >
              Explore Solutions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        {services.map((service, index) => (
          <Grid
            key={index}
            gutter="xl"
            className="mb-20 md:mb-24 group"
            justify="center"
            align="center"
          >
            <Grid.Col
              span={{ base: 12, md: 6 }}
              order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative overflow-hidden rounded-2xl aspect-video shadow-2xl hover:shadow-neuro-blue/30 transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </motion.div>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, md: 6 }}
              order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:px-6"
              >
                <div className="mb-6">
                  <Title
                    order={2}
                    className="text-3xl md:text-4xl text-white mb-2"
                  >
                    {service.title}
                  </Title>
                  <div className="h-1 w-20 bg-creative-yellow rounded-full" />
                </div>

                <List
                  spacing="md"
                  size="lg"
                  icon={<ChevronRight size={16} className="text-neuro-blue" />}
                  className="mb-8"
                >
                  {service.items.map((item, itemIndex) => (
                    <List.Item
                      key={itemIndex}
                      className="text-white hover:text-creative-yellow transition-colors"
                    >
                      {item}
                    </List.Item>
                  ))}
                </List>

                <Button
                  rightSection={
                    <ChevronRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  }
                  color="blue"
                  size="lg"
                  className="bg-neuro-blue hover:bg-[#2F6ECD] group"
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
