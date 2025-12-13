// app/beliefs/page.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, Cross, Heart, Users, Globe, Star,
  Shield, Target, Award, Sparkles, ChevronRight
} from 'lucide-react'

export default function BeliefsPage() {
  const beliefs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "La Bible",
      description: "Nous croyons que la Bible est la Parole inspirée de Dieu, autorité suprême pour la foi et la vie.",
      reference: "2 Timothée 3:16-17"
    },
    {
      icon: <Cross className="w-8 h-8" />,
      title: "Dieu Trinité",
      description: "Nous croyons en un seul Dieu éternel existant en trois personnes : Père, Fils et Saint-Esprit.",
      reference: "Matthieu 28:19"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Jésus-Christ",
      description: "Nous croyons en Jésus-Christ, Fils de Dieu, mort et ressuscité pour notre salut.",
      reference: "Jean 3:16"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "L'Église",
      description: "Nous croyons que l'Église est le corps de Christ, appelée à être lumière dans le monde.",
      reference: "Éphésiens 1:22-23"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "La Mission",
      description: "Nous croyons que chaque croyant est appelé à partager l'Évangile et servir son prochain.",
      reference: "Matthieu 28:19-20"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Le Retour de Christ",
      description: "Nous croyons au retour prochain de Jésus-Christ et à la vie éternelle avec Lui.",
      reference: "1 Thessaloniciens 4:16-17"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/cross.svg')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Nos Fondements</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Nos <span className="text-yellow-300">Croyances</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Les vérités bibliques qui forment le cœur de notre foi et guident notre marche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solides comme le roc, vivantes comme la foi
            </h2>
            <p className="text-xl text-gray-600">
              Nos croyances ne sont pas de simples doctrines, mais des vérités transformatrices 
              qui façonnent notre identité et notre mission. Elles sont le fondement sur lequel 
              nous construisons notre vie communautaire et notre engagement envers Dieu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Croyances principales */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {belief.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {belief.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {belief.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 italic">
                    {belief.reference}
                  </span>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs pratiques */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos croyances en <span className="text-purple-600">action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comment nos croyances se traduisent dans notre vie quotidienne et notre engagement communautaire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Engagement communautaire</h3>
                  <p className="text-gray-600">
                    Nous croyons que la foi doit se vivre en communauté, c'est pourquoi nous favorisons 
                    les relations authentiques et le soutien mutuel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Croissance personnelle</h3>
                  <p className="text-gray-600">
                    Chaque croyant est encouragé à grandir dans sa relation avec Dieu à travers 
                    l'étude biblique, la prière et le service.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Impact social</h3>
                  <p className="text-gray-600">
                    Notre foi nous pousse à servir notre communauté et à être une source 
                    d'espérance et de transformation dans notre environnement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transmission intergénérationnelle</h3>
                  <p className="text-gray-600">
                    Nous investissons dans la formation des jeunes et le partage de la foi 
                    entre les générations pour un héritage spirituel durable.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <Cross className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Envie d'approfondir ces vérités ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous pour explorer ensemble la richesse de la Parole de Dieu 
              et grandir dans votre compréhension de la foi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/sermons"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl font-bold text-lg"
              >
                Écouter nos messages
              </a>
              <a
                href="/events"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 font-bold text-lg"
              >
                Voir nos études bibliques
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}