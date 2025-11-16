import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sections = [
  { id: "services", label: "Diensten" },
  { id: "process", label: "Aanpak" },
  { id: "cases", label: "Cases" },
  { id: "about", label: "Over ons" },
  { id: "contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_oklch(0.967_0.001_286.375)_0,_transparent_55%),_linear-gradient(to_bottom,_oklch(1_0_0),_oklch(0.967_0.001_286.375))]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Kaabmedia
              </span>
              <span className="text-xs text-muted-foreground">
                Digitale studios voor merken
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors hover:text-foreground"
              >
                {section.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="#contact">Plan een kennismaking</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-24 pt-12 md:px-6 md:pb-28 md:pt-16 lg:gap-24">
        <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-14">
          <div className="space-y-6">
            <Badge className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Strakke websites, zonder ruis
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Websites die{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  merken laten groeien
                </span>
                .
              </h1>
              <p className="max-w-xl text-balance text-sm text-muted-foreground md:text-base">
                Kaabmedia ontwerpt en bouwt snelle, conversiegerichte websites
                in Next.js. Minimalistisch, maar nooit saai – met oog voor
                detail, merkbeleving en resultaat.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#contact">Plan een gratis sessie</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#cases">Bekijk cases</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Binnen 1 werkdag reactie · Geen verplichtingen
              </p>
            </div>
            <dl className="grid gap-4 text-xs text-muted-foreground sm:grid-cols-3 sm:text-sm">
              <div>
                <dt className="font-medium text-foreground">10+ jaar ervaring</dt>
                <dd>Van eerste schets tot livegang en optimalisatie.</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Modern stack</dt>
                <dd>Next.js, React, Tailwind & shadcn – razendsnel en flexibel.</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Persoonlijk & helder</dt>
                <dd>Korte lijnen, duidelijke planning en vaste contactpersoon.</dd>
              </div>
            </dl>
          </div>

          <Card className="border-border/70 bg-background/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between text-sm font-medium">
                Live preview
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
                  Online
                </span>
              </CardTitle>
              <CardDescription className="text-xs">
                Een indruk van hoe jouw nieuwe website kan aanvoelen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 rounded-xl border border-border/80 bg-gradient-to-b from-background to-secondary/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">
                      Kaabmedia Studio
                    </p>
                    <p className="text-sm font-semibold">
                      “Strakke, snelle sites die vertrouwen wekken.”
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    KM
                  </div>
                </div>
                <div className="grid gap-3 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-border/70 bg-background/80 px-3 py-2">
                    <div>
                      <p className="font-medium">Laadtijd</p>
                      <p className="text-[11px] text-muted-foreground">
                        Gemeten op mobiel
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-900">
                      0,7s
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/70 bg-background/80 px-3 py-2">
                    <div>
                      <p className="font-medium">Conversie uplift</p>
                      <p className="text-[11px] text-muted-foreground">
                        Na redesign
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary">
                      +32%
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-2">
                    <div>
                      <p className="font-medium">Jouw merk hier?</p>
                      <p className="text-[11px] text-muted-foreground">
                        Laten we samen sparren over de mogelijkheden.
                      </p>
                    </div>
                    <Button asChild size="sm" className="text-[11px]">
                      <Link href="#contact">Plan een call</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="services" className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                Wat we voor je doen
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                Van eerste schets tot uitgewerkte website. We verbinden sterke
                visuele verhalen met slimme techniek, zodat jouw site niet
                alleen mooi is, maar ook rendeert.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/70 bg-background/80">
                <CardHeader className="space-y-2 pb-3">
                  <CardTitle className="text-sm font-semibold">
                    Webdesign & merkvertaling
                  </CardTitle>
                <CardDescription className="text-xs">
                  Visuele identiteit doorvertaald naar een heldere, herkenbare
                  online ervaring.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <ul className="space-y-1">
                  <li>• UX/UI design op maat</li>
                  <li>• Designsystemen & component libraries</li>
                  <li>• Merkconsistentie op elke pagina</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-background/80">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold">
                  Next.js development
                </CardTitle>
                <CardDescription className="text-xs">
                  Lichtgewicht, schaalbare websites gebouwd met moderne tooling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <ul className="space-y-1">
                  <li>• Razendsnelle laadtijden</li>
                  <li>• SEO-vriendelijke structuur</li>
                  <li>• Integraties met tooling & API&apos;s</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-background/80">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold">
                  Optimalisatie & support
                </CardTitle>
                <CardDescription className="text-xs">
                  Na livegang blijven we doorontwikkelen op basis van data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <ul className="space-y-1">
                  <li>• A/B-tests en funnels</li>
                  <li>• Technische updates & monitoring</li>
                  <li>• Doorlopende sparringpartner voor groei</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

        <section id="process" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Samen van idee naar live
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Een strak proces zonder ruis. Jij houdt het overzicht, wij zorgen
              voor momentum en kwaliteit.
            </p>
          </div>
          <ol className="grid gap-4 text-sm md:grid-cols-4">
            <li className="relative flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                1
              </span>
              <h3 className="text-sm font-semibold">Kennismaking & focus</h3>
              <p className="text-xs text-muted-foreground">
                We brengen businessdoelen, doelgroep en merk in kaart en
                bepalen samen de focus.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                2
              </span>
              <h3 className="text-sm font-semibold">UX & design</h3>
              <p className="text-xs text-muted-foreground">
                Wireframes, flows en visuele stijl worden samengebracht tot een
                kloppend design.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                3
              </span>
              <h3 className="text-sm font-semibold">Bouw & content</h3>
              <p className="text-xs text-muted-foreground">
                We ontwikkelen in Next.js en vullen de site met sterke content
                en visuals.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                4
              </span>
              <h3 className="text-sm font-semibold">Live & groei</h3>
              <p className="text-xs text-muted-foreground">
                Na livegang meten we, optimaliseren we en blijven we meedenken
                over de volgende stap.
              </p>
            </li>
          </ol>
        </section>

        <section id="cases" className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                Cases & resultaten
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                Een selectie van projecten waarin we merk, design en techniek
                hebben samengebracht.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Volledige casebeschrijvingen op aanvraag beschikbaar.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <CaseCard
              label="E-commerce"
              title="Studio Noor"
              stat="+28% omzet via website"
              description="Van generieke webshop naar minimalistisch merkplatform met focus op fotografie en story."
            />
            <CaseCard
              label="Dienstverlening"
              title="Nova Consultancy"
              stat="+40% meer contactaanvragen"
              description="Heldere positionering, betere structuur en frictieloze contactflows voor een adviesbureau."
            />
            <CaseCard
              label="SaaS"
              title="Flowmetrics"
              stat="75 → 96 performance score"
              description="Herbouw in Next.js met geoptimaliseerde laadtijden, documentatie en design system."
            />
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Wie is Kaabmedia?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Kaabmedia is een compacte digitale studio met een liefde voor
              strakke interfaces en slimme oplossingen. Geen grote bureaustructuur,
              wel senior ervaring en oog voor detail.
            </p>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              We werken het liefst direct met ondernemers, marketingteams en
              founders die weten waar ze naartoe willen, maar een partner zoeken
              om het online goed neer te zetten.
            </p>
          </div>
          <Card className="border-border/70 bg-background/80">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">
                Hoe we samenwerken
              </CardTitle>
              <CardDescription className="text-xs">
                Transparant, iteratief en zonder verrassingen achteraf.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground">
              <ul className="space-y-1">
                <li>• Eén vast aanspreekpunt tijdens het hele traject.</li>
                <li>• Heldere planning en deliverables per fase.</li>
                <li>• Regelmatige design- en demo-momenten.</li>
                <li>• Duidelijke tarieven, geen kleine lettertjes.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="grid gap-8 rounded-2xl border border-border/70 bg-background/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:p-8 lg:p-10">
          <div className="space-y-4">
            <Badge className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Klaar voor de volgende stap?
            </Badge>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                Vertel ons over je plannen
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                Laat een korte beschrijving achter van je project. We reageren
                binnen één werkdag met een voorstel voor een digitale kennismaking.
              </p>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-medium text-foreground">Wat je kunt verwachten</p>
              <ul className="space-y-1">
                <li>• Geen verkoopgesprek, wel scherpe vragen.</li>
                <li>• Inzicht in haalbaarheid, planning en investering.</li>
                <li>• Je zit nergens aan vast.</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Kaabmedia. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap items-center gap-4">
            <p>Gemaakt met Next.js, React & Tailwind.</p>
            <span className="h-1 w-1 rounded-full bg-border" />
            <p className="font-medium text-foreground">
              Beschikbaar voor nieuwe projecten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type CaseCardProps = {
  label: string;
  title: string;
  stat: string;
  description: string;
};

function CaseCard({ label, title, stat, description }: CaseCardProps) {
  return (
    <Card className="flex flex-col justify-between border-border/70 bg-background/80">
      <CardHeader className="space-y-1 pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-[10px]">
            {label}
          </Badge>
          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
            {stat}
          </span>
        </div>
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-4 text-xs text-muted-foreground">
        <p>{description}</p>
        <div className="h-16 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/20" />
      </CardContent>
    </Card>
  );
}

function ContactForm() {
  return (
    <form
      className="space-y-4 text-sm"
      action="mailto:info@kaabmedia.nl"
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-foreground">
            Naam
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/50 ring-offset-0 focus-visible:ring-1"
            placeholder="Voor- en achternaam"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-foreground">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/50 ring-offset-0 focus-visible:ring-1"
            placeholder="jij@bedrijf.nl"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="company" className="text-xs font-medium text-foreground">
          Bedrijf (optioneel)
        </label>
        <input
          id="company"
          name="company"
          className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/50 ring-offset-0 focus-visible:ring-1"
          placeholder="Bedrijfsnaam"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-foreground">
          Vertel kort iets over je project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/50 ring-offset-0 focus-visible:ring-1"
          placeholder="Waar kunnen we je mee helpen? Denk aan type website, timing en doelen."
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <Button type="submit">Verzend bericht</Button>
        <p className="text-[11px] text-muted-foreground">
          Door dit formulier te gebruiken stuur je ons een e-mail. We gebruiken
          je gegevens alleen om op je bericht te reageren.
        </p>
      </div>
    </form>
  );
}
