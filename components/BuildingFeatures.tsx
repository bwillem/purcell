import { forwardRef } from "react";
import H2 from "./H2";
import Supertitle from "./Supertitle";
import Li from './Li'
import Ul from './Ul'
import Container from "./Container";
import useNav from "@/hooks/useNav";

const BuildingFeatures = forwardRef<HTMLDivElement, {}>((props) => {
    const ref = useNav('features')

    return (
        <div ref={ref} id='features-section'>
            <div className='bg-primary-dark'>
                <Container className='py-24'>
                    <div className='text-center space-y-8'>
                        <Supertitle className="text-white">Building features</Supertitle>
                        <div className='max-w-[862px] mx-auto'>
                            <H2>
                                Unzoned status and a significant degree of building features and amenities provides occupants with unparalleled business flexibility.
                            </H2>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-12'>
                        <div className='w-1/2 lg:w-1/4'>
                            <Ul>
                                <Li>
                                    Zoning: Unzoned
                                </Li>
                                <Li>
                                    Building Code Standard: F2 and F3 Industrial uses
                                </Li>
                                <Li>
                                    Contruction: Structural steel frame, insulated walls and ceilings
                                </Li>
                                <Li>
                                    Ceiling Height: 25 ft. to ceiling, 22 ft. clear to lighting
                                </Li>
                                <Li>
                                    Loading: Grade level loading with 12ft.(w) x 11 ft.(h) overhead dors per unit
                                </Li>
                            </Ul>
                        </div>
                        <div className='w-1/2 lg:w-1/4'>
                            <Ul>
                                <Li>
                                    Floor Load: X00 lbs/SF warehouse floor load capacity (6-inch slab)
                                </Li>
                                <Li>
                                    Power: 200 amps, 102/208 volts per unit (3 phase), separately metered
                                </Li>
                                <Li>
                                    Backup Power: Diesel-fired backup generator
                                </Li>
                                <Li>
                                    Ventilation: Through-wall HRV in warehouse, A/C in office/storefront
                                </Li>
                                <Li>
                                    Sprinklers: ESFR sprinkler system throughout
                                </Li>
                            </Ul>
                        </div>
                        <div className='w-1/2 lg:w-1/4'>
                            <Ul>
                                <Li>
                                    Lighting: High-bay lighting installed in warehouse
                                </Li>
                                <Li>
                                    Mezzanine: Structural steel mezzanine complete with guard rail and designed to X00 lbs/SF load capacity*
                                </Li>
                                <Li>
                                    Heading: Gas-fired radiant heat in warehouse, baseboard heat in office/storefront
                                </Li>
                                <Li>
                                    Signage: Available on highway-facing building exterior and site entrance pylon
                                </Li>
                            </Ul>
                        </div>
                        <div className='w-1/2 lg:w-1/4'>
                            <Ul>
                                <Li>
                                    Parking: +62 reserved and visitor parking stalls plus surplus lot
                                </Li>
                                <Li>
                                    Fibre: Fibre optic availability per unit
                                </Li>
                                <Li>
                                    Bathroom: One finished bathroom per unit
                                </Li>
                                <Li>
                                    Storefront: One highway-faceing main unit entrance per unit
                                </Li>
                            </Ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='h-[400px] concept relative' style={{
                backgroundImage: `url(/img/purcell-business-center-cross-section.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}></div>
            <div className='bg-primary-dark'>
                <Container className='flex flex-wrap py-24 items-center'>
                    <H2 className='lg:w-1/3 pr-4 pb-4 lg:pb-0'>Combining 22’-clear warehouse, with potential office or storefront space within each unit, Purcell Business Centre offers businesses the broadest range of potential uses, including:</H2>
                    <div className='w-1/2 lg:w-1/3 px-2 max-w-prose'>
                        <Ul>
                            <Li>
                                Industrial Services
                            </Li>
                            <Li>
                                Building & Construction Supply
                            </Li>
                            <Li>
                                Food & Beverage Processing
                            </Li>
                            <Li>
                                Material Manufacturing
                            </Li>
                            <Li>
                                E-Commerce
                            </Li>
                            <Li>
                                Fitness & Athletics
                            </Li>
                            <Li>
                                Recreational Equipment Sales & Storage
                            </Li>
                            <Li>
                                Auto Services & Parts
                            </Li>
                        </Ul>
                    </div>
                    <div className='w-1/2 lg:w-1/3 px-2 max-w-prose'>
                        <Ul>
                            <Li>
                                Retail & Wholesaling
                            </Li>
                            <Li>
                                Home Business Expansion
                            </Li>
                            <Li>
                                Technology & Telecommunications
                            </Li>
                            <Li>
                                Professional Office
                            </Li>
                            <Li>
                                Personal & Business Storage
                            </Li>
                            <Li>
                                Commissary Kitchen
                            </Li>
                            <Li>
                                Distribution, Shipping & Logistics
                            </Li>
                        </Ul>
                    </div>
                </Container>
            </div>
        </div>
    )
})

export default BuildingFeatures