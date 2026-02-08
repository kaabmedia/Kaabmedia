"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Sparkles,
  Zap,
  Shield,
  Code,
  Check,
  Clock,
  Search,
  Smartphone,
  Lock,
  BarChart3,
  Headphones,
  MessageSquare,
  Figma,
  Rocket,
  FileCheck,
  Heart,
  RefreshCw,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ───────────────────── Data ───────────────────── */

const sections = [
  { id: "services", label: "Diensten" },
  { id: "process", label: "Aanpak" },
  { id: "about", label: "Waarom wij" },
  { id: "contact", label: "Contact" },
] as const;

const offerings = [
  {
    id: "websites",
    title: "Websites",
    price: "v.a. \u20AC350",
    badge: null,
    description:
      "Strakke, snelle sites voor merken en ondernemers. Gebouwd met WordPress. Van \u00E9\u00E9n pagina tot meerdere secties, altijd conversiegericht.",
    icon: Globe,
    deliveryTime: "1\u20132 weken",
    features: [
      "Responsive design op elk device",
      "SEO-basis & snelle laadtijd",
      "Contactformulier of CTA",
      "CMS naar wens (optioneel)",
      "1 feedback-ronde inbegrepen",
    ],
    tech: ["WordPress", "Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "webshops",
    title: "Webshops",
    price: "v.a. \u20AC1.000",
    badge: "Populair",
    description:
      "Online verkoop op maat met WordPress en WooCommerce. Productcatalogus, betalingen, voorraad en een ervaring die bij jouw merk past.",
    icon: ShoppingCart,
    deliveryTime: "2\u20134 weken",
    features: [
      "Productcatalogus & categorie\u00EBn",
      "Veilige online betalingen",
      "Voorraadbeheer & orders",
      "Klantaccounts & reviews",
      "Koppeling met verzendpartij",
      "2 feedback-rondes inbegrepen",
    ],
    tech: ["WordPress", "WooCommerce", "Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "webapps",
    title: "Webapps",
    price: "v.a. \u20AC4.000",
    badge: null,
    description:
      "Op maat gebouwde applicaties. Dashboards, tools, portalen of complexe flows \u2013 schaalbaar en onderhoudbaar.",
    icon: LayoutDashboard,
    deliveryTime: "4\u20138 weken",
    features: [
      "Authenticatie & rollen",
      "Dashboard & data-inzichten",
      "API-koppelingen op maat",
      "Real-time functionaliteit",
      "Schaalbare cloud-architectuur",
      "Doorlopende feedback-rondes",
    ],
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
  },
] as const;

const includedExtras = [
  { icon: Smartphone, label: "Responsive" },
  { icon: Search, label: "SEO-basis" },
  { icon: Lock, label: "SSL-certificaat" },
  { icon: Zap, label: "Snelle hosting" },
  { icon: BarChart3, label: "Analytics-setup" },
  { icon: Headphones, label: "Nazorg & support" },
] as const;

const stats = [
  { value: "50+", label: "Projecten opgeleverd" },
  { value: "<24u", label: "Reactietijd" },
  { value: "90+", label: "PageSpeed score" },
  { value: "1:1", label: "Persoonlijk contact" },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Kennismaking",
    icon: MessageSquare,
    duration: "30 min",
    description:
      "We starten met een vrijblijvend gesprek. Wat is je doel? Wie is je doelgroep? Wat maakt jouw merk uniek? Samen brengen we alles in kaart.",
    deliverables: ["Projectbrief", "Scope & planning", "Offerte op maat"],
  },
  {
    number: "02",
    title: "Design",
    icon: Figma,
    duration: "3\u20135 dagen",
    description:
      "We vertalen de brief naar wireframes en een visueel ontwerp. Je ziet precies hoe je site eruitziet, v\u00F3\u00F3r er code geschreven wordt.",
    deliverables: ["Wireframes", "Visueel ontwerp", "Stijlgids / kleuren"],
  },
  {
    number: "03",
    title: "Ontwikkeling",
    icon: Code,
    duration: "1\u20134 weken",
    description:
      "Pixel-perfect bouwen in Next.js. Elke pagina wordt geoptimaliseerd voor snelheid, SEO en conversie. Je kunt tussentijds meekijken.",
    deliverables: ["Werkende site", "Responsive op elk device", "Performance-check"],
  },
  {
    number: "04",
    title: "Lancering & nazorg",
    icon: Rocket,
    duration: "1\u20132 dagen",
    description:
      "Na de laatste check gaan we live. We zorgen voor DNS, hosting en een soepele overgang. Na lancering blijven we beschikbaar voor vragen.",
    deliverables: ["Live website", "Hosting & domein", "2 weken gratis support"],
  },
] as const;

const whyUsItems = [
  {
    icon: Zap,
    title: "Razendsnelle performance",
    description:
      "Elke site scoort 90+ op Google PageSpeed. Gebouwd met Next.js voor server-side rendering, automatische code-splitting en optimale Core Web Vitals. Geen onnodige bloat.",
    stat: "90+",
    statLabel: "PageSpeed score",
  },
  {
    icon: Sparkles,
    title: "Op maat, geen templates",
    description:
      "Elk project wordt from scratch ontworpen. Geen WordPress-templates of page builders. Jouw site is uniek, net als jouw merk. Pixel-perfect tot in de kleinste details.",
    stat: "100%",
    statLabel: "Custom design",
  },
  {
    icon: Shield,
    title: "Betrouwbaar & veilig",
    description:
      "SSL, regelmatige updates, veilige hosting op Vercel\u2019s edge-netwerk. Je data en die van je klanten zijn in goede handen. Geen zorgen achteraf.",
    stat: "99.9%",
    statLabel: "Uptime garantie",
  },
  {
    icon: Code,
    title: "Schaalbare technologie",
    description:
      "Next.js, React, TypeScript \u2013 de technologie die bedrijven als Netflix en Nike gebruiken. Jouw site groeit mee zonder ooit opnieuw te hoeven bouwen.",
    stat: "\u221E",
    statLabel: "Schaalbaarheid",
  },
  {
    icon: Heart,
    title: "Persoonlijke aanpak",
    description:
      "Geen ticketsystemen of wachtrijen. Je hebt \u00E9\u00E9n vast aanspreekpunt dat je project van A tot Z begeleidt. Korte lijnen, snelle beslissingen.",
    stat: "1",
    statLabel: "Vast contactpersoon",
  },
  {
    icon: RefreshCw,
    title: "Iteratief & transparant",
    description:
      "Je ziet tussentijds resultaat en kunt bijsturen. Geen verrassingen bij oplevering. Vaste prijzen waar mogelijk, heldere communicatie altijd.",
    stat: "0",
    statLabel: "Verrassingen",
  },
] as const;

/* ───────────────── Scroll-reveal helper ───────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const els = ref.current.querySelectorAll("[data-animate], [data-animate-scale]");
    if (!els.length) return;

    const ctx = gsap.context(() => {
      els.forEach((el) => {
        const isScale = el.hasAttribute("data-animate-scale");
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          opacity: 1,
          y: isScale ? 0 : 0,
          scale: isScale ? 1 : 1,
          transform: "none",
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }, ref.current);

    return () => ctx.revert();
  }, []);

  return ref;
}

/* ───────────────────── Component ───────────────────── */

export default function Home() {
  const wrapRef = useScrollReveal();
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero plays immediately (no scroll)
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .to("[data-hero-badge]", { opacity: 1, transform: "none", duration: 0.5 })
      .to("[data-hero-title] > *", { opacity: 1, transform: "none", duration: 0.7, stagger: 0.12 }, "-=0.2")
      .to("[data-hero-subtitle]", { opacity: 1, transform: "none", duration: 0.5 }, "-=0.3")
      .to("[data-hero-cta]", { opacity: 1, transform: "none", duration: 0.5 }, "-=0.2")
      .to("[data-hero-image]", { opacity: 1, transform: "none", duration: 0.8, ease: "power2.out" }, "-=0.6");

    // Timeline line draw
    if (timelineLineRef.current && processRef.current) {
      gsap.from(timelineLineRef.current, {
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });
    }

    return () => {
      heroTl.kill();
    };
  }, []);

  return (
    <>
      {/* ─── Header ─── */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo — buiten de pill */}
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
              K
            </div>
            <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
              Kaabmedia
            </span>
          </Link>

          {/* Pill nav */}
          <nav className="flex items-center rounded-full border border-border/40 bg-background/70 px-1.5 py-1.5 shadow-lg shadow-black/[0.03] backdrop-blur-xl">
            <div className="hidden items-center md:flex">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full px-4 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-primary/[0.06] hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Button
              asChild
              size="sm"
              className="h-8 rounded-full px-5 text-[13px] font-medium shadow-none md:ml-1"
            >
              <Link href="#contact" className="inline-flex items-center gap-1.5">
                Start je project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[68px] md:h-[72px]" aria-hidden />

      <div ref={wrapRef} className="relative min-h-screen overflow-x-hidden">
        {/* Background gradient mesh */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-[40%] left-[20%] h-[80%] w-[60%] rounded-full bg-[oklch(0.60_0.20_250_/_0.06)] blur-[120px]" />
          <div className="absolute -bottom-[20%] right-[10%] h-[60%] w-[40%] rounded-full bg-[oklch(0.55_0.15_280_/_0.04)] blur-[100px]" />
        </div>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative px-6 pb-16 pt-20 md:pb-24 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              {/* Left: text content */}
              <div className="space-y-8">
                <div
                  data-hero-badge
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/80 px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Beschikbaar voor nieuwe projecten
                </div>

                <div data-hero-title>
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="block">Wij bouwen digitale</span>
                    <span className="block bg-gradient-to-r from-[oklch(0.55_0.22_250)] via-[oklch(0.60_0.20_270)] to-[oklch(0.65_0.18_290)] bg-clip-text text-transparent">
                      ervaringen die converteren.
                    </span>
                  </h1>
                </div>

                <p
                  data-hero-subtitle
                  className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  Snelle, conversiegerichte websites (WordPress), webshops (WordPress + WooCommerce) en webapps. Duidelijke prijzen, strak design en gebouwd voor groei.
                </p>

                <div data-hero-cta className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full px-8 text-[15px]">
                    <Link href="#contact">
                      Plan een kennismaking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-[15px]">
                    <Link href="#services">Bekijk diensten</Link>
                  </Button>
                </div>
              </div>

              {/* Right: hero image */}
              <div
                data-hero-image
                className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-[oklch(0.60_0.20_250_/_0.10)]">
                  <Image
                    src="/hero.jpg"
                    alt="Kaabmedia – Digital Agency"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Floating accent glows */}
                <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[oklch(0.60_0.20_250_/_0.12)] blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[oklch(0.55_0.15_280_/_0.08)] blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="border-y border-border/40 bg-secondary/30">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:py-12">
            {stats.map((stat) => (
              <div key={stat.label} data-animate className="text-center">
                <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Services ─── */}
        <section id="services" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-animate className="mb-16 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_250)]">
                Onze diensten
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Alles wat je nodig hebt om online te groeien
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Van een simpele landingspagina tot een complexe webapp. Wij leveren maatwerk dat
                past bij jouw ambities en budget.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid gap-8 lg:grid-cols-3">
              {offerings.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    data-animate
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.60_0.20_250_/_0.4)] hover:shadow-xl hover:shadow-[oklch(0.60_0.20_250_/_0.1)]"
                  >
                    {item.badge && (
                      <div className="absolute right-4 top-4 z-10 rounded-full bg-[oklch(0.55_0.22_250)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                        {item.badge}
                      </div>
                    )}

                    <div className="space-y-4 p-6 pb-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.60_0.20_250_/_0.1)] text-[oklch(0.55_0.22_250)] transition-colors group-hover:bg-[oklch(0.60_0.20_250_/_0.15)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <span className="text-lg font-bold text-[oklch(0.55_0.22_250)]">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Levertijd: {item.deliveryTime}
                      </div>
                    </div>

                    <div className="mx-6 my-4 h-px bg-border" />

                    <div className="flex-1 px-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Wat je krijgt
                      </p>
                      <ul className="space-y-2.5">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 p-6 pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Button asChild className="w-full rounded-xl">
                        <Link href="#contact">
                          Vraag een offerte aan
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Always-included extras */}
            <div className="mt-16">
              <div data-animate className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Altijd inbegrepen
                </p>
              </div>
              <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {includedExtras.map((extra) => {
                  const ExIcon = extra.icon;
                  return (
                    <div
                      key={extra.label}
                      data-animate-scale
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-colors hover:border-[oklch(0.60_0.20_250_/_0.3)] hover:shadow-md"
                    >
                      <ExIcon className="h-5 w-5 text-[oklch(0.55_0.22_250)]" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {extra.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process — Vertical Timeline ─── */}
        <section
          id="process"
          ref={processRef}
          className="border-y border-border/40 bg-secondary/20 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div data-animate className="mb-16 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_250)]">
                Onze aanpak
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Van idee tot lancering in vier stappen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Een helder en transparant proces. Je weet altijd waar je aan toe bent en wat de
                volgende stap is.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto max-w-3xl">
              {/* Background line */}
              <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
              {/* Animated fill line */}
              <div
                ref={timelineLineRef}
                className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[oklch(0.55_0.22_250)] via-[oklch(0.60_0.20_250)] to-[oklch(0.55_0.22_250_/_0.3)] md:left-1/2 md:-translate-x-px"
              />

              <div className="space-y-12 md:space-y-16">
                {processSteps.map((step, i) => {
                  const StepIcon = step.icon;
                  const isEven = i % 2 === 0;

                  return (
                    <div
                      key={step.number}
                      data-animate
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-6 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                        <span className="h-3 w-3 rounded-full bg-[oklch(0.55_0.22_250)] ring-4 ring-background" />
                      </div>

                      {/* Mobile gutter */}
                      <div className="w-12 shrink-0 md:hidden" />

                      {/* Card */}
                      <div
                        className={`flex-1 md:w-[calc(50%-2rem)] ${
                          isEven ? "md:pr-12" : "md:pl-12"
                        }`}
                      >
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[oklch(0.60_0.20_250_/_0.08)]">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.60_0.20_250_/_0.1)] text-[oklch(0.55_0.22_250)]">
                              <StepIcon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2">
                                <span className="font-mono text-xs font-bold text-[oklch(0.55_0.22_250)]">
                                  Stap {step.number}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                                  <Clock className="h-2.5 w-2.5" />
                                  {step.duration}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold">{step.title}</h3>
                            </div>
                          </div>

                          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>

                          <div className="rounded-xl bg-secondary/60 p-3">
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                              Oplevering
                            </p>
                            <ul className="space-y-1.5">
                              {step.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                                  <FileCheck className="h-3.5 w-3.5 shrink-0 text-[oklch(0.55_0.22_250)]" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alternating */}
                      <div className="hidden flex-1 md:block md:w-[calc(50%-2rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Waarom Kaabmedia ─── */}
        <section id="about" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-animate className="mb-16 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.22_250)]">
                Waarom Kaabmedia
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Niet zomaar een website. Een investering in groei.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Wij geloven dat een goede website meer is dan een visitekaartje. Het is je
                hardst werkende verkoper, je eerste indruk en je schaalbare basis. Dit is
                waarom klanten voor ons kiezen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyUsItems.map((item) => {
                const WIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    data-animate
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.60_0.20_250_/_0.4)] hover:shadow-lg hover:shadow-[oklch(0.60_0.20_250_/_0.08)]"
                  >
                    {/* Stat badge top-right */}
                    <div className="absolute right-5 top-5 text-right">
                      <div className="text-2xl font-bold text-[oklch(0.60_0.20_250_/_0.2)] transition-colors group-hover:text-[oklch(0.60_0.20_250_/_0.35)]">
                        {item.stat}
                      </div>
                      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
                        {item.statLabel}
                      </div>
                    </div>

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.60_0.20_250_/_0.1)] text-[oklch(0.55_0.22_250)] transition-colors group-hover:bg-[oklch(0.60_0.20_250_/_0.15)]">
                      <WIcon className="h-5 w-5" />
                    </div>

                    <h3 className="mb-2 text-[15px] font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA Banner ─── */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <div
              data-animate
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.22_0.04_260)] via-[oklch(0.25_0.045_260)] to-[oklch(0.20_0.05_270)] px-8 py-16 text-center md:px-16 md:py-20"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[oklch(0.60_0.20_250_/_0.15)] blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[oklch(0.55_0.15_280_/_0.1)] blur-[80px]" />
              </div>
              <div className="relative z-10">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Klaar om je online aanwezigheid naar het volgende niveau te tillen?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
                  Plan een vrijblijvende kennismaking en ontdek wat wij voor jouw bedrijf kunnen
                  betekenen.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white px-8 text-[15px] font-semibold text-[oklch(0.22_0.04_260)] hover:bg-white/90"
                  >
                    <Link href="#contact">
                      Neem contact op
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="relative overflow-hidden px-6 py-20 md:py-28">
          {/* Dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.03_260)] to-[oklch(0.13_0.025_260)]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[oklch(0.60_0.20_250_/_0.08)] blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[oklch(0.55_0.15_280_/_0.06)] blur-[80px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Section header */}
            <div data-animate className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[oklch(0.65_0.18_250)]">
                Neem contact op
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Laten we samen iets moois bouwen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Vertel kort wat je zoekt. We reageren binnen \u00E9\u00E9n werkdag met een voorstel
                voor een kennismaking &ndash; volledig vrijblijvend.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left: contact info cards */}
              <div className="space-y-6">
                <div data-animate className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "E-mail",
                      value: "info@kaabmedia.nl",
                      href: "mailto:info@kaabmedia.nl",
                    },
                    {
                      icon: Phone,
                      label: "Telefoon",
                      value: "+31 6 19 07 95 22",
                      href: "tel:+31619079522",
                    },
                    {
                      icon: MapPin,
                      label: "Locatie",
                      value: "Nederland",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: "Reactietijd",
                      value: "Binnen 1 werkdag",
                      href: null,
                    },
                  ].map((item) => {
                    const CIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.60_0.20_250_/_0.15)]">
                          <CIcon className="h-4.5 w-4.5 text-[oklch(0.70_0.16_250)]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-white/90">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trust signals */}
                <div data-animate className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                    Wat je kunt verwachten
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Vrijblijvend kennismakingsgesprek",
                      "Offerte op maat binnen 48 uur",
                      "Vaste prijs, geen verrassingen",
                      "Direct contact met je developer",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: WhatsApp CTA */}
              <div data-animate className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/15">
                  <svg className="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Direct via WhatsApp</h3>
                <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
                  Stuur ons een bericht via WhatsApp en we reageren zo snel mogelijk. Geen wachttijden, geen formulieren.
                </p>
                <a
                  href="https://wa.me/31619079522?text=Hoi%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%201%20van%20je%20diensten."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#22c55e] hover:shadow-xl hover:shadow-[#25D366]/30"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Start een gesprek
                </a>
                <p className="mt-4 text-xs text-white/30">
                  Of mail naar{" "}
                  <a href="mailto:info@kaabmedia.nl" className="text-white/50 underline transition-colors hover:text-white/70">
                    info@kaabmedia.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/10 bg-[oklch(0.11_0.02_260)]">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top section */}
          <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
                  K
                </div>
                <div>
                  <span className="text-[15px] font-semibold text-white">Kaabmedia</span>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/40">
                    Digital Agency
                  </p>
                </div>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/50">
                Wij bouwen websites, webshops en webapps die jouw bedrijf laten groeien. Op maat in WordPress, WooCommerce en moderne tech, met oog voor detail.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-400/80">
                  Beschikbaar voor nieuwe projecten
                </span>
              </div>
            </div>

            {/* Diensten */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Diensten
              </p>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="#services" className="transition-colors hover:text-white/90">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="transition-colors hover:text-white/90">
                    Webshops
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="transition-colors hover:text-white/90">
                    Webapps
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bedrijf */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Bedrijf
              </p>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <Link href="#about" className="transition-colors hover:text-white/90">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="transition-colors hover:text-white/90">
                    Onze aanpak
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="transition-colors hover:text-white/90">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Contact
              </p>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>
                  <a
                    href="mailto:info@kaabmedia.nl"
                    className="flex items-center gap-2 transition-colors hover:text-white/90"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    info@kaabmedia.nl
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+31619079522"
                    className="flex items-center gap-2 transition-colors hover:text-white/90"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    +31 6 19 07 95 22
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  Nederland
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Kaabmedia. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-4">
              <p>KvK 12345678</p>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <p>BTW NL123456789B01</p>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <p>Gebouwd met Next.js & Tailwind</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

