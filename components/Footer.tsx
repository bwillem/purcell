import { FC } from "react"
import Container from "./Container"
import Supertitle from "./Supertitle"

const FooterLink: FC<{ children: string, href: string }> = props =>
    <a className='block text-white' {...props} />

function Footer() {
    return (
        <>
            <div className="bg-primary-dark">
                <Container className='py-24 flex'>
                    <div className="w-1/2 lg:w-1/4">
                        <Supertitle className='text-white pb-4'>Contact</Supertitle>
                        <p className='text-white font-bold'>Tristan Chart, CFA</p>
                        <p className='text-white text-bold'>Fair Realty Commerical</p>
                        <p className='text-white text-bold'>250-777-7493</p>
                        <p className='text-white text-bold'>tristan@tristanchartcommercial.com</p>
                        <div className='flex'></div>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <Supertitle className='text-white pb-4'>Resources</Supertitle>
                        <FooterLink href=';'>Download Brochure</FooterLink>
                        <FooterLink href=''>Download Unit Plans</FooterLink>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <img src='' />
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <img src='' />
                    </div>
                </Container>
            </div>
            <aside className="w-full bg-brand">
                <Container className="flex items-center justify-end">
                    <div className='flex p-1'>
                        <a className='text-sm text-white'>Site disclaimer</a>
                        <p className='text-sm text-white px-2'>|</p>
                        <a className='text-sm text-white'>Privacy policy</a>
                    </div>
                </Container>
            </aside>
        </>
    )
}

export default Footer