/**
 * About section for the landing page.
 * Displays about info, benefits, and participation.
 */
export interface AboutData {
  title: string;
  subtext: string;
}
export interface CardItem {
  icon: string;
  text: string;
}
interface AboutSectionProps {
  about: AboutData;
  benefits: CardItem[];
  participation: CardItem[];
}
import { Card } from "./Card";

export function AboutSection({ about, benefits, participation }: AboutSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{about.title}</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">{about.subtext}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card title="Benefícios" items={benefits} />
          <Card title="Como Participar" items={participation} />
        </div>
      </div>
    </section>
  );
}
