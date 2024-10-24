'use client';

import React, { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import {
  MessageSquare,
  Mail,
  Phone,
  Slack,
  Bot,
  FileSpreadsheet,
  FileText,
  Calendar,
  Video,
  MessageCircle,
  Briefcase,
  Building2,
  Database,
} from 'lucide-react';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-110',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = 'Circle';

const apps = [
  { icon: MessageSquare, label: 'WhatsApp' },
  { icon: Mail, label: 'Email' },
  { icon: FileSpreadsheet, label: 'Excel' },
  { icon: FileText, label: 'Word' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Slack, label: 'Slack' },
  { icon: MessageCircle, label: 'Teams' },
  { icon: Video, label: 'Meetings' },
  { icon: Briefcase, label: 'Salesforce' },
  { icon: Building2, label: 'HubSpot' },
  { icon: Database, label: 'Oracle' },
];

export default function IntegrationBeams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const appRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm"
      ref={containerRef}
    >
      {/* Center AI Hub */}
      <Circle
        ref={centerRef}
        className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 bg-primary"
      >
        <Bot className="h-8 w-8 text-primary-foreground" />
      </Circle>

      {/* Integration Icons */}
      {apps.map((app, index) => {
        const angle = (Math.PI * index) / (apps.length / 2); // Distribute over 180 degrees
        const radius = 200; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius - radius / 4; // Offset to position on right side

        return (
          <div
            key={app.label}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <Circle
              ref={(el) => {
                appRefs.current[index] = el;
              }}
              className="group relative"
            >
              <app.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {app.label}
              </span>
            </Circle>
          </div>
        );
      })}

      {/* Animated Beams */}
      {appRefs.current.map(
        (ref, index) =>
          ref && (
            <AnimatedBeam
              key={index}
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={{ current: ref }}
              duration={2}
              delay={index * 0.2}
            />
          )
      )}
    </div>
  );
}
