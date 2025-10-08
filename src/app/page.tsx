"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Camera, Award, Users, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop&crop=center')`,
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Camera className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-gray-300">Fotógrafo Profissional</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Alexandre
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Santos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Capturando momentos únicos com sensibilidade artística e técnica profissional
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/portfolio"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-black font-semibold text-lg hover:from-amber-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
            >
              <span className="relative z-10">Ver Portfólio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </Link>
            
            <Link
              href="/contato"
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2">Explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
                <p className="text-gray-400">Eventos Capturados</p>
              </motion.div>
            </div>
            
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
                <p className="text-gray-400">Clientes Satisfeitos</p>
              </motion.div>
            </div>
            
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">8</h3>
                <p className="text-gray-400">Anos de Experiência</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
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
              Trabalhos em Destaque
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Uma seleção dos momentos mais especiais que tive o privilégio de capturar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
                title: "Casamento Romântico",
                category: "Casamentos"
              },
              {
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
                title: "Retrato Artístico",
                category: "Retratos"
              },
              {
                image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=800&fit=crop",
                title: "Paisagem Natural",
                category: "Natureza"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-400 text-sm rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-amber-400/20 hover:text-amber-400 transition-all duration-300 border border-white/20 hover:border-amber-400/50"
            >
              Ver Portfólio Completo
              <ArrowDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}