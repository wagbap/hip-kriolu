import { VideoBackground } from '../VideoBackground';

const HERO_VIDEO = 'Cipher.mp4';
const HERO_POSTER = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-48 pb-20">
      <VideoBackground
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.45] saturate-[0.85] scale-105 animate-hero-zoom"
      />
      <div className="absolute inset-0 z-[1] bg-hero-fade" />

      <div className="relative z-[2] flex flex-col items-center gap-5 max-w-5xl">
  <img
    src="https://res.cloudinary.com/dpsrmzvsl/image/upload/v1791994414/Log%C3%B3tipo_RaplK_em_Azul_Gradiente-removebg-preview_hclznh.png"
    alt="Hip Hop Kriolu"
    className="w-16 md:w-20 lg:w-24 h-auto object-contain drop-shadow-[0_0_25px_rgba(77,166,255,0.9)] animate-crown-float"
  />

<h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-wide text-white drop-shadow-[0_6px_40px_rgba(0,0,0,0.9)]">
  Ben-vindu a{' '}
  <span className="bg-gold-text bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(77,166,255,0.5)]">
    Hip Hop Kriolu
  </span>
</h1>


<p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
  Un plataforma ku tudo informason di Rapper´s, MC&apos;s, DJ&apos;s, B-Boys i Writers.
  Lugar di explora albuns, singles, videoclipes, graffiti, battles, entrevistas i txeu más.
</p>



  <a
    href="#sobre"
    className="inline-flex items-center gap-2.5 mt-3 px-8 py-3.5 rounded-full bg-accent-btn text-white text-sm font-bold tracking-widest uppercase shadow-cta hover:-translate-y-1 hover:scale-105 hover:shadow-ctaHover transition-all"
  >
    Explorar Arquivo
  </a>
</div>

      <div className="absolute bottom-8 left-1/2 z-[2] flex flex-col items-center gap-2 text-white/50 text-[11px] tracking-[3px] uppercase animate-scroll-bounce">
        <span>Scroll</span>
        <span className="text-xl text-kriolu-accent">↓</span>
      </div>
    </section>
  );
}