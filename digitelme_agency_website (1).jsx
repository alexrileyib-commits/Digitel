import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const navItems = [
  "Home",
  "Services",
  "About Us",
  "Client Testimonials",
  "Blogs",
  "Contact Us",
];

const serviceGroups = [
  {
    title: "Shopify Store Development & Management",
    short: "Launch, optimize, and manage a high-converting Shopify store end to end.",
    benefits: [
      "Custom storefront design",
      "Conversion-driven product pages",
      "App setup, tracking & optimization",
      "Ongoing store management",
    ],
    process: ["Discovery", "Store Build", "Optimization", "Growth Management"],
    pricing: "Custom pricing based on store scope and management level.",
    icon: Store,
  },
  {
    title: "Amazon PPC",
    short: "Scale visibility and sales with data-backed ad structures and ongoing bid optimization.",
    benefits: [
      "Campaign setup & restructuring",
      "Keyword research",
      "ACOS / TACOS optimization",
      "Profit-focused scaling",
    ],
    process: ["Audit", "Campaign Build", "Optimization", "Scale"],
    pricing: "Monthly retainer or hybrid model available.",
    icon: TrendingUp,
  },
  {
    title: "Meta Ads",
    short: "Acquire more customers from Facebook and Instagram with profitable creative and funnel strategy.",
    benefits: [
      "Creative strategy",
      "Audience testing",
      "Conversion API & tracking",
      "ROAS-focused scaling",
    ],
    process: ["Research", "Creative", "Launch", "Scale"],
    pricing: "Custom ad management packages.",
    icon: Rocket,
  },
  {
    title: "TikTok Ads / TTS",
    short: "Drive attention, traffic, and marketplace sales with TikTok-native growth systems.",
    benefits: [
      "TikTok Shop setup",
      "Performance ad campaigns",
      "Creative hooks & UGC direction",
      "Catalog and order management",
    ],
    process: ["Setup", "Campaign Strategy", "Execution", "Optimization"],
    pricing: "Flexible plans for ads, TikTok Shop, or full-service growth.",
    icon: Sparkles,
  },
  {
    title: "AI Automations",
    short: "Automate lead capture, customer support, and operations using AI chatbots and AI call agents.",
    benefits: [
      "AI chatbot setup",
      "AI call agent workflows",
      "Lead qualification automation",
      "CRM and workflow integrations",
    ],
    process: ["Use-Case Mapping", "Build", "Integration", "Training & Launch"],
    pricing: "Project-based or retainer pricing depending on complexity.",
    icon: Bot,
  },
  {
    title: "Marketplace Management",
    short: "Complete management for eBay, Walmart, Daraz, and Etsy stores.",
    benefits: [
      "Listing optimization",
      "Store health monitoring",
      "Order & catalog management",
      "Marketplace growth strategy",
    ],
    process: ["Audit", "Setup", "Operations", "Scale"],
    pricing: "Tailored to marketplace count and account volume.",
    icon: Globe,
  },
  {
    title: "Website Development",
    short: "Fast, modern, SEO-ready websites built to convert traffic into leads and sales.",
    benefits: [
      "Custom UI/UX design",
      "Responsive development",
      "SEO structure",
      "Lead generation integrations",
    ],
    process: ["Wireframe", "UI Design", "Development", "Launch"],
    pricing: "Custom website packages based on pages and functionality.",
    icon: ShieldCheck,
  },
  {
    title: "Graphic Designing",
    short: "Brand visuals, ad creatives, social content, and conversion-driven design assets.",
    benefits: [
      "Ad creatives",
      "Brand identity support",
      "Marketplace graphics",
      "Website and social visuals",
    ],
    process: ["Brief", "Concept", "Design", "Delivery"],
    pricing: "Monthly design support or per-project engagement.",
    icon: Star,
  },
];

