import React from 'react';
import ParticlesComponent from '../../Components/particles';

const ContactSection = () => {
    return (
        <div>
            
            <section className="" id="contact">
            <ParticlesComponent id="particles"/>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mt-20">
                <div className="mb-4 md:ml-40">
                    <div className="mb-6 max-w-3xl text-center">
                        <p className="text-base font-semibold tracking-wide text-blue-600 ">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-white">
                            In hac habitasse platea dictumst
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-white">
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Let me know if you need more options or specific changes!.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <ContactItem 
                                    title="Our Address" 
                                    details={["1230 Maecenas Street, Tyre, Lebanon.", "Tyre, Lebanon"]} 
                                    iconPath="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0 M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                                />
                                <ContactItem 
                                    title="Contact" 
                                    details={["Mobile: +961 70/701800", "Mail: alimostafa@gmail.com"]} 
                                    iconPath="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                />
                                <ContactItem 
                                    title="Working hours" 
                                    details={["Monday - Sunday: 08:00 - 08:00"]} 
                                    iconPath="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M12 7v5l3 3"
                                />
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <InputField id="name" placeholder="Your name" />
                                    <InputField id="email" placeholder="Your email address" type="email" />
                                    <TextAreaField id="textarea" placeholder="Write your message..." />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

const ContactItem = ({ title, details, iconPath }) => (
    <li className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d={iconPath}></path>
            </svg>
        </div>
        <div className="ml-4 mb-4">
            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
            {details.map((detail, index) => (
                <p key={index} className="text-gray-600 dark:text-slate-400">{detail}</p>
            ))}
        </div>
    </li>
);

const InputField = ({ id, placeholder, type = "text" }) => (
    <div className="mx-0 mb-1 sm:mb-4">
        <input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300" 
            name={id} 
        />
    </div>
);

const TextAreaField = ({ id, placeholder }) => (
    <div className="mx-0 mb-1 sm:mb-4">
        <textarea 
            id={id} 
            name={id} 
            cols="30" 
            rows="5" 
            placeholder={placeholder} 
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
        />
    </div>
);

export default ContactSection;
