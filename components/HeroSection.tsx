import useNav from "@/hooks/useNav"
import { FC, ReactElement } from "react"
import Container from "./Container"
import H2 from "./H2"
import Supertitle from "./Supertitle"
import useStore from "@/store"

const HeroPanel: FC<{ children: ReactElement[] }> = props =>
    <div className="absolute top-[50%] left-0 md:left-auto [transform:translateY(-50%)] h-full md:h-auto w-full md:w-[75%] lg:w-[50%] xl:w-[40%] space-y-2 px-12 lg:px-24 pt-[33%] md:pt-12 md:pb-12 bg-[rgba(0,0,0,.5)]" {...props} />

const HeroButton: FC<{ children: string }> = props => {
    const { setActiveLinkId } = useStore(({ activeLinkId, setActiveLinkId }) =>
        ({ activeLinkId, setActiveLinkId }))

    const onClick = () => {
        document.getElementById(`register-section`)?.scrollIntoView({ behavior: 'smooth' })

        setActiveLinkId('register')
    }

    return <button onClick={onClick} className="px-4 py-3 bg-white uppercase" {...props} />
}

const HeroHeading: FC<{ children: any }> = props =>
    <h1 className="text-white text-[64px] font-bold leading-[1]" {...props} />

function HeroSection(props: {}) {
    const ref = useNav('home')

    return (
        <div ref={ref} id='home-section'>
            <div className='relative concept' style={{
                backgroundImage: 'url(/img/purcell-hero.jpg)',
                backgroundSize: 'cover',
                height: 'calc(100vh)',
            }}>
                <Container className='px-0 md:px-4'>
                    <HeroPanel>
                        <div className="max-w-[48px] pb-4">
                            <img alt='purcell logo icon' src='img/pb_icon.png' />
                        </div>
                        <Supertitle className="text-white">For sale</Supertitle>
                        <div className="space-y-8">
                            <HeroHeading>Purcell<br />Business<br />Centre</HeroHeading>
                            <H2>Rare Flex Industrial Strata Opportunity in the Kootenays</H2>
                            <HeroButton>Register now</HeroButton>
                        </div>
                    </HeroPanel>
                </Container>
            </div>
            <div className='w-full flex bg-primary-dark relative'>
                <Container className='py-24 [z-index:1] space-y-8'>
                    <div className='space-y-3'>
                        <Supertitle className="text-white">
                            Nelson, BC
                        </Supertitle>
                        <H2>1155 Insight Drive</H2>
                    </div>
                    <p className='text-white text-base max-w-[32em]'>
                        <span className='font-bold'>Purcell Business Centre </span>
                        represents the highest quality flex industrial real estate offering in the Kootenays, comprising 16 thoughtfully designed units ranging in size from 2,412 to 7,794 SF and featuring 22' clear heights, overhead loading doors, ample parking, mezzanine space, potential retail/office space, and excellent highway access and exposure. Redeveloped by Macdonald Communities Limited, and using local builders, tradespeople and design consultants, Purcell Business Centre marks an exceptionally rare opportunity to own the most highly functional and well located industrial real estate in the Kootenays.
                    </p>
                    <div>
                        <p className='text-white text-base mt-4'>
                            <span className='font-bold'>Zoning: </span>
                            Unzoned (suitable for a wide range of commercial uses)
                        </p>
                        <p className='text-white text-base mt-4'>
                            <span className='font-bold'>Occupancy: </span>
                            Spring 2024
                        </p>
                        <p className='text-white text-base'>
                            <span className='font-bold'>Sale Price: </span>
                            See Unit Plans
                        </p>
                    </div>
                    <div>&nbsp;</div>
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
                        <a
                            href='/purcell-brochure.pdf'
                            download
                            className='text-center w-full md:w-auto bg-brand uppercase px-4 py-2 tracking-wide mr-4'>
                            Download brochure
                        </a>
                        <a
                            href='/purcell-unit-plans.pdf'
                            download
                            className='text-center w-full md:w-auto bg-brand uppercase px-4 py-2 tracking-wide'>
                            Download unit plans
                        </a>
                    </div>

                </Container>
                <div
                    className="hidden lg:block absolute right-0 top-0 h-full w-full lg:w-1/2 after:[content:''] after:[top:0] after:[right:0] after:[width:100%] after:[height:100%] after:[background:rgba(0,0,0,0.5)] lg:after:[background:transparent]"
                >
                    <img className='h-full concept [object-fit:cover]' src='/img/purcell-business-center.png' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
