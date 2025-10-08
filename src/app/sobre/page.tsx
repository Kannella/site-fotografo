"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Award, Camera, Heart, Star, Quote } from "lucide-react";

const awards = [
  { year: "2023", title: "Fotógrafo do Ano", organization: "Wedding Awards Brasil" },
  { year: "2022", title: "Melhor Portfólio", organization: "Prêmio Nacional de Fotografia" },
  { year: "2021", title: "Destaque em Retratos", organization: "Concurso Internacional" },
  { year: "2020", title: "Inovação Artística", organization: "Festival de Arte Visual" },
];

const testimonials = [
  {
    name: "Maria & João Silva",
    event: "Casamento",
    text: "Alexandre capturou cada momento do nosso casamento de forma única. As fotos são verdadeiras obras de arte que guardaremos para sempre.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ana Carolina",
    event: "Ensaio Individual",
    text: "Profissional excepcional! Me senti completamente à vontade durante o ensaio. As fotos ficaram incríveis e superaram todas as minhas expectativas.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Carlos Mendes",
    event: "Evento Corporativo",
    text: "Contratamos Alexandre para nosso evento corporativo e o resultado foi fantástico. Ele conseguiu capturar a essência do evento de forma profissional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conheça a história por trás das lentes e a paixão que move cada clique
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Alexandre Santos"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">8+</div>
                    <div className="text-sm text-gray-300">Anos</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">1000+</div>
                    <div className="text-sm text-gray-300">Clientes</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Camera className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-gray-300">Fotógrafo Profissional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Olá, eu sou o Alexandre Santos
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Há mais de 8 anos, dedico minha vida à arte de capturar momentos únicos e transformá-los em memórias eternas. Minha jornada na fotografia começou como uma paixão pessoal e evoluiu para uma missão: contar histórias através das lentes.
                </p>
                
                <p>
                  Especializo-me em fotografia de casamentos, retratos e eventos, sempre buscando a perfeição técnica aliada à sensibilidade artística. Cada projeto é único, e meu objetivo é capturar não apenas imagens, mas emoções, sentimentos e a essência de cada momento.
                </p>
                
                <p>
                  Acredito que a fotografia vai além da técnica - é sobre conexão humana, sobre entender as pessoas e suas histórias. É essa filosofia que guia meu trabalho e me permite criar imagens que tocam o coração.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm">Paixão pela Arte</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-sm">Premiado</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Excelência</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed mb-8">
              "Minha missão é capturar a beleza dos momentos únicos da vida, transformando instantes em memórias eternas através da arte fotográfica."
            </blockquote>
            <cite className="text-amber-400 font-semibold">Alexandre Santos</cite>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêmios e Reconhecimentos
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Reconhecimento pela excelência e inovação na arte fotográfica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 text-center"
              >
                <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-amber-400 mb-2">{award.year}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-sm text-gray-400">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              O que Dizem os Clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Depoimentos de quem confiou em mim para capturar seus momentos especiais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-amber-400/50 mb-4" />
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.event}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}