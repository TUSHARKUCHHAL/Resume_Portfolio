"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Dribbble,
  Filter,
  ExternalLink
} from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems = [
    { id: 1, title: "News Project", category: "Website Design", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Categories", category: "App Mobile Design", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, title: "News Project", category: "App Desktop", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, title: "Categories", category: "Building", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, title: "News Project", category: "Website Design", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, title: "Categories", category: "App Mobile Design", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, title: "News Project", category: "App Desktop", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 8, title: "Categories", category: "Building", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 9, title: "News Project", category: "Website Design", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation */}
      <nav className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-[#ff6b35] font-bold text-xl">LOGO</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#ff6b35] hover:text-[#ff6b35] transition-colors text-sm">Home</a>
            <a href="#services" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Services</a>
            <a href="#about" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">About me</a>
            <a href="#portfolio" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Portfolio</a>
            <a href="#contact" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Contact me</a>
          </div>
          <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="text-gray-400 text-sm">Hi I am</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Mahmood Fazile
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#ff6b35] leading-tight">
              UI/UX designer
            </h2>
            
            <div className="flex space-x-4 my-6">
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Dribbble className="w-4 h-4" />
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                Hire Me
              </Button>
              <Button variant="outline" className="border-[#3a3a3a] text-gray-300 hover:bg-[#2a2a2a] px-6 py-2 rounded text-sm font-medium transition-colors">
                Download CV
              </Button>
            </div>

            <div className="flex space-x-12 pt-8">
              <div>
                <div className="text-2xl font-bold text-[#ff6b35]">5+</div>
                <div className="text-gray-400 text-sm">Experiences</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#ff6b35]">20+</div>
                <div className="text-gray-400 text-sm">Project done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#ff6b35]">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mahmood Fazile" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur blanditiis hic, ipsum aliquam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#ff6b35] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ff6b35] mb-3">App Design</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur blanditiis hic, ipsum aliquam.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 text-sm">
              User Interface And User Experience And Also Video Editing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="About Me" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm">
                A software engineer, the modern-day architect of digital realms, 
                navigates the ethereal landscapes of code, sculpting intangible 
                structures that shape our technological world. With fingers poised over 
                keyboards like virtuoso pianists, they compose symphonies of logic, 
                each symbol a note in the vast orchestra of software They carve in a 
                screen a vast oceanic whole lines of code dance in intricate patterns, 
                weaving the fabric of programs and applications. Each keystroke is 
                brushstroke, crafting intricate architecture and breathing life into 
                digital designs.In this digital atelier, they stand as master craftsmen, 
                refining lines and etching the velvet knights in an ever-evolving quest 
                for perfection. Debugging becomes a noble crusade, unraveling the 
                mysteries hidden within the tangled webs of code, seeking this the 
                digital grail of error.
              </p>

              <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
            {[
              { skill: "Figma", percentage: 100 },
              { skill: "Adobe XD", percentage: 100 },
              { skill: "Adobe Photoshop", percentage: 85 },
              { skill: "Adobe Illustrator", percentage: 60 },
              { skill: "Adobe Premiere", percentage: 50 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full border-4 border-[#3a3a3a] flex items-center justify-center bg-[#2a2a2a]">
                    <span className="text-[#ff6b35] font-bold text-sm">{item.percentage}%</span>
                  </div>
                  <svg className="absolute top-0 left-0 w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#ff6b35"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={`${item.percentage * 1.76} 176`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Portfolio</h2>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Building'].map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeFilter === filter 
                      ? 'bg-[#ff6b35] text-white' 
                      : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#ff6b35] transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <Badge className="bg-[#ff6b35] text-white text-xs">{item.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contact me</h2>
            <p className="text-gray-400 text-sm">
              Cultivating Connections: Reach Out And Connect With Me
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-gray-400 focus:border-[#ff6b35] focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-gray-400 focus:border-[#ff6b35] focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-gray-400 focus:border-[#ff6b35] focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white focus:border-[#ff6b35] focus:outline-none transition-colors text-sm">
                  <option value="">Service Of Interest</option>
                  <option value="ui-design">UI Design</option>
                  <option value="ux-design">UX Design</option>
                  <option value="web-design">Web Design</option>
                  <option value="app-design">App Design</option>
                </select>
              </div>
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Timeline"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-gray-400 focus:border-[#ff6b35] focus:outline-none transition-colors text-sm"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Project Details..."
                rows={6}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white placeholder-gray-400 focus:border-[#ff6b35] focus:outline-none transition-colors text-sm resize-none"
              ></textarea>
            </div>
            
            <div className="text-right">
              <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-3 rounded text-sm font-medium transition-colors">
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-[#ff6b35] font-bold text-xl mb-6">LOGO</div>
            
            <nav className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="#home" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Home</a>
              <a href="#services" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Services</a>
              <a href="#about" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">About me</a>
              <a href="#portfolio" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">Contact me</a>
            </nav>
            
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <Dribbble className="w-4 h-4" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, USA</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2024 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}