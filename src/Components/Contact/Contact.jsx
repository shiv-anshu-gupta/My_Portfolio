import React from "react";
import Contact_details from "./Contact_details";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c2624108-1e1b-4e1b-a297-12a5f41e16e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col items-center p-4 md:p-8 lg:p-12"
    >
      <div className="w-full md:w-10/12 lg:w-8/12 text-white">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-green-700 text-center">
          Get in Touch
        </h1>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-12">
          {/* Contact Details Section */}
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent text-3xl md:text-4xl italic">
              Let's Talk
            </h1>
            <p className="w-full md:w-3/4 lg:w-80 mt-4">
              "Kindly use the contact information provided below to reach out.
              I welcome any inquiries regarding employment opportunities and am
              eager to contribute my skills and expertise to your organization’s
              success."
            </p>
            <div className="mt-6 space-y-4">
              <Contact_details Icon={<IoIosMail />} Info="shivanshu25@gmail.com" />
              <Contact_details Icon={<PiPhoneCallFill />} Info="7440248190" />
              <Contact_details Icon={<FaLocationDot />} Info="Satna, MP" />
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  className="bg-gray-800 w-full p-2 rounded"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  className="bg-gray-800 w-full p-2 rounded"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="message">Write Your Message Here</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] text-teal-600 py-2 px-8 rounded-full border border-blue-800 font-bold hover:scale-110 hover:border-blue-600 hover:duration-500 hover:border-2"
              >
                Submit Now
              </button>
            </form>
            {result && <p className="mt-4 text-green-500">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
