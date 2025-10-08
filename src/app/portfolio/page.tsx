"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Filter, X, Download, Eye } from "lucide-react";

const categories = [
  { id: "all", name: "Todos", count: 48 },
  { id: "casamentos", name: "Casamentos", count: 18 },
  { id: "retratos", name: "Retratos", count: 12 },
  { id: "natureza", name: "Natureza", count: 8 },
  { id: "eventos", name: "Eventos", count: 6 },
  { id: "ensaios", name: "Ensaios", count: 4 },
];

const portfolioImages = [
  // Casamentos
  { id: 1, category: "casamentos", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop", title: "Cerimônia ao Pôr do Sol", description: "Momento mágico durante a cerimônia" },
  { id: 2, category: "casamentos", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=1200&fit=crop", title: "Primeiro Beijo", description: "O momento mais esperado" },
  { id: 3, category: "casamentos", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop", title: "Dança dos Noivos", description: "Primeira dança como casal" },
  
  // Retratos
  { id: 4, category: "retratos", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop", title: "Retrato Feminino", description: "Beleza natural em luz suave" },
  { id: 5, category: "retratos", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop", title: "Retrato Masculino", description: "Força e sensibilidade" },
  { id: 6, category: "retratos", src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=1200&fit=crop", title: "Olhar Profundo", description: "Expressão autêntica" },
  
  // Natureza
  { id: 7, category: "natureza", src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=1200&fit=crop", title: "Montanhas Douradas", description: "Paisagem ao amanhecer" },
  { id: 8, category: "natureza", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", title: "Reflexos no Lago", description: "Serenidade da natureza" },
  
  // Eventos
  { id: 9, category: "eventos", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop", title: "Festa Corporativa", description: "Momentos de celebração" },
  { id: 10, category: "eventos", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1200&fit=crop", title: "Show Musical", description: "Energia do palco" },
  
  // Ensaios
  { id: 11, category: "ensaios", src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=1200&fit=crop", title: "Ensaio Casal", description: "Amor em cada olhar" },
  { id: 12, category: "ensaios", src: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800&h=1200&fit=crop", title: "Ensaio Individual", description: "Personalidade única" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header */}
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
                Portfólio
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Uma coleção dos momentos mais especiais capturados ao longo da minha jornada fotográfica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50 backdrop-blur-sm sticky top-16 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg shadow-amber-500/25"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-amber-400/50"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              
              {/* Info */}
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}