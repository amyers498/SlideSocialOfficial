import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Users, Zap, Shield, Heart, Music, Coffee, Gamepad2, MapPin, ChevronRight, Instagram, Mail, Plus, Minus } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activities = [
    { name: "Karaoke Crew", emoji: "🎤", color: "from-pink-500 to-purple-600" },
    { name: "Board Game Squad", emoji: "🎲", color: "from-blue-500 to-cyan-500" },
    { name: "Bar Crawl", emoji: "🍻", color: "from-purple-500 to-pink-500" },
    { name: "Netflix & Chill", emoji: "📺", color: "from-indigo-500 to-purple-500" },
    { name: "Basketball Pickup", emoji: "🏀", color: "from-orange-500 to-red-500" },
    { name: "Study Group", emoji: "📚", color: "from-green-500 to-blue-500" },
  ]

  const faqs = [
    {
      question: "How does SlideSocial keep me safe?",
      answer: "We verify all users through phone numbers, use AI to detect suspicious behavior, and provide in-app reporting tools. Plus, you can always meet in public spaces first."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. We only use your data to make better matches. We never sell your info, and you control what's shared in your profile."
    },
    {
      question: "What if I don't vibe with my match?",
      answer: "No worries! You can politely decline or leave a group anytime. Our AI learns from this to make better matches next time."
    },
    {
      question: "Is there an age limit?",
      answer: "You must be 18+ to use SlideSocial. We're focused on connecting young adults who want to make real friendships and have authentic experiences."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight animate-gradient bg-[length:200%_200%]">
                SlideSocial
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Slide into real nights, real fast.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Drop your plans. We'll handle the rest.
              </p>
            </div>
            
            <div className="space-y-3 lg:space-y-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg w-full sm:w-auto text-center animate-pulse">
                Launching Late 2025 – App Store Only
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Available on iOS. Be ready to slide.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-right">
            <div className="relative scale-75 sm:scale-90 lg:scale-100 animate-float">
              {/* Phone shadow/glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[3.5rem] blur-2xl opacity-20 animate-pulse scale-105" />
              
              {/* Phone outer frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3.5rem] p-1 shadow-2xl">
                {/* Phone inner frame */}
                <div className="bg-black rounded-[3rem] p-1">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[2.8rem] w-[320px] h-[640px] flex flex-col relative overflow-hidden">
                    
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 pt-4 pb-2 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="text-xs font-medium">9:41</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                          <div className="text-white font-bold text-sm">S</div>
                        </div>
                        <div className="text-white font-bold text-lg">SlideSocial</div>
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock app interface */}
                    <div className="flex-1 px-6 space-y-4">
                      {/* What's the vibe section */}
                      <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl p-4 border border-pink-500/30 backdrop-blur-sm">
                        <p className="text-pink-300 font-semibold mb-3 text-sm">What's the vibe tonight?</p>
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                            🍻 Bar hopping
                          </div>
                          <div className="bg-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                            🎵 Live music
                          </div>
                          <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                            🎮 Gaming
                          </div>
                        </div>
                      </div>
                      
                      {/* Matches section */}
                      <div className="space-y-3">
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Your Matches</p>
                        
                        <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-xl p-3 border border-blue-500/20 backdrop-blur-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              A
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-sm">Alex, 22</p>
                              <p className="text-xs text-gray-400">Ready to explore downtown! 🌃</p>
                            </div>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-xl p-3 border border-purple-500/20 backdrop-blur-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              S
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-sm">Sam, 20</p>
                              <p className="text-xs text-gray-400">Let's find the best spots! ✨</p>
                            </div>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Group match notification */}
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30 backdrop-blur-sm mt-auto mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-green-300 font-semibold text-sm mb-1">Group Match Found! 🎉</p>
                            <p className="text-xs text-gray-300">3 people ready for bar hopping near you</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Three steps to your next adventure</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4 lg:space-y-6 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-slow">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-3 text-pink-300">Pick what you feel like doing</h3>
                <p className="text-gray-300 text-sm sm:text-base">Drinks? Study session? Concert? Just tell us your vibe and we'll do the rest.</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 lg:space-y-6 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-3 text-purple-300">Match with people who are down</h3>
                <p className="text-gray-300 text-sm sm:text-base">Our AI finds your perfect activity buddy or group. No awkward small talk needed.</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 lg:space-y-6 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-3 text-blue-300">Meet up IRL or keep it virtual</h3>
                <p className="text-gray-300 text-sm sm:text-base">Whether it's grabbing coffee or gaming online, make real connections your way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built Different
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Why SlideSocial hits different</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-pink-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold text-pink-300">Fast Matching</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Get matched in seconds, not hours. When you're ready to go, we're ready too.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <Gamepad2 className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold text-purple-300">Built for Real Life</h3>
                <p className="text-gray-300 text-xs sm:text-sm">We get it. Late night hangouts, weekend adventures, random Tuesday vibes.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold text-blue-300">Safe & Vetted</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Phone verification, AI safety monitoring, and community reporting keep it real.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Group & Solo Options</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Want a study buddy or a whole crew? We've got both covered.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Carousel */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-pink-900/10 to-purple-900/10" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Find Your Crew
            </h2>
            <p className="text-xl text-gray-300">Whatever you're into, there's a group for that</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {activities.map((activity, index) => (
              <Card key={index} className={`bg-gradient-to-br ${activity.color} border-0 hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl mb-2">{activity.emoji}</div>
                  <h3 className="text-white font-bold text-sm group-hover:text-gray-100 transition-colors">
                    {activity.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400">And hundreds more activities to discover...</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Real Talk
            </h2>
            <p className="text-xl text-gray-300">Your questions, answered</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                </svg>
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="space-x-8 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
              <p className="text-gray-500 text-sm">© 2025 SlideSocial. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
