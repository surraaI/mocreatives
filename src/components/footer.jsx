"use client";
import { Grid, Text, List } from "@mantine/core";
import {
  BrandLinkedin,
  BrandTwitter,
  BrandFacebook,
  BrandInstagram,
} from "tabler-icons-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#ffffff10] w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Grid gutter={50}>
          {/* Services Columns */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Grid>
              {/* Marketing Services */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text
                  style={{ color: "#FFFFFF" }}
                  className="font-bold mb-6 text-lg uppercase tracking-wide"
                >
                  Marketing Services
                </Text>

                <List spacing="xs" center>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Brand Strategy & Positioning
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Advertising Campaigns (TVCs, Radio, Digital)
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Social Media Management
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Content Creation & Storytelling
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Public Relations & Corporate Communication
                  </List.Item>
                </List>
              </Grid.Col>

              {/* Training Services */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text
                  style={{ color: "#FFFFFF" }}
                  className="font-bold mb-6 text-lg uppercase tracking-wide"
                >
                  Training Services
                </Text>

                <List spacing="xs" center>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Corporate & Business Training
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Brand Development Consulting
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Customer Experience Training
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Digital Strategy Workshops
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Market Research & Consumer Insights
                  </List.Item>
                </List>
              </Grid.Col>

              {/* Digital Solutions */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text
                  style={{ color: "#FFFFFF" }}
                  className="font-bold mb-6 text-lg uppercase tracking-wide"
                >
                  Digital Solutions
                </Text>

                <List spacing="xs" center>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Website Design & Development
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    SEO & Digital Advertising
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    E-Commerce Solutions
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Data Analytics & Optimization
                  </List.Item>
                  <List.Item className="text-gray-400 text-sm hover:text-white transition-colors">
                    Cloud Infrastructure Setup
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          {/* Professional Image */}
          <Grid.Col
            span={{ base: 12, lg: 4 }}
            className="lg:flex lg:justify-end"
          >
            <div className="relative h-80 w-full lg:w-[400px] rounded-xl overflow-hidden border-2 border-cultural-red/20">
              <Image
                src="/assets/professional.jpg"
                alt="Professional working"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </Grid.Col>
        </Grid>

        {/* Separator */}
        <hr className="my-12 border-[#ffffff10] w-full" />

        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <Text className="text-3xl font-bold text-white tracking-tighter">
            NEX<span className="text-cultural-red">GEN</span>
          </Text>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {[BrandLinkedin, BrandTwitter, BrandFacebook, BrandInstagram].map(
            (Icon, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-full bg-[#ffffff10] flex items-center justify-center
                       hover:bg-cultural-red transition-all duration-300"
              >
                <Icon size={24} className="text-white" />
              </button>
            )
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4 w-full mt-8">
        <Text className="text-center text-sm text-gray-500">
          © 2024 NexGen Solutions. All rights reserved. | Privacy Policy | Terms
          of Service
        </Text>
      </div>
    </footer>
  );
}
