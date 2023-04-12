import React from "react";

import SchedulerMedIcon from "icons/Landing/SchedulerMed";
import ShopMedIcon from "icons/Landing/ShopMed";
import PerecentMedIcon from "icons/Landing/PerecentMed";
import GallereyMedIcon from "icons/Landing/GallereyMed";
import PaletteMedIcon from "icons/Landing/PaletteMed";
import BrushMedIcon from "icons/Landing/BrushMed";
import SalonMedIcon from "icons/Landing/SalonMed";
import ScissorsMedIcon from "icons/Landing/ScissorsMed";
import ConsumersMedIcon from "icons/Landing/ConsumersMed";
import DownloadMedIcon from "icons/Landing/DownloadMed";
import PaperplaneMedIcon from "icons/Landing/PaperplaneMed";
import AppStoreMedIcon from "icons/Landing/AppStoreMed";
import PhoneMedIcon from "icons/Landing/PhoneMed";

export const landingTags = {
  salonsVertical: [
    {
      logo: <SchedulerMedIcon />,
      firstLabel: "Appointment Scheduling",
      secondLabel:
        "Enhance your appointment scheduling capabilities. Quaffed provides clients with access to their stylist’s full calendar for easy and convenient scheduling. All requests can be approved or rescheduled with the click of a button.",
    },
    {
      logo: <ShopMedIcon />,
      firstLabel: "Online Product Catalogue",
      secondLabel:
        "Extend your retail offering. Through Quaffed, your clients have access to Quaffed's full product catalogue-catalogue at competitive pricing, and delivered straight to their door. The best part? You make profits on every sale without lifting a finger.",
    },
    {
      logo: <PerecentMedIcon />,
      firstLabel: "Exclusive Offers",
      secondLabel:
        "Client loyalty is top of mind. Enhance your relationships with exclusive offers, incentives, and access to thousands of products.",
    },
  ],
  salonsHotizontal: [
    {
      logo: <GallereyMedIcon />,
      firstLabel: "Upload Your Logo",
      secondLabel:
        "Marketing 101. Your logo differentiates, personalizes your brand, and showcases your professionalism.",
    },
    {
      logo: <PaletteMedIcon />,
      firstLabel: "Pick Your Colors",
      secondLabel:
        "Sea green? Bright yellow? Whatever color combo showcases your unique brand, make sure to keep it consistent both in salons, as well as online for marketing best-practices.",
    },
    {
      logo: <BrushMedIcon />,
      firstLabel: "Craft Your Brand",
      secondLabel:
        "Make your salon stand out! Get creative. Add photos, reviews, link social media accounts - show off your brand's personality.",
    },
  ],
  salons1section: [
    {
      firstLabel:
        "Say Hello To\n Increased Retail Sales\n And Automated\n Bookings",
      firstLabelVariant: "h1",
      secondLabel:
        "The future of salons is here, don't miss the boat. Be the first to offer access to thousands of products, exclusive offers and convenient digital appointment scheduling to enhance your clients' loyalty.",
      secondLabelVariant: "h6",
      buttonLabel: "Become a Quaffed Salon",
      buttonLink: "/salon_registration",
      buttonPart: "#root",
      image: "forSalons_1.webp",
      alt: "Salon home page example",
    },
  ],
  salons2section: [
    {
      firstLabel: "Web Salon\n Admin Portal",
      firstLabelVariant: "h1",
    },
  ],
  salons3section: [
    {
      firstLabel: "Automate Appointment\n Scheduling",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "Your clients have access to stylist's full calendars. Once a request comes in, hit approve, or reschedule. Quick for you, convenient for them!",
      secondLabelVariant: "h6",
      image: "forSalons_2.webp",
      imageMobile: "forSalons_2_m.webp",
      alt: "Mobile schedule example",
    },
  ],
  salons5section: [
    {
      firstLabel: "Make Profits with Enhanced\n Inventory",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "The future of salons is here, don't miss the boat. Be the first to offer access to thousands of products, exclusive offers and convenient digital appointment scheduling to enhance your clients' loyalty.",
      secondLabelVariant: "h6",
      image: "forSalons_3.webp",
      alt: "Shopping cart",
    },
  ],
  salons6section: [
    {
      firstLabel: "What are you waiting for?\n Let's Get You Started!",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "Request to be a Quaffed salon and we will get in touch with you within 1 business day.",
      secondLabelVariant: "h6",
    },
  ],

  home1Section: [
    {
      firstLabel: "Welcome to Quaffed",
      firstLabelVariant: "h1",
      secondLabel:
        "You take care of the salon, we'll handle the product retail and appointment scheduling. All in one place.",
      secondLabelVariant: "inherit",
      thirdLabel: "No one knows you like your hairstylist.",
      buttonLabel: "Become a Quaffed Salon",
      buttonLink: "/salon_registration",
      buttonPart: "#root",
      buttonSecondaryLabel: "Find a Quaffed Salon",
      buttonSecondaryLink: "clients",
      buttonSecondaryLinkPart: "#mapId",

      image: "home_1.webp",
      alt: "Salon home page example",
    },
  ],
  home4Section: [
    {
      firstLabel:
        "Let Clients Purchase\n Products From The\n Convenience Of Their Home",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "At Quaffed, we wanted to change the relationship between clients and stylists/salons. Our app allows users to shop our full Quaffed product catalogue, thereby removing the need for excess inventory, and allowing both salons and clients to schedule appointments directly via our platform.",
      secondLabelVariant: "h6",
      buttonLabel: "Learn more",
      buttonLink: "/clients",
      image: "home_2.webp",
      imageMobile: "home_2_m.webp",
      alt: "Mobile shop example",
    },
  ],
  home5Section: [
    {
      firstLabel: "Quaffed\n Benefits",
      firstLabelVariant: "h1",
      secondLabel:
        "From salons to stylists to clients. Ease of appointment scheduling, full product catalogue, earned profits, and competitively priced haircare products.",
      secondLabelVariant: "h6",
    },
  ],
  home6Section: [
    {
      firstLabel: "Admin Portal",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "Use the admin portal to customize your virtual storefront. Pick your colors. Upload a logo. Craft it for your brand. Track your clients' orders, manage appointments, communicate with your clients at the click of a button.",
      secondLabelVariant: "h6",
      buttonLabel: "Learn more",
      buttonLink: "/salons",
      image: "home_3.webp",
      alt: "App setting screen example",
    },
  ],
  home7Section: [
    {
      firstLabel: "Contact Us Now\n to Join Quaffed!",
      firstLabelVariant: "subtitle2",
      secondLabel: "Our team will reach out within a business day.",
      secondLabelVariant: "h6",
    },
  ],
  homeDark: [
    {
      logo: <ConsumersMedIcon color="primary.contrastText" />,
      firstLabel: "Shop\n And Easily Book\n Appointments",
      secondLabel:
        "It's about time we made the salon experience seamless. Our app brings thousands of professionally recommended products at competitive pricing, exclusive offers, and flexible appointment scheduling to clients. ",
      buttonLabel: "More about the App",
      buttonLink: "/clients",
    },
    {
      logo: <SalonMedIcon color="primary.contrastText" />,
      firstLabel: "Free Up Time And\n Space by Reducing\n Inventory",
      secondLabel:
        "Salon owners and stylists earn profits of every sale, enhance your retail offering, and automate their appointment scheduling for convenience.",
      buttonLabel: "More about the Software",
      buttonLink: "/salons",
    },
  ],
  homeVertical: [
    {
      logo: <SalonMedIcon />,
      firstLabel: "For Salons",
      secondLabel:
        "Limited space? Not able to carry enough inventory in salon? Have your clients gain access to our full CanRad product catalogue from their phone, while making a commission.",
    },
    {
      logo: <ScissorsMedIcon />,
      firstLabel: "For Stylists",
      secondLabel:
        "Trouble managing appointments? Have consumers schedule appointments from their phones, and simply approve requests.",
    },
    {
      logo: <ConsumersMedIcon />,
      firstLabel: "For Clients",
      secondLabel:
        "Access to our entire Quaffed product catalogue including thousands of products - beyond the salon. Exclusive deals, savings, discounted prices, and a free gift with every purchase. View your stylists full calendar for convenience.",
    },
  ],
  homeHotizontal: [
    {
      logo: <DownloadMedIcon />,
      firstLabel: "Step 1",
      secondLabel:
        "Salons set up their digital storefront with customized salon branding.",
    },
    {
      logo: <PaperplaneMedIcon />,
      firstLabel: "Step 2",
      secondLabel: "Salons invited their clients to download Quaffed.",
    },
    {
      logo: <AppStoreMedIcon />,
      firstLabel: "Step 3",
      secondLabel:
        "Users download Quaffed from the IOS app store, using their phone number and e-mail.",
    },
    {
      logo: <PhoneMedIcon />,
      firstLabel: "Step 4",
      secondLabel:
        "Through Quaffed, users can book appointments with their stylists, order from thousands of competitively priced and professional recommended products, and access exclusive offers.",
    },
  ],

  clients1section: [
    {
      firstLabel: "Book Appointments\n Online and Shop\n Products - For Less!",
      firstLabelVariant: "h1",
      secondLabel:
        "Access your stylist's full calendar, and automatically book appointments. And shop Quaffed's full product catalogue - at fantastic pricing! Only for Quaffed members. Get exclusive offers, and have products delivered straight to your door with fast shipping.",
      secondLabelVariant: "h6",
      buttonLabel: "Get the App",
      buttonLink: "clients",
      buttonPart: "#mapId",
      image: "forClients_1.webp",
      alt: "Mobile shop example",
    },
  ],
  clients2section: [
    {
      firstLabel: "Book with Ease",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "Access your stylist's full calendar at any time of day (or night) and book the slot most convenient for you. ",
      secondLabelVariant: "h6",
      image: "forClients_2.webp",
      imageMobile: "forClients_2_m.webp",
      alt: "Mobile schedule example",
    },
  ],
  clients3section: [
    {
      firstLabel: "Shop with Competitively\n Priced Products",
      firstLabelVariant: "subtitle2",
      secondLabel:
        "The biggest perk of being a Quaffed member is access to special pricing and exclusive offers. Never miss a hot deal again.",
      secondLabelVariant: "h6",
      image: "forClients_3.webp",
      imageMobile: "forClients_3_m.webp",
      alt: "Shopping cart",
    },
  ],
  clients5section: [
    {
      firstLabel: "What are you waiting for?\n Contact us now!",
      firstLabelVariant: "subtitle2",
      secondLabel: "Shop exclusive deals and book appointments with ease.",
      secondLabelVariant: "h6",
    },
  ],
};
