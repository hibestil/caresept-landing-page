'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

type NavItem = {
  title: string;
  href: string;
  description?: string;
  subItems?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: 'Features',
    href: '/features',
    description: 'Explore our AI-powered CRM capabilities',
    subItems: [
      {
        title: 'AI-Powered Insights',
        href: '/features/ai-insights',
        description: 'Gain actionable insights from your customer data',
      },
      {
        title: 'Automated Workflows',
        href: '/features/automated-workflows',
        description: 'Streamline your sales and support processes',
      },
      {
        title: 'Predictive Analytics',
        href: '/features/predictive-analytics',
        description: 'Forecast customer behavior and trends',
      },
      {
        title: 'Omnichannel Support',
        href: '/features/omnichannel-support',
        description: 'Provide seamless customer experiences across all channels',
      },
    ],
  },
  {
    title: 'Solutions',
    href: '/solutions',
    description: 'Tailored solutions for various industries',
    subItems: [
      {
        title: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'Improve patient care and streamline operations',
      },
      {
        title: 'Finance',
        href: '/solutions/finance',
        description: 'Enhance customer relationships in the financial sector',
      },
      {
        title: 'Retail',
        href: '/solutions/retail',
        description: 'Personalize shopping experiences and boost sales',
      },
    ],
  },
  {
    title: 'Pricing',
    href: '/pricing',
    description: 'Flexible plans for businesses of all sizes',
  },
  {
    title: 'Resources',
    href: '/resources',
    description: 'Guides, webinars, and best practices',
    subItems: [
      {
        title: 'Blog',
        href: '/resources/blog',
        description: 'Latest insights and industry trends',
      },
      {
        title: 'Case Studies',
        href: '/resources/case-studies',
        description: 'Success stories from our clients',
      },
      {
        title: 'Webinars',
        href: '/resources/webinars',
        description: 'Educational sessions and product demos',
      },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="sticky flex items-center justify-between top-0 z-50 lg:px-10 w-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center just w-screen px-2">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/caresept-e.svg" alt="CareAI" width={100} height={45} />
          </Link>
          <DesktopNav items={navItems} />
        </div>
        <MobileNav items={navItems} />
        <Link className="w-full md:hidden" href={'/'}>
          <Image src="/caresept-e.svg" alt="CareAI" width={100} height={45} />
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button className="md:inline-flex hidden text-blue-600" size={'lg'} variant={'outline'}>
            Contact Sales
          </Button>
          <Button className="md:inline-flex primary-gradient" size={'lg'}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger
                  className={cn(pathname.startsWith(item.href) && 'text-primary')}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.href}
                        title={subItem.title}
                        href={subItem.href}
                        className={cn(
                          pathname === subItem.href &&
                            'bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-pink-600/20'
                        )}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === item.href && 'text-primary'
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="m-2 px-2 md:hidden">
          <Menu className="h-7 w-7 text-fuchsia-600" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] flex flex-col items-start justify-between p-0"
      >
        <div className="flex flex-col w-full h-full">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/caresept-e.svg" alt="CareAI" width={100} height={45} />
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto w-full px-4 py-6">
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.href} className="border-b border-border/50 last:border-none">
                  {item.subItems ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem value={item.href} className="border-none">
                        <AccordionTrigger
                          className={cn(
                            'py-4 text-base hover:no-underline ',
                            pathname.startsWith(item.href) && 'primary-text font-medium font-bold'
                          )}
                        >
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-3 pb-4">
                            {item.subItems.map((subItem) => (
                              <SheetClose asChild key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    'pl-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent',
                                    pathname === subItem.href &&
                                      'text-primary font-medium bg-accent'
                                  )}
                                >
                                  <div className="flex font-semibold items-center justify-between">
                                    <span>{subItem.title}</span>
                                    <ChevronRight className="h-4 w-4 opacity-50" />
                                  </div>
                                  {subItem.description && (
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between py-4 text-base hover:text-primary transition-colors',
                          pathname === item.href && 'text-primary font-medium'
                        )}
                      >
                        <span>{item.title}</span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </SheetClose>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="border-t p-4 space-y-3 mt-auto">
            <Button className="w-full primary-gradient">Get Started</Button>
            <Button variant="outline" className="w-full text-fuchsia-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-semibold leading-none group-hover:primary-text">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-fuchsia-600/60">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
