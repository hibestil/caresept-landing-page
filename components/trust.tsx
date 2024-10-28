'use client';

import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content:
      "Caresept's AI agents have revolutionized our customer service. Clients receive instant, personalized responses 24/7, significantly reducing our team's manual workload.",
    featured: true,
  },
  {
    id: 2,
    name: 'Mike Peters',
    role: 'Product Manager',
    content:
      "The no-code data module builder allowed us to tailor the system to our exact needs without any technical expertise. It's been a game-changer for our operations.",
    featured: false,
  },
  {
    id: 3,
    name: 'Lisa Chen',
    role: 'Developer',
    content:
      'ntegrating all our communication channels into one platform has streamlined our customer interactions. Managing messages from WhatsApp, Facebook, and Instagram is now seamless.',
    featured: false,
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Marketing Director',
    content:
      "With Caresept's AI Agent Workers, we've automated repetitive tasks, freeing up our team to focus on strategic initiatives. The efficiency gains are remarkable",
    featured: false,
  },
  {
    id: 5,
    name: 'Emily Brown',
    role: 'Startup Founder',
    content:
      'The granular access control features give us peace of mind. We can securely share data with our employees, knowing that sensitive information is protected.',
    rating: 5,
    featured: false,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className={cn('relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4')}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold dark:text-white">{name}</figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TrustIndicators() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-primary">Trusted by 1000+ businesses</h2>
        <p className="mt-4 text-lg text-center dark:text-white/40 mb-10">
          Here&apos;s what our customers have to say about Caresept
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review.id}
            img={''}
            name={review.name}
            username={review.name}
            body={review.content}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard
            key={review.id}
            img={''}
            name={review.name}
            username={review.name}
            body={review.content}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
