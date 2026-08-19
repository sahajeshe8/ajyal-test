import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UsersRound
} from "lucide-react";

const asset = (path: string) => `https://ajyal-dev.e8demo.com${path}`;

const navItems = ["School", "Admissions", "Learning", "Life", "Contact"];

const admissions = [
  ["Inquiry & School Tour", "Your journey begins with an online inquiry or a school tour booking.", "This first step allows families to explore our philosophy, curriculum, and campus environment.", "/wp-content/uploads/ajayl-imported/banner-slider-01.jpg"],
  ["Meet Admissions", "Our admissions team guides parents every step of the way.", "Families receive clear support from the first inquiry through to application and assessment.", "/wp-content/uploads/ajayl-imported/banner-slider-02.jpg"],
  ["Application & Assessment", "Complete the application and age-appropriate assessment.", "A transparent process helps us understand each learner and recommend the right next step.", "/wp-content/uploads/ajayl-imported/banner-slider-03.jpg"],
  ["Confident Start", "Begin Ajyal with a smooth and confident start.", "We support families through onboarding so students feel known, welcomed, and ready.", "/wp-content/uploads/2026/07/school-life03.jpg"]
];

const principalSignals = [
  ["Two decades", "Leadership experience"],
  ["UK + UAE", "Education perspective"],
  ["Global citizenship", "Whole-school mission"]
];

const stages = [
  {
    title: "Early Years",
    label: "British Curriculum",
    copy: "British Curriculum. Global Standards. Real Impact.",
    image: "/wp-content/uploads/ajayl-imported/banner-slider-01.jpg"
  },
  {
    title: "Primary",
    label: "Strong foundations",
    copy: "Strong Foundations Built Through Curiosity and Care.",
    image: "/wp-content/uploads/ajayl-imported/banner-slider-02.jpg"
  },
  {
    title: "Secondary",
    label: "Guidance",
    copy: "Guidance That Goes Beyond the Classroom.",
    image: "/wp-content/uploads/ajayl-imported/banner-slider-03.jpg"
  }
];

const life = [
  ["Creative clubs", "Studios and co-curricular spaces for expression, collaboration, and confidence."],
  ["Athletics", "Sport that builds resilience, belonging, and healthy ambition."],
  ["STEM challenges", "Hands-on problem solving that turns curiosity into capability."],
  ["Community moments", "Shared traditions that make school feel personal and connected."]
];

const fees = ["Early Years", "Primary", "Secondary"];

const campusMoments = [
  {
    src: "/wp-content/uploads/ajayl-imported/banner-slider-01.jpg",
    alt: "Early Years students at Ajyal"
  },
  {
    src: "/wp-content/uploads/ajayl-imported/banner-slider-02.jpg",
    alt: "Primary students learning at Ajyal"
  },
  {
    src: "/wp-content/uploads/2026/07/school-life03.jpg",
    alt: "Ajyal students collaborating"
  }
];

const schoolStats = [
  {
    value: '"Very Good"',
    label: "ADEK Rating 2024",
    icon: Trophy
  },
  {
    value: "British Curriculum",
    label: "FS1 - Year 13",
    icon: Landmark
  },
  {
    value: "10+ Years",
    label: "Excellence in MBZ",
    icon: GraduationCap
  },
  {
    value: "35+",
    label: "Diverse Nationalities",
    icon: Globe2
  },
  {
    value: "88%",
    label: "IGCSE Pass Rate (A-C)*",
    icon: Star
  }
];

const familyQuote = {
  quote:
    "An outstanding school! My children have flourished both academically and socially thanks to the supportive teachers at Ajyal.",
  name: "Hania Tufail",
  role: "Mother of Omer"
};

const faqItems = [
  {
    question: "What are the school hours?",
    answer:
      "School hours vary by phase. Our admissions team can provide the current timetable for Early Years, Primary, and Secondary upon request."
  },
  {
    question: "Where is Ajyal International School located?",
    answer:
      "Ajyal International School is located in Mohammed Bin Zayed City, Abu Dhabi, MBZ, Zone 15."
  },
  {
    question: "How can I contact the admissions team?",
    answer:
      "Families can contact Ajyal by email at info@ajyal.sch.ae or by calling 02 6968 500."
  }
];

const instagramFeed = [
  ["/wp-content/uploads/ajayl-imported/banner-slider-01.jpg", "Early Years"],
  ["/wp-content/uploads/ajayl-imported/banner-slider-02.jpg", "Primary"],
  ["/wp-content/uploads/ajayl-imported/banner-slider-03.jpg", "Secondary"],
  ["/wp-content/uploads/2026/07/school-life03.jpg", "Campus Life"],
  ["/wp-content/uploads/ajayl-imported/ad-slider1.jpg", "Community"],
  ["/wp-content/uploads/ajayl-imported/Mrs-Alison-No-Bg.png", "Leadership"]
];