const condensedServices = [
  "Shopify",
  "Meta Ads",
  "TikTok Ads",
  "TikTok Shop",
  "Amazon PPC",
  "Website Development",
  "Graphic Designing",
  "eBay Automation",
  "Walmart Automation",
  "Daraz Management",
  "Etsy Management",
  "AI Chatbots",
  "AI Call Agents",
  "Full Digital Marketing",
];

const results = [
  {
    metric: "6.4x ROAS",
    label: "Meta Ads for a beauty eCommerce brand",
    detail: "Scaled from inconsistent results to predictable acquisition with improved creative testing and funnel tracking.",
  },
  {
    metric: "+218% Sales Growth",
    label: "Shopify optimization for a general store",
    detail: "Improved product page UX, checkout flow, upsells, and email capture to turn more traffic into customers.",
  },
  {
    metric: "41% Lower ACOS",
    label: "Amazon PPC account restructuring",
    detail: "Rebuilt campaign architecture, refined keywords, and improved spend efficiency without sacrificing volume.",
  },
  {
    metric: "+3.1x Leads",
    label: "AI chatbot + landing page automation",
    detail: "Added instant qualification, WhatsApp routing, and follow-up automation for faster response and higher close rates.",
  },
];

const testimonials = [
  {
    name: "Ali R.",
    company: "DTC Skincare Brand",
    quote:
      "DigitelMe completely changed the way we scale. Their team handled the store, creatives, and ads like an in-house growth department.",
    result: "From unstable ad spend to profitable growth in 90 days.",
  },
  {
    name: "Sarah M.",
    company: "Amazon Private Label Seller",
    quote:
      "Their Amazon PPC management was methodical, transparent, and performance-driven. We saw stronger rankings and much healthier margins.",
    result: "Lower ACOS and stronger organic lift within weeks.",
  },
  {
    name: "Hamza K.",
    company: "Home Decor Marketplace Seller",
    quote:
      "We needed one partner to manage multiple channels. DigitelMe gave us end-to-end execution across Daraz, Etsy, and Shopify.",
    result: "Better operations, better listings, better monthly revenue.",
  },
  {
    name: "Emily T.",
    company: "Service Business",
    quote:
      "The AI chatbot and lead qualification setup helped us respond faster and book more calls without hiring extra staff.",
    result: "More qualified leads with less manual work.",
  },
];

const blogs = [
  {
    category: "eCommerce",
    title: "7 Shopify Product Page Fixes That Increase Conversion Rate",
    excerpt: "Small UX changes can produce a meaningful lift in add-to-cart rate, AOV, and completed purchases.",
  },
  {
    category: "Ads",
    title: "How to Scale Meta Ads Without Killing ROAS",
    excerpt: "A practical framework for testing creatives, controlling spend, and improving signal quality.",
  },
  {
    category: "AI Automation",
    title: "Why AI Chatbots Are Becoming a Growth Tool, Not Just a Support Tool",
    excerpt: "From lead capture to qualification and follow-up, AI can now move revenue faster than a static form.",
  },
  {
    category: "Marketplace",
    title: "Amazon PPC vs TikTok Shop: Which Growth Channel Fits Your Business?",
    excerpt: "A channel-by-channel view of demand, margin, content requirements, and scalability.",
  },
  {
    category: "Website",
    title: "What Makes an Agency Website Convert at a Premium Level",
    excerpt: "Trust signals, offer clarity, fast pages, and stronger messaging are usually the real difference-makers.",
  },
  {
    category: "Creative",
    title: "Creative Testing Frameworks for High-Performing Performance Ads",
    excerpt: "How to structure hooks, angles, visuals, and offer messages to find winners faster.",
  },
];

const platforms = [
  "Shopify",
  "Amazon",
  "Meta",
  "TikTok",
  "TikTok Shop",
  "eBay",
  "Walmart",
  "Daraz",
  "Etsy",
  "WhatsApp",
  "OpenAI / AI",
  "Google Analytics",
];

