import { Briefcase, Code, User, MapPin, Phone, Mail, Calendar, GraduationCap, Clock, FolderOpen } from "lucide-react";
import bgImage from '../assets/resumepassphoto.jpg';
import resumePDF from '../assets/resume.pdf';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Photo */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-2">
                <img 
                  src={bgImage}
                  alt="Mrunal Mehar" 
                  className="w-full max-w-md mx-auto rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="space-y-8">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-justify sm:text-justify text-muted-foreground leading-relaxed">
                Dedicated software developer and engineering student with experience building scalable applications and expertise in data-driven problem solving. I am skilled at writing clean, testable code, and I always focus on the full product lifecycle, from design to deployment and monitoring.
              </p>
            </div>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">Name:</span>
                  <span className="ml-2 text-muted-foreground">Mrunal Mehar</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">Age:</span>
                  <span className="ml-2 text-muted-foreground">22</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-2 text-muted-foreground">+91 9730267598</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">Degree:</span>
                  <span className="ml-2 text-muted-foreground">Bachelors (Pursuing)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">City:</span>
                  <span className="ml-2 text-muted-foreground">Bhandara, Maharashtra</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">▷</span>
                <div>
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2 text-muted-foreground">mrunalmehar863@gmail.com</span>
                </div>
              </div>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="cosmic-button flex items-center justify-center gap-2 px-8 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>

              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumePDF;
                  link.download = 'Mrunal_Mehar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};