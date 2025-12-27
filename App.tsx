import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Layout, 
  ArrowRight, 
  Lock, 
  Target, 
  ChevronRight, 
  Stamp,
  RefreshCw,
  Share2,
  X,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  Music2,
  Quote,
  MessageSquare
} from 'lucide-react';

/**
 * ScrollReveal Wrapper
 */
const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

/**
 * ScaleFadeIn Headline Wrapper
 */
const ScaleFadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="py-4 md:py-6 px-4 md:px-8 border-b-2 border-charcoal bg-paper/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tighter uppercase leading-none text-charcoal">
            CrayonPad
          </h1>
          <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60">
            Internal Build v0.1
          </span>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="hidden sm:block font-mono px-3 py-1 bg-alertRed text-paper text-[10px] font-bold tracking-widest uppercase rounded-sm">
            Status: Classified
          </div>
          <button 
            onClick={() => document.getElementById('founding-10')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest border-2 border-actionBlue text-charcoal bg-transparent hover:bg-actionBlue hover:text-white px-4 py-2 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            Request Access
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <FadeInSection>
      <section className="px-4 py-12 md:py-24 max-w-7xl mx-auto border-b-2 border-charcoal">
        <div className="font-mono editorial-line flex justify-between items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8 md:mb-12">
          <span>PH Vol. 001</span>
          <span className="hidden sm:inline">INTEL REPORT: THE CLASSROOM CRISIS</span>
          <span>FINAL NOTICE</span>
        </div>
        
        <div className="text-center max-w-5xl mx-auto">
          <ScaleFadeIn>
            <h2 className="font-serif text-4xl md:text-8xl font-bold leading-[1] md:leading-[0.9] tracking-tighter text-charcoal mb-8 md:mb-10 text-balance">
              The teaching <span className="italic">Meta</span> is broken. <br/>
              <span className="text-alertRed">We’re here to patch it.</span>
            </h2>
          </ScaleFadeIn>
          
          <p className="font-sans text-lg md:text-3xl text-mutedInk italic mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            "Keep the career you love. Get the freedom you deserve."
          </p>
          
          <button 
            onClick={() => document.getElementById('founding-10')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono group relative inline-flex items-center gap-4 bg-charcoal text-paper px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-[0.3em] hover:bg-actionBlue hover:scale-[1.05] transition-all duration-300 shadow-[6px_6px_0px_rgba(18,18,18,0.2)] hover:shadow-[10px_10px_20px_rgba(29,78,216,0.3)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Enter Beta Arena 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </FadeInSection>
  );
};

const ShareModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<'meta' | 'emotional' | 'link' | null>(null);
  const shareUrl = "https://crayonpad-beta.vercel.app/";

  const templates = {
    meta: {
      title: "The teaching 'Meta' is broken. It’s time to patch it. 🛠️",
      body: `I just found the Intel Report for CrayonPad. It’s a new system designed to strip away the "clerical latency" that’s burning out our best educators. We spend an average of 18.5 hours a week on paperwork. CrayonPad is bringing VA-level efficiency to the classroom so we can stop typing and start inspiring again. Apply for the Founding 10 here: ${shareUrl}`
    },
    emotional: {
      title: "Your PRC license was meant for changing lives—not for getting lost in paperwork. ✨",
      body: `Being a teacher shouldn't mean choosing between your family and your profession. I’m sharing the CrayonPad Manifesto because it’s time we got our time and sanity back. Let’s make teaching FUN again. Check it out: ${shareUrl}`
    }
  };

  const handleCopy = (text: string, type: 'meta' | 'emotional' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-paper newspaper-border p-6 md:p-8 max-w-2xl w-full relative shadow-[20px_20px_0px_rgba(18,18,18,0.2)] animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-mutedGrey rounded-full transition-colors"><X className="w-5 h-5 text-charcoal" /></button>

        <header className="mb-8 border-b-2 border-charcoal pb-4">
          <h4 className="font-serif text-2xl font-bold text-charcoal uppercase tracking-tight">Transmission Templates</h4>
          <p className="font-mono text-[10px] font-bold text-mutedInk uppercase tracking-widest mt-1">Select intel for propagation</p>
        </header>

        <div className="space-y-8">
          {/* Link Only */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-mutedInk">Direct Intel Link</label>
            <div className="flex gap-2">
              <input type="text" readOnly value={shareUrl} className="flex-1 bg-mutedGrey/30 border border-mutedGrey px-3 py-2 text-xs font-mono text-mutedInk focus:outline-none" />
              <button onClick={() => handleCopy(shareUrl, 'link')} className="bg-charcoal text-paper px-4 flex items-center justify-center hover:bg-actionBlue transition-colors active:scale-95">
                {copiedType === 'link' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Meta Patch Template */}
          <div className="newspaper-border p-5 bg-white space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] bg-charcoal text-white px-2 py-0.5 uppercase">Logic: System Meta</span>
              <button onClick={() => handleCopy(`${templates.meta.title}\n\n${templates.meta.body}`, 'meta')} className="text-actionBlue hover:underline font-mono text-[10px] font-bold uppercase flex items-center gap-1">
                {copiedType === 'meta' ? <><Check className="w-3 h-3"/> Copied</> : <><Copy className="w-3 h-3"/> Copy Template</>}
              </button>
            </div>
            <h5 className="font-serif font-bold text-sm text-charcoal uppercase italic">"{templates.meta.title}"</h5>
            <p className="font-sans text-xs text-mutedInk leading-relaxed">{templates.meta.body}</p>
          </div>

          {/* Emotional Legacy Template */}
          <div className="newspaper-border p-5 bg-white space-y-3 border-actionBlue/30">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] bg-actionBlue text-white px-2 py-0.5 uppercase">Logic: Professional Legacy</span>
              <button onClick={() => handleCopy(`${templates.emotional.title}\n\n${templates.emotional.body}`, 'emotional')} className="text-actionBlue hover:underline font-mono text-[10px] font-bold uppercase flex items-center gap-1">
                {copiedType === 'emotional' ? <><Check className="w-3 h-3"/> Copied</> : <><Copy className="w-3 h-3"/> Copy Template</>}
              </button>
            </div>
            <h5 className="font-serif font-bold text-sm text-charcoal uppercase italic">"{templates.emotional.title}"</h5>
            <p className="font-sans text-xs text-mutedInk leading-relaxed">{templates.emotional.body}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed border-mutedGrey">
          <p className="font-sans text-[10px] italic text-mutedInk leading-relaxed text-center">
            "Propagate the patch. Reclaim the classroom meta."
          </p>
        </div>
      </div>
    </div>
  );
};

