import logo from "../../assets/images/logo.png";
import { LinkedinLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

const nav = [
    {
        name: "About Us",
        link: "/"
    },
    {
        name: "FAQs",
        link: "/about"
    },
    {
        name: "My Account",
        link: "/account"
    },
    {
        name: "Privacy Policy",
        link: "/bookings"
    },
    {
        name: "Cancellation Policy",
        link: "/bookings"
    },
    {
        name: "Terms & Conditions",
        link: "/bookings"
    }
];

const Footer = () => {
    return (
        <div className="bg-blue-950 text-white py-10 px-4 sm:px-10 lg:px-40 flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="flex flex-col gap-6 text-gray-300 max-w-full md:max-w-96">
                    <div className="flex flex-col gap-4 text-xl">
                        <p>Contact Us</p>
                        <p>+91-9600036667</p>
                        <p className="text-sm">info@globaleventstravel.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="">Himachal Office Address</p>
                        <p>Global Cano's by Global Events Travels, Aleo road petrol pump, near chandamaki cottage, NSB hotel</p>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <p className="text-xl mb-4">Company</p>
                    <ul className="text-gray-400">
                        {nav.map((item, index) => (
                            <li key={index} className="hover:text-white transition-all duration-300">
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col max-w-full md:max-w-80">
                    <p className="text-xl mb-4">Subscribe to our newsletter</p>
                    <p className="text-gray-400 mb-4">Save up to 50% on tours! Get exclusive offers and updates on our latest tours and travel packages.</p>
                    <div className="flex flex-col md:flex-row">
                        <input type="email" placeholder="Enter your email" className="bg-transparent border border-gray-400 rounded-md p-2 mb-2 md:mb-0 md:mr-2 flex-grow" />
                        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="my-10 bg-gray-400" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex gap-4">
                    <div className="hover:bg-gray-400 p-2 rounded-full border border-gray-400">
                        <LinkedinLogo size={16} color="#ffffff" />
                    </div>
                    <div className="hover:bg-gray-400 p-2 rounded-full border border-gray-400">
                        <FacebookLogo size={16} color="#ffffff" />
                    </div>
                    <div className="hover:bg-gray-400 p-2 rounded-full border border-gray-400">
                        <TwitterLogo size={16} color="#ffffff" />
                    </div>
                </div>
                <div>
                    <img src={logo} alt="logo" className="w-44 mb-4 md:mb-0" />
                </div>
                <p className="text-sm text-center md:text-left">© 2024 Yatra. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
