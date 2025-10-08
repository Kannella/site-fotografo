"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Users, 
  Upload, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Download,
  Camera,
  Search,
  Filter,
  MoreVertical,
  User,
  Mail,
  Calendar,
  Image as ImageIcon
} from "lucide-react";

// Mock data
const mockClients = [
  {
    id: 1,
    name: "Maria & João Silva",
    email: "maria.joao@email.com",
    event: "Casamento",
    date: "2024-03-15",
    photos: 45,
    status: "Ativo"
  },
  {
    id: 2,
    name: "Ana Carolina",
    email: "ana.carolina@email.com",
    event: "Ensaio Individual",
    date: "2024-02-28",
    photos: 23,
    status: "Ativo"
  },
  {
    id: 3,
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    event: "Evento Corporativo",
    date: "2024-01-20",
    photos: 67,
    status: "Concluído"
  }
];

const mockPhotos = [
  { id: 1, clientId: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop", available: true },
  { id: 2, clientId: 1, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=400&fit=crop", available: true },
  { id: 3, clientId: 1, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=400&fit=crop", available: false },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("clients");
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [showNewClientModal, setShowNewClientModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: "clients", label: "Clientes", icon: Users },
    { id: "photos", label: "Fotos", icon: ImageIcon },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <span className="text-xl font-bold">Admin Panel</span>
            </Link>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium">Alexandre Santos</div>
                <div className="text-xs text-gray-400">Administrador</div>
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
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white/5 rounded-lg p-1 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-black"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clients Tab */}
        {activeTab === "clients" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Gerenciar Clientes</h1>
                <p className="text-gray-400">Gerencie contas de clientes e seus acessos</p>
              </div>
              <button
                onClick={() => setShowNewClientModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-lg font-medium hover:from-amber-400 hover:to-orange-500 transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Cliente</span>
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{client.name}</h3>
                        <p className="text-sm text-gray-400">{client.event}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(client.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <ImageIcon className="w-4 h-4" />
                      <span>{client.photos} fotos</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === "Ativo" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-gray-500/20 text-gray-400"
                    }`}>
                      {client.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-400 hover:text-white" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Gerenciar Fotos</h1>
                <p className="text-gray-400">Upload e gerenciamento de fotos dos clientes</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-lg font-medium hover:from-amber-400 hover:to-orange-500 transition-all duration-300">
                <Upload className="w-4 h-4" />
                <span>Upload Fotos</span>
              </button>
            </div>

            {/* Client Selector */}
            <div className="mb-6">
              <select className="w-full sm:w-auto px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300">
                <option value="">Selecionar Cliente</option>
                {mockClients.map((client) => (
                  <option key={client.id} value={client.id} className="bg-gray-800">
                    {client.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mockPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group aspect-square overflow-hidden rounded-lg bg-white/5 border border-white/10"
                >
                  <img
                    src={photo.src}
                    alt="Client photo"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                    photo.available ? "bg-green-400" : "bg-gray-400"
                  }`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-8">Configurações</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Configurações Gerais</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome do Estúdio
                    </label>
                    <input
                      type="text"
                      defaultValue="Alexandre Santos Fotografia"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email de Contato
                    </label>
                    <input
                      type="email"
                      defaultValue="contato@alexandresantos.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Configurações de Upload</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tamanho Máximo por Arquivo
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300">
                      <option value="5">5 MB</option>
                      <option value="10">10 MB</option>
                      <option value="20">20 MB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Formatos Aceitos
                    </label>
                    <input
                      type="text"
                      defaultValue="JPG, PNG, RAW"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* New Client Modal */}
      <AnimatePresence>
        {showNewClientModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowNewClientModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Novo Cliente</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Nome do cliente"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Evento
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300">
                    <option value="">Selecione</option>
                    <option value="casamento">Casamento</option>
                    <option value="retrato">Retrato</option>
                    <option value="evento">Evento</option>
                    <option value="ensaio">Ensaio</option>
                  </select>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewClientModal(false)}
                    className="flex-1 px-4 py-3 border border-white/20 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-lg font-medium hover:from-amber-400 hover:to-orange-500 transition-all duration-300"
                  >
                    Criar Cliente
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}