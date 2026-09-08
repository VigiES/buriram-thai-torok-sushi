"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiveMark } from "./components/five-mark";
import { RestaurantMenu } from "./components/restaurant-menu";

const nav = ["Accueil", "Menu", "À propos", "Avis", "Contact"];
const reveal = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

function Arrow() {
  return <span aria-hidden="true" className="ml-3 text-base">↗</span>;
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#f4efe5] text-[#151914]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#151914]/20 bg-[#f4efe5]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#accueil" className="leading-none" aria-label="Buriram Thaï Food & Torok Sushi, accueil">
            <span className="flex items-center gap-2 text-[#315e57]"><span className="buriram-wordmark">BURIRAM</span><FiveMark className="five-mark--header" /></span>
            <span className="mt-1 block font-serif text-lg italic tracking-tight">Thaï Food <em className="not-italic text-[#df5639]">&</em> Torok Sushi</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <a key={item} href={`#${item === "À propos" ? "a-propos" : item.toLowerCase()}`} className="border-b border-transparent pb-1 text-[11px] font-bold uppercase tracking-[.15em] transition hover:border-[#df5639] hover:text-[#df5639]">
                {item}
              </a>
            ))}
            <a href="tel:+33763130999" className="border border-[#151914] bg-[#151914] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#f4efe5] transition hover:bg-[#df5639] hover:border-[#df5639]">Appeler</a>
          </nav>
          <button className="grid h-10 w-10 place-items-center border border-[#151914] text-xl transition hover:bg-[#df5639] hover:text-[#f4efe5] md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir la navigation">
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-[#151914]/20 bg-[#f4efe5] px-5 pb-5 md:hidden" aria-label="Navigation mobile">
              {nav.map((item) => (
                <a onClick={() => setOpen(false)} className="block border-b border-[#151914]/20 py-4 text-sm font-bold uppercase tracking-[.12em] transition hover:text-[#df5639]" key={item} href={`#${item === "À propos" ? "a-propos" : item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="accueil" className="bg-[#f4efe5] pt-[72px]">
        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl lg:grid-cols-12">
          <div className="order-2 flex items-end px-5 py-14 sm:py-20 lg:order-1 lg:col-span-5 lg:px-8 lg:py-16">
            <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="max-w-xl">
              <motion.p variants={reveal} className="mb-7 text-[10px] font-bold uppercase tracking-[.25em] text-[#315e57]">Thaïlandais · Sushi · Nogent-le-Rotrou</motion.p>
              <motion.div variants={reveal} className="mb-7 flex items-end gap-5 text-[#df5639]"><span aria-hidden="true" className="buriram-wordmark buriram-wordmark--hero">BURIRAM</span><FiveMark className="five-mark--hero" /></motion.div>
              <motion.h1 variants={reveal} className="font-serif text-[clamp(3.45rem,8vw,6.6rem)] leading-[.86] tracking-[-.075em]">Cuisine thaïlandaise<br /><i className="font-normal">authentique</i> & Sushi frais</motion.h1>
              <motion.p variants={reveal} className="mt-8 max-w-md text-base leading-relaxed text-[#315e57] lg:text-lg">Saveurs traditionnelles, recettes maison et sushi préparés avec soin au cœur de Nogent-le-Rotrou.</motion.p>
              <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3">
                <a href="#menu" className="border border-[#151914] bg-[#151914] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-[#f4efe5] transition hover:-translate-y-0.5 hover:bg-[#df5639] hover:border-[#df5639]">Voir le menu<Arrow /></a>
                <a href="tel:+33763130999" className="border border-[#151914] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[.14em] transition hover:-translate-y-0.5 hover:bg-[#315e57] hover:border-[#315e57] hover:text-[#f4efe5]">Appeler</a>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative order-1 min-h-[47svh] overflow-hidden bg-[#315e57] lg:order-2 lg:col-span-7 lg:min-h-0">
            <img src="/images/buriram-hero.png" alt="Plats thaïlandais authentiques et sushi frais faits maison sur une table en bois" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-[#f4efe5]/60 bg-[#151914]/90 px-5 py-4 text-[10px] font-bold uppercase tracking-[.17em] text-[#f4efe5] lg:px-8">Sur place & à emporter<br />Du mardi au dimanche</div>
          </div>
        </div>
      </section>

      <section id="a-propos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-32">
        <div className="grid border-t border-[#151914]/25 pt-7 lg:grid-cols-12 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="lg:col-span-4">
            <p className="eyebrow">Notre histoire</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.94] tracking-[-.055em] lg:text-6xl">Un voyage entre la Thaïlande <i>&</i> le Japon</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ delay: 0.08 }} className="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-20">
            <p className="font-serif text-2xl leading-[1.25] tracking-[-.025em] text-[#151914] lg:text-3xl">Buriram Thaï Food & Torok Sushi propose des plats thaïlandais authentiques faits maison, aux côtés de sushi frais préparés artisanalement.</p>
            <p className="mt-7 max-w-xl leading-relaxed text-[#315e57]">Chaque repas est préparé avec des ingrédients de qualité, des recettes traditionnelles et une grande attention aux détails. En famille, entre amis ou à emporter, nous souhaitons apporter de véritables saveurs asiatiques à votre table.</p>
            <p className="mt-12 border-y border-[#151914]/25 py-4 text-xs font-bold uppercase tracking-[.15em] text-[#df5639]">Préparé avec soin, servi avec cœur</p>
          </motion.div>
        </div>
      </section>

      <RestaurantMenu />

      <section id="avis" className="bg-[#f4efe5] px-5 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-t border-[#151914]/25 pt-7 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow flex items-center gap-3"><FiveMark className="five-mark--section text-[#df5639]" />Vos mots</p>
              <h2 className="mt-5 font-serif text-6xl leading-none tracking-[-.06em]">Adoré ici.</h2>
              <div className="mt-12 border-l-2 border-[#df5639] pl-5">
                <p className="text-[10px] font-bold uppercase tracking-[.18em]">Note Google</p>
                <p className="mt-3 font-serif text-4xl leading-none text-[#df5639]">★★★★★</p>
                <p className="mt-3 text-sm text-[#315e57]"><b className="text-[#151914]">5,0 / 5</b> · plus de 30 avis</p>
              </div>
            </div>
            <div className="mt-12 border-t border-[#151914]/25 lg:col-span-8 lg:mt-0">
              {["Les sushis sont vraiment excellents, d’une très belle qualité, et proposés à un prix plus que raisonnable. Une belle adresse à retenir !", "Quel plaisir que cette ouverture ! Une cuisine maison généreuse et de très haute qualité le tout à un prix plus que raisonnable.", "Petit restaurant par sa taille, grand par le goût !"].map((review, i) => (
                <motion.figure initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} key={review} className="grid gap-6 border-b border-[#151914]/25 py-8 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8">
                  <div className="text-sm tracking-[.1em] text-[#df5639]">★★★★★</div>
                  <blockquote className="font-serif text-2xl leading-[1.2] tracking-[-.025em] sm:text-3xl">“{review}”</blockquote>
                  <figcaption className="text-[10px] font-bold uppercase tracking-[.16em] text-[#315e57]">Avis Google</figcaption>
                </motion.figure>
              ))}
              <a href="https://www.google.com/maps/place/Buriram+Tha%C3%AF+food+%26+Torok+sushi/@48.3226947,0.821032,17z/data=!4m17!1m8!3m7!1s0x47e3b736e99d0e51:0xf6edda9d63249db2!2splace+du+g%C3%A9n%C3%A9ral,+10+Place+St+Pol,+28400+Nogent-le-Rotrou!3b1!8m2!3d48.3226947!4d0.821032!16s%2Fg%2F11c4dp5cxt!3m7!1s0x47e3b71851543011:0xe92a88a288095904!8m2!3d48.3226956!4d0.8210357!9m1!1b1!16s%2Fg%2F11xw9c_6m0?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-[#151914] bg-[#151914] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-[#f4efe5] transition hover:-translate-y-0.5 hover:border-[#df5639] hover:bg-[#df5639]">Voir tous les avis Google<Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#315e57] px-5 py-20 text-[#f4efe5] lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#f2a18b]"><FiveMark className="five-mark--section" />Nous trouver</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.94] tracking-[-.055em] lg:text-6xl">Venez partager un moment.</h2>
            <div className="mt-12 grid gap-9 border-t border-[#f4efe5]/35 pt-7 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f2a18b]">Adresse</p>
                <address className="mt-3 not-italic leading-relaxed">10 Place du Général Saint-Pol<br />28400 Nogent-le-Rotrou<br />France</address>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f2a18b]">Téléphone</p>
                <a href="tel:+33763130999" className="mt-3 block text-lg underline decoration-[#df5639] decoration-2 underline-offset-4 transition hover:text-[#f2a18b]">07 63 13 09 99</a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f2a18b]">Horaires d&apos;ouverture</p>
                <p className="mt-3 text-sm leading-relaxed">Du mardi au dimanche<br />Service du midi & du soir<br /><span className="text-[#d6e0d8]">Appelez-nous pour les horaires du jour.</span></p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=10+Place+du+General+Saint-Pol+28400+Nogent-le-Rotrou" className="border border-[#f4efe5] bg-[#f4efe5] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[.15em] text-[#151914] transition hover:-translate-y-0.5 hover:border-[#df5639] hover:bg-[#df5639] hover:text-[#f4efe5]">Itinéraire<Arrow /></a>
              <a href="tel:+33763130999" className="border border-[#f4efe5] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[.15em] transition hover:-translate-y-0.5 hover:bg-[#151914] hover:border-[#151914]">Appeler</a>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-[#f4efe5]/50 bg-[#df5639] lg:col-span-7">
            <iframe
              title="Carte de Buriram Thaï Food & Torok Sushi"
              src="https://www.google.com/maps?q=10%20Place%20du%20G%C3%A9n%C3%A9ral%20Saint-Pol%2C%2028400%20Nogent-le-Rotrou&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=10+Place+du+General+Saint-Pol+28400+Nogent-le-Rotrou" aria-label="Ouvrir l’adresse dans Google Maps" className="absolute bottom-0 left-0 border-r border-t border-[#151914]/30 bg-[#f4efe5] px-5 py-4 text-[#151914] transition hover:bg-[#df5639] hover:text-[#f4efe5]">
              <p className="text-[10px] font-bold uppercase tracking-[.16em]">Buriram Thaï Food</p>
              <p className="mt-1 text-xs text-[#315e57]">10 Place du Général Saint-Pol</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#151914] px-5 py-12 text-[#f4efe5] lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#f4efe5]/35 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="flex items-center gap-4 font-serif text-3xl italic tracking-[-.03em]"><FiveMark className="five-mark--footer shrink-0 text-[#df5639]" />Buriram Thaï Food <span className="not-italic text-[#df5639]">&</span> Torok Sushi</p>
            <p className="mt-4 text-xs leading-relaxed text-[#b9cdc7]">10 Place du Général Saint-Pol · 28400 Nogent-le-Rotrou</p>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[.15em]">
            <a href="tel:+33763130999" className="border-b border-transparent pb-1 transition hover:border-[#df5639] hover:text-[#f2a18b]">07 63 13 09 99</a>
            <a href="#" className="border-b border-transparent pb-1 transition hover:border-[#df5639] hover:text-[#f2a18b]">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
