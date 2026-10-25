import Image from "next/image";
import RotatingRole from "./RotatingRole";

const waveform = [
  22, 38, 28, 54, 42, 72, 45, 88, 58, 36, 68, 95, 54, 78, 44, 62, 90, 49, 30,
  66, 84, 45, 73, 36, 57, 91, 48, 28, 61, 80, 42, 69, 35, 53, 76, 31, 58, 43,
  24,
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100svh-81px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:min-h-0 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:py-9 lg:gap-12 lg:px-12 lg:py-12 2xl:py-16"
    >
      <div className="relative z-10">
        <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs md:mb-4">
          <span className="size-2 rounded-full bg-[#d9f36a] shadow-[0_0_16px_#d9f36a]" />
          Independent creative studio
        </p>
        <h1 className="max-w-3xl text-[clamp(2.65rem,7vw,6rem)] leading-[0.92] font-semibold tracking-[-0.075em]">
          Hi, I am
          <br />
          OM GANESH S
          <br />
          <RotatingRole />
          <br />
          to resonate.
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7 md:mt-4">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to take a new challenge ,contribution and achieve great
          things
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-5">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#d9f36a] px-6 text-sm font-semibold text-[#11120f] transition-transform hover:-translate-y-0.5"
          >
            Play the highlights <span aria-hidden="true">↓</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1mmwXZEWU-c814Y_Roy-Qv5jfpYgptFIm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-5 text-sm font-medium text-white/80 transition-colors hover:border-[#d9f36a]/60 hover:text-[#d9f36a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9f36a]"
          >
            <span
              aria-hidden="true"
              className="font-mono text-[10px] tracking-widest text-[#d9f36a]"
            >
              PDF
            </span>
            Read my CV
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-[9px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-xs md:mt-6">
          <span>Curiosity</span>
          <span aria-hidden="true">✳</span>
          <span>Craft</span>
          <span aria-hidden="true">✳</span>
          <span>Good ideas</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[330px] p-3 sm:max-w-[360px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[390px]">
        <div className="absolute inset-0 rotate-3 rounded-[2rem] border border-[#d9f36a]/20" />
        <div className="relative aspect-[413/531] overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#191b17] shadow-[0_24px_80px_#00000055]">
          <Image
            src="/om-ganesh-portrait.jpg"
            alt="Portrait of Om Ganesh"
            fill
            priority
            sizes="(max-width: 1024px) 85vw, 390px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10110f]/90 via-transparent to-[#10110f]/10" />
          <div className="absolute inset-0 studio-grid opacity-20" />
          <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-[#10110f]/45 px-3 py-2 text-[9px] font-semibold tracking-[0.18em] text-white/85 backdrop-blur">
            THE ARTIST · SIDE A
          </span>
          <div className="absolute right-5 bottom-16 left-5">
            <div className="mb-3 flex h-9 items-center gap-[3px]">
              {waveform.slice(0, 34).map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="wave-bar w-1 rounded-full bg-[#d9f36a]/90 sm:w-[5px]"
                  style={{
                    height: `${Math.max(20, height * 0.48)}%`,
                    animationDelay: `${index * 24}ms`,
                  }}
                />
              ))}
            </div>
            <p className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
              Om Ganesh S
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/65">
              Building ideas into experiences
            </p>
          </div>
          <span className="absolute right-5 bottom-5 font-mono text-[10px] text-white/55">
            01 / 04
          </span>
        </div>
      </div>
    </section>
  );
}
