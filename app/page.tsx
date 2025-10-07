"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, Search, TrendingUp, Settings, Zap, Users, Star, X, Maximize2, CheckCircle2, ArrowRight, Clock, Percent, BarChart3 } from "lucide-react";

export default function Home() {
const [activeService, setActiveService] = useState<number | null>(null);
const [activeCase, setActiveCase] = useState<number | null>(null);
const [fullImage, setFullImage] = useState<string | null>(null);

  const services = [
    { 
      title: "Работа под ключ", 
      description: "Получите готовый бизнес с нуля", 
      icon: Briefcase, 
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400",
      details: {
        fullDescription: "Полный цикл запуска и развития бизнеса на Wildberries. От выбора ниши до первых продаж и масштабирования.",
        features: [
          "Анализ рынка и подбор прибыльной ниши",
          "Поиск надежных поставщиков",
          "Создание и оптимизация карточек товаров",
          "Настройка всех видов рекламы",
          "Логистика и работа со складами",
          "Ежедневный мониторинг и аналитика"
        ],
        price: "от 50 000 ₽",
        timing: "Запуск за 14-21 день",
        result: "Готовый магазин с первыми продажами"
      }
    },
    { 
      title: "Настройка рекламы", 
      description: "Внутренняя и внешняя реклама WB", 
      icon: Target, 
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      details: {
        fullDescription: "Профессиональная настройка и ведение рекламных кампаний для максимального ROI и роста продаж.",
        features: [
          "Настройка поисковой рекламы WB",
          "Рекламные кампании (РК, Автокампании)",
          "Таргетированная реклама в каталоге",
          "A/B тестирование объявлений",
          "Оптимизация ставок и бюджета",
          "Еженедельные отчеты по эффективности"
        ],
        price: "от 25 000 ₽",
        timing: "Первые результаты через 3-5 дней",
        result: "Рост продаж на 200-400%"
      }
    },
    { 
      title: "Подбор товара", 
      description: "Анализ и поиск прибыльных ниш", 
      icon: Search, 
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      details: {
        fullDescription: "Глубокий анализ рынка WB для поиска товаров с высокой маржинальностью и стабильным спросом.",
        features: [
          "Анализ 50+ ниш на прибыльность",
          "Исследование конкурентов",
          "Расчет юнит-экономики",
          "Прогноз продаж и окупаемости",
          "Поиск поставщиков и производителей",
          "Детальный отчет с рекомендациями"
        ],
        price: "от 15 000 ₽",
        timing: "Анализ за 5-7 дней",
        result: "3-5 готовых ниш для запуска"
      }
    },
    { 
      title: "SEO-оптимизация", 
      description: "Улучшение позиций в поиске", 
      icon: TrendingUp, 
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      details: {
        fullDescription: "Комплексная оптимизация карточек товаров для выхода в ТОП поисковой выдачи Wildberries.",
        features: [
          "Сбор и анализ семантического ядра",
          "Оптимизация названий и описаний",
          "Улучшение визуального контента",
          "Работа с отзывами и рейтингом",
          "Мониторинг позиций в поиске",
          "Рекомендации по улучшению"
        ],
        price: "от 10 000 ₽",
        timing: "Первые результаты через 7-14 дней",
        result: "Выход в ТОП-10 по целевым запросам"
      }
    },
    { 
      title: "Ведение кабинетов", 
      description: "Постоянная поддержка аккаунтов", 
      icon: Settings, 
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      details: {
        fullDescription: "Полное ежедневное управление вашим магазином на WB с постоянной оптимизацией всех процессов.",
        features: [
          "Ежедневный мониторинг продаж",
          "Управление остатками и логистикой",
          "Ведение рекламных кампаний",
          "Работа с отзывами и вопросами",
          "Аналитика и отчетность",
          "Постоянная оптимизация"
        ],
        price: "от 30 000 ₽/мес",
        timing: "Долгосрочное сотрудничество",
        result: "Стабильный рост продаж"
      }
    },
    { 
      title: "Разовые услуги", 
      description: "Любая сфера работы с WB", 
      icon: Zap, 
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
      details: {
        fullDescription: "Решение конкретных задач и точечные улучшения вашего магазина на Wildberries.",
        features: [
          "Аудит текущего кабинета",
          "Разовая настройка рекламы",
          "Создание карточек товаров",
          "Консультации по стратегии",
          "Решение технических проблем",
          "Обучение команды"
        ],
        price: "от 5 000 ₽",
        timing: "Гибкий формат",
        result: "Решение конкретной задачи"
      }
    },
  ];

  const cases = [
    { 
      title: "Кейс 1", 
      text: "Грамотная проработка рекламы и SEO карточки приносят результат с первой недели!",
      niche: "Товары для детей",
      period: "1 месяц",
      revenue: "943 852 ₽",
      avgIncome: "560 000 ₽",
      profit: "273 000 ₽",
      turnover: "до 40 дней",
      profitability: "48.75%",
      client: "Анастасия",
      budget: "200 000 ₽ / 500 пар",
      service: "Запуск магазина под ключ, Доверительное управление"
    },
    { 
      title: "Кейс 2", 
      text: "Вышли на ежемесячное ведение кабинета и выросли за счет внутренней рекламы. Товар постоянного спроса.",
      niche: "Одежда",
      period: "2 месяца",
      revenue: "1 250 000 ₽",
      avgIncome: "625 000 ₽",
      profit: "350 000 ₽",
      turnover: "до 30 дней",
      profitability: "52%",
      client: "Ирина",
      budget: "150 000 ₽/мес",
      service: "Ежемесячное ведение кабинета"
    },
    { 
      title: "Кейс 3", 
      text: "Ежемесячное ведение, результат работы за 3 недели.",
      niche: "Электроника",
      period: "3 недели",
      revenue: "780 000 ₽",
      avgIncome: "390 000 ₽",
      profit: "195 000 ₽",
      turnover: "до 25 дней",
      profitability: "45%",
      client: "Максим",
      budget: "100 000 ₽",
      service: "Настройка рекламы"
    },
    { 
      title: "Кейс 4", 
      text: "Первый месяц сотрудничества, ниши косметики, рост по алгоритмам WB, показатели DRR снизились, ЧП вырос.",
      niche: "Косметика",
      period: "1 месяц",
      revenue: "1 450 000 ₽",
      avgIncome: "725 000 ₽",
      profit: "420 000 ₽",
      turnover: "до 35 дней",
      profitability: "58%",
      client: "Екатерина",
      budget: "250 000 ₽",
      service: "Комплексное продвижение"
    },
    { 
      title: "Кейс 5", 
      text: "Неделя работы с рекламой перед прибыльным сезоном на маркетплейсах.",
      niche: "Товары для дома",
      period: "1 неделя",
      revenue: "520 000 ₽",
      avgIncome: "260 000 ₽",
      profit: "130 000 ₽",
      turnover: "до 20 дней",
      profitability: "50%",
      client: "Дмитрий",
      budget: "80 000 ₽",
      service: "Экспресс настройка рекламы"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 relative">
      <div className="bg-gray-800 text-white px-6 relative">
        <img 
          src="/logo2.png" 
          alt="Логотип" 
          className="absolute top-2 sm:top-4 md:top-4 right-4 w-20 h-20 md:w-24 md:h-24 sm:w-16 sm:h-16" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gray-800/50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full mb-8 mx-auto">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Действующая команда менеджеров</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Мы помогаем вашему бизнесу расти 
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Наша команда с большим практическим опытом по продвижению и ведению бизнеса на WB.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Многолетний опыт</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>Проверенные результаты</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span>Премиум подход</span>
            </div>
          </div>
        </div>
      </section>

      {/* Карусель кейсов */}
      <section className="max-w-7xl mx-auto mb-16 overflow-hidden relative">
        <div 
          className="scroll-container gap-6"
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
        >
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-gray-800 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setActiveCase(index)}
            >
              <img 
                src={`/case${index + 1}.jpg`} 
                alt={`Case ${index + 1}`} 
                className="rounded-lg mb-4 w-full h-auto"
              />
            </div>
          ))}
          {cases.map((caseItem, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-60 bg-gray-800 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setActiveCase(index)}
            >
              <img 
                src={`/case${index + 1}.jpg`} 
                alt={`Case ${index + 1}`} 
                className="rounded-lg mb-4 w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Улучшенное модальное окно кейса */}
        {activeCase !== null && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-8"
            onClick={() => setActiveCase(null)}
          >
            <div
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Кнопка закрытия */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 text-white transition-colors"
                onClick={() => setActiveCase(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Левая часть - Изображение */}
                <div className="relative group">
                  <img
                    src={`/case${activeCase + 1}.jpg`}
                    alt={`Case ${activeCase + 1}`}
                    className="rounded-2xl w-full h-auto object-cover border border-purple-500/20 shadow-2xl cursor-pointer"
                    onClick={() => setFullImage(`/case${activeCase + 1}.jpg`)}
                  />
                  
                  {/* Кнопка увеличения */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setFullImage(`/case${activeCase + 1}.jpg`)}
                  >
                    <Maximize2 className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Правая часть - Информация */}
                <div className="flex flex-col justify-between space-y-6">
                  {/* Заголовок ниши */}
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                      <span className="text-purple-300 text-sm font-medium">
                        Ниша: {cases[activeCase].niche}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {cases[activeCase].title}
                    </h3>
                  </div>

                  {/* Основные метрики */}
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">Период:</span>
                        <span className="text-white font-semibold">{cases[activeCase].period}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Оборот за период:</span>
                        <span className="text-purple-400 font-bold text-xl">{cases[activeCase].revenue}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="text-gray-400 text-sm mb-1">Средний доход в месяц:</div>
                        <div className="text-white font-bold text-lg">{cases[activeCase].avgIncome}</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="text-gray-400 text-sm mb-1">Средняя чистая прибыль в месяц:</div>
                        <div className="text-green-400 font-bold text-lg">{cases[activeCase].profit}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="text-gray-400 text-sm mb-1">Оборачиваемость партии:</div>
                        <div className="text-white font-semibold">{cases[activeCase].turnover}</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="text-gray-400 text-sm mb-1">Рентабельность:</div>
                        <div className="text-amber-400 font-bold text-lg">{cases[activeCase].profitability}</div>
                      </div>
                    </div>
                  </div>

                  {/* Клиент и услуга */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-5 border border-purple-500/30">
                      <div className="text-purple-300 text-sm font-semibold mb-2">{cases[activeCase].client}</div>
                      <div className="text-white mb-3">
                        <span className="text-gray-400">Бюджет на закупку и продвижение товара: </span>
                        <span className="font-bold">{cases[activeCase].budget}</span>
                      </div>
                      <div className="text-white">
                        <span className="text-gray-400">Услуга: </span>
                        <span className="font-medium">{cases[activeCase].service}</span>
                      </div>
                    </div>

                    {/* Описание */}
                    <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {cases[activeCase].text}
                      </p>
                    </div>
                  </div>

                  {/* Кнопка закрытия внизу */}
                  <button
                    onClick={() => setActiveCase(null)}
                    className="w-full px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg transition-all duration-300"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Лайтбокс для полного изображения */}
        {fullImage && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={() => setFullImage(null)}
          >
            <div
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => setFullImage(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={fullImage}
                alt="Full Case"
                className="rounded-2xl shadow-2xl max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Услуги */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Полный спектр услуг для успешного развития вашего бизнеса на Wildberries
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-600/50 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm"
              onClick={() => setActiveService(index)}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Percent className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{service.details.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">{service.details.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">{service.details.result}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Улучшенное модальное окно для услуг */}
        {activeService !== null && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setActiveService(null)}
          >
            <div
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl p-8 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 text-white transition-colors"
                onClick={() => setActiveService(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`w-20 h-20 bg-gradient-to-br ${services[activeService].gradient} rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(services[activeService].icon, {
                  className: `w-10 h-10 ${services[activeService].iconColor}`
                })}
              </div>

              <h3 className="text-4xl font-bold mb-4 text-white">
                {services[activeService].title}
              </h3>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {services[activeService].details.fullDescription}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="w-5 h-5 text-green-400" />
                    <div className="text-gray-400 text-sm">Стоимость</div>
                  </div>
                  <div className="text-white font-bold text-lg">
                    {services[activeService].details.price}
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div className="text-gray-400 text-sm">Сроки</div>
                  </div>
                  <div className="text-white font-bold text-lg">
                    {services[activeService].details.timing}
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <div className="text-gray-400 text-sm">Результат</div>
                  </div>
                  <div className="text-white font-bold text-lg">
                    {services[activeService].details.result}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Что входит в услугу:</h4>
                <div className="space-y-3">
                  {services[activeService].details.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a 
         href="https://t.me/AnnaEXP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 text-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Заказать услугу
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </a>

                <Button
                  variant="outline"
                  onClick={() => setActiveService(null)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-6 px-8"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Гибкие условия сотрудничества */}
      <section className="text-center mb-16">
        <Card className="inline-block bg-gray-700 border border-gray-600">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Гибкие условия сотрудничества</h3>
            <p className="text-gray-300 text-lg">
              Разовые задачи или долгосрочные проекты — выберите удобный формат работы
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Готовы начать?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Напишите нам в Telegram для обсуждения проекта и получения персонального предложения
          </p>
          
          <a 
  href="https://t.me/AnnaEXP" 
              target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 border-0"
            >
              Связаться в Telegram
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500">
            © 2024 Наша команда. Специалисты по развитию бизнеса на Wildberries
          </p>
        </div>
      </footer>
    </div>
  );
}
