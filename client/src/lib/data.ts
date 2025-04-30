import { FileText, Layout, ClipboardList, DollarSign, Image, MessageSquare, User, TrendingUp, Target, MessageCircle } from "lucide-react";
import React from "react";

export const features = [
  {
    title: "10+ сторінок гайду",
    description: "Детальний PDF-гайд з усіма необхідними кроками для створення успішного крипто-каналу",
    icon: React.createElement(FileText, { className: "w-6 h-6 text-primary" })
  },
  {
    title: "Шаблони постів",
    description: "Готові шаблони та формати постів для різного типу контенту, які можна використовувати одразу",
    icon: React.createElement(Layout, { className: "w-6 h-6 text-primary" })
  },
  {
    title: "Покроковий план",
    description: "Детальний план запуску та розвитку каналу з конкретними діями на кожному етапі",
    icon: React.createElement(ClipboardList, { className: "w-6 h-6 text-primary" })
  },
  {
    title: "Стратегії монетизації",
    description: "Перевірені способи монетизації крипто-каналу з першого місяця його існування",
    icon: React.createElement(DollarSign, { className: "w-6 h-6 text-primary" })
  },
  {
    title: "Приклади оформлення",
    description: "Готові приклади візуального оформлення каналу для залучення цільової аудиторії",
    icon: React.createElement(Image, { className: "w-6 h-6 text-primary" })
  },
  {
    title: "Особиста консультація",
    description: "Доступ до особистої консультації з автором для вирішення конкретних питань щодо твого проєкту",
    icon: React.createElement(MessageSquare, { className: "w-6 h-6 text-primary" })
  }
];

export const audienceItems = [
  {
    title: "Новачки в крипто-просторі",
    description: "Тим, хто хоче створити Telegram-канал під крипту з нуля і не знає, з чого почати",
    icon: React.createElement(User, { className: "w-5 h-5 text-white" })
  },
  {
    title: "Трейдери та крипто-ентузіасти",
    description: "Тим, хто бажає ділитися своїми знаннями та досвідом через власний канал в Telegram",
    icon: React.createElement(TrendingUp, { className: "w-5 h-5 text-white" })
  },
  {
    title: "Шукачі монетизації",
    description: "Тим, хто вже має канал або хоче створити його з метою заробітку в крипто-ніші",
    icon: React.createElement(DollarSign, { className: "w-5 h-5 text-white" })
  },
  {
    title: "Інфлюенсери та блогери",
    description: "Тим, хто вже має досвід у створенні контенту і хоче успішно адаптуватися до крипто-ніші",
    icon: React.createElement(MessageCircle, { className: "w-5 h-5 text-white" })
  }
];

export const pricingPlans = [
  {
    index: 0,
    title: "PDF-гайд",
    price: {
      amount: "299",
      currency: "грн"
    },
    features: [
      { text: "10+ сторінок гайду", included: true },
      { text: "Покроковий план запуску", included: true },
      { text: "Основи монетизації", included: true },
      { text: "Шаблони постів", included: false },
      { text: "Особиста консультація", included: false }
    ],
    buttonText: "Купити гайд",
    popular: false
  },
  {
    index: 1,
    title: "PDF + шаблони",
    price: {
      amount: "499",
      currency: "грн"
    },
    features: [
      { text: "10+ сторінок гайду", included: true },
      { text: "Покроковий план запуску", included: true },
      { text: "Повні стратегії монетизації", included: true },
      { text: "Шаблони постів та оформлення", included: true },
      { text: "Особиста консультація", included: false }
    ],
    buttonText: "Купити комплект",
    popular: true
  },
  {
    index: 2,
    title: "Повний супровід",
    price: {
      amount: "від 2500",
      currency: "грн"
    },
    features: [
      { text: "Все з попередніх планів", included: true },
      { text: "Особисті консультації", included: true },
      { text: "Індивідуальна стратегія", included: true },
      { text: "Допомога у запуску", included: true },
      { text: "Підтримка на всіх етапах", included: true }
    ],
    buttonText: "Замовити супровід",
    popular: false
  }
];

export const faqItems = [
  {
    question: "Чи підійде мені, якщо я новачок?",
    answer: "Абсолютно! Наш гайд створений спеціально для початківців і містить покрокові інструкції з самих азів. Ми пояснюємо всі терміни, показуємо конкретні приклади та даємо готові шаблони, які допоможуть вам стартувати навіть без досвіду."
  },
  {
    question: "Чи зможу я продавати щось через свій канал?",
    answer: "Так, у гайді детально розібрані різні способи монетизації каналу. Від партнерських програм та рекламних інтеграцій до створення власних інфопродуктів. Ви отримаєте покрокові стратегії, які допоможуть почати заробляти вже у перший місяць роботи каналу."
  },
  {
    question: "Як я отримаю гайд?",
    answer: "Після оплати ви отримаєте лист на вказану вами електронну пошту з посиланням для завантаження гайду у форматі PDF. Якщо ви купуєте тариф із шаблонами, то отримаєте додатковий архів з матеріалами. Доступ до матеріалів надається протягом 5 хвилин після підтвердження оплати."
  },
  {
    question: "Чи можна оплатити криптою?",
    answer: "Так, ми приймаємо оплату в криптовалюті (BTC, ETH, USDT). Після вибору тарифу ви отримаєте інструкції з оплати в криптовалюті. Також доступні класичні способи оплати: банківська карта, електронні гаманці та інші платіжні сервіси."
  },
  {
    question: "Який мінімум підписників, щоб заробляти?",
    answer: "У крипто-ніші навіть канали з 500-1000 підписників можуть почати заробляти, якщо правильно вибудувана стратегія та якісно підібрана аудиторія. У гайді ми розповідаємо про специфічні способи монетизації для каналів різного розміру, включаючи стратегії для нових каналів з невеликою кількістю підписників."
  }
];
