"use client";

import { motion } from "framer-motion";
import { menuCategories, type MenuCategory } from "../menu-data";

function MenuCategoryCard({ category }: { category: MenuCategory }) {
  return (
    <article className="border border-[#e6d7ab]/25 bg-[#132019]/50 p-6 sm:p-8">
      <h3 className="font-serif text-3xl italic tracking-[-0.02em] text-[#f6ebc9]">{category.title}</h3>
      <ul className="mt-6 divide-y divide-[#e6d7ab]/15 border-t border-[#e6d7ab]/15">
        {category.items.map((item) => (
          <li key={`${item.name}-${item.detail ?? ""}-${item.price}`} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 py-4">
            <span className="min-w-0 text-sm leading-relaxed text-[#f6f4ee] sm:text-[15px]">
              {item.name}
              {item.detail && <span className="text-[#c8d0c1]"> <span aria-hidden="true">—</span> {item.detail}</span>}
            </span>
            <span className="self-start whitespace-nowrap font-serif text-lg leading-relaxed text-[#e6d7ab]">{item.price}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function RestaurantMenu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-[#111c16] px-5 py-24 text-[#f8f7f2] lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="border-b border-[#e6d7ab]/30 pb-10 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9c98e]">Buriram Thaï Food & Torok Sushi</p>
          <h2 id="menu-title" className="mt-5 font-serif text-5xl tracking-[-0.04em] text-[#f6ebc9] sm:text-6xl">MENU</h2>
          <p className="mt-4 text-sm text-[#d2dad1]">Sur place ou à emporter</p>
        </motion.header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className={index === 1 ? "md:row-span-2" : undefined}
            >
              <MenuCategoryCard category={category} />
            </motion.div>
          ))}
        </div>

        <aside className="mt-8 border border-[#e6d7ab]/35 bg-[#f6ebc9] px-6 py-6 text-center text-[#17231c] sm:px-10">
          <p className="font-serif text-xl leading-relaxed sm:text-2xl">
            Vous pouvez réserver vos plats à emporter au{" "}
            <a href="tel:+33763130999" className="whitespace-nowrap underline decoration-[#9b4332] decoration-2 underline-offset-4 transition hover:text-[#9b4332] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17231c]">
              07 63 13 09 99
            </a>.
          </p>
        </aside>
      </div>
    </section>
  );
}
