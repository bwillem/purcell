import { FC, forwardRef } from "react"
import Container from "./Container"
import H2 from "./H2"
import H3 from "./H3"
import Supertitle from "./Supertitle"

const Bold: FC<{ children: string }> = p => <span className='font-bold' {...p} />

const ValueProposition = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className="bg-primary-dark" id='value'>
            <div ref={ref} />
            <Container className="py-24 items-center flex flex-wrap">
                <div className='space-y-8 w-full lg:w-1/2 pr-24'>
                    <Supertitle className="text-white">Value proposition</Supertitle>
                    <H2>Position your business at a more than 50% reduced real estate cost than in major BC markets.</H2>
                    <p className='text-white'>Industrial market vacancies across Canada are at historic lows, propelling market rental rates and per square foot pricing upwards at tremendous rates. Purcell Business Centre offers a rare value proposition whereby regional industrial users can set up their business at comparable strata pricing that is +50% less than in major regional markets.</p>
                </div>
                <div className="pt-8 lg:pt-8 w-full lg:w-1/2 space-y-8">
                    <div>
                        <H3>Vancouver</H3>
                        <div className="flex text-white mt-2">
                            <div className='mr-8'>
                                <p><Bold>Vacancy: </Bold>0.2%</p>
                            </div>
                            <div className='mr-8'>
                                <p><Bold>Asking Lease Rates PSF: </Bold>+$21.00</p>
                            </div>
                            <div className='mr-8'>
                                <p><Bold>Strata Pricing PSF: </Bold>+$575</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <H3>Kelowna</H3>
                        <div className="flex text-white mt-2">
                            <div className='mr-8'>
                                <p><Bold>Vacancy: </Bold>1.6%</p>
                            </div>
                            <div className='mr-8'>
                                <p><Bold>Asking Lease Rates PSF: </Bold>+$18.00</p>
                            </div>
                            <div className='mr-8'>
                                <p><Bold>Strata Pricing PSF: </Bold>+$465</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='h-[633px] lg:h-[800px]' style={{
                backgroundImage: `url(/img/purcell-top.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>

            </div>
        </div>
    )
})

export default ValueProposition