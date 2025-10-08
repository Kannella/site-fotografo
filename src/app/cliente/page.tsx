"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Download, 
  LogOut, 
  Camera, 
  Eye, 
  X, 
  ExternalLink,
  Grid,
  List,
  Search,
  Filter,
  Heart,
  Share2,
  Calendar,
  User
} from "lucide-react";

// Mock data
const clientData = {
  name: "Maria & João Silva",
  event: "Casamento",
  date: "2024-03-15",
  photographer: "Alexandre Santos",
  driveLink: "https://drive.google.com/drive/folders/exemplo"
};

const mockPhotos = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop", 
    title: "Cerimônia", 
    available: true,
    favorite: false
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=1200&fit=crop", 
    title: "Primeiro Beijo", 
    available: true,
    favorite: true
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop", 
    title: "Dança", 
    available: true,
    favorite: false
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=1200&fit=crop", 
    title: "Família", 
    available: true,
    favorite: true
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop", 
    title: "Detalhes", 
    available: true,
    favorite: false
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop", 
    title: "Recepção", 
    available: true,
    favorite: false
  },
];

export default function ClientArea() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof mockPhotos[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([2, 4]);

  const filteredPhotos = mockPhotos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorites = !showFavoritesOnly || favorites.includes(photo.id);
    return matchesSearch && matchesFavorites && photo.available;
  });

  const toggleFavorite = (photoId: number) => {
    setFavorites(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const downloadPhoto = (photo: typeof mockPhotos[0]) => {
    // Simular download
    const link = document.createElement('a');
    link.href = photo.src;
    link.download = `${photo.title}.jpg`;
    link.click();
  };

  const downloadAll = () => {
    // Simular download de todas as fotos
    alert("Download de todas as fotos iniciado!");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Camera className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold">Área do Cliente</span>
            </Link>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium">{clientData.name}</div>
                <div className="text-xs text-gray-400">{clientData.event}</div>
              </div>
              <Link
                href="/login"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sair</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/20 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Bem-vindos, {clientData.name}!
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(clientData.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Fotógrafo: {clientData.photographer}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>{filteredPhotos.length} fotos disponíveis</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <button
                onClick={downloadAll}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-lg font-medium hover:from-amber-400 hover:to-orange-500 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Todas</span>
              </button>
              
              {clientData.driveLink && (
                <a
                  href={clientData.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-lg text-white hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Drive</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar fotos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
            />
          </div>

          {/* Filters and View */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                showFavoritesOnly
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-white/10 text-gray-400 hover:text-white border border-white/20"
              }`}
            >
              <Heart className={`w-4 h-4 ${showFavoritesOnly ? "fill-current" : ""}`} />
              <span className="hidden sm:inline">Favoritas</span>
            </button>

            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-amber-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-amber-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Photos Grid */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Controls */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(photo.id);
                    }}
                    className={`p-2 backdrop-blur-sm rounded-full transition-all duration-300 ${
                      favorites.includes(photo.id)
                        ? "bg-red-500/80 text-white"
                        : "bg-black/50 text-gray-300 hover:text-red-400"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(photo.id) ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPhoto(photo);
                    }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Photos List */}
        {viewMode === "list" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-400">Disponível para download</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleFavorite(photo.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorites.includes(photo.id)
                        ? "bg-red-500/20 text-red-400"
                        : "bg-white/10 text-gray-400 hover:text-red-400"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(photo.id) ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={() => setSelectedPhoto(photo)}
                    className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => downloadPhoto(photo)}
                    className="p-2 bg-amber-500/20 rounded-full text-amber-400 hover:bg-amber-500/30 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              {searchTerm || showFavoritesOnly ? "Nenhuma foto encontrada" : "Nenhuma foto disponível"}
            </h3>
            <p className="text-gray-500">
              {searchTerm || showFavoritesOnly 
                ? "Tente ajustar os filtros de busca"
                : "As fotos serão disponibilizadas em breve"
              }
            </p>
          </motion.div>
        )}
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
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
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              
              {/* Info */}
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                    <p className="text-gray-300">Clique para baixar em alta resolução</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleFavorite(selectedPhoto.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        favorites.includes(selectedPhoto.id)
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : "bg-white/10 text-gray-300 hover:text-red-400 border border-white/20"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(selectedPhoto.id) ? "fill-current" : ""}`} />
                      <span>Favoritar</span>
                    </button>
                    <button
                      onClick={() => downloadPhoto(selectedPhoto)}
                      className="flex items-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}