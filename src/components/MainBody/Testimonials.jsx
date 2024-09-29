import React, { useState, useEffect, useCallback } from 'react';
import image from "../../assets/images/kedarnath1.jpeg";
import doubleQuote from "../../assets/images/double_quote.png";

const testimonials = [
    {
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!"
    },
    {
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!"
    },
    {
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. wu a nwa dn ndnwa nawd ad awd nadpoda awd ilawd awd!"
    },
    
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState('left');

    const nextTestimonial = useCallback(() => {
        setDirection('left');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        let timer;
        if (!isPaused) {
            timer = setInterval(nextTestimonial, 5000);
        }
        return () => clearInterval(timer);
    }, [isPaused, nextTestimonial]);

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 'left' : 'right');
        setCurrentIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000);
    };

    return (
        <div className="py-10 justify-center items-center flex flex-col bg-blue-950 text-white mt-16">
            <h2 className="text-5xl great-vibes-regular text-center text-orange-300">Testimonials</h2>
            <div className="relative">
                <div className="absolute bg-white/20 w-16 h-6 -rotate-[10deg] -left-5 top-0 translate-y-1/2" />
                <p className="text-4xl text-center outfit-regular font-light mt-3">Travelers love our locals...</p>
            </div>
            <div className="flex items-center gap-10 mt-10 px-44">
            <div className="relative">
            <img src={doubleQuote} alt="double-quote" className="w-20 h-16 absolute -top-5 -left-20 opacity-20" />
                <div className="overflow-hidden relative">
                    <div 
                        className="transition-transform duration-500 ease-in-out flex w-full"
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="text-start">
                                    <p className="mt-2 text-gray-300">"{testimonial.description}"</p>
                                    <p className="text-xl font-semibold mt-2">~{testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                <div className="min-w-96 max-w-96 aspect-square p-2 rounded-full overflow-hidden border border-white">
                    <img src={image} alt="kedarnath" className="w-full h-full object-cover rounded-full border-8 border-white"/>
                </div>
            </div>
            <div className="mt-4 flex items-center">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;