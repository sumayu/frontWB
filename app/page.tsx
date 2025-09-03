"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, Search, TrendingUp, Settings, Zap, Users, Star } from "lucide-react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const services = [
    { title: "Работа под ключ", description: "Получите готовый бизнес с нуля", icon: Briefcase, details: "Подробнее в лс" },
    { title: "Настройка рекламы", description: "Внутренняя и внешняя реклама WB", icon: Target, details: "Поисковое продвижение и РК" },
    { title: "Подбор товара", description: "Анализ и поиск прибыльных ниш", icon: Search, details: "Исследование конкурентов" },
    { title: "SEO-оптимизация", description: "Улучшение позиций в поиске", icon: TrendingUp, details: "Семантика и описания" },
    { title: "Ведение кабинетов", description: "Постоянная поддержка аккаунтов", icon: Settings, details: "Долгосрочное сотрудничество" },
    { title: "Разовые услуги", description: "Любая сфера работы с WB", icon: Zap, details: "Гибкий подход" },
  ];

  const cases = [
    {
      title: "Кейс 1",
      image: "/case1.png",
      description: "Грамотная проработка рекламы и СЕО карточки приносят результат с первой недели!",
    },
    {
      title: "Кейс 2",
      image: "/case2.png",
      description: "Вышли на ежемесячное ведение кабинета и выросли за счет внутренней рекламы. Товар постоянного спроса!",
    },
    {
      title: "Кейс 3",
      image: "/case3.png",
      description: "Ежемесячное ведение, результат работы за 3 недели.",
    },
    {
      title: "Кейс 4",
      image: "/case4.png",
      description: "Первый месяц сотрудничества, ниши косметики. Пока показатели выросли на 1.4 млн, показатели ДРР снизились, ЧП соответственно выросла.",
    },
    {
      title: "Кейс 5",
      image: "/case5.png",
      description: "Неделя работы с рекламой перед прибыльным сезоном на маркетплейсах. Подготовка к сезону, чтобы максимально увеличить продажи.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 relative">
      {/* Логотип в правом верхнем углу */}
      <img 
        src="/logo.png" 
        alt="Логотип" 
        className="absolute top-4 right-4 w-20 h-20 z-50 pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gray-800/50" />
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Плашка команды */}
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

          {/* Плашки с опытом */}
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
        <div className="flex gap-6 overflow-x-auto scroll-smooth">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-gray-800 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setActiveCase(index)}
            >
              <img src={caseItem.image} alt={caseItem.title} className="rounded-lg mb-4" />
              <p className="text-gray-300 text-center">{caseItem.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Модальное окно кейса */}
      {activeCase !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="bg-gray-700 border border-gray-600 rounded-xl p-8 max-w-lg w-full relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={() => setActiveCase(null)}
            >
              ×
            </button>
            <img
              src={cases[activeCase].image}
              alt={cases[activeCase].title}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-2xl font-bold mb-4 text-white">{cases[activeCase].title}</h3>
            <p className="text-gray-300 mb-4">{cases[activeCase].description}</p>
            <Button
              variant="ghost"
              onClick={() => setActiveCase(null)}
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}

      {/* Услуги */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Наши услуги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer bg-gray-700 border border-gray-600 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
              onClick={() => setActiveService(index)}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Модальное окно услуг */}
        {activeService !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActiveService(null)}
          >
            <div
              className="bg-gray-700 border border-gray-600 rounded-xl p-8 max-w-lg w-full relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold"
                onClick={() => setActiveService(null)}
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-white">{services[activeService].title}</h3>
              <p className="text-gray-300 mb-4">{services[activeService].details}</p>
              <Button
                variant="ghost"
                onClick={() => setActiveService(null)}
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Закрыть
              </Button>
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
            href="https://t.me/portfolioFooskosWB/4" 
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
