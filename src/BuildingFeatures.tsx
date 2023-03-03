import { forwardRef } from "react";
import H2 from "./H2";
import Supertitle from "./Supertitle";
import Li from './Li'
import Ul from './Ul'

const BuildingFeatures = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className='bg-primary-dark' ref={ref}>
            <div className='container mx-auto py-24'>
                <div className='text-center space-y-8'>
                    <Supertitle>Building features</Supertitle>
                    <div className='max-w-[862px] mx-auto'>
                        <H2>
                            Unzoned status and a significant degree of building features and amenities provides occupants with unparalleled business flexibility.
                        </H2>
                    </div>
                </div>
                <div className='flex mt-12'>
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
            </div>
        </div>
    )
})

export default BuildingFeatures