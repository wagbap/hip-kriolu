import { MediaSlider } from '../ui/MediaSlider';

const TAGS = ["MC's", "DJ's", 'Writers', 'B-Boys'];
const SLIDER_VIDEO = 'Cipher.mp4';

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden px-6 md:px-12 py-20 md:py-24">
      <div className="relative z-[2] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[13px] font-bold tracking-[3px] uppercase text-kriolu-accent">
            <span className="w-8 h-0.5 bg-kriolu-accent shadow-glow" />
            Sobre o Arquivo
          </div>


          <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
            Milhares de registos{' '}
            <span className="bg-gold-text bg-clip-text text-transparent">
              arquivados e organizados
            </span>
          </h2>

          <p className="text-base leading-relaxed text-white/70">
            Directório de MC&apos;s, DJ&apos;s, B-Boys e Writers em constante crescimento.
            Álbuns, singles, videoclips, graffitis, battles, entrevistas e muito mais.
          </p>

          <p className="text-sm md:text-base text-white/60 max-w-2xl leading-relaxed">
  Nu ta preserva nos kultura, valoriza nos artistas i da voz a nos história.
</p>

          <div className="flex flex-wrap gap-3 mt-2 text-sm font-bold tracking-widest uppercase">
            {TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                {i > 0 && <span className="text-kriolu-accent text-[8px]">●</span>}
                <span className="text-white/85 hover:text-kriolu-accent transition-colors cursor-pointer">
                  {tag}
                </span>
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-script font-bold text-white leading-tight">
  Undi Rap ta Salva, bu ta Midita-Na-Som,
  <br />
  Liberta-Na-Som y xinti Money-Festa-Som
</h2>
        </div>

        <MediaSlider videoSrc={SLIDER_VIDEO}  />
      </div>
    </section>
  );
}