"use client";
import { Grid, Text, List } from "@mantine/core";
import Image from "next/image";
import { services, socialLinks } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#ffffff10] w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Grid gutter={50} className="item-center">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Grid className="flex flex-col items-center lg:items-start">
              {services.map((service, index) => (
                <Grid.Col
                  key={index}
                  span={{ base: 12, md: 4 }}
                  className="text-center lg:text-left"
                >
                  <p
                    style={{ color: "#FFFFFF" }}
                    className="font-bold text-lg uppercase tracking-wide my-4"
                  >
                    {service.title}
                  </p>
                  <List spacing="xs" center>
                    {service.items.map((item, idx) => (
                      <List.Item
                        key={idx}
                        className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer"
                      >
                        {item}
                      </List.Item>
                    ))}
                  </List>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 4 }}
            className="lg:flex lg:justify-end"
          >
            <div className="relative h-40 w-full lg:w-[400px] rounded-xl overflow-hidden border-2 border-cultural-red/20">
              <Image
                src="/assets/professional.jpg"
                alt="Professional working"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </Grid.Col>
        </Grid>

        <hr className="my-12 border-[#ffffff10] w-full" />

        <div className="h-20">
          <div className="flex justify-center mb-8">
            <Text className="text-3xl font-bold text-white tracking-tighter">
              <span className="text-white">Mo</span>
              <span className="text-cultural-red"> Creatives</span>
            </Text>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#ffffff10] flex items-center justify-center
                       hover:bg-cultural-red transition-all duration-300"
              >
                <Icon size={24} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black py-4 w-full mx-auto text-center">
        <span className="text-center text-sm text-white">
          ©{new Date().getFullYear()}
          Mo Creative Solutions. All rights reserved. | Privacy Policy | Terms
          of Service
        </span>
      </div>
    </footer>
  );
}