const steps = [
  {
    title: "Consultation",
    text: "We audit your current setup, goals, channel mix, and growth blockers.",
  },
  {
    title: "Strategy",
    text: "We build a tailored action plan with channels, creatives, funnels, and KPIs.",
  },
  {
    title: "Execution",
    text: "Our team launches, manages, optimizes, and handles the day-to-day workload.",
  },
  {
    title: "Scaling",
    text: "We double down on what works, automate more, and increase revenue efficiently.",
  },
];

const highConvertingHeadlines = [
  "Scale Faster With a Digital Growth Team That Actually Manages Everything",
  "From Store Setup to Paid Ads to AI Automation — We Build Revenue Systems",
  "Stop Juggling Platforms. Start Growing With One Agency Built for End-to-End Execution",
  "Turn More Traffic Into Sales With Strategy, Creative, Media Buying, and Automation in One Place",
  "Build a Stronger eCommerce Brand With Multi-Platform Growth That Compounds",
];

const ctaVariations = [
  "Get Free Consultation",
  "Book Your Free Growth Audit",
  "Talk to a Growth Strategist",
  "Get a Custom Scaling Plan",
  "See How We Can Grow Your Brand",
];

const landingPageIdeas = [
  {
    title: "Meta Ads Audit Landing Page",
    text: "A lead generation page offering a free account audit, creative review, and scaling roadmap for eCommerce brands.",
  },
  {
    title: "Shopify Conversion Optimization Landing Page",
    text: "A focused page offering store analysis, conversion leak identification, and UX recommendations with proof-based case studies.",
  },
  {
    title: "AI Chatbot & AI Call Agent Landing Page",
    text: "A service page showing how AI captures leads, qualifies prospects, and automates follow-ups for service and eCommerce businesses.",
  },
];

