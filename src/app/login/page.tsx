"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn, Camera, ArrowLeft } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular autenticação
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Verificar se é admin ou cliente
    if (formData.email === "admin@alexandresantos.com") {
      router.push("/admin");
    } else {
      router.push("/cliente");
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/80" />
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Voltar</span>
      </Link>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Camera className="w-8 h-8 text-black" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h1>
            <p className="text-gray-400">Faça login para acessar sua área</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-lg hover:from-amber-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Entrando...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Entrar</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-sm font-semibold text-white mb-3">Contas de Demonstração:</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <strong className="text-amber-400">Admin:</strong> admin@alexandresantos.com
              </div>
              <div>
                <strong className="text-blue-400">Cliente:</strong> cliente@exemplo.com
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Senha: qualquer senha (demo)
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-400">
            Não tem uma conta?{" "}
            <span className="text-amber-400">
              Entre em contato para solicitar acesso
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}