// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "WB Manager – Продвижение и развитие бизнеса",
  description: "Команда профессионалов по рекламе, SEO и ведению кабинетов на Wildberries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/logo2.png"  type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
