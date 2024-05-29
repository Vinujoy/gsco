import mobileImg from "@/public/mobile.png";
import webImg from "@/public/code.png";
import testImg from "@/public/test.png";
import logo1Img from "@/public/customer/logo1.png";
import logo2Img from "@/public/customer/logo2.png";
import logo3Img from "@/public/customer/logo3.png";
import logo4Img from "@/public/customer/logo4.png";
import logo5Img from "@/public/customer/logo5.png";
import logo6Img from "@/public/customer/logo6.png";

export const links = [
    {
        name: "Services",
        hash: "#services",
    },
    {
        name: "About Us",
        hash: "#about-us",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Case Studies",
        hash: "#case-studies",
    },
    {
        name: "How It Works",
        hash: "#how-it-works",
    },
    {
        name: "Blog",
        hash: "#blog",
    },
    {
        name: "Careers",
        hash: "#careers",
    },
] as const;

export const servicesData = [
    {
        id: 1,
        title: "Mobile App Development",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: mobileImg,
    },
    {
        id: 2,
        title: "Web Design & Development",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: webImg,
    },
    {
        id: 3,
        title: "Software Testing Service",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: testImg,
    },
    {
        id: 4,
        title: "Mobile App Development",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: mobileImg,
    },
    {
        id: 5,
        title: "Web Design & Development",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: webImg,
    },
    {
        id: 6,
        title: "Software Testing Service",
        description:
            "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imageUrl: testImg,
    },
] as const;

export const companyLogos = [
    {
        id: 1,
        imageUrl: logo1Img,
    },
    {
        id: 1,
        imageUrl: logo2Img,
    },
    {
        id: 1,
        imageUrl: logo3Img,
    },
    {
        id: 1,
        imageUrl: logo4Img,
    },
    {
        id: 1,
        imageUrl: logo5Img,
    },
    {
        id: 1,
        imageUrl: logo6Img,
    },
] as const;