import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import ShineBorder from './ui/shine-border'


const cardData = [
    {
        title: 'Title 1',
        description: 'Description 1',
        image: '/c1.jpg',
        cta: 'Learn More',
        ctaLink: '/learn-more',
        ctaType: 'primary',
    },
    {
        title: 'Title 2',
        description: 'Description 2',
        image: '/c2.jpg',
        cta: 'Learn More',
        ctaLink: '/learn-more',
        ctaType: 'primary',
    },
    {
        title: 'Title 3',
        description: 'Description 3',
        image: '/c3.jpg',
        cta: 'Learn More',
        ctaLink: '/learn-more',
        ctaType: 'primary',
    },
    {
        title: 'Title 4',
        description: 'Description 4',
        image: '/c4.jpg',
        cta: 'Learn More',
        ctaLink: '/learn-more',
        ctaType: 'primary',
    },
]

function SCCard() {
  return (
    <section className='w-full flex flex-col items-center justify-center '>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col gap-4'>
            {cardData.map((card, index) => (
               <SCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                cta={card.cta}
                ctaLink={card.ctaLink}
                ctaType={card.ctaType}
                />
            ))}
            </div>
        </div>
    </section>
  )
}

export default SCCard


function SCard({
    title,
    description,
    image,
    cta,
    ctaLink,
    ctaType,
    ...props
    }: {
    title: string
    description: string
    image: string
    cta: string
    ctaLink: string
    ctaType: string
    }) {
    return (
        
        <Card className="group overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="relative h-full">
              <Image 
                src={image} 
                alt={title} 
                width={400} 
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          </div>
  
          <div className="w-full md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600">
              {description}
            </p>
            <Link 
              href={ctaLink}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              {cta}
            </Link>
          </div>
        </div>
      </Card>
    )
}