"use client";
import { useState } from "react";
import { Cpu, Bot, Smartphone, Cloud, Brain, CircuitBoard, ChevronRight, CheckCircle2, Mail, Phone, Globe, Facebook, MessageSquare, Boxes } from "lucide-react";
import { motion } from "framer-motion";

export default function MechCodeLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("th");

  const services = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: {
        th: "Embedded / IoT",
        en: "Embedded / IoT",
      },
      desc: {
        th: "ESP32, Raspberry Pi, เซนเซอร์, บอร์ดไมโครคอนโทรลเลอร์ และการเชื่อมต่อระบบจริงเข้ากับแอป/คลาวด์",
        en: "ESP32, Raspberry Pi, sensors, microcontroller boards, and real-world system integration with apps/cloud.",
      },
      bullets: {
        th: ["ESP32, STM32, Arduino", "MQTT / BLE / LoRa / Modbus", "ออกแบบเฟิร์มแวร์ + OTA"],
        en: ["ESP32, STM32, Arduino", "MQTT / BLE / LoRa / Modbus", "Firmware design + OTA"],
      },
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: {
        th: "Robotics & Automation",
        en: "Robotics & Automation",
      },
      desc: {
        th: "ระบบควบคุมมอเตอร์, แขนกล, AGV/AMR, วิชั่น, ออกแบบอัลกอริทึมควบคุม",
        en: "Motor control systems, robotic arms, AGV/AMR, vision, and control algorithm design.",
      },
      bullets: {
        th: ["ROS / OpenCV / PLC", "Servo/Stepper/BLDC Control", "Integration กับสายพาน/ไลน์ผลิต"],
        en: ["ROS / OpenCV / PLC", "Servo/Stepper/BLDC Control", "Integration with conveyor/production line"],
      },
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: {
        th: "Web / Mobile Apps",
        en: "Web / Mobile Apps",
      },
      desc: {
        th: "แอป iOS/Android และเว็บแอปรองรับงาน IoT/SCADA/แดชบอร์ด พร้อมระบบหลังบ้าน",
        en: "iOS/Android apps and web apps for IoT/SCADA/dashboard with backend systems.",
      },
      bullets: {
        th: ["Flutter / React / Next.js", "Auth, Payment, Realtime", "Dashboard & Analytics"],
        en: ["Flutter / React / Next.js", "Auth, Payment, Realtime", "Dashboard & Analytics"],
      },
    },
    {
  icon: <Boxes className="w-6 h-6" />, 
      title: {
        th: "3D Printing & Fabrication",
        en: "3D Printing & Fabrication",
      },
      desc: {
        th: "ออกแบบและผลิตชิ้นส่วน 3D, การพิมพ์ 3D, และการประกอบ",
        en: "3D part design and manufacturing, 3D printing, and assembly.",
      },
      bullets: {
        th: ["PLA / PETG / ABS", "Fixtures, Enclosures, Jigs", "Rapid Prototyping"],
        en: ["PLA / PETG / ABS", "Fixtures, Enclosures, Jigs", "Rapid Prototyping"],
      },
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: {
        th: "AI / Computer Vision",
        en: "AI / Computer Vision",
      },
      desc: {
        th: "โมเดลตรวจจับภาพ/สัญญาณ, คัดกรองสัญญาณปั๊ม/มอเตอร์, และระบบอัตโนมัติ",
        en: "Image/signal detection models, pump/motor signal filtering, and automation systems.",
      },
      bullets: {
        th: ["PyTorch / TensorFlow", "YOLO / Tracking / OCR", "Predictive Maintenance"],
        en: ["PyTorch / TensorFlow", "YOLO / Tracking / OCR", "Predictive Maintenance"],
      },
    },
    {
      icon: <CircuitBoard className="w-6 h-6" />,
      title: {
        th: "PCB & Prototype",
        en: "PCB & Prototype",
      },
      desc: {
        th: "ออกแบบวงจร, PCB, 3D Printing/CNC, ประกอบและทดสอบต้นแบบพร้อมใช้งาน",
        en: "Circuit design, PCB, 3D Printing/CNC, assembly and ready-to-use prototyping.",
      },
      bullets: {
        th: ["Schematic & Layout", "BOM/SMT/Assembly", "Prototype → Pilot Run"],
        en: ["Schematic & Layout", "BOM/SMT/Assembly", "Prototype → Pilot Run"],
      },
    },
  ];

  const steps = [
    {
      id: 1,
      title: { th: "คุยโจทย์", en: "Consultation" },
      text: {
        th: "เก็บ Requirement, เป้าหมาย, งบประมาณ, ไทม์ไลน์",
        en: "Gather requirements, goals, budget, timeline",
      },
    },
    {
      id: 2,
      title: { th: "ออกแบบ", en: "Design" },
      text: {
        th: "สถาปัตยกรรม, UX/UI, แผงวงจร, Mockup และแผนทดสอบ",
        en: "Architecture, UX/UI, circuit, mockup, and test plan",
      },
    },
    {
      id: 3,
      title: { th: "พัฒนา", en: "Development" },
      text: {
        th: "ฮาร์ดแวร์/ซอฟต์แวร์, โมเดล AI, คลาวด์ และเอกสารประกอบ",
        en: "Hardware/software, AI models, cloud, and documentation",
      },
    },
    {
      id: 4,
      title: { th: "ทดสอบ", en: "Testing" },
      text: {
        th: "Lab/Field Test, Safety, Calibration, ปรับปรุงคุณภาพ",
        en: "Lab/field test, safety, calibration, quality improvement",
      },
    },
    {
      id: 5,
      title: { th: "ส่งมอบ & ซัพพอร์ต", en: "Delivery & Support" },
      text: {
        th: "Training, คู่มือ, การันตีงาน, บริการดูแลหลังบ้าน",
        en: "Training, manuals, warranty, after-sales support",
      },
    },
  ];

  const stats = [
    { label: { th: "โปรเจ็กต์", en: "Projects" }, value: lang === "th" ? "ผลงานจริงหลากหลาย" : "Diverse real projects" },
    { label: { th: "อุตสาหกรรมที่รองรับ", en: "Industries" }, value: lang === "th" ? "ตอบโจทย์หลายอุตสาหกรรม" : "Multi-industry solutions" },
    { label: { th: "คุณภาพ", en: "Quality" }, value: lang === "th" ? "เน้นคุณภาพทุกขั้นตอน" : "Quality at every step" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/image/logo1.jpg" alt="MechCode Robotech Logo" className="h-12 w-12 rounded-xl object-contain bg-white p-1 border border-white/20" />
            <div className="leading-tight">
              <div className="font-semibold text-lg">MechCode Robotech</div>
              <div className="text-xs text-slate-400">Hardware + Software Solutions</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">{lang === "th" ? "บริการ" : "Services"}</a>
            <a href="#works" className="hover:text-white">{lang === "th" ? "ผลงาน" : "Works"}</a>
            <a href="#process" className="hover:text-white">{lang === "th" ? "ขั้นตอน" : "Process"}</a>
            <a href="#contact" className="hover:text-white">{lang === "th" ? "ติดต่อ" : "Contact"}</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button
              className={`rounded-xl px-2 py-1 text-xs font-semibold border border-white/10 ${lang === "th" ? "bg-cyan-400/20 text-cyan-200" : ""}`}
              onClick={() => setLang("th")}
              aria-label="ภาษาไทย"
            >TH</button>
            <button
              className={`rounded-xl px-2 py-1 text-xs font-semibold border border-white/10 ${lang === "en" ? "bg-cyan-400/20 text-cyan-200" : ""}`}
              onClick={() => setLang("en")}
              aria-label="English"
            >EN</button>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-lg">
              {lang === "th" ? "ขอใบเสนอราคา" : "Get a Quote"} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-white/10">
            <span className="sr-only">Toggle menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-6 py-3 flex flex-col gap-3 text-slate-300">
              <div className="flex gap-2 mb-2">
                <button
                  className={`rounded-xl px-2 py-1 text-xs font-semibold border border-white/10 ${lang === "th" ? "bg-cyan-400/20 text-cyan-200" : ""}`}
                  onClick={() => setLang("th")}
                  aria-label="ภาษาไทย"
                >TH</button>
                <button
                  className={`rounded-xl px-2 py-1 text-xs font-semibold border border-white/10 ${lang === "en" ? "bg-cyan-400/20 text-cyan-200" : ""}`}
                  onClick={() => setLang("en")}
                  aria-label="English"
                >EN</button>
              </div>
              <a href="#services" onClick={() => setMenuOpen(false)}>{lang === "th" ? "บริการ" : "Services"}</a>
              <a href="#works" onClick={() => setMenuOpen(false)}>{lang === "th" ? "ผลงาน" : "Works"}</a>
              <a href="#process" onClick={() => setMenuOpen(false)}>{lang === "th" ? "ขั้นตอน" : "Process"}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>{lang === "th" ? "ติดต่อ" : "Contact"}</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.3),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.35),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block rounded-full border border-cyan-400/40 text-cyan-300/90 px-3 py-1 text-xs mb-4">
                {lang === "th" ? "One-Stop Hardware + Software" : "One-Stop Hardware + Software"}
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                {lang === "th"
                  ? <>เปลี่ยนไอเดียเป็น{" "}<span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">ผลิตภัณฑ์อัจฉริยะ</span>{" "}ที่ใช้งานได้จริง</>
                  : <>Turn your idea into an <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">intelligent product</span> that works</>
                }
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                {lang === "th"
                  ? "เราพัฒนาโซลูชันตั้งแต่ไมโครคอนโทรลเลอร์ เซนเซอร์ หุ่นยนต์ ไปจนถึงแอปและ IoT เพื่อธุรกิจ SME, โรงงาน และสตาร์ทอัพ"
                  : "We develop solutions from microcontrollers, sensors, robotics to apps and IoT for SMEs, factories, and startups."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=61579303216095",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="relative z-20 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-slate-900 font-semibold shadow"
                >
                  {lang === "th" ? "คุยโปรเจกต์กับเรา" : "Talk to us"}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    console.log("clicked");
                    const works = document.getElementById("works");
                    if (works) {
                      works.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/15 z-10"
                >
                  {lang === "th" ? "ดูผลงาน" : "See works"}
                </button>
              </div>
              <div className="mt-8 flex gap-8">
                {stats.map((s) => (
                  <div key={s.label[lang]} className="">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-3xl border border-white/10 p-2 bg-white/5 backdrop-blur">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-center">
                  <img 
                    src="/image/Back.jpg" 
                    alt="MechCode Robotech Team" 
                    className="object-cover w-full h-full" 
                    style={{ maxHeight: 320 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos / Trust */}
      {/* <section className="border-t border-white/10">
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          {[
            { th: "มหาวิทยาลัย", en: "University" },
            { th: "โรงงาน", en: "Factory" },
            { th: "สตาร์ทอัพ", en: "Startup" },
            { th: "SME", en: "SME" },
          ].map((t) => (
            <div key={t.en} className="rounded-xl border border-white/10 p-4 text-center text-sm text-slate-300 bg-white/5">
              {lang === "th" ? "คู่ค้า " + t.th : "Clients: " + t.en}
            </div>
          ))}
        </div>
      </section>
      */}
      
      {/* Services */}
      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{lang === "th" ? "บริการของเรา" : "Our Services"}</h2>
          <p className="text-slate-300 mt-2">{lang === "th" ? "เลือกแพ็กเกจหรือปรับแต่งตามโจทย์ของคุณ" : "Choose a package or customize to your needs."}</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <motion.div key={s.title[lang]} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 p-5 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">{s.icon}</div>
                  <div className="font-semibold">{s.title[lang]}</div>
                </div>
                <p className="text-slate-300 mt-2 text-sm">{s.desc[lang]}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {s.bullets[lang].map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-300" />{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-16 md:py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">{lang === "th" ? "ตัวอย่างผลงาน" : "Sample Works"}</h2>
              <p className="text-slate-300 mt-2">{lang === "th" ? "งานจริงที่ส่งมอบให้ลูกค้า" : "Delivered projects for clients (sample/placeholder)"}</p>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/15">{lang === "th" ? "ขอรายละเอียดเพิ่มเติม" : "Request more info"}</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Work 1 */}
            <div className="group">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden grid place-items-center">
                {/* เปลี่ยน src เป็นรูปจริงได้ */}
                <img src="/image/pcb.png" alt="Project 1" className="object-cover w-full h-full" />
              </div>
              <div className="mt-3">
                <div className="font-semibold">{lang === "th" ? "ออกแบบและผลิต PCB" : "Design and Manufacture PCB"}</div>
                <div className="text-sm text-slate-400">{lang === "th" ? "ออกแบบ PCB สำหรับอุปกรณ์ IoT" : "Design PCB for IoT devices"}</div>
              </div>
            </div>
            {/* Work 2 */}
            <div className="group">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden grid place-items-center">
                <img src="/image/2.png" alt="Project 2" className="object-cover w h" />
              </div>
              <div className="mt-3">
                <div className="font-semibold">{lang === "th" ? "ออกแบบและพัฒนาแอปพลิเคชันเดสก์ท็อป" : "Design and Develop Desktop App"}</div>
                <div className="text-sm text-slate-400">{lang === "th" ? "โปรแกรมต่ออายุใบรับรองในบริษัท" : "Program for renewing certification in the company"}</div>
              </div>
            </div>
            {/* Work 3 */}
            <div className="group">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden grid place-items-center">
                <img src="/image/3.png" alt="Project 3" className="object-cover w-full h" />
              </div>
              <div className="mt-3">
                <div className="font-semibold">{lang === "th" ? "ระบบ SLAM บน Raspberry Pi (ORB-SLAM3)" : "SLAM System on Raspberry Pi (ORB-SLAM3)"}</div>
                <div className="text-sm text-slate-400">{lang === "th" ? "ระบุตำแหน่งและสร้างแผนที่ 3D แบบเรียลไทม์จากภาพกล้อง" : "Real-time 3D mapping and localization from camera images"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{lang === "th" ? "วิธีการทำงาน" : "How We Work"}</h2>
          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div key={st.id} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                <div className="text-xs text-slate-400">{lang === "th" ? `ขั้นตอน ${st.id}` : `Step ${st.id}`}</div>
                <div className="font-semibold mt-1">{st.title[lang]}</div>
                <div className="text-sm text-slate-300 mt-2">{st.text[lang]}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-300">
            {lang === "th"
              ? "**เรามี NDA หากต้องการรักษาความลับของข้อมูล**"
              : "**We offer NDA for confidentiality upon request**"}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-indigo-500/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl md:text-2xl font-semibold">
                {lang === "th" ? "มีไอเดียอยู่ในหัว? ให้เราช่วยทำให้เกิดขึ้นจริง" : "Have an idea? Let us help you make it real."}
              </div>
              <div className="text-slate-300">
                {lang === "th" ? "ประเมินฟรี • เสนอราคาโปร่งใส • มีทีมฮาร์ดแวร์ + ซอฟต์แวร์ครบ" : "Free assessment • Transparent pricing • Full hardware + software team"}
              </div>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-lg">
              {lang === "th" ? "เริ่มคุยโปรเจกต์" : "Start your project"} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{lang === "th" ? "ติดต่อทีม MechCode Robotech" : "Contact MechCode Robotech Team"}</h2>
            <p className="text-slate-300 mt-2">{lang === "th" ? "กรอกฟอร์ม หรือแชทมาหาเราได้เลย" : "Fill out the form or chat with us directly."}</p>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> mechcoderobotech@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 083-111-1666</div>
              <div className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook: MechCode Robotech</div>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> Chiang Mai, Thailand</div>
            </div>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.elements['name']?.value || '';
              const contact = form.elements['contact']?.value || '';
              const projectType = form.elements['projectType']?.value || '';
              const budget = form.elements['budget']?.value || '';
              const details = form.elements['details']?.value || '';
              const msg =
                (lang === 'th'
                  ? `\uD83D\uDCDD คำขอประเมินใหม่\n\n`
                  : `\uD83D\uDCDD New Quote Request\n\n`) +
                `${lang === 'th' ? 'ชื่อ' : 'Name'}: ${name}\n` +
                `${lang === 'th' ? 'อีเมล/เบอร์' : 'Email/Phone'}: ${contact}\n` +
                `${lang === 'th' ? 'ประเภทงาน' : 'Project Type'}: ${projectType}\n` +
                `${lang === 'th' ? 'งบประมาณ' : 'Budget'}: ${budget}\n` +
                `${lang === 'th' ? 'รายละเอียด' : 'Details'}: ${details}`;
              try {
                const res = await fetch('/api/line-broadcast', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' , 'Authorization': 'Bearer 9TpswRJCB/nX/rEnruU41Db/1IcwcL4miql/3sQ/PkZ+ivehD1GeZIHaSyzcAjkopGvmNHkmRbn7xdeJcWr39RikPS5Uoth7HFJjZ+K7IdvjgldxTG99y+xlsIPGB4ayM4oHjrnh5tts+vkDfbT99wdB04t89/1O/w1cDnyilFU='},
                  body: JSON.stringify({ msg }),
                });
                if (res.ok) {
                  alert(lang === 'th' ? 'ส่งคำขอสำเร็จ! ทีมงานจะติดต่อกลับโดยเร็ว' : 'Request sent! We will contact you soon.');
                  form.reset();
                } else {
                  alert(lang === 'th' ? 'เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่' : 'Failed to send. Please try again.');
                }
              } catch (err) {
                alert(lang === 'th' ? 'เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่' : 'Failed to send. Please try again.');
              }
            }}
            className="rounded-2xl border border-white/10 p-5 bg-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm">
                {lang === "th" ? "ชื่อ-นามสกุล" : "Full Name"}
                <input name="name" className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2" placeholder={lang === "th" ? "สมชาย กล้าทดลอง" : "John Doe"}/>
              </label>
              <label className="text-sm">
                {lang === "th" ? "อีเมล / เบอร์โทร" : "Email / Phone"}
                <input name="contact" className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2" placeholder={lang === "th" ? "me@company.com / 08x-xxx-xxxx" : "me@company.com / +66-xxx-xxx-xxx"}/>
              </label>
            </div>
            <label className="text-sm block mt-4">
              {lang === "th" ? "ประเภทงาน" : "Project Type"}
              <select name="projectType" className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2">
                <option>{lang === "th" ? "Embedded / IoT" : "Embedded / IoT"}</option>
                <option>{lang === "th" ? "Robotics & Automation" : "Robotics & Automation"}</option>
                <option>{lang === "th" ? "Web / Mobile App" : "Web / Mobile App"}</option>
                <option>{lang === "th" ? "Cloud / Dashboard" : "Cloud / Dashboard"}</option>
                <option>{lang === "th" ? "AI / Computer Vision" : "AI / Computer Vision"}</option>
                <option>{lang === "th" ? "PCB / Prototype" : "PCB / Prototype"}</option>
                <option>{lang === "th" ? "อื่น ๆ" : "Other"}</option>
              </select>
            </label>
            <label className="text-sm block mt-4">
              {lang === "th" ? "งบประมาณโดยประมาณ" : "Estimated Budget"}
              <select name="budget" className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2">
                <option>{lang === "th" ? "ต่ำกว่า 30,000 บาท" : "Below 30,000 THB"}</option>
                <option>{lang === "th" ? "30,000 – 80,000 บาท" : "30,000 – 80,000 THB"}</option>
                <option>{lang === "th" ? "80,000 – 200,000 บาท" : "80,000 – 200,000 THB"}</option>
                <option>{lang === "th" ? "200,000 บาทขึ้นไป" : "200,000 THB and up"}</option>
              </select>
            </label>
            <label className="text-sm block mt-4">
              {lang === "th" ? "รายละเอียดโปรเจกต์" : "Project Details"}
              <textarea name="details" rows={5} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2" placeholder={lang === "th" ? "เล่าปัญหา/เป้าหมาย, อุปกรณ์ที่มี, กำหนดเวลา, สิ่งที่ต้องการให้ทีมช่วย" : "Describe your problem/goals, available equipment, timeline, and what you need help with"}/>
            </label>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-lg">
              {lang === "th" ? "ส่งคำขอประเมิน" : "Submit Request"}
            </button>
            <div className="text-xs text-slate-400 mt-2">{lang === "th" ? "เราตอบกลับภายใน 24 ชม.ทำการ" : "We reply within 24 business hours."}</div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">MechCode Robotech</div>
            <div className="text-sm text-slate-400 mt-2">
              {lang === "th"
                ? "ทีมพัฒนา Hardware + Software ครบวงจรสำหรับธุรกิจไทย"
                : "Full-service Hardware + Software team for Thai businesses"}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">{lang === "th" ? "เมนู" : "Menu"}</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#services" className="hover:text-white">{lang === "th" ? "บริการ" : "Services"}</a></li>
              <li><a href="#works" className="hover:text-white">{lang === "th" ? "ผลงาน" : "Works"}</a></li>
              <li><a href="#process" className="hover:text-white">{lang === "th" ? "ขั้นตอน" : "Process"}</a></li>
              <li><a href="#contact" className="hover:text-white">{lang === "th" ? "ติดต่อ" : "Contact"}</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">{lang === "th" ? "ติดต่อเรา" : "Contact Us"}</div>
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> mechcoderobotech@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> 083-111-1666</div>
              <a href="https://www.facebook.com/profile.php?id=61579303216095" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><Facebook className="w-4 h-4"/> Facebook Page</a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-8 text-xs text-slate-500">© {new Date().getFullYear()} MechCode Robotech. All rights reserved.</div>
      </footer>
    </div>
  );
}