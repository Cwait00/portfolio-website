import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { FaExternalLinkAlt, FaEnvelope, FaLinkedin, FaGithub, FaUpload, FaSave } from "react-icons/fa";

const techSkills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Redis",
  "Tailwind CSS",
  "REST APIs",
  "Python",
  "Unit Testing (Jest, Mocha, Chai)",
  "Docker",
  "Git & GitHub",
  "CI/CD",
  "WebSockets",
  "Firebase Authentication",
  "Cloud Hosting"
];

const projects = [
  {
    name: "Blaq Packer",
    description:
      "Developed a comprehensive web application for Blaq Packer, allowing clients to book personal chefs, view menus, and order meals. Built using React.js, Node.js, and MongoDB.",
    link: "https://sites.google.com/view/blaq-packer/home",
  },
  {
    name: "Intuthuzelo B&B",
    description:
      "Created a modern website for Intuthuzelo B&B, showcasing accommodations and booking information. Implemented a clean, responsive design using React.js and Tailwind CSS.",
    link: "https://sites.google.com/view/intuthuzelo/home",
  },
  {
    name: "Splitt Bar Agencies",
    description:
      "Built a website for Splitt Bar Agencies, a construction company specializing in PPE and safety gear. Developed using React.js, Node.js, and MongoDB.",
    link: "https://sites.google.com/view/splitt-bar-agencies/home",
  },
];

export default function Portfolio() {
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageFile(reader.result);
      };
    }
  };

  const handleSaveImage = () => {
    if (imageFile) {
      setProfileImage(imageFile);
      localStorage.setItem("profileImage", imageFile);
      setImageFile(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-10">
        <img
          src={profileImage}
          alt="Cwaita Nobongoza"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        <div className="flex justify-center gap-4 mt-4">
          <label htmlFor="imageUpload" className="cursor-pointer text-blue-600 hover:underline flex items-center">
            <FaUpload className="mr-2" /> Upload Image
          </label>
          {imageFile && (
            <button onClick={handleSaveImage} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <FaSave className="mr-2" /> Save Image
            </button>
          )}
        </div>
        <h1 className="text-4xl font-bold">Cwaita "Chef Lou" Nobongoza</h1>
        <p className="text-lg text-gray-600">Full-Stack Developer | Hospitality & Business Solutions</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a versatile professional with expertise in both the culinary and technology industries. With over 10 years of experience in the
          hospitality sector as a food and beverage manager, and 4 years as a chef, I have honed my skills in customer service and
          business management. Additionally, I am a certified software engineer specializing in backend development, helping businesses
          in the hospitality industry digitize their operations. My passion is creating seamless digital solutions for restaurants, B&Bs, construction companies, and small-medium businesses.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          {techSkills.map((skill, index) => (
            <li key={index} className="p-1">{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center mt-4 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:cwaitanobongoza@gmail.com" className="text-gray-700 hover:text-blue-600 text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/cwaita-nobongoza-4a449812b" className="text-gray-700 hover:text-blue-600 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Cwait00" className="text-gray-700 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  );
}