const Editorial: React.FC<{ onShare: () => void }> = ({ onShare }) => {
  const [intelStats, setIntelStats] = useState({
    clericalHours: 18.5,
    burnoutRate: 64,
    isRefreshing: false
  });

  const refreshIntel = () => {
    setIntelStats(prev => ({ ...prev, isRefreshing: true }));
    setTimeout(() => {
      setIntelStats({
        clericalHours: parseFloat((Math.random() * (22 - 15) + 15).toFixed(1)),
        burnoutRate: Math.floor(Math.random() * (78 - 58) + 58),
        isRefreshing: false
      });
    }, 600);
  };

  return (
    <FadeInSection>
      <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b-2 border-charcoal">
        <div className="lg:col-span-8">
          <div className="mb-10 md:mb-12">
            <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6 text-charcoal">
          What every teacher needs today: A way to get the paperwork off your desk.
        </h3>
        <p className="font-sans text-lg md:text-xl italic text-mutedInk leading-relaxed max-w-2xl mb-8">
          Veteran or rookie, school forms shouldn't take your Sundays. 
          Take your time back and let’s make teaching FUN again.
        </p>
            <div className="font-mono flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-mutedInk border-y border-mutedGrey py-3">
              <div className="flex items-center gap-2">
                <span>By Leo, The Strategist</span>
                <button onClick={refreshIntel} disabled={intelStats.isRefreshing} className="p-1 hover:bg-mutedGrey rounded-full transition-all duration-300 group disabled:opacity-50 active:scale-90">
                  <RefreshCw className={`w-3 h-3 text-mutedInk ${intelStats.isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                </button>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>Miss Anna D</span>
                <button onClick={onShare} className="p-1 hover:bg-mutedGrey rounded-full transition-all duration-300 group text-mutedInk hover:text-actionBlue">
                  <Share2 className="w-3 h-3 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-alertRed">[PRC LICENSED]</span>
            </div>
          </div>
          
          <div className="md:columns-2 gap-12 column-rule font-sans text-base md:text-lg leading-relaxed text-justify space-y-6">
            <p className="drop-cap">My wife is a PRC-licensed teacher. She spent four years in university chasing one goal: to inspire. But inside the system, her license didn’t feel like a privilege. It felt like a clerical trap.</p>
            <p>DLLs. DLPs. Rubrics. TOS. I watched her fight the 'Grind' every night—balancing a nursing baby in one arm and a laptop in the other—just to be 'compliant' for tomorrow.</p>
            <p>I come from professional eSports coaching. In gaming, when a system is bloated, you patch it. You remove the friction so the player can perform. But in our schools, the friction is winning. Great educators are leaving—not because they stopped loving the students, but because they can't survive the typing.</p>
            <p>My wife eventually left too. She became a VA for a U.S. client because the tools there made her 10x more efficient. She reclaimed her sanity, but the classroom lost a licensed professional.</p>
            <p className="font-bold text-actionBlue italic">CrayonPad is the bridge. We bring that same efficiency to you, so you can keep your license and your life.</p>
          </div>
        </div>
        
        <aside className="lg:col-span-4">
          <div className="newspaper-border p-6 md:p-8 bg-charcoal text-paper space-y-8 relative overflow-hidden">
            <Stamp className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 opacity-10 rotate-12" />
            <h4 className="font-serif text-xl md:text-2xl font-bold border-b border-paper/20 pb-4 text-paper uppercase">Intelligence Report</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-paper/10 pb-2">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Avg. Clerical Hours / Week</span>
                <span className={`font-serif text-xl md:text-2xl font-bold italic transition-all duration-300 ${intelStats.isRefreshing ? 'opacity-20 translate-y-1' : 'opacity-100 translate-y-0'}`}>{intelStats.clericalHours}</span>
              </div>
              <div className="flex justify-between items-end border-b border-paper/10 pb-2">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Burnout Rate (NCR)</span>
                <span className={`font-serif text-xl md:text-2xl font-bold italic transition-all duration-300 ${intelStats.isRefreshing ? 'opacity-20 translate-y-1' : 'opacity-100 translate-y-0'}`}>{intelStats.burnoutRate}%</span>
              </div>
              <div className="flex justify-between items-end border-b border-paper/10 pb-2">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Meta Viability</span>
                <span className="font-mono text-lg md:text-xl font-bold text-alertRed underline decoration-alertRed">CRITICAL</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </FadeInSection>
  );
};

const Modules: React.FC = () => {
  return (
    <section id="modules" className="px-4 py-16 md:py-24 max-w-7xl mx-auto border-b-2 border-charcoal">
      <FadeInSection>
        <header className="mb-12 md:mb-20">
          <span className="font-mono text-[10px] font-bold tracking-[0.5em] uppercase text-actionBlue mb-4 block">[ PATCH NOTES v0.1 ]</span>
          <h3 className="font-serif text-4xl md:text-7xl font-bold tracking-tight text-charcoal uppercase">System Buffs.</h3>
        </header>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { title: "The Paperwork Patch", tag: "Module A", desc: "90% reduction in daily administrative input. Generate DLLs and DLPs mapped to DepEd competencies in under 60 seconds.", icon: <Zap className="w-8 h-8" /> },
          { title: "Evaluative Precision", tag: "Module B", desc: "Automated logic for grading and TOS. Professional-grade rubrics generated based on performance task parameters in under 30 seconds.", icon: <Target className="w-8 h-8" /> },
          { title: "The Unified Build", tag: "Module C", desc: "All 14 secret modules—from Narrative Reports to Activity Sheets—synced in one high-speed, secure dashboard.", icon: <Layout className="w-8 h-8" /> }
        ].map((module, i) => (
          <FadeInSection key={i}>
            <div className="newspaper-border p-6 md:p-8 hover:bg-charcoal hover:text-paper transition-all duration-500 group flex flex-col justify-between min-h-[350px] md:min-h-[400px] hover:shadow-[12px_12px_0px_rgba(18,18,18,0.1)] cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-40 group-hover:opacity-60">{module.tag}</span>
                  <div className="text-actionBlue group-hover:text-paper transition-colors duration-300">{module.icon}</div>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-charcoal group-hover:text-paper transition-colors duration-300 uppercase">{module.title}</h4>
                <p className="font-sans text-sm md:text-base text-mutedInk group-hover:text-paper/70 leading-relaxed transition-colors duration-300">{module.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-mutedGrey group-hover:border-paper/10 flex items-center justify-between transition-colors duration-300">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Active Status</span>
                <Lock className="w-4 h-4 opacity-30 group-hover:opacity-60" />
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

/**
 * Enhanced CommunityCTA with Web Share Logic
 */
const CommunityCTA: React.FC<{ onShare: () => void }> = ({ onShare }) => {
  const handleSharePatch = async () => {
    const shareData = {
      title: 'CrayonPad - Reclaim Your Teaching License',
      text: 'The teaching "Meta" is broken. It’s time to patch it. 🛠️ Join the CrayonPad movement to stop the clerical grind for Filipino educators.',
      url: 'https://crayonpad-beta.vercel.app',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        onShare(); // Fallback to modal
      }
    } catch (err) {
      onShare(); // Fallback to modal on cancel/error
    }
  };

  return (
    <FadeInSection>
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto border-b-2 border-charcoal text-center bg-paper relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-charcoal/20"></div>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl md:text-6xl font-extrabold text-charcoal uppercase leading-tight tracking-tight">
              LET'S HELP OUR TEACHERS.
            </h3>
            <div className="flex justify-center items-center gap-3 text-mutedInk">
              <Quote className="w-5 h-5 opacity-20" />
              <p className="font-sans text-lg md:text-2xl italic leading-relaxed max-w-2xl">
                "We aren't just building a tool; we're launching a counter-offensive against burnout. Help spread the word to a fellow educator today."
              </p>
              <Quote className="w-5 h-5 opacity-20 rotate-180" />
            </div>
          </div>
          
          <button 
            onClick={handleSharePatch}
            className="font-mono group inline-flex items-center gap-4 bg-actionBlue text-paper px-12 py-5 text-sm md:text-base font-bold uppercase tracking-[0.4em] hover:bg-charcoal hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_rgba(29,78,216,0.2)] active:scale-95 active:shadow-none"
          >
            SHARE THE PATCH <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </FadeInSection>
  );
};

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', prcLicense: '', email: '', schoolId: '', statement: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'REQUIRED';
    if (!formData.prcLicense.trim()) newErrors.prcLicense = 'REQUIRED';
    if (!formData.email.trim()) { newErrors.email = 'REQUIRED'; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'INVALID FORMAT'; }
    if (!formData.schoolId.trim()) newErrors.schoolId = 'REQUIRED';
    if (!formData.statement.trim()) newErrors.statement = 'REQUIRED';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
// --- Start of Patch ---
  const inputClasses = (fieldName: string) => 
    `w-full h-12 md:h-14 bg-white border ${errors[fieldName] ? 'border-alertRed' : 'border-mutedGrey'} px-4 text-[10px] md:text-xs font-bold text-charcoal uppercase tracking-widest focus:outline-none focus:border-actionBlue focus:ring-4 focus:ring-actionBlue/10 transition-all duration-300 placeholder:opacity-50`;
  // --- End of Patch ---
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Run your validation first
    if (validate()) {
      try {
        // 2. Transmit data to Formspree
        const response = await fetch("https://formspree.io/f/xpqzwvoq", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });

        // 3. If transmission is successful, show the "Transmission Received" screen
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("System Error: Transmission failed. Please try again.");
        }
      } catch (error) {
        alert("Network Error: Check your connection.");
      }
    }
  };
if (submitted) {
    return (
      <section id="founding-10" className="px-4 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <div className="newspaper-border p-8 md:p-12 bg-white inline-block max-w-xl shadow-[12px_12px_0px_#1D4ED8]">
          <h3 className="font-serif text-3xl font-bold text-charcoal uppercase mb-6 text-alertRed">Submission Received</h3>
          <p className="font-sans text-sm font-bold text-mutedInk leading-relaxed mb-8">
            Thanks for participating! Your credentials have been logged. 
            You will receive an email transmission if you are selected for the upcoming Beta.
          </p>
          <div className="border-t border-mutedGrey pt-6">
            <p className="font-mono text-[10px] tracking-widest uppercase mb-4">Follow for updates:</p>
            <div className="flex justify-center gap-6">
              <span className="font-bold text-actionBlue text-xs cursor-pointer uppercase">Facebook</span>
              <span className="font-bold text-actionBlue text-xs cursor-pointer uppercase">TikTok</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
  <section id="founding-10" className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Header and Status List */}
        <FadeInSection className="space-y-8 md:space-y-10">
          <header className="mb-8">
            <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-charcoal uppercase text-balance">
              Recruiting the Founding 10.
            </h3>
          </header>

          <div className="space-y-6 border-l-4 border-actionBlue pl-6 md:pl-8 font-mono">
            <div className="flex items-center gap-4">
              <ChevronRight className="w-4 h-4 text-actionBlue" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">PRC Verification Required</span>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight className="w-4 h-4 text-actionBlue" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Lifetime Strategist Status</span>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight className="w-4 h-4 text-actionBlue" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Priority Feature Request Access</span>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight className="w-4 h-4 text-actionBlue" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Early Adopter Badge Authenticated</span>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight className="w-4 h-4 text-actionBlue" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Zero-Latency Paperwork Patch</span>
            </div>
          </div>
        </FadeInSection>

        {/* RIGHT COLUMN: Intake Form */}
        <FadeInSection>
          <div className="newspaper-border p-6 md:p-12 bg-white shadow-[12px_12px_0px_#1D4ED8] md:shadow-[16px_16px_0px_#1D4ED8] shadow-opacity-20">
            <div className="text-center mb-8 md:mb-10 border-b-2 border-charcoal pb-6 md:pb-8">
              <Stamp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-charcoal opacity-40" />
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-charcoal uppercase">Intake Form v0.1</h4>
              <div className="font-mono inline-block px-3 py-1 bg-alertRed text-paper text-[10px] font-bold uppercase tracking-widest rounded-sm mt-4">CLOSED BETA</div>
            </div>

            <form className="font-mono bg-paper border border-dashed border-mutedGrey p-4 md:p-8 space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div className="space-y-1"><input type="text" placeholder="FULL NAME (PER LICENSE)" className={inputClasses('fullName')} onChange={(e) => setFormData({...formData, fullName: e.target.value})} /></div>
                <div className="space-y-1"><input type="text" placeholder="PRC LICENSE NUMBER" className={inputClasses('prcLicense')} onChange={(e) => setFormData({...formData, prcLicense: e.target.value})} /></div>
                <div className="space-y-1"><input type="email" placeholder="PERSONAL / DEPED EMAIL" className={inputClasses('email')} onChange={(e) => setFormData({...formData, email: e.target.value})} /></div>
                <div className="space-y-1"><input type="text" placeholder="SCHOOL ID / REGION" className={inputClasses('schoolId')} onChange={(e) => setFormData({...formData, schoolId: e.target.value})} /></div>
                <div className="space-y-1"><textarea placeholder="TELL US: Which part of your paperwork do you want to automate first?" rows={4} className={`w-full bg-white border ${errors.statement ? 'border-alertRed' : 'border-mutedGrey'} p-3 text-sm focus:outline-none focus:border-actionBlue transition-colors`} onChange={(e) => setFormData({...formData, statement: e.target.value})} /></div>
              </div>
              <button type="submit" className="w-full bg-actionBlue text-paper py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-[0.4em] hover:bg-actionBlue hover:brightness-110 hover:scale-[1.02] transition-all">
                SUBMIT INTAKE REQUEST
              </button>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-charcoal uppercase">Intake Form v0.1</h4>
              <div className="font-mono inline-block px-3 py-1 bg-alertRed text-paper text-[10px] font-bold uppercase tracking-widest rounded-sm mt-4">CLOSED BETA</div>
            </div>
            <form className="font-mono bg-paper border border-dashed border-mutedGrey p-4 md:p-8 space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div className="space-y-1"><input type="text" placeholder="FULL NAME (PER LICENSE)" className={inputClasses('fullName')} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />{errors.fullName && <p className="text-[9px] text-alertRed font-bold tracking-tighter">[{errors.fullName}]</p>}</div>
                <div className="space-y-1"><input type="text" placeholder="PRC LICENSE NUMBER" className={inputClasses('prcLicense')} onChange={(e) => setFormData({...formData, prcLicense: e.target.value})} />{errors.prcLicense && <p className="text-[9px] text-alertRed font-bold tracking-tighter">[{errors.prcLicense}]</p>}</div>
                <div className="space-y-1"><input type="email" placeholder="PERSONAL / DEPED EMAIL" className={inputClasses('email')} onChange={(e) => setFormData({...formData, email: e.target.value})} />{errors.email && <p className="text-[9px] text-alertRed font-bold tracking-tighter">[{errors.email}]</p>}</div>
                <div className="space-y-1"><input type="text" placeholder="SCHOOL ID / REGION" className={inputClasses('schoolId')} onChange={(e) => setFormData({...formData, schoolId: e.target.value})} />{errors.schoolId && <p className="text-[9px] text-alertRed font-bold tracking-tighter">[{errors.schoolId}]</p>}</div>
                <div className="space-y-1"><textarea placeholder="TELL US: Which part of your paperwork do you want to automate first?" rows={4} className={`w-full bg-white border ${errors.statement ? 'border-alertRed' : 'border-mutedGrey'} p-4 text-[10px] md:text-xs font-bold text-charcoal uppercase tracking-widest leading-loose focus:outline-none focus:border-actionBlue focus:ring-4 focus:ring-actionBlue/10 transition-all duration-300 placeholder:opacity-50 resize-none`} onChange={(e) => setFormData({...formData, statement: e.target.value})}></textarea>{errors.statement && <p className="text-[9px] text-alertRed font-bold tracking-tighter">[{errors.statement}]</p>}</div>
              </div>
              <button type="submit" className="w-full bg-actionBlue text-paper py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-[0.4em] hover:bg-actionBlue hover:brightness-110 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-xl active:shadow-none">Submit Credential</button>
            </form>
            <div className="mt-6 md:mt-8 space-y-2">
              <p className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-center text-actionBlue/80 px-4">Your credentials are encrypted and used only to verify professional status for Beta access.</p>
              <p className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-center opacity-40 px-4">* By submitting, you acknowledge that access is limited to 10 strategists for the initial build cycle.</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <FadeInSection>
      <footer className="px-4 mt-20 md:mt-32 pt-12 pb-12 border-t border-mutedGrey flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-mutedInk text-center md:text-left max-w-7xl mx-auto">
        <div>© 2024 CrayonPad Technologies // Philippines</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8"><a href="#" className="hover:text-actionBlue transition-colors duration-300">Privacy Protocol</a><a href="#" className="hover:text-actionBlue transition-colors duration-300">Intel Terms</a></div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-actionBlue" /> SECURE BUILD</div>
      </footer>
    </FadeInSection>
  );
};

const App: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  return (
    <div className="min-h-screen selection:bg-actionBlue selection:text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Editorial onShare={() => setIsShareModalOpen(true)} />
        <Modules />
        <CommunityCTA onShare={() => setIsShareModalOpen(true)} />
        <Signup />
      </main>
      <Footer />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </div>
  );
};

export default App;