const conversionSuggestions = [
  "Add a sticky mobile CTA with WhatsApp and consultation booking actions.",
  "Use case-study driven proof above the fold to reduce hesitation faster.",
  "Embed short qualification forms between high-intent sections, not just on the contact page.",
  "Use industry-specific landing pages for Shopify, Amazon, and AI automation traffic.",
  "Add calendar booking, FAQ accordions, and lead magnet offers to improve conversion from colder audiences.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ badge, title, text }) {
  return (
    <div className="max-w-3xl">
      {badge && <Badge className="mb-4 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-100">{badge}</Badge>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+923120603441" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" /> +92 312 0603441
          </a>
          <a href="mailto:info.digitelme@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> info.digitelme@gmail.com
          </a>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <MessageCircle className="h-4 w-4 text-teal-400" /> AI-powered growth systems for eCommerce & service businesses
        </div>
      </div>
    </div>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <button onClick={() => setPage("Home")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-lg font-bold text-white shadow-lg shadow-teal-200">
            D
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">DigitelMe</div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Digital Growth Agency</div>
          </div>
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`text-sm font-medium transition ${page === item ? "text-teal-700" : "text-slate-600 hover:text-slate-900"}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="rounded-full bg-teal-600 px-6 hover:bg-teal-700">Get Free Consultation</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setPage(item);
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item}
              </button>
            ))}
            <Button className="mt-2 rounded-full bg-teal-600 hover:bg-teal-700">Get Free Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.15),_transparent_30%),linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <Badge className="mb-5 rounded-full bg-slate-900 px-4 py-1 text-slate-100 hover:bg-slate-900">End-to-end growth management for modern brands</Badge>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            We build, manage, and scale digital growth systems that turn attention into revenue.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            DigitelMe combines Shopify development, paid ads, marketplace management, and AI automation into one premium growth partner — so you can stop juggling vendors and start scaling with clarity.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full bg-teal-600 px-7 py-6 text-base hover:bg-teal-700">
              Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full border-slate-300 px-7 py-6 text-base">
              View Services
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["12+", "Platforms Managed"],
              ["24/7", "AI-Enabled Automation"],
              ["Full", "Execution Support"],
              ["ROI", "Focused Strategy"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-extrabold text-slate-900">{value}</div>
                <div className="mt-1 text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Live Growth Dashboard</div>
                    <div className="mt-2 text-3xl font-black">+218%</div>
                    <div className="mt-1 text-slate-300">Revenue growth after CRO + paid ads optimization</div>
                  </div>
                  <div className="rounded-2xl bg-teal-500/20 p-4">
                    <TrendingUp className="h-8 w-8 text-teal-300" />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 p-5">
                  <div className="text-sm text-slate-500">Top Offer</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">Free Growth Consultation</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Get expert recommendations for your store, ads, funnels, or AI automation opportunities.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <div className="text-sm text-slate-500">Core Stack</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {platforms.slice(0, 6).map((item) => (
                      <span key={item} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-dashed border-teal-300 bg-teal-50 p-5">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 h-5 w-5 text-teal-700" />
                  <div>
                    <div className="font-semibold text-slate-900">AI-Powered Lead Handling</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      AI chatbot and AI call agent systems help qualify leads, answer FAQs, and move prospects faster toward conversion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl md:block">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Managed Services</div>
            <div className="mt-1 text-sm font-medium text-slate-800">Strategy • Execution • Optimization • Scaling</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <SectionHeading
        badge="Services"
        title="A complete digital growth stack under one roof"
        text="We do not just advise. We execute, manage, optimize, and scale across every major sales and acquisition channel your business depends on."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceGroups.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
            >
              <Card className="h-full rounded-[1.6rem] border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl leading-7 text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{service.short}</p>
                  <Button variant="ghost" className="mt-5 px-0 text-teal-700 hover:bg-transparent hover:text-teal-800">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function WhyChoose() {
  const points = [
    {
      title: "Full Management, Not Fragmented Freelancing",
      text: "We become your execution partner across strategy, creative, operations, ads, and automation — without the chaos of managing multiple vendors.",
      icon: Users,
    },
    {
      title: "Multi-Platform Expertise",
      text: "From Shopify and Amazon to Meta, TikTok, Daraz, Etsy, eBay, and Walmart, we understand how each channel contributes to growth.",
      icon: Globe,
    },
    {
      title: "AI Automation Built In",
      text: "We integrate AI chatbots, AI call agents, workflow automations, and smarter lead handling so your business can scale with more efficiency.",
      icon: Bot,
    },
  ];

  return (
    <section className="bg-slate-950 px-4 py-20 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Why Choose DigitelMe"
          title="Built for brands that want one serious growth partner"
          text="Our model is designed for businesses that want strategy, execution, accountability, and scale — all in one place."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <SectionHeading
        badge="Results & Case Studies"
        title="Proof that strategy and execution together outperform guesswork"
        text="Positioned like real agency case studies, these sample outcomes show the kind of measurable growth DigitelMe is built to deliver."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {results.map((item, idx) => (
          <motion.div
            key={item.metric}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.48, delay: idx * 0.06 }}
            className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-3xl font-black text-slate-950 md:text-4xl">{item.metric}</div>
                <div className="mt-2 text-base font-semibold text-slate-800">{item.label}</div>
              </div>
              <div className="rounded-2xl bg-teal-50 p-4 text-teal-700">
                <TrendingUp className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Before: Underperforming structure, inconsistent conversion flow, or inefficient spend.
              <br />
              After: {item.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted like an internal team, valued like a real growth partner"
          text="These testimonials are written in a realistic agency style to create strong social proof and trust on launch."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Card className="h-full rounded-[1.8rem] border-slate-200 bg-white shadow-sm">
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                  <div className="mt-5 rounded-2xl bg-teal-50 p-4 text-sm font-medium text-teal-900">{item.result}</div>
                  <div className="mt-6">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <SectionHeading
        badge="Platforms We Work On"
        title="Your growth does not happen on one platform — and neither do we"
        text="DigitelMe supports the channels, marketplaces, and systems that drive visibility, conversion, customer acquisition, and automation."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {platforms.map((platform, idx) => (
          <motion.div
            key={platform}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="flex min-h-[96px] items-center justify-center rounded-[1.4rem] border border-slate-200 bg-white px-4 py-6 text-center text-sm font-semibold text-slate-700 shadow-sm"
          >
            {platform}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Our Process"
          title="A clear, scalable process from first call to long-term growth"
          text="We make complex marketing, development, and automation work feel organized, transparent, and accountable."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <Badge className="mb-4 rounded-full bg-teal-500/15 text-teal-300 hover:bg-teal-500/15">Ready to Grow?</Badge>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Let’s Scale Your Business</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need a better Shopify store, stronger ads, marketplace management, or AI automation, we can build a growth engine tailored to your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-teal-600 px-7 py-6 text-base hover:bg-teal-700">Get Free Consultation</Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-transparent px-7 py-6 text-base text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </div>
          </div>
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Lead Form</div>
            <div className="mt-5 grid gap-4">
              <Input placeholder="Your Name" className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400" />
              <Input placeholder="Email Address" className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400" />
              <Input placeholder="Business / Brand Name" className="h-12 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400" />
              <Textarea placeholder="Tell us what you need help with" className="min-h-[120px] rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400" />
              <Button className="h-12 rounded-xl bg-white text-slate-950 hover:bg-slate-100">Request Proposal</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
      <div className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-4 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-100">Newsletter</Badge>
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Get growth insights, ad ideas, and eCommerce strategies in your inbox</h3>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Subscribe for practical strategies on eCommerce growth, paid ads, automation, and conversion optimization.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input placeholder="Your email address" className="h-12 rounded-full" />
            <Button className="h-12 rounded-full bg-teal-600 px-6 hover:bg-teal-700">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.12),_transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="About Us"
            title="DigitelMe was built for brands that need real execution, not generic marketing talk"
            text="We started DigitelMe to give businesses one accountable growth partner for design, development, advertising, marketplaces, and automation — all aligned toward measurable results."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">Our Story</h3>
                <p className="mt-4 leading-8 text-slate-600">
                  Too many growing brands work with disconnected freelancers and siloed agencies. One manages the ads, another designs the creatives, someone else builds the website, and nobody owns the full customer journey. DigitelMe was created to solve that fragmentation.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  We bring strategy, design, media buying, marketplace operations, and AI automation under one roof so the business grows as a system, not as isolated tasks.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">Mission & Vision</h3>
                <p className="mt-4 leading-8 text-slate-600">
                  <span className="font-semibold text-slate-900">Mission:</span> Help businesses grow faster by combining performance marketing, platform management, and AI-powered systems into one efficient execution model.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  <span className="font-semibold text-slate-900">Vision:</span> Become the go-to growth partner for ambitious brands that want premium execution across every major digital channel.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Team Introduction</h3>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Our team brings together specialists in Shopify, paid media, marketplaces, design, development, and AI workflows. The result is a cross-functional growth team that thinks beyond isolated deliverables and focuses on revenue, efficiency, and customer experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServicesPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="Detailed services built around growth, management, and measurable performance"
          text="Every service is structured to support end-to-end execution so your team can focus on growth without operational drag."
        />
        <div className="mt-12 grid gap-6">
          {serviceGroups.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
              >
                <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                        <p className="mt-4 leading-8 text-slate-600">{service.short}</p>
                        <div className="mt-6 rounded-2xl bg-teal-50 p-4 text-sm font-medium text-teal-900">{service.pricing}</div>
                      </div>
                      <div className="grid gap-6 md:grid-cols-3">
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Benefits</div>
                          <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" /> {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Process</div>
                          <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                            {service.process.map((step, i) => (
                              <li key={step} className="flex gap-2">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">{i + 1}</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Best For</div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            Businesses that want strategic clarity, expert execution, and performance management without building an internal team from scratch.
                          </p>
                          <Button className="mt-5 rounded-full bg-slate-900 hover:bg-slate-800">Request a Proposal</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function TestimonialsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Social proof designed to build trust and reduce buying hesitation"
          text="Use this page to showcase multiple client stories, vertical-specific wins, and evidence of operational excellence across services."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.concat(testimonials.slice(0, 2)).map((item, idx) => (
            <Card key={`${item.name}-${idx}`} className="rounded-[1.8rem] border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <div className="mb-4 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{item.result}</div>
                <div className="mt-5 font-bold text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 rounded-[1.8rem] bg-slate-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Case-Based Results</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {results.slice(0, 3).map((caseItem) => (
              <div key={caseItem.metric} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-black text-teal-300">{caseItem.metric}</div>
                <div className="mt-2 font-semibold">{caseItem.label}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{caseItem.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogsPage() {
  const categories = ["All", "eCommerce", "Ads", "AI Automation", "Marketplace", "Website", "Creative"];
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? blogs : blogs.filter((blog) => blog.category === active)),
    [active]
  );

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Blogs"
          title="An SEO-focused blog layout built to attract, educate, and convert"
          text="Use category pages, internal linking, lead magnets, and keyword-targeted articles to drive long-term organic growth."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat ? "bg-slate-950 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((blog) => (
            <Card key={blog.title} className="rounded-[1.8rem] border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <Badge className="rounded-full bg-teal-100 text-teal-800 hover:bg-teal-100">{blog.category}</Badge>
                <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900">{blog.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{blog.excerpt}</p>
                <Button variant="ghost" className="mt-5 px-0 text-teal-700 hover:bg-transparent hover:text-teal-800">
                  Read Article <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Ready to grow? Let’s talk about the next stage of your business"
          text="Use this page to collect leads from high-intent visitors, route them to WhatsApp, or connect them with your team quickly."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900">Contact Details</h3>
              <div className="mt-6 space-y-5 text-slate-600">
                <a href="tel:+923120603441" className="flex items-center gap-3 hover:text-slate-900">
                  <Phone className="h-5 w-5 text-teal-600" /> +923120603441
                </a>
                <a href="mailto:info.digitelme@gmail.com" className="flex items-center gap-3 hover:text-slate-900">
                  <Mail className="h-5 w-5 text-teal-600" /> info.digitelme@gmail.com
                </a>
                <a href="https://wa.me/923120603441" className="flex items-center gap-3 hover:text-slate-900">
                  <MessageCircle className="h-5 w-5 text-teal-600" /> WhatsApp Chat
                </a>
              </div>
              <div className="mt-8 rounded-[1.4rem] border border-dashed border-slate-300 bg-slate-50 p-6">
                <div className="font-semibold text-slate-900">Google Maps Placeholder</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Replace this block with an embedded Google Map or business location module when your office address is finalized.
                </p>
              </div>
              <div className="mt-8 rounded-[1.4rem] bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-3">
                  <Bot className="mt-1 h-5 w-5 text-teal-300" />
                  <div>
                    <div className="font-semibold">AI Live Chat / Chatbot Section</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Add an AI chatbot here to answer service questions, qualify leads, and route serious inquiries to WhatsApp or a booking form.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Input placeholder="Full Name" className="h-12 rounded-xl" />
                <Input placeholder="Email Address" className="h-12 rounded-xl" />
                <Input placeholder="Phone Number" className="h-12 rounded-xl" />
                <Input placeholder="Business Name" className="h-12 rounded-xl" />
                <Input placeholder="Service Interested In" className="h-12 rounded-xl md:col-span-2" />
                <Textarea placeholder="Tell us about your project or growth goals" className="min-h-[160px] rounded-xl md:col-span-2" />
              </div>
              <Button className="mt-5 h-12 rounded-xl bg-teal-600 px-6 hover:bg-teal-700">Get Free Consultation</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function TermsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Legal"
          title="Terms & Conditions"
          text="These terms provide a professional baseline for service delivery, communication, liability, and project engagement. They should be reviewed by legal counsel before final publication."
        />
        <div className="mt-10 space-y-8 rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-slate-900">1. Introduction</h3>
            <p className="mt-3 leading-8 text-slate-600">
              These Terms & Conditions govern the use of the DigitelMe website and any services provided by DigitelMe, including but not limited to digital marketing, development, marketplace management, design, advertising management, and AI automation services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">2. Service Scope</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Service deliverables are defined through proposals, statements of work, onboarding documents, or written agreements. Timelines, revisions, access requirements, and reporting structures may vary by engagement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">3. Client Responsibilities</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Clients are responsible for providing timely access to business assets, ad accounts, stores, product information, creative inputs, and approvals required for execution. Delays in access or approvals may affect timelines and outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">4. Payments</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Fees, payment schedules, setup charges, retainers, and performance-based arrangements will be outlined in the client agreement. Unless otherwise specified, invoices are due on the agreed billing date. Late payments may result in paused services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">5. Intellectual Property</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Upon full payment, final approved deliverables created specifically for the client may be transferred for business use, except for proprietary frameworks, internal systems, automation logic, templates, scripts, and tools unless explicitly assigned in writing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">6. Performance Disclaimer</h3>
            <p className="mt-3 leading-8 text-slate-600">
              DigitelMe does not guarantee specific revenue, ad performance, search ranking, or marketplace outcomes. Results depend on market conditions, product-market fit, budgets, offers, competition, creative quality, and implementation factors outside our sole control.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">7. Confidentiality</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Both parties agree to keep confidential information private and use it only for purposes relevant to the engagement, except where disclosure is required by law.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">8. Limitation of Liability</h3>
            <p className="mt-3 leading-8 text-slate-600">
              To the maximum extent permitted by law, DigitelMe shall not be liable for indirect, incidental, special, or consequential damages, including loss of revenue, data, profits, or business interruption arising from the use of services or website content.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">9. Termination</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Either party may terminate an engagement according to the notice terms outlined in the service agreement. Outstanding fees for completed work, active billing periods, or approved milestones remain payable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">10. Contact</h3>
            <p className="mt-3 leading-8 text-slate-600">
              For legal or service-related inquiries, contact DigitelMe at info.digitelme@gmail.com or +923120603441.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:px-8">
        <SectionHeading
          badge="Legal"
          title="Privacy Policy"
          text="This policy provides a modern, professional framework for how DigitelMe may collect, use, and protect data. It should be reviewed by legal counsel before final publication."
        />
        <div className="mt-10 space-y-8 rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-slate-900">1. Information We Collect</h3>
            <p className="mt-3 leading-8 text-slate-600">
              We may collect personal information you provide through forms, consultations, chat, email, or phone, such as your name, company name, email address, phone number, and project details. We may also collect technical data such as browser type, pages visited, and analytics events.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">2. How We Use Information</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Information may be used to respond to inquiries, deliver services, improve user experience, provide support, send updates, analyze performance, and maintain website security.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">3. Marketing Communications</h3>
            <p className="mt-3 leading-8 text-slate-600">
              If you submit your details, we may contact you regarding services, proposals, follow-ups, and relevant marketing updates. You may opt out of non-essential communications at any time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">4. Cookies & Analytics</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Our website may use cookies, analytics tools, pixels, and event tracking technologies to understand traffic behavior, measure marketing performance, and improve site functionality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">5. Data Sharing</h3>
            <p className="mt-3 leading-8 text-slate-600">
              We do not sell personal information. We may share data with trusted service providers, platforms, or subcontractors involved in delivering services, hosting infrastructure, analytics, or communication systems, subject to appropriate safeguards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">6. Data Security</h3>
            <p className="mt-3 leading-8 text-slate-600">
              We take reasonable administrative, technical, and organizational measures to protect personal information. However, no internet-based system can be guaranteed to be fully secure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">7. Your Rights</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Depending on applicable laws, you may have rights related to access, correction, deletion, or objection to certain data processing. Requests may be submitted through our contact details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">8. Third-Party Platforms</h3>
            <p className="mt-3 leading-8 text-slate-600">
              Our website or services may involve third-party tools such as ad platforms, analytics tools, CRMs, chat systems, automation providers, or payment services. Their privacy practices are governed by their own policies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">9. Updates to This Policy</h3>
            <p className="mt-3 leading-8 text-slate-600">
              This Privacy Policy may be updated periodically to reflect operational, legal, or service changes. The latest version published on the website will apply.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">10. Contact</h3>
            <p className="mt-3 leading-8 text-slate-600">
              For privacy-related questions or requests, contact info.digitelme@gmail.com or +923120603441.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChoose />
      <ResultsSection />
      <TestimonialsSection />
      <PlatformsSection />
      <ProcessSection />
      <CTASection />
      <NewsletterSection />
    </main>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-700 text-lg font-bold text-white">
              D
            </div>
            <div>
              <div className="text-lg font-extrabold text-white">DigitelMe</div>
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Growth Agency</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            DigitelMe is a full-service digital growth agency helping brands scale through store development, paid ads, marketplace management, and AI automation.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Quick Links</div>
          <div className="mt-5 space-y-3 text-sm">
            {["Home", "Services", "About Us", "Client Testimonials", "Blogs", "Contact Us"].map((link) => (
              <button key={link} onClick={() => setPage(link)} className="block hover:text-white">
                {link}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</div>
          <div className="mt-5 space-y-3 text-sm">
            {condensedServices.slice(0, 8).map((link) => (
              <div key={link}>{link}</div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</div>
          <div className="mt-5 space-y-4 text-sm">
            <a href="tel:+923120603441" className="block hover:text-white">+923120603441</a>
            <a href="mailto:info.digitelme@gmail.com" className="block hover:text-white">info.digitelme@gmail.com</a>
            <a href="https://wa.me/923120603441" className="block hover:text-white">WhatsApp Chat</a>
          </div>
          <div className="mt-8 flex gap-3">
            <button onClick={() => setPage("Terms & Conditions")} className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/10">
              Terms & Conditions
            </button>
            <button onClick={() => setPage("Privacy Policy")} className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/10">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © 2026 DigitelMe. All rights reserved.
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/923120603441"
        className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <button className="flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5">
        <Phone className="h-4 w-4" /> Free Consultation
      </button>
    </div>
  );
}

function BonusSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <SectionHeading
        badge="Bonus"
        title="Conversion assets to support campaigns, landing pages, and offer testing"
        text="These bonus sections give you copy and campaign direction you can immediately use for ads, landing pages, and conversion improvement."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-slate-900">5 High-Converting Headlines</h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              {highConvertingHeadlines.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-teal-600" /> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-[1.8rem] border-slate-200 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-slate-900">5 CTA Variations</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {ctaVariations.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
            <h3 className="mt-8 text-xl font-bold text-slate-900">3 Landing Page Ideas for Ads</h3>
            <div className="mt-5 space-y-4">
              {landingPageIdeas.map((idea) => (
                <div key={idea.title} className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">{idea.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{idea.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6 rounded-[1.8rem] border-slate-200 shadow-sm">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-slate-900">Suggestions to Improve Conversion Rate</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {conversionSuggestions.map((tip) => (
              <div key={tip} className="rounded-2xl bg-teal-50 p-4 text-sm leading-6 text-teal-950">
                {tip}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function DigitelMeAgencyWebsite() {
  const [page, setPage] = useState("Home");

  return (
    <div className="min-h-screen bg-white font-[Inter] text-slate-900">
      <TopBar />
      <Header page={page} setPage={setPage} />

      {page === "Home" && (
        <>
          <HomePage />
          <BonusSection />
        </>
      )}
      {page === "Services" && <ServicesPage />}
      {page === "About Us" && <AboutPage />}
      {page === "Client Testimonials" && <TestimonialsPage />}
      {page === "Blogs" && <BlogsPage />}
      {page === "Contact Us" && <ContactPage />}
      {page === "Terms & Conditions" && <TermsPage />}
      {page === "Privacy Policy" && <PrivacyPage />}

      <Footer setPage={setPage} />
      <StickyCTA />
    </div>
  );
}
