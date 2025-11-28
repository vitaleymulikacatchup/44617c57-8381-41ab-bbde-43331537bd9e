"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function SakuraPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="SAKURA"
          navItems={[
            { name: "Gallery", id: "gallery" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo 
          logoText="SAKURA"
          description="Authentic Japanese sushi crafted with premium ingredients and time-honored techniques"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          slides={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/tmp/premium-sushi-platter-nigiri-sashimi-fre-1764340819495-f43be702.jpg", imageAlt: "Premium sushi platter" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340821528-do048iio.jpg", imageAlt: "Colorful sushi rolls" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340822769-0gcittf5.jpg", imageAlt: "Elegant sushi presentation" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="gallery" data-section="gallery">
        <ProductCardThree 
          title="Our Gallery"
          description="Discover our selection of handcrafted sushi and restaurant ambiance"
          products={[
            {
              id: "1",
              name: "Fresh Sashimi Selection",
              price: "Market Price",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340824134-hs6w0ag8.jpg",
              imageAlt: "Fresh sashimi salmon and tuna"
            },
            {
              id: "2",
              name: "California Rolls",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340825223-9948kp38.jpg",
              imageAlt: "California rolls with avocado"
            },
            {
              id: "3",
              name: "Dragon Roll",
              price: "$22",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340826735-vrl6zmtq.jpg",
              imageAlt: "Dragon roll with eel and tempura"
            },
            {
              id: "4",
              name: "Spicy Tuna Roll",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340827929-ml0v0quf.jpg",
              imageAlt: "Spicy tuna roll with sriracha"
            },
            {
              id: "5",
              name: "Restaurant Ambiance",
              price: "Experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340829178-w8iuaqlf.jpg",
              imageAlt: "Modern Japanese restaurant interior"
            },
            {
              id: "6",
              name: "Master Sushi Chef",
              price: "Crafted Daily",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764340830334-ongutk1v.jpg",
              imageAlt: "Sushi chef in action"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout 
          title="Since 1998, Sakura has been perfecting the art of sushi, bringing authentic Japanese flavors and culinary excellence to our community. Our master chefs source only the finest ingredients to create an unforgettable dining experience."
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm 
          title="Reserve Your Table"
          description="Join us for an exceptional dining experience. Fill out the form below to make a reservation or inquire about our catering services."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary restrictions...",
            rows: 4,
            required: false
          }}
          buttonText="Reserve Now"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase 
          logoText="SAKURA"
          copyrightText="© 2025 Sakura Sushi Restaurant. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Thursday: 11AM - 10PM", href: "" },
                { label: "Friday - Saturday: 11AM - 11PM", href: "" },
                { label: "Sunday: 12PM - 10PM", href: "" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "" },
                { label: "Email: info@sakurasushi.com", href: "" },
                { label: "Location: Downtown District", href: "" }
              ]
            },
            {
              title: "Follow Us",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "TripAdvisor", href: "https://tripadvisor.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}