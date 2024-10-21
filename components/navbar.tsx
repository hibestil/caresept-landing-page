"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu, ChevronDown } from "lucide-react"
import { ModeToggle } from "./ui/mode-toggle"

type NavItem = {
  title: string
  href: string
  description?: string
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Features",
    href: "/features",
    description: "Explore our AI-powered CRM capabilities",
    subItems: [
      {
        title: "AI-Powered Insights",
        href: "/features/ai-insights",
        description: "Gain actionable insights from your customer data",
      },
      {
        title: "Automated Workflows",
        href: "/features/automated-workflows",
        description: "Streamline your sales and support processes",
      },
      {
        title: "Predictive Analytics",
        href: "/features/predictive-analytics",
        description: "Forecast customer behavior and trends",
      },
      {
        title: "Omnichannel Support",
        href: "/features/omnichannel-support",
        description: "Provide seamless customer experiences across all channels",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "Tailored solutions for various industries",
    subItems: [
      {
        title: "Healthcare",
        href: "/solutions/healthcare",
        description: "Improve patient care and streamline operations",
      },
      {
        title: "Finance",
        href: "/solutions/finance",
        description: "Enhance customer relationships in the financial sector",
      },
      {
        title: "Retail",
        href: "/solutions/retail",
        description: "Personalize shopping experiences and boost sales",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Flexible plans for businesses of all sizes",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Guides, webinars, and best practices",
    subItems: [
      {
        title: "Blog",
        href: "/resources/blog",
        description: "Latest insights and industry trends",
      },
      {
        title: "Case Studies",
        href: "/resources/case-studies",
        description: "Success stories from our clients",
      },
      {
        title: "Webinars",
        href: "/resources/webinars",
        description: "Educational sessions and product demos",
      },
    ],
  },
]

export default function Navbar() {
  return (
    <header className="sticky flex items-center justify-between top-0 z-50 w-screen bg-red-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center w-full">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Caresept</span>
          </Link>
          <DesktopNav items={navItems} />
        </div>
        <MobileNav items={navItems} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="w-full md:w-auto">
              Sign In
            </Button>
          </div>
          <Button className="hidden md:inline-flex">Get Started</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.href}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">CareAI</span>
        </Link>
        <nav className="mt-6 flex flex-col space-y-3">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.href}>
                {item.subItems ? (
                  <>
                    <AccordionTrigger className="text-sm hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.subItems.map((subItem) => (
                          <SheetClose asChild key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className="text-muted-foreground hover:text-primary"
                            >
                              {subItem.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </>
                ) : (
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 text-sm hover:text-primary"
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </SheetClose>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
        <div className="mt-6 space-y-4">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"