const footerMenus = [
  {
    title: "School",
    links: [
      ["Welcome to Ajyal", "#school"],
      ["From the Principal", "#principal"],
      ["Learning Journey", "#learning"],
      ["Student Life", "#life"]
    ]
  },
  {
    title: "Admissions",
    links: [
      ["Admissions Process", "#admissions"],
      ["Accessible Fees", "#fees"],
      ["Frequently Asked Questions", "#faq"],
      ["Start an Enquiry", "mailto:info@ajyal.sch.ae"]
    ]
  },
  {
    title: "Community",
    links: [
      ["What Families Say", "#families"],
      ["What's Happening", "#happening"],
      ["Instagram Feed", "#instagram"],
      ["Contact", "#contact"]
    ]
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Ajyal International School home">
          <Image
            src={asset("/wp-content/themes/ajayl-child/src/images/main-logo.png")}
            alt="Ajyal International School"
            width={64}
            height={103}
            priority
          />
        </a>

        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              <span data-label={item}>{item}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="language" href="#" aria-label="Switch to Arabic">
            العربية
          </a>
          <a className="quick-call" href="tel:026968500" aria-label="Call Ajyal">
            <Phone size={18} />
          </a>
          <button className="menu-button" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <section className="hero" id="school">
        <Image
          src={asset("/wp-content/uploads/ajayl-imported/ad-slider1.jpg")}
          alt="Ajyal students walking through campus"
          fill
          priority
          sizes="100vw"
          className="hero-media"
          data-parallax-image
        />
        <div className="hero-shade" />
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="mask-line">
              <p className="eyebrow" data-mask>
                British curriculum school in MBZ, Abu Dhabi
              </p>
            </div>
            <div className="mask-line mask-line-title">
              <h1 data-mask>High expectations, held with warmth.</h1>
            </div>
            <div className="mask-line">
              <p data-mask>
                A future-focused learning environment where every child is supported to
                grow, explore, and succeed.
              </p>
            </div>
            <div className="mask-line">
              <div className="hero-actions" data-mask>
                <a className="button button-primary" href="#contact">
                  Book a Tour <ArrowUpRight size={18} />
                </a>
                <a className="button button-light" href="#admissions">
                  Enquire Now <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-inner container">
          <div className="manifesto-copy">
            <div>
              <p className="eyebrow dark" data-mask>Welcome to Ajyal</p>
              <h2 data-mask>Welcome to Ajyal International School</h2>
            </div>
            <p data-mask>
              Ajyal International School is a vibrant learning community committed to
              academic excellence and holistic development. We provide a supportive
              environment where students are encouraged to think critically, explore
              creatively, and grow with confidence.
            </p>
            <div className="manifesto-points" aria-label="Ajyal highlights">
              <span data-mask>Known by name</span>
              <span data-mask>British curriculum</span>
              <span data-mask>FS1-Year 13</span>
            </div>
          </div>
          <div className="campus-collage" aria-label="Ajyal campus moments">
            {campusMoments.map((moment, index) => (
              <figure
                className={`collage-item collage-item-${index + 1}`}
                data-image-reveal
                data-parallax-frame
                key={moment.src}
              >
                <Image
                  src={asset(moment.src)}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 900px) 70vw, 24vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="school-stats" aria-label="Ajyal school highlights">
        <div className="stats-inner container">
          <article className="stat-feature" data-mask>
            <div className="stat-icon" aria-hidden="true">
              <Trophy size={34} />
            </div>
            <span>ADEK Rating 2024</span>
            <strong>"Very Good"</strong>
          </article>
          <div className="stat-grid">
            {schoolStats.slice(1).map(({ value, label, icon: Icon }) => (
              <article className="stat-card" key={label} data-mask>
                <Icon size={24} />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="admissions" id="admissions">
        <div className="container">
          <div className="section-kicker">
            <span data-mask>Admissions</span>
            <a href="mailto:info@ajyal.sch.ae">
              Start an enquiry <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="admissions-layout">
            <div className="admissions-intro">
              <h2 data-mask>A Clear and Supportive Journey to Join Us</h2>
              <p data-mask>
                Our admissions process is designed to be simple, transparent, and
                supportive, guiding parents every step of the way - from the first
                inquiry to a smooth and confident start at Ajyal International School.
              </p>
              <a className="text-action text-action-dark" href="mailto:info@ajyal.sch.ae" data-mask>
                Speak to admissions <ArrowUpRight size={16} />
              </a>
            </div>
            <ol className="admissions-steps">
              {admissions.map(([title, copy, detail, image], index) => (
                <li key={title} data-bg-parallax>
                  <div className="step-number" data-mask>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 data-mask>{title}</h3>
                    <p data-mask>{copy}</p>
                    <small data-mask>{detail}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="learning" id="learning">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark" data-mask>Learning Journey</p>
            <h2 data-mask>Distinctive Advantages That Shape Future Leaders</h2>
          </div>
          <div className="stage-strip">
            {stages.map((stage) => (
              <article className="stage" key={stage.title} data-image-reveal data-parallax-frame>
                <Image
                  src={asset(stage.image)}
                  alt={`${stage.title} students at Ajyal`}
                  width={720}
                  height={520}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div>
                  <span data-mask>{stage.label}</span>
                  <h3 data-mask>{stage.title}</h3>
                  <p data-mask>{stage.copy}</p>
                  <a href="#admissions">
                  Discover Now <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="university-feature" data-image-reveal>
            <Image
              src={asset("/wp-content/uploads/ajayl-imported/banner-slider-03.jpg")}
              alt="Ajyal Secondary School students preparing for university success"
              fill
              sizes="100vw"
            />
            <div className="university-content">
              <p className="eyebrow" data-mask>Secondary School</p>
              <h2 data-mask>Preparing Students for University Success</h2>
              <p data-mask>
                Ajyal Secondary School supports students through academic guidance,
                leadership development, and university preparation pathways that help
                them transition confidently into higher education and future careers.
              </p>
              <a className="button button-primary" href="#admissions">
                Explore Secondary School <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="principal" id="principal">
        <Image
          src={asset("/wp-content/uploads/ajayl-imported/Mrs-Alison-No-Bg.png")}
          alt=""
          fill
          sizes="100vw"
          className="principal-bg"
          data-parallax-image
        />
        <div className="principal-inner container">
          <div className="principal-copy">
            <span className="principal-ribbon" data-mask>ADEK Very Good</span>
            <p className="eyebrow" data-mask>From the Principal</p>
            <span className="quote-mark" aria-hidden="true">"</span>
            <blockquote data-mask>
              Welcome to Ajyal International School, MBZ - a vibrant, inclusive community where every child is known, valued, and empowered to thrive.
            </blockquote>
            <p data-mask>
              As Principal, I bring over two decades of leadership experience from the
              UK and UAE to foster an environment of academic excellence, compassion,
              and global citizenship.
            </p>
            <div className="principal-meta">
              <div data-mask>
                <strong>Mrs Allison McDonald</strong>
                <span>Principal, Ajyal International School</span>
              </div>
              <a className="text-action" href="#contact">
                Visit the campus <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="principal-signals" aria-label="Principal leadership highlights">
              {principalSignals.map(([value, label]) => (
                <div key={label} data-mask>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fees" id="fees" aria-label="Fee highlights">
        <div className="fees-inner container">
          <div className="fees-intro">
            <span className="fee-icon">
              <ShieldCheck size={26} />
            </span>
            <h2 data-mask>Quality Education at Accessible Fees</h2>
            <p data-mask>Transparent and structured fee plans designed to support every stage of your child's education.</p>
            <div className="fee-note" data-mask>
              <strong>20%</strong>
              <span>discount on ADEK approved tuition fees</span>
            </div>
          </div>
          <div className="fee-ticker">
            {fees.map((phase) => (
              <div key={phase}>
                <span data-mask>Starting From</span>
                <strong data-mask>AED 24,104</strong>
                <p data-mask>{phase}</p>
                <small data-mask>On ADEK approved tuition fees 20% discount</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="life" id="life">
        <div className="life-inner container">
          <div className="life-media" data-image-reveal data-parallax-frame>
            <Image
              src={asset("/wp-content/uploads/2026/07/school-life03.jpg")}
              alt="Students collaborating in a STEM activity"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="life-copy">
            <p className="eyebrow dark" data-mask>Student Experience</p>
            <h2 data-mask>Student Life & Activities</h2>
            <p data-mask>
              At Ajyal, learning extends beyond classrooms into spaces of
              collaboration, creativity, and challenge. Students engage in a variety
              of meaningful activities that build confidence and connection.
            </p>
            <div className="life-list">
              {life.map(([title, copy]) => (
                <article key={title}>
                  <Sparkles size={18} />
                  <div>
                  <h3 data-mask>{title}</h3>
                  <p data-mask>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="updates" id="happening">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark" data-mask>What's Happening at Ajyal</p>
            <h2 data-mask>News, blogs, and upcoming events.</h2>
          </div>
          <div className="update-grid">
            <article>
              <CalendarDays size={22} />
            <span data-mask>News</span>
            <h3 data-mask>Admissions now open</h3>
            <p data-mask>December 4th - 7th, 2026</p>
            </article>
            <article>
              <Globe2 size={22} />
            <span data-mask>Blog</span>
            <h3 data-mask>School blog updates</h3>
            <p data-mask>December 4th, 2026</p>
            </article>
            <article>
              <UsersRound size={22} />
            <span data-mask>Upcoming Events</span>
            <h3 data-mask>Upcoming events</h3>
            <p data-mask>December 4th, 2026</p>
            </article>
          </div>
        </div>
      </section>

      <section className="families" id="families" aria-label="What families say">
        <div className="families-pin container">
          <div className="families-copy">
            <p className="eyebrow" data-mask>What Families Say</p>
            <h2 data-mask>Trusted by families who feel the difference.</h2>
            <p data-mask>
              Parents share how Ajyal supports growth, confidence, and a strong
              sense of community.
            </p>
          </div>
          <article className="family-quote-card" data-mask>
            <span className="quote-mark-small" aria-hidden="true">"</span>
            <blockquote>{familyQuote.quote}</blockquote>
            <div>
              <strong>{familyQuote.name}</strong>
              <span>{familyQuote.role}</span>
            </div>
          </article>
        </div>
      </section>

      <section className="faq" id="faq" aria-label="Frequently Asked Questions">
        <div className="faq-inner container">
          <div className="faq-intro">
            <p className="eyebrow dark" data-mask>Frequently Asked Questions</p>
            <h2 data-mask>Clear answers for the first conversation.</h2>
            <p data-mask>
              Ajyal International School is a British curriculum school located
              in Mohammed Bin Zayed City, Abu Dhabi. Our purpose-built campus
              supports students from Early Years through Secondary.
            </p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <article className={index === 0 ? "faq-item active" : "faq-item"} key={item.question} data-mask>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="instagram-feed" id="instagram" aria-label="Ajyal Instagram feed">
        <div className="container">
          <div className="insta-heading">
            <div>
              <p className="eyebrow" data-mask>Instagram Feed</p>
              <h2 data-mask>Everyday moments, shared with warmth.</h2>
              <p className="insta-note" data-mask>
                Live Instagram-ready feed with a curated campus fallback.
              </p>
            </div>
            <a className="text-action" href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-mask>
              Follow Ajyal <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="insta-grid">
            {instagramFeed.map(([src, label], index) => (
              <figure className={`insta-card insta-card-${index + 1}`} key={src} data-image-reveal data-parallax-frame>
                <Image
                  src={asset(src)}
                  alt={`${label} moment at Ajyal`}
                  fill
                  sizes="(max-width: 800px) 50vw, 25vw"
                />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-inner container">
          <div className="footer-top">
            <div className="footer-brand">
            <Image
              src={asset("/wp-content/themes/ajayl-child/src/images/main-logo.png")}
              alt="Ajyal"
              width={58}
              height={94}
            />
              <div>
                <p className="eyebrow" data-mask>Ajyal International School</p>
                <h2 data-mask>Begin with a conversation.</h2>
                <p data-mask>
                  A British curriculum school in Mohammed Bin Zayed City,
                  Abu Dhabi, supporting students from Early Years through
                  Secondary.
                </p>
              </div>
            </div>
            <div className="footer-actions">
              <a className="button button-primary" href="mailto:info@ajyal.sch.ae">
                Book a Tour <ArrowUpRight size={18} />
              </a>
              <a className="button button-outline" href="tel:026968500">
                Call Admissions <Phone size={18} />
              </a>
            </div>
          </div>
          <div className="footer-main">
            {footerMenus.map((menu) => (
              <div className="footer-menu" key={menu.title}>
                <h3 data-mask>{menu.title}</h3>
                {menu.links.map(([label, href]) => (
                  <a href={href} key={label} data-mask>
                    {label}
                  </a>
                ))}
              </div>
            ))}
            <div className="footer-contact">
              <h3 data-mask>Contact</h3>
              <a href="mailto:info@ajyal.sch.ae" data-mask>
                <Mail size={17} /> info@ajyal.sch.ae
              </a>
              <a href="tel:026968500" data-mask>
                <Phone size={17} /> 02 6968 500
              </a>
              <span data-mask>
                <MapPin size={17} /> MBZ, Zone 15
              </span>
              <span data-mask>
                <Clock3 size={17} /> Mon-Thu 7:45-3:00
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-mark">
              <GraduationCap size={18} />
              <span>ADEK Very Good</span>
              <Check size={17} />
            </div>
            <p data-mask>© 2026 Ajyal International School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
