"use client"
import React, {useState, useEffect} from 'react';


export default function ContactForm () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [contactMethod, setContactMethod] = useState<string>('phone');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', phone:'', message: '' });
    };

    const handleContactMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setContactMethod(e.target.value);

    };


    console.log("Contact method:", contactMethod);

    return (

        <div id="#Contact" >

            <div className="flex flex-col gap-10 items-center">
                <fieldset>

                    <label className="text-sm text-white">
                    <input 
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={contactMethod === "email"}
                        onChange={handleContactMethodChange}
                    >  
                    </input>
                    email</label>
                    <label className="text-sm text-white">
                    <input 
                        name="contactMethod"
                        type="radio"
                        value="phone"
                        checked={contactMethod === "phone"}
                        onChange={handleContactMethodChange}
                    >  
                    </input>
                    0phone</label>

                </fieldset>

            

            <form className="flex flex-col gap-4 items-center justify-center w-full shadow-md p-4 text-black">
                <h2 className="text-2xl font-bold">Contact Me</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border rounded w-1/2"
                />

               { contactMethod == "email" ? 

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border rounded w-1/2"
                    />
                    : 
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-2 border rounded w-1/2"
                    />
               }
               <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 border rounded w-1/2 h-32"
                />
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded" >Send</button>
            </form>
            </div>
        </div>
    )
}