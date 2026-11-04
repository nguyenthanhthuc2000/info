import Image, { type StaticImageData } from "next/image";
import { CopyButton } from "./copy-button";
import catAvatar from "../public/avatars/cat-meme.png";
import youtubeAvatar from "../public/avatars/youtube.jpg";

const PHONE = "0389946423";

type Contact = {
  label: string;
  value?: string;
  href: string;
  action: string;
  avatar?: StaticImageData;
  copy?: string;
};

const contacts: Contact[] = [
  {
    label: "Facebook",
    value: "Facebook cá nhân",
    href: "https://www.facebook.com/nguyenthanhthuc.2k/",
    action: "Nhắn tin",
    avatar: catAvatar,
  },
  {
    label: "Zalo / SĐT",
    value: "0389.946.423",
    href: `https://zalo.me/${PHONE}`,
    action: "Nhắn tin",
    copy: PHONE,
  },
  {
    label: "Kênh YouTube",
    href: "https://www.youtube.com/@shop_nickdaoquan_com",
    action: "Xem kênh",
    avatar: youtubeAvatar,
  },
];

const roles = [
  {
    title: "Admin Group All Server",
    links: [
      {
        name: "Group Thịnh Nguyễn",
        action: "Check bài ghim",
        href: "https://www.facebook.com/share/p/1XGiFVqoFG/",
      },
    ],
  },
  {
    title: "Admin Shophhp.net",
    links: [
      {
        name: "Shophhp.vn",
        action: "Check shop",
        href: "https://shophhp.vn/",
      },
    ],
  },
  {
    title: "Admin Group NRO khác",
    links: [
      {
        name: "Sv2 Ngọc Rồng Online",
        action: "Xem nhóm",
        href: "https://www.facebook.com/groups/hhp15",
      },
      {
        name: "Sv6 Ngọc Rồng Online - Mabu6sao TV",
        action: "Xem nhóm",
        href: "https://www.facebook.com/groups/237857763409327/",
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M5 11 11 5M6 5h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-1 shadow-[0_0_60px_-10px] shadow-amber-500/60">
              <Image
                src={catAvatar}
                alt="Ảnh đại diện Nguyễn Thành Thức"
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-emerald-500 text-stone-950">
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                <path
                  d="m3.5 8.5 3 3 6-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Uy tín của chủ shop
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Nguyễn Thành Thức
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
            Chủ shop{" "}
            <a
              href="https://nickdaoquan.com"
              className="font-semibold text-stone-100 underline decoration-amber-400/60 underline-offset-4 hover:decoration-amber-400"
            >
              NickDaoQuan.Com
            </a>{" "}
            và là admin của các nhóm, shop Ngọc Rồng Online bên dưới. Bạn có
            thể bấm vào từng link để tự kiểm chứng.
          </p>
        </section>

        {/* Liên hệ */}
        <section className="mt-16 mx-auto grid max-w-xl gap-3 xl:max-w-none xl:grid-cols-3">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                {c.avatar ? (
                  <Image
                    src={c.avatar}
                    alt={c.label}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0068ff] text-xs font-bold text-white">
                    Zalo
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-stone-100">{c.label}</p>
                  {c.value && (
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="truncate text-sm text-stone-400">
                        {c.value}
                      </span>
                      {c.copy && <CopyButton value={c.copy} />}
                    </div>
                  )}
                </div>
              </div>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold whitespace-nowrap text-stone-950 transition hover:bg-amber-300"
              >
                {c.action}
              </a>
            </div>
          ))}
        </section>

        {/* Vai trò admin */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Admin tại các nhóm sau
          </h2>
          <p className="mt-2 text-stone-400">
            Các cộng đồng và shop Ngọc Rồng Online do chủ shop làm admin.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {roles.map((role, i) => (
              <article
                key={role.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
              >
                <span className="text-sm font-bold text-amber-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold">{role.title}</h3>
                <ul className="mt-5 space-y-3">
                  {role.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-white/10 p-4 transition hover:border-amber-400/50 hover:bg-amber-400/5"
                      >
                        <p className="text-sm font-medium text-stone-200">
                          {l.name}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-amber-400">
                          {l.action}
                          <ArrowIcon />
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-white/10 pt-8 text-center text-sm text-stone-500">
          © 2026 Nguyễn Thành Thức ·{" "}
          <a href="https://nickdaoquan.com" className="hover:text-amber-300">
            NickDaoQuan.Com
          </a>
        </footer>
      </div>
    </main>
  );
}
