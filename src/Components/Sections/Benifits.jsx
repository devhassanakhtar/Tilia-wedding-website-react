import React from 'react'
import { Camera, User, ShoppingBag, Monitor } from 'lucide-react'
import contactPage from '../../assets/contact-page.jpg'

const Benifits = () => {

    const benifits = [ 
        {
            icon: Camera,
            title: 'Weddings',
            description: 'Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.'
        },
        {
            icon: User,
            title: 'Portraits',
            description: 'Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.'
        },
        {
            icon: ShoppingBag,
            title: 'Fashion',
            description: 'Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.'
        },
        {
            icon: Monitor,
            title: 'Editorial',
            description: 'Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.'
        }

    ]

return (
    <section id='benifits' className='py-12 relative' style={{backgroundImage: `url(${contactPage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
            {/* Black overlay */}
            <div className='absolute inset-0 bg-black opacity-30'></div>
            
            <div className='max-w-7xl mx-auto px-4 relative z-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start'>
                            {benifits.map((benifit, idx) => {
                                    const Icon = benifit.icon
                                    return (
                                            <article key={idx} className='bg-transparent rounded-lg p-6 flex flex-col items-start gap-4 hover:scale-102 transition'>
                                                    <Icon className='w-8 h-8 text-teal-600'/>
                                                    <h3 className='text-lg text-white font-semibold'>{benifit.title}</h3>
                                                    <p className='text-sm text-white'>{benifit.description}</p>
                                            </article>
                                    )
                            })}
                    </div>
            </div>
    </section>
)
}

export default Benifits