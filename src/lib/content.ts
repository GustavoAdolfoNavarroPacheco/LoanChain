import { siteConfig } from "./site";

export type Step = {
  step: string;
  title: string;
  description: string;
  points: string[];
};

export type Feature = {
  icon: string;
  tag: string;
  title: string;
  description: string;
};

export type Value = {
  icon: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navLinks = [
  { href: siteConfig.links.howItWorks, label: "Cómo funciona" },
  { href: siteConfig.links.features, label: "Características" },
  { href: siteConfig.links.community, label: "Comunidad" },
  { href: siteConfig.links.faq, label: "Preguntas frecuentes" },
];

export const heroStats = [
  { value: "12", label: "requerimientos funcionales" },
  { value: "4", label: "módulos de producto" },
  { value: "24 h", label: "aviso previo de vencimiento" },
  { value: "AES-256", label: "cifrado en reposo" },
];

export const steps: Step[] = [
  {
    step: "01",
    title: "Crea o únete a una cadena",
    description:
      "Define el monto del aporte semanal, la cantidad máxima de participantes y la fecha de inicio de tu grupo de ahorro.",
    points: ["Aportes semanales fijos", "Grupos a tu medida"],
  },
  {
    step: "02",
    title: "Aporta cada semana",
    description:
      "Registra cada abono a la cadena y consulta el estado de tu semana en tiempo real.",
    points: ["Estados: Pagado, Pendiente, En Mora", "Historial de aportes"],
  },
  {
    step: "03",
    title: "Recibe el fondo en tu turno",
    description:
      "La app genera un calendario de adjudicación con fechas exactas. El fondo acumulado se asigna de forma cíclica a cada participante.",
    points: ["Turnos secuenciales o aleatorios", "Calendario automático"],
  },
  {
    step: "04",
    title: "Financia tus metas con microcréditos",
    description:
      "Simula y solicita microcréditos accesibles para bienes de primera necesidad o vehículos, con un plan de pagos calculado automáticamente.",
    points: ["Cuotas y vencimientos automáticos", "Seguimiento: Al día, Abonado, En Mora, Liquidado"],
  },
];

export const features: Feature[] = [
  {
    icon: "shield",
    tag: "RF-03",
    title: "Cifrado AES-256 en reposo",
    description:
      "El documento de identidad y la fecha de expedición se cifran con AES-256 antes de insertarse en PostgreSQL. El acceso directo a las tablas no expone datos sensibles.",
  },
  {
    icon: "key",
    tag: "RF-01",
    title: "Inicio de sesión unificado",
    description:
      "Ingresa con correo y contraseña o con tu cuenta de Google y Apple (SSO), sin memorizar contraseñas nuevas.",
  },
  {
    icon: "lock",
    tag: "RF-04",
    title: "Contraseñas con bcrypt",
    description:
      "Las credenciales se procesan con el algoritmo irreversible bcrypt antes de almacenarse. Nunca se guardan en texto plano.",
  },
  {
    icon: "wifi-off",
    tag: "RF-12",
    title: "Modo Offline-First",
    description:
      "Los calendarios de pago y los estados de deuda se guardan en una base local embebida (Hive/Isar): consulta saldos sin conexión a internet.",
  },
  {
    icon: "bell",
    tag: "RF-11",
    title: "Notificaciones 24 h antes",
    description:
      "Alertas push automáticas antes del vencimiento de cada aporte de la cadena o cuota de crédito.",
  },
  {
    icon: "audit",
    tag: "RF-10",
    title: "Auditoría inmutable",
    description:
      "Todo movimiento financiero queda registrado en un historial transaccional ACID. Ningún saldo cambia sin su registro asociado.",
  },
  {
    icon: "calendar",
    tag: "RF-06",
    title: "Turnos automatizados",
    description:
      "Calendario de adjudicación con fechas exactas: distribución secuencial o aleatoria, según la configuración del grupo.",
  },
  {
    icon: "mora",
    tag: "RF-07",
    title: "Control de mora",
    description:
      "Estados de aporte y deuda siempre visibles (Pagado, Pendiente, En Mora) para evitar deudas descontroladas y errores de cálculo.",
  },
];

export const values: Value[] = [
  {
    icon: "heart",
    title: "Confianza",
    description:
      "Cada peso se registra en un historial inmutable y verificable. Lo que ves es lo que hay.",
  },
  {
    icon: "eye",
    title: "Transparencia",
    description:
      "Calendarios de turnos, aportes y estados de deuda visibles para todos los participantes del grupo.",
  },
  {
    icon: "users",
    title: "Colaboración",
    description:
      "Ahorro en comunidad: el fondo se asigna cíclicamente para que todos los miembros se beneficien por igual.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "¿Qué es una cadena de ahorro (natillera)?",
    answer:
      "Es un modelo de economía colaborativa donde un grupo de personas realiza aportes económicos semanales fijos. Cada semana, la totalidad del fondo acumulado se asigna a un participante diferente, según el calendario de turnos establecido. LoanChain digitaliza todo el proceso para que sea transparente y sin errores de cálculo.",
  },
  {
    question: "¿Cómo se asignan los turnos de recaudo?",
    answer:
      "La aplicación genera un calendario de adjudicación con fechas exactas y distribuye los turnos de recaudo entre los miembros del grupo de forma secuencial o aleatoria, según la configuración que el grupo elija al crear la cadena.",
  },
  {
    question: "¿Qué pasa si no pago un aporte a tiempo?",
    answer:
      "Cada abono actualiza tu estado de la semana: Pagado, Pendiente o En Mora. El sistema te recuerda automáticamente 24 horas antes del vencimiento con una notificación push, y el seguimiento de mora es visible para el administrador y el grupo, evitando deudas descontroladas.",
  },
  {
    question: "¿Mis datos personales están seguros?",
    answer:
      "Sí. Los datos de identificación legal (documento de identidad y fecha de expedición) se cifran en reposo con AES-256 antes de insertarse en la base de datos, las contraseñas se procesan con bcrypt, la autenticación usa tokens JWT y toda la comunicación viaja cifrada por TLS/HTTPS.",
  },
  {
    question: "¿Puedo consultar mi información sin conexión a internet?",
    answer:
      "Sí. LoanChain es Offline-First: los calendarios de pago y los estados de deuda se guardan en una base de datos local embebida (Hive/Isar) en tu teléfono, para que puedas consultar tus saldos aunque no tengas conexión activa.",
  },
  {
    question: "¿Cómo funciona el sistema de microcréditos?",
    answer:
      "Puedes formular microcréditos accesibles para bienes de primera necesidad o vehículos, como una motocicleta o mejoras del hogar. La app calcula automáticamente el plan de pagos: cuotas, fechas de vencimiento e intereses aplicados, y hace seguimiento del estado de cada cuota: Al día, Abonado, En Mora o Liquidado.",
  },
  {
    question: "¿En qué dispositivos estará disponible?",
    answer:
      "La aplicación móvil se compila desde una única base de código para Android e iOS, garantizando un rendimiento fluido incluso en dispositivos de gama media y baja.",
  },
  {
    question: "¿Cuándo estará disponible la aplicación?",
    answer:
      "LoanChain se encuentra actualmente en fase de desarrollo (MVP). Esta página web informativa es el canal oficial para conocer el producto. Déjanos tus datos en el formulario de contacto y te avisaremos cuando esté disponible.",
  },
];
