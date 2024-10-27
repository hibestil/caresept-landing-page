import Link from 'next/link';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter, FaFacebook } from 'react-icons/fa6';
import { AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import { Facebook, Youtube } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="flex flex-col items-start justify-center">
            <Image src={'/caresept-e.svg'} alt="image" width={100} height={100} />
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground">
                  Product
                </Link>
              </li>
              <li>
                <Link href="resources" className="text-foreground/60 hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-foreground/60 hover:text-foreground">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-foreground/60 hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-foreground/60 hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-foreground/60 hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/caresept"
                className="text-foreground/60 hover:text-foreground"
                target="blank"
              >
                <FaSquareXTwitter fontSize="large" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/caresept/"
                className="text-foreground/60 hover:text-foreground"
                target="blank"
              >
                <FaLinkedin fontSize="large" />
              </Link>
              <Link
                href="https://fb.com/caresept"
                className="text-foreground/60 hover:text-foreground"
                target="blank"
              >
                <FaFacebook fontSize="large" />
              </Link>
              <Link
                href="http://www.youtube.com/@caresept"
                className="text-foreground/60 hover:text-foreground"
                target="blank"
              >
                <FaYoutube fontSize="large" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-border/40 mt-2 border-t">
          <p className="text-foreground/60 text-center text-sm mt-4">
            &copy; 2024 Caresept. All rights reserved.
          </p>
        </div>
        <LanguageSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
