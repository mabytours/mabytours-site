
const translations = {
  pt: {
    title: "Mabytours",
    subtitle: "Experiências exclusivas em transporte turístico",
    menu_about: "Sobre",
    menu_services: "Serviços",
    menu_booking: "Reserva",
    menu_contact: "Contatos",
    hero_title: "Viaje com conforto, estilo e segurança",
    book_now: "Reservar Agora",
    about_title: "Sobre Nós",
    about_text: "A Mabytours oferece transporte turístico de excelência, com frota moderna e equipe dedicada. Transformamos cada viagem em uma experiência única e memorável.",
    services_title: "Nossos Serviços",
    services_1: "Transfers executivos e personalizados",
    services_2: "Excursões de luxo",
    services_3: "Serviços para eventos e empresas",
    services_4: "Tour cultural e gastronômico",
    booking_title: "Reserva Online",
    form_name: "Nome e Apelido:",
    form_email: "Email:",
    form_phone: "Telefone:",
    form_date: "Data da Viagem:",
    form_people: "Nº de Pessoas:",
    send_request: "Enviar Pedido",
    contact_title: "Contatos",
    whatsapp: "Fale via WhatsApp",
    form_success: "✔️ Mensagem enviada com sucesso!",
    form_error: "❌ Ocorreu um erro. Tente novamente.",
    about_text: "A Mabytours oferece transporte turístico de excelência, com frota moderna e equipe dedicada. Transformamos cada viagem em uma experiência única e memorável. Atuamos em todo o país, com foco na qualidade, segurança e bem-estar dos nossos clientes.",
    open_booking_form: "Abrir Formulario"
  },
  es: {
    title: "Mabytours",
    subtitle: "Experiencias exclusivas en transporte turístico",
    menu_about: "Sobre nosotros",
    menu_services: "Servicios",
    menu_booking: "Reservas",
    menu_contact: "Contactos",
    hero_title: "Viaja con comodidad, estilo y seguridad",
    book_now: "Reservar Ahora",
    about_title: "Sobre Nosotros",
    about_text: "Mabytours ofrece transporte turístico de excelencia, con una flota moderna y un equipo dedicado. Convertimos cada viaje en una experiencia inolvidable.",
    services_title: "Nuestros Servicios",
    services_1: "Traslados ejecutivos y personalizados",
    services_2: "Excursiones de lujo",
    services_3: "Servicios para eventos y empresas",
    services_4: "Tours culturales y gastronómicos",
    booking_title: "Reserva Online",
    back_home: "← Volver a la pagina inicial",
    form_name: "Nombre y Apellido:",
    form_email: "Correo electrónico:",
    form_phone: "Teléfono:",
    form_date: "Fecha del viaje:",
    form_people: "Nº de personas:",
    form_departure: "Lugar de salida",
    form_arrival: "Lugar de llegada",
    form_comments: "Comentarios",
    send_request: "Enviar solicitud",
    contact_title: "Contactos",
    whatsapp: "Hablar por WhatsApp",
    open_booking_form: "Abrir Formulario",
    form_success: "✔️ ¡Mensaje enviado con éxito!",
    form_error: "❌ Ocurrió un error. Inténtalo de nuevo.",
    about_text: "Mabytours ofrece transporte turístico de excelencia con una flota moderna y un equipo dedicado. Convertimos cada viaje en una experiencia única e inolvidable. Operamos en todo el país con enfoque en calidad, seguridad y bienestar."
  },
  en: {
    title: "Mabytours",
    subtitle: "Exclusive experiences in tourist transportation",
    menu_about: "About",
    menu_services: "Services",
    menu_booking: "Booking",
    menu_contact: "Contacts",
    hero_title: "Travel with comfort, style and safety",
    book_now: "Book Now",
    about_title: "About Us",
    about_text: "Mabytours offers excellent tourist transportation with a modern fleet and a dedicated team. We turn every trip into a unique and memorable experience.",
    services_title: "Our Services",
    services_1: "Executive and personalized transfers",
    services_2: "Luxury excursions",
    services_3: "Corporate and event services",
    services_4: "Cultural and gastronomic tours",
    booking_title: "Online Booking",
    back_home: "← Back to Homepage",
    form_name: "Name and Surname:",
    form_email: "Email:",
    form_phone: "Phone:",
    form_date: "Travel Date:",
    form_people: "Number of People:",
    form_departure: "Departure location",
    form_arrival: "Arrival place",
    form_comments: "Comments",
    send_request: "Send Request",
    contact_title: "Contacts",
    whatsapp: "Chat on WhatsApp",
    open_booking_form: "Open Form",
    form_success: "✔️ Message sent successfully!",
    form_error: "❌ An error occurred. Please try again.",
    about_text: "Mabytours offers premium tourist transportation with a modern fleet and a dedicated team. We turn every trip into a unique and memorable experience. We operate nationwide, focusing on quality, safety, and comfort."
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang); // salva a escolha
  applyLang(lang);

// marcar botão ativo
    document.querySelectorAll(".lang-switch button").forEach(btn => btn.classList.remove("active"));
    document.getElementById("btn-" + lang).classList.add("active");
  }

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ao carregar qualquer página, aplica o idioma salvo
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "pt"; // padrão: pt
  applyLang(lang);
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero5.jpg",
    "images/hero6.jpg",
    "images/hero7.jpg",
    "images/hero8.jpg",
    "images/hero9.jpg",
    "images/hero10.jpg",
    "images/hero11.jpg",
    "images/hero12.jpg",
    "images/hero13.jpg",
    "images/hero14.jpg",
    "images/hero15.jpg",
    "images/hero16.jpg",
    "images/hero17.jpg",
    "images/hero18.jpg",
    "images/hero19.jpg",
    "images/hero20.jpg",
    "images/hero21.jpg",
    "images/hero22.jpg"
    
  ];
  let index = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  changeBackground(); // inicia com a primeira imagem
  setInterval(changeBackground, 5000); // troca a cada 5 segundos
});