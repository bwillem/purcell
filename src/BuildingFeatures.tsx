import { forwardRef } from "react";
import H2 from "./H2";
import Supertitle from "./Supertitle";

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
                        <ul className='list-none ml-o pl-[12px] [text-indent:-18px] pr-4'>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Zoning: Unzoned
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Building Code Standard: F2 and F3 Industrial uses
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Contruction: Structural steel frame, insulated walls and ceilings
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Ceiling Height: 25 ft. to ceiling, 22 ft. clear to lighting
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Loading: Grade level loading with 12ft.(w) x 11 ft.(h) overhead dors per unit
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 lg:w-1/4'>
                        <ul className='list-none ml-o pl-[12px] [text-indent:-18px] pr-4'>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Floor Load: X00 lbs/SF warehouse floor load capacity (6-inch slab)
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Power: 200 amps, 102/208 volts per unit (3 phase), separately metered
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Backup Power: Diesel-fired backup generator
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Ventilation: Through-wall HRV in warehouse, A/C in office/storefront
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Sprinklers: ESFR sprinkler system throughout
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 lg:w-1/4'>
                        <ul className='list-none ml-o pl-[12px] [text-indent:-18px] pr-4'>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Lighting: High-bay lighting installed in warehouse
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Mezzanine: Structural steel mezzanine complete with guard rail and designed to X00 lbs/SF load capacity*
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Heading: Gas-fired radiant heat in warehouse, baseboard heat in office/storefront
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Signage: Available on highway-facing building exterior and site entrance pylon
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 lg:w-1/4'>
                        <ul className='list-none ml-o pl-[12px] [text-indent:-18px] pr-4'>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Parking: +62 reserved and visitor parking stalls plus surplus lot
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Fibre: Fibre optic availability per unit
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Bathroom: One finished bathroom per unit
                            </li>
                            <li className='text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]'>
                                Storefront: One highway-faceing main unit entrance per unit
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default BuildingFeatures