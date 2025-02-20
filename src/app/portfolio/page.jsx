"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Tabs,
  Container,
  Grid,
  Card,
  Text,
  Title,
  Button,
} from "@mantine/core";

const projects = [
  {
    title: "Ambassador Mall",
    description: "Modern website showcasing stores, events, and promotions.",
    imageUrl: "/assets/ambassador-mall.png",
    link: "https://ambassadormall.com",
    type: "Web Design",
  },
  {
    title: "Admass Travel",
    description: "Captivating travel website with booking functionalities.",
    imageUrl: "/assets/admass-travel.png",
    link: "https://admasstravel.com",
    type: "App Development",
  },
  {
    title: "Marketing Campaign",
    description: "Strategic campaign for brand awareness.",
    imageUrl: "/assets/marketing-campaign.png",
    link: "https://example.com",
    type: "Digital Marketing",
  },
];

const tabs = ["All", "Web Design", "App Development", "Digital Marketing"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white">
        <div className="md:w-1/2 mb-8 md:mb-0 ml-10">
          <h1 className="text-4xl font-bold text-tangaroa-blue mb-4">
            Portfolio & Case Studies
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Mo Creatives has worked with major financial institutions, tech
              companies, and emerging brands to deliver strategic marketing
              campaigns and digital solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex gap-4 mt-6"
          >
            <Link
              href="/works"
              className="mt-6 px-10 py-2 bg-red-900 text-black font-semibold text-lg border border-gray-600 rounded-3xl hover:bg-cultural-red transition"
            >
              View our works
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative gap-6">
          <motion.div
            className="w-[380px] md:w-[500px] h-[260px] md:h-[320px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/desktop1.png"
              alt="Desktop Mockup"
              fill
              className="object-cover"
            />
            <motion.div className="absolute inset-0 flex justify-center items-center p-4">
              <Image
                src="/assets/project-image.jpg"
                alt="Project on Desktop"
                className="w-[85%] h-[85%] object-contain"
                width={400}
                height={200}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[180px] md:w-[200px] h-[360px] md:h-[420px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/assets/mobile1.png"
              alt="Phone Mockup"
              fill
              className="object-cover"
            />
            <motion.div className="absolute inset-0 flex justify-center items-center p-4">
              <Image
                src="/assets/project-image.jpg"
                alt="Project on Phone"
                className="w-[70%] h-[70%] object-contain"
                width={200}
                height={900}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Container py="xl">
        <Title align="center" mb="lg">
          Our Successful Projects
        </Title>
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            {tabs.map((tab, index) => (
              <Tabs.Tab
                key={index}
                value={tab}
                style={{
                  position: "relative",
                  fontWeight: activeTab === tab ? "bold" : "normal",
                  color: activeTab === tab ? "#306590" : "black",
                }}
              >
                {tab}
                {activeTab === tab && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid #306590",
                    }}
                  ></span>
                )}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          <Grid mt="md">
            {filteredProjects.map((project, index) => (
              <Grid.Col key={index} md={6} lg={4}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      height={200}
                      width={350}
                      className="object-cover"
                    />
                  </Card.Section>
                  <Title order={4} mt="sm">
                    {project.title}
                  </Title>
                  <Text color="dimmed" size="sm" mt="xs">
                    {project.description}
                  </Text>
                  <Link href={project.link} passHref>
                    <Button
                      component="a"
                      variant="light"
                      color="blue"
                      mt="md"
                      fullWidth
                    >
                      View Project
                    </Button>
                  </Link>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Tabs>
      </Container>
    </>
  );
}
