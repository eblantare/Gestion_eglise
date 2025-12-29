// C:\projets\frontend\app\cdej\contacts\page.tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Users, MessageSquare } from 'lucide-react'

export default function ContactsPage() {
  const team = [
    { name: "Pasteur Jean", role: "Responsable", phone: "+228 XX XX XX XX" },
    { name: "Sarah K.", role: "Coordinatrice", phone: "+228 XX XX XX XX" },
    { name: "Marc T.", role: "Responsable Louange", phone: "+228 XX XX XX XX" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl opacity-90">L'équipe CDEJ-RAFISSA est à votre écoute</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Votre nom" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Votre email" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Votre message" rows={4} className="w-full p-3 border rounded-lg" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                Envoyer
              </button>
            </form>
          </div>
          
          {/* Contacts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Notre Équipe</h2>
            <div className="space-y-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}