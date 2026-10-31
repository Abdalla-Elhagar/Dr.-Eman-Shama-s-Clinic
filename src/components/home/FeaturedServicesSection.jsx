import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  HeartPulse, 
  Leaf, 
  TrendingUp, 
  ShieldCheck, 
  Video, 
  ArrowLeft, 
  ArrowUpLeft,
  CheckCircle2 
} from 'lucide-react';
import { servicesData } from '../../data/services';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';

const iconMap = {
  Flame,
  HeartPulse,
  Leaf,
  TrendingUp,
  ShieldCheck,
  Video
};

export default function FeaturedServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="الخدمات والبرامج المتخصصة"
          title="حلول تغذوية متكاملة مبنية على احتياجاتكِ الصحية"
          subtitle="برامج مصممة وفق أحدث الأدلة العلمية في التغذية الإكلينيكية لمساعدتكِ على تحقيق نتائج مستدامة تدوم طوال العمر."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Leaf;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 shadow-soft hover:shadow-card transition-all duration-300 border border-sand-200/80 hover:border-forest-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-forest-50 group-hover:bg-forest-800 text-forest-800 group-hover:text-forest-200 transition-colors duration-300 flex items-center justify-center p-3 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <Badge variant="sage" className="text-[11px]">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl font-bold font-cairo text-forest-950 mb-3 group-hover:text-forest-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 border-t border-sand-200 pt-4">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-sand-100 flex items-center justify-between gap-2 mt-auto">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-forest-800 hover:text-forest-900 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>تفاصيل البرنامج</span>
                    <ArrowUpLeft className="w-4 h-4 rotate-45 text-forest-600" />
                  </Link>

                  <Button
                    to={`/booking?service=${encodeURIComponent(service.title)}`}
                    variant="outlineSage"
                    size="sm"
                    className="text-xs font-semibold"
                  >
                    حجز الاستشارة
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner & CTA to all services */}
        <div className="mt-12 text-center">
          <Button
            to="/services"
            variant="outline"
            size="lg"
            icon={ArrowLeft}
            iconPosition="end"
            className="shadow-soft"
          >
            عرض كافة تفاصيل البرامج والاستشارات
          </Button>
        </div>

      </div>
    </section>
  );
}

