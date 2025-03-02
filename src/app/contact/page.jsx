"use client";
import Footer from "@/components/footer";
import { Title, Text, Container, Grid, Card, TextInput, Textarea, Select, Button } from "@mantine/core";
import { motion } from "framer-motion";
import { ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-neuro-blue via-white to-creative-yellow">
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
                  Let's Build Something Amazing
                </Text>
                
                <Title className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-lato leading-tight">
                  <span className="text-neuro-blue">CONNECT</span>{' '}
                  <span className="text-cultural-red">WITH US</span>
                </Title>

                <Text className="text-xl md:text-2xl text-tech-grey font-medium font-open-sans max-w-xl mb-8">
                  Whether you have a project in mind or just want to chat about digital possibilities - we're all ears.
                </Text>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} className="relative">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neuro-blue/10 to-creative-yellow/10 -rotate-6 rounded-3xl transform scale-105" />
                <img
                  src="/assets/contact-hero.jpg"
                  alt="Contact Mo Creatives"
                  className="absolute inset-0 w-full h-full object-contain object-right rounded-2xl transform rotate-1 shadow-2xl"
                />
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* Contact Content */}
      <Container size="xl" className="py-20 px-4 sm:px-6">
        <Grid gutter="xl">
          {/* Contact Info Cards */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="bg-neuro-blue/10 rounded-2xl border-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neuro-blue rounded-lg text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <Title order={3} className="text-tech-grey mb-2">Our Headquarters</Title>
                    <Text className="text-tech-grey">
                      Finfinne (Addis Ababa), Ethiopia
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="bg-cultural-red/10 rounded-2xl border-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cultural-red rounded-lg text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <Title order={3} className="text-tech-grey mb-2">Call Us</Title>
                    <Text className="text-tech-grey">
                      +251-XXX-XXX-XXX<br/>
                      Mon-Fri: 8:30 AM - 5:30 PM EAT
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="bg-creative-yellow/10 rounded-2xl border-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-creative-yellow rounded-lg text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <Title order={3} className="text-tech-grey mb-2">Email Us</Title>
                    <Text className="text-tech-grey">
                      info@mocreatives.com<br/>
                      support@mocreatives.com
                    </Text>
                  </div>
                </div>
              </Card>

              <div className="mt-8">
                <Title order={4} className="text-tech-grey mb-4">Follow Us</Title>
                <div className="flex gap-4">
                  <Button
                    leftSection={<Linkedin size={18} />}
                    variant="outline"
                    className="border-tech-grey text-tech-grey hover:bg-neuro-blue/10"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    leftSection={<Twitter size={18} />}
                    variant="outline"
                    className="border-tech-grey text-tech-grey hover:bg-cultural-red/10"
                  >
                    Twitter
                  </Button>
                  <Button
                    leftSection={<Instagram size={18} />}
                    variant="outline"
                    className="border-tech-grey text-tech-grey hover:bg-creative-yellow/10"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
            </motion.div>
          </Grid.Col>

          {/* Contact Form */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <Title order={2} className="text-3xl text-tech-grey mb-8 font-lato">
                Send Us a Message
              </Title>

              <form className="space-y-6">
                <Grid gutter="md">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Full Name"
                      placeholder="Enter your name"
                      size="md"
                      required
                      classNames={{
                        input: "rounded-lg border-gray-200 focus:border-neuro-blue"
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Email Address"
                      placeholder="your@email.com"
                      size="md"
                      required
                      classNames={{
                        input: "rounded-lg border-gray-200 focus:border-neuro-blue"
                      }}
                    />
                  </Grid.Col>
                </Grid>

                <Select
                  label="Inquiry Type"
                  placeholder="Select inquiry type"
                  data={[
                    'Marketing Services',
                    'Training & Consulting',
                    'Digital Solutions',
                    'Partnerships',
                    'Careers',
                    'Other'
                  ]}
                  size="md"
                  required
                  classNames={{
                    input: "rounded-lg border-gray-200 focus:border-neuro-blue"
                  }}
                />

                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  minRows={5}
                  size="md"
                  required
                  classNames={{
                    input: "rounded-lg border-gray-200 focus:border-neuro-blue"
                  }}
                />

                <Button
                  size="xl"
                  className="bg-neuro-blue hover:bg-[#2F6ECD] transition-colors font-lato group mt-6"
                  rightSection={<ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />}
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Map Section */}
      <div className="bg-[#F9FAFB] py-20">
        <Container size="xl" className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2310971117876!2d38.76304017572138!3d9.039221191088917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e43d8c5f2d%3A0x8478083efc22b4c2!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1718904815737!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </motion.div>
        </Container>
      </div>

    </div>
  );
}