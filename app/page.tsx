"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RestaurantMenu } from "./components/restaurant-menu";

const nav = ["Accueil", "Menu", "À propos", "Avis", "Contact"];
const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

function Arrow() { return <span aria-hidden="true" className="ml-2 text-lg">↗</span>; }

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="overflow-hidden bg-[#f9f8f4] text-[#19221c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[#f9f8f4]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#accueil" className="leading-none" aria-label="Buriram Thaï Food & Torok Sushi, accueil">
            <span className="block text-[10px] font-bold tracking-[.24em] text-[#536257]">BURIRAM</span>
            <span className="mt-1 block font-serif text-lg italic tracking-tight">Thaï Food <em className="not-italic text-[#9b4332]">&</em> Torok Sushi</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {nav.map((item) => <a key={item} href={`#${item === "À propos" ? "a-propos" : item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[.16em] transition hover:text-[#9b4332]">{item}</a>)}
            <a href="tel:+33763130999" className="rounded-full bg-[#1d2d24] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.14em] text-white transition hover:bg-[#9b4332]">Appeler</a>
          </nav>
          <button className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir la navigation"><span className="text-2xl">{open ? "×" : "☰"}</span></button>
        </div>
        <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-[#d9ddd4] bg-[#f9f8f4] px-5 pb-5 md:hidden" aria-label="Navigation mobile">{nav.map((item) => <a onClick={() => setOpen(false)} className="block border-b border-[#d9ddd4] py-4 text-sm font-bold uppercase tracking-[.12em]" key={item} href={`#${item === "À propos" ? "a-propos" : item.toLowerCase()}`}>{item}</a>)}</motion.nav>}</AnimatePresence>
      </header>

      <section id="accueil" className="relative flex min-h-[760px] items-end bg-[#e5e1d8] pt-[72px] lg:min-h-screen">
        <img src="/images/buriram-hero.png" alt="Plats thaïlandais authentiques et sushi frais faits maison sur une table en bois" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111b15]/75 via-[#111b15]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: .14 }} className="max-w-2xl text-white">
            <motion.p variants={reveal} className="mb-6 text-[11px] font-bold uppercase tracking-[.28em] text-[#d8e1d2]">Thaïlandais · Sushi · Nogent-le-Rotrou</motion.p>
            <motion.h1 variants={reveal} className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-8xl">Cuisine thaïlandaise<br /><i className="font-normal">authentique</i> & Sushi frais</motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-md text-base leading-relaxed text-white/85 lg:text-lg">Saveurs traditionnelles, recettes maison et sushi préparés avec soin au cœur de Nogent-le-Rotrou.</motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3"><a href="#menu" className="rounded-full bg-[#f9f8f4] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-[#17221b] transition hover:bg-[#d5dfcc]">Voir le menu<Arrow /></a><a href="tel:+33763130999" className="rounded-full border border-white/70 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.14em] transition hover:bg-white hover:text-[#17221b]">Appeler</a></motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-5 hidden text-right text-[10px] uppercase tracking-[.16em] text-white/70 lg:block">Sur place & à emporter<br />Du mardi au dimanche</div>
      </section>

      <section id="a-propos" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-36">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} className="lg:col-span-4"><p className="eyebrow">Notre histoire</p><h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-.035em] lg:text-5xl">Un voyage entre la Thaïlande <i>&</i> le Japon</h2></motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} transition={{ delay: .1 }} className="lg:col-span-6 lg:col-start-7"><p className="text-xl leading-relaxed text-[#26352b]">Buriram Thaï Food & Torok Sushi propose des plats thaïlandais authentiques faits maison, aux côtés de sushi frais préparés artisanalement.</p><p className="mt-6 leading-relaxed text-[#5c685f]">Chaque repas est préparé avec des ingrédients de qualité, des recettes traditionnelles et une grande attention aux détails. En famille, entre amis ou à emporter, nous souhaitons apporter de véritables saveurs asiatiques à votre table.</p><div className="mt-9 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#dce4d5] text-xl">◉</span><span className="text-xs font-bold uppercase tracking-[.15em]">Préparé avec soin, servi avec cœur</span></div></motion.div>
      </section>

      <RestaurantMenu />

      <section id="avis" className="px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="eyebrow">Vos mots</p><h2 className="mt-5 font-serif text-5xl tracking-[-.04em]">Adoré ici.</h2><div className="mt-10 border-l-2 border-[#9b4332] pl-5"><p className="text-xs font-bold uppercase tracking-[.16em]">Note Google</p><p className="mt-2 font-serif text-4xl">★★★★★</p><p className="mt-2 text-sm text-[#5c685f]"><b className="text-[#1c2b22]">5,0 / 5</b> · plus de 30 avis</p></div></div><div className="grid gap-4 md:grid-cols-3 lg:col-span-8">{["Des sushi excellents, d’une fraîcheur remarquable.", "Des plats thaïlandais maison généreux à des prix très raisonnables.", "Une adresse cachée à découvrir à Nogent-le-Rotrou."].map((review, i) => <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} key={review} className="flex min-h-64 flex-col justify-between border border-[#dfe2dc] bg-white p-7"><div><div className="text-sm tracking-[.1em] text-[#9b4332]">★★★★★</div><blockquote className="mt-7 font-serif text-2xl leading-snug tracking-[-.02em]">“{review}”</blockquote></div><figcaption className="text-[10px] font-bold uppercase tracking-[.16em] text-[#798178]">Avis Google</figcaption></motion.figure>)}</div></div></div></section>

      <section id="contact" className="bg-[#e8e7e0] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24"><div><p className="eyebrow">Nous trouver</p><h2 className="mt-5 font-serif text-5xl tracking-[-.04em]">Venez partager un moment.</h2><div className="mt-12 grid gap-9 sm:grid-cols-2"><div><p className="contact-label">Adresse</p><address className="mt-3 not-italic leading-relaxed">10 Place du Général Saint-Pol<br />28400 Nogent-le-Rotrou<br />France</address></div><div><p className="contact-label">Téléphone</p><a href="tel:+33763130999" className="mt-3 block text-lg underline decoration-[#9b4332] underline-offset-4">07 63 13 09 99</a></div><div className="sm:col-span-2"><p className="contact-label">Horaires d&apos;ouverture</p><p className="mt-3 text-sm leading-relaxed">Du mardi au dimanche<br />Service du midi & du soir<br /><span className="text-[#687268]">Appelez-nous pour les horaires du jour.</span></p></div></div><div className="mt-10 flex flex-wrap gap-3"><a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=10+Place+du+General+Saint-Pol+28400+Nogent-le-Rotrou" className="rounded-full bg-[#1c2b22] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.15em] text-white">Itinéraire<Arrow /></a><a href="tel:+33763130999" className="rounded-full border border-[#1c2b22] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.15em]">Appeler</a></div></div><a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=10+Place+du+General+Saint-Pol+28400+Nogent-le-Rotrou" aria-label="Ouvrir l’adresse dans Google Maps" className="group relative min-h-[380px] overflow-hidden bg-[#cbd1c5]"><div className="map-grid absolute inset-0 opacity-50" /><div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#799064]/25" /><div className="absolute left-[44%] top-[41%] grid h-16 w-16 place-items-center rounded-full bg-[#9b4332] text-2xl text-white shadow-xl transition group-hover:scale-110">●</div><div className="absolute bottom-7 left-7 bg-[#f9f8f4] px-5 py-4"><p className="text-[10px] font-bold uppercase tracking-[.16em]">Buriram Thaï Food</p><p className="mt-1 text-xs text-[#5d675f]">10 Place du Général Saint-Pol</p></div></a></div></section>

      <footer className="bg-[#17231c] px-5 py-12 text-[#e8ebe3] lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><p className="font-serif text-2xl italic">Buriram Thaï Food <span className="not-italic text-[#c96d59]">&</span> Torok Sushi</p><p className="mt-3 text-xs leading-relaxed text-[#aeb9ad]">10 Place du Général Saint-Pol · 28400 Nogent-le-Rotrou</p></div><div className="flex gap-6 text-[10px] font-bold uppercase tracking-[.15em]"><a href="tel:+33763130999" className="hover:text-[#c6d5bd]">07 63 13 09 99</a><a href="#" className="hover:text-[#c6d5bd]">Facebook</a></div></div></footer>
    </main>
  );
}
