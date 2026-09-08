"use client";

import { motion } from "framer-motion";
import { FiveMark } from "./five-mark";
import { menuCategories, type MenuCategory } from "../menu-data";

function MenuCategoryList({ category }: { category: MenuCategory }) {
  return (
    <article className="border-t border-[#f4efe5]/35 pt-5">
      <h3 className="flex items-end justify-between gap-5 font-serif text-4xl italic tracking-[-0.04em] text-[#f4efe5]"><span>{category.title}</span><FiveMark className="five-mark--menu shrink-0 text-[#df5639]" /></h3>
      <ul className="mt-6 divide-y divide-[#f4efe5]/20">
        {category.items.map((item) => (
          <li key={`${item.name}-${item.detail ?? ""}-${item.price}`} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 py-3.5 sm:py-4">
            <span className="min-w-0 pr-2 text-sm leading-relaxed text-[#f4efe5] sm:text-[15px]">
              {item.name}
              {item.detail && <span className="text-[#b9cdc7]"> <span aria-hidden="true">—</span> {item.detail}</span>}
            </span>
            <span className="self-start whitespace-nowrap font-serif text-lg leading-relaxed text-[#f2a18b]">{item.price}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function RestaurantMenu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-[#151914] px-5 py-20 text-[#f4efe5] lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-4 border-b border-[#f4efe5]/35 pb-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:text-left"
        >
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f2a18b]"><FiveMark className="five-mark--menu" />Buriram Thaï Food & Torok Sushi</p>
            <h2 id="menu-title" className="mt-4 font-serif text-6xl tracking-[-0.07em] text-[#f4efe5] sm:text-7xl">MENU</h2>
          </div>
          <p className="text-sm text-[#b9cdc7] sm:pb-2">Sur place ou à emporter</p>
        </motion.header>

        <div className="mt-10 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:gap-x-20">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className={index === 1 ? "md:row-span-2" : undefined}
            >
              <MenuCategoryList category={category} />
            </motion.div>
          ))}
        </div>

        <aside className="mt-14 border-y border-[#f4efe5]/35 py-7 text-[#f4efe5] sm:py-8">
          <p className="max-w-3xl font-serif text-2xl leading-relaxed tracking-[-0.02em] sm:text-3xl">
            Vous pouvez réserver vos plats à emporter au{" "}
            <a href="tel:+33763130999" className="whitespace-nowrap underline decoration-[#df5639] decoration-2 underline-offset-4 transition hover:text-[#f2a18b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4efe5]">
              07 63 13 09 99
            </a>.
          </p>
        </aside>
      </div>
    </section>
  );
}
