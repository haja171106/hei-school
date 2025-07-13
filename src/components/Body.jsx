import { useState } from 'react';
import aboutImage from '../assets/A-propos-left-1.webp';
import banner1 from '../assets/hei-banner-1.webp';
import banner2 from '../assets/hei-banner-2.webp';
import banner3 from '../assets/hei-banner-3.webp';

const slides = [
  {
    image: banner1,
    text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
  },
  {
    image: banner2,
    text: "« L'éducation est l'arme la plus puissante pour changer le monde » selon Nelson Mandela. « L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C'est notre mission.",
  },
  {
    image: banner3,
    text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
  }
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={slide.image} 
            alt={`slide-${index}`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1
            className="text-6xl md:text-7xl font-bold mb-16"
            style={{
              fontFamily: '"EB Garamond", sans-serif',
              textShadow: '6px 5px 11px rgba(0, 0, 0, 0.4)'
            }}
          >
            Haute École d'Informatique
          </h1>


            <p className="max-w-3xl text-lg md:text-xl mb-24">{slide.text}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-24">
              <a href="#inscription" className="bg-white text-[#001948] font-bold px-5 py-2 rounded shadow hover:opacity-90">
                Inscrivez-vous ici
              </a>
              <a href="#emploi" className="bg-[#dfa408] text-white font-bold px-5 py-2 rounded shadow hover:opacity-90">
                Emploi du temps
              </a>
              <a href="#programme" className="bg-[#001948] text-white font-bold px-5 py-2 rounded shadow hover:opacity-90">
                Programme pédagogique
              </a>
            </div>

            <p className="absolute bottom-6 text-sm">
              Habilitation MESupRES, suivant l'arrêté n°31309/2023
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#001948] text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center z-20 shadow"
        aria-label="Slide précédent"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#001948] text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center z-20 shadow"
        aria-label="Slide suivant"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${idx === current ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Aller au slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
      <div className="w-full md:w-1/2">
        <img 
          src={aboutImage} 
          alt="Équipe HEI en formation" 
          className="w-full h-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">À propos de nous</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">+3ans</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique. 
            Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique 
            de Madagascar et du monde entier.
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">+250 étudiants</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à 
            notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de 
            pouvoir parler de la "grande famille HEI".
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">Notre mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme 
            l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser 
            leur employabilité et le développement de Madagascar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Slider />
      <AboutUs />
    </main>
  );
}
