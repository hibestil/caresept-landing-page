'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Heart,
  Share2,
  Star,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Workflow,
  BarChart2,
  Bell,
  Smartphone,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const GridCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [likedCards, setLikedCards] = useState(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'AI-Powered Workflows',
      description:
        'Automate complex business processes with our intelligent workflow engine. Leverage AI to optimize task routing, automate decisions, and enhance productivity.',
      badge: 'Enterprise',
      rating: '99% Efficiency',
      features: [
        'Smart task automation',
        'Dynamic workflow builder',
        'AI-driven decision making',
        'Real-time optimization',
      ],
      icon: Workflow,
      integrations: '20+ Popular Tools',
      imagePath: '/workflow.jpg',
    },
    {
      id: 2,
      title: 'Advanced Analytics Dashboard',
      description:
        'Get deep insights into your customer relationships with our AI-enhanced analytics. Visualize trends, predict outcomes, and make data-driven decisions.',
      badge: 'Analytics',
      rating: '95% Accuracy',
      features: [
        'Predictive analytics',
        'Custom reporting',
        'Real-time metrics',
        'AI-powered forecasting',
      ],
      icon: BarChart2,
      integrations: '15+ Data Sources',
      imagePath: '/c1.jpg',
    },
    {
      id: 3,
      title: 'Smart Notifications',
      description:
        'Stay informed with context-aware notifications. Our AI prioritizes alerts based on importance and user behavior patterns.',
      badge: 'Communication',
      rating: '90% Engagement',
      features: [
        'Priority-based alerts',
        'Multi-channel delivery',
        'Smart scheduling',
        'Behavioral adaptation',
      ],
      icon: Bell,
      integrations: '10+ Channels',
      imagePath: '/c3.jpg',
    },
    {
      id: 4,
      title: 'Mobile CRM Suite',
      description:
        'Access your entire CRM system on the go. Our mobile app provides seamless integration with all features and real-time synchronization.',
      badge: 'Mobile',
      rating: '4.8 App Rating',
      features: ['Offline capabilities', 'Secure access', 'Real-time sync', 'Native experience'],
      icon: Smartphone,
      integrations: 'iOS & Android',
      imagePath: '/c4.jpg',
    },
  ];

  const handleTouchStart = (e: { touches: { clientX: React.SetStateAction<number> }[] }) => {
    setTouchStart(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: { touches: { clientX: number }[] }) => {
    if (!isSwiping) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < cards.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };
  interface CardContentProps {
    card: any;
    isExpanded?: boolean;
  }

  const CardContent = ({ card, isExpanded = false }: CardContentProps) => (
    <div
      className={`p-6 h-full flex flex-col justify-between text-white ${isExpanded ? 'space-y-4' : ''}`}
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary" className="text-sm">
            {card.badge}
          </Badge>
          <span className="text-sm font-medium">{card.price}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className={`text-sm ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
          {card.description}
        </p>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Available all year
            </p>
            <p className="text-sm flex items-center gap-2 mt-2">Location: {card.location}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span>{card.rating}</span>
        </div>
        <div className="flex gap-2">
          {!isExpanded && (
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCard(card);
              }}
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  const MobileNavigation = () => (
    <div className="flex justify-center items-center gap-4 mt-4 md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <span className="text-sm">
        {activeIndex + 1} / {cards.length}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setActiveIndex(Math.min(cards.length - 1, activeIndex + 1))}
        disabled={activeIndex === cards.length - 1}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );

  return (
    <section className="w-screen">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Mobile View */}
        <div className="block md:hidden">
          <Card
            className="relative h-[400px] overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${cards[activeIndex].imagePath})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20">
              <CardContent card={cards[activeIndex]} />
            </div>
          </Card>
          <MobileNavigation />
        </div>

        {/* Desktop View */}
        <div className="hidden md:block space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-6">
            <Card className="relative group col-span-1 h-64 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-md"
                style={{ backgroundImage: `url(${cards[0].imagePath})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20 opacity-100 transition-opacity duration-300">
                <CardContent card={cards[0]} />
              </div>
            </Card>

            <Card className="relative group col-span-2 h-64 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
                style={{ backgroundImage: `url(${cards[1].imagePath})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20 opacity-100 transition-opacity duration-300">
                <CardContent card={cards[1]} />
              </div>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-6">
            <Card className="relative group col-span-2 h-64 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
                style={{ backgroundImage: `url(${cards[2].imagePath})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20 opacity-100 transition-opacity duration-300">
                <CardContent card={cards[2]} />
              </div>
            </Card>

            <Card className="relative group col-span-1 h-64 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
                style={{ backgroundImage: `url(${cards[3].imagePath})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20 opacity-100 transition-opacity duration-300">
                <CardContent card={cards[3]} />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={selectedCard !== null} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCard?.title}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          <div className="relative h-[400px] overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedCard?.imagePath})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/20">
              {selectedCard && <CardContent card={selectedCard} isExpanded={true} />}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GridCards;
