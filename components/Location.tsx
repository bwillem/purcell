import Map from './Map';
import Container from './Container';
import Supertitle from './Supertitle';
import H2 from './H2';
import { forwardRef } from 'react';
import useNav from '@/hooks/useNav';

const Location = forwardRef<HTMLDivElement, {}>((props) => {
    const ref = useNav('location')

    return (
        <div ref={ref} id='location-section'>
            <div className='w-full lg:flex lg:relative h-auto lg:h-[660px]'>
                <div className='hidden lg:block w-1/2'>
                </div>
                <div className='hidden lg:block w-1/2'>
                    <Map />
                </div>
                <Container className='py-24 lg:py-0 block lg:absolute lg:[transform:translate(-50%,100px)] lg:[left:50%]'>
                    <div className='space-y-8 lg:max-w-[32em]'>
                        <div className='space-y-3'>
                            <Supertitle className='text-primary-medium'>
                                Location
                            </Supertitle>
                            <H2>
                                Central Interior location connects Kelowna, Alberta and the U.S. border within 4 hours.
                            </H2>
                        </div>
                        <p>
                            With immediate access and exposure to over 10,000 vehicles per day along Highway 3A, Purcell Business Centre offers convenient regional connectivity throughout the BC Interior and to the U.S. border (~1 hr.). Nelson represents the commercial hub of the Kootenays, given its central location between Vancouver, BC (west), Calgary, AB (east), and Spokane, WA (south), and its access to several regional airports, including the West Kootenay Regional Airport (WKRA) (~30 mins). Local businesses in the Kootenay Region benefit from a total trade area of nearly 70,000 people, and a thriving tourism industry that in 2019 saw ~550,000 visitors spend over $600 million.
                        </p>
                        <div className='flex max-w-prose'>
                            <div className='w-1/3'>
                                <H2>+70,000</H2>
                                <p>Total Trade Area Population</p>
                            </div>
                            <div className='w-1/3'>
                                <H2>+550,000</H2>
                                <p>Annual Visitors</p>
                            </div>
                            <div className='w-1/3'>
                                <H2>+10,400</H2>
                                <p>Avg. Daily Vehicle Traffic (Hwy 3A)</p>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className='block lg:hidden h-full w-full'>
                    <Map />
                </div>
            </div>
            <div className='bg-primary'>
                <Container className='py-24'>
                    <H2>Amenities</H2>
                    <p className='text-white mt-8'>
                        Nelson is rich in amenities with retail, restaurant, and hospitality services within a 5-minute drive from Purcell Business Centre. Well known as a unique mix of big-city amenities with authentic small town charm, Nelson features a long list of restaurants, boutique stores, craft breweries, rustic cafes and high quality hotels, all nestled within a bustling downtown core. A long list of leisure and recreational activities including several golf courses, ski resorts and lakefront destinations further make Nelson an exceptional place for both business and lifestyle.
                    </p>
                    <div className='hidden lg:flex my-24 gap-4'>
                        <div>
                            <img src='/img/nelson-golf.png' />
                        </div>
                        <div>
                            <img src='/img/nelson-skier.png' />
                        </div>
                        <div>
                            <img src='/img/nelson-hotel.jpg' />
                        </div>
                        <div>
                            <img src='/img/nelson-street.png' />
                        </div>
                        <div>
                            <img src='/img/nelson-lake.png' />
                        </div>
                    </div>
                </Container>
                <Container className='flex flex-wrap items-center py-24'>
                    <div className='w-full lg:w-1/2 pb-8 lg:pb-0'>
                        <H2>Driving Times</H2>
                        <div className='flex mt-8'>
                            <div className='w-1/2'>
                                <Supertitle className='text-white mb-4'>Regional</Supertitle>
                                <p className='text-white'>Cranbrook — 2 hrs 45 mins</p>
                                <p className='text-white'>Osoyoos — 3 hrs</p>
                                <p className='text-white'>Spokane, WA — 3 hrs 15 mins</p>
                                <p className='text-white'>Kelowna — 3 hrs 30 mins</p>
                                <p className='text-white'>Kamploops — 5 hrs 30 mins</p>
                                <p className='text-white'>Calgary — 6 hrs 30 mins</p>
                                <p className='text-white'>Vancouver — 7 hrs</p>
                            </div>
                            <div className='w-1/2'>
                                <Supertitle className='text-white mb-4'>Local</Supertitle>
                                <p className='text-white'>Playmor Junction — 10 mins</p>
                                <p className='text-white'>Castlegar — 25 mins</p>
                                <p className='text-white'>Salmo — 30 mins</p>
                                <p className='text-white'>Trail — 45 mins</p>
                                <p className='text-white'>Kaslo — 1 hr</p>
                                <p className='text-white'>US Border — 50 mins</p>
                                <p className='text-white'>Creston — 1 hr 30 mins</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div>
                            <img src='/img/nelson-map.png' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
})

export default Location