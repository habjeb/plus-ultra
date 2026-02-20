import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imgPath } from "../lib/imgPath";

const PROGRAM_OPTIONS = [
  { value: "", label: "Sélectionnez un programme" },
  { value: "FULL ACCESS", label: "FULL ACCESS — Adultes" },
  { value: "ADO FIGHTERS", label: "ADO FIGHTERS — Adolescents" },
  { value: "KIDS FIGHTERS", label: "KIDS FIGHTERS — Enfants" },
  { value: "BABY FIGHTERS", label: "BABY FIGHTERS — Tout-petits" },
  { value: "Cours d'Essai Gratuit", label: "Cours d'Essai Gratuit" },
  { value: "Personal Training", label: "Coaching Privé" },
] as const;

export function Contact() {
  const [searchParams] = useSearchParams();
  const programFromUrl = searchParams.get("program") || "";
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ─── Configuration ───────────────────────────────────────────────
  // Remplacez par votre clé API Web3Forms (https://web3forms.com — gratuit)
  // ou utilisez un autre endpoint (Formspree, EmailJS, API custom…)
  const WEB3FORMS_KEY = "VOTRE_CLE_WEB3FORMS";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = (formData.get("firstName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    const nextErrors: Record<string, string> = {};
    if (!firstName) nextErrors.firstName = "Le prénom est requis.";
    if (!email) nextErrors.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Email invalide.";
    if (!message) nextErrors.message = "Le message est requis.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitStatus("sending");

    try {
      // Ajout de la clé API Web3Forms au formulaire
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", `Nouveau message de ${firstName} — Plus Ultra MMA`);
      formData.append("from_name", "Plus Ultra MMA Club");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("sent");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };
  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=30+chemin+de+la+Gravi%C3%A8re+38200+Vienne";

  const contactInfo = [
    {
      id: "location",
      icon: MapPin,
      title: "Adresse",
      content: "30 chemin de la Gravière",
      subContent: "38200 Vienne"
    },
    {
      id: "phone",
      icon: Phone,
      title: "Téléphone",
      content: "06 27 96 13 84",
      subContent: undefined
    },
    {
      id: "hours",
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven : 7h - 21h",
      subContent: "Samedi : 8h - 16h"
    }
  ];

  const socialLinks = [
    { id: "instagram", icon: Instagram, imgSrc: imgPath("instagram-icon.png"), href: "https://www.instagram.com/plus.ultra_vienne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram Plus Ultra MMA" },
  ];

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imgPath("WhatsApp Image 2026-02-09 at 11.46.49 (1).jpeg")}
          alt="Urban Neon Lights"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            NOUS
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> CONTACTER</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Prêt à commencer l'aventure ? Contactez-nous dès aujourd'hui et faites le premier pas vers votre meilleure version.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-white mb-8">Informations de contact</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.id} className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{info.title}</h4>
                    <p className="text-gray-300">{info.content}</p>
                    {info.subContent && (
                      <p className="text-gray-400 text-sm">{info.subContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 overflow-hidden p-1"
                    aria-label={social.label}
                  >
                    {"imgSrc" in social && social.imgSrc ? (
                      <img src={social.imgSrc} alt={social.label} className="w-full h-full object-contain" style={{ width: '70px', height: '69px' }} />
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black/50 border-gray-800 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-black text-white mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-white font-semibold mb-2">Prénom</label>
                    <Input
                      id="contact-firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "contact-firstName-err" : undefined}
                    />
                    {errors.firstName && <p id="contact-firstName-err" className="text-pink-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-lastName" className="block text-white font-semibold mb-2">Nom</label>
                    <Input
                      id="contact-lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-white font-semibold mb-2">Email</label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-err" : undefined}
                    />
                    {errors.email && <p id="contact-email-err" className="text-pink-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-white font-semibold mb-2">Téléphone</label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-program" className="block text-white font-semibold mb-2">Programme souhaité</label>
                  <select
                    id="contact-program"
                    name="program"
                    defaultValue={programFromUrl}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  >
                    {PROGRAM_OPTIONS.map((opt) => (
                      <option key={opt.value || "default"} value={opt.value}>{opt.label}</option>
                    ))}
                    {/* Si le programme vient d'un lien (ex: nom de cours), l'afficher aussi */}
                    {programFromUrl && !PROGRAM_OPTIONS.some(o => o.value === programFromUrl) && (
                      <option value={programFromUrl}>{programFromUrl}</option>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-white font-semibold mb-2">Votre message</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Parlez-nous de vos objectifs, votre niveau d'expérience ou toute question..."
                    rows={5}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-err" : undefined}
                  />
                  {errors.message && <p id="contact-message-err" className="text-pink-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {submitStatus === "sent" && <p className="text-green-400 font-medium">Message envoyé. Nous vous recontacterons rapidement.</p>}
                {submitStatus === "error" && <p className="text-pink-400 font-medium">Une erreur est survenue. Réessayez.</p>}

                <Button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {submitStatus === "sending" ? "Envoi..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-black/50 border-gray-800 overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">Nous trouver</h4>
                <p className="text-gray-300">30 chemin de la Gravière</p>
                <p className="text-gray-400">38200 Vienne</p>
                <Button asChild className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 font-bold uppercase tracking-wide">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Itinéraire
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}