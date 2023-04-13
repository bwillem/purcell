import Link from "next/link"
import { FC } from "react"
import Container from "./Container"
import Supertitle from "./Supertitle"
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs'

const FooterLink: FC<{ children: string, href: string, download: boolean }> = props =>
    <a className='block text-white' {...props} />

function Footer() {
    return (
        <>
            <div className="bg-primary-dark">
                <Container className='py-24 flex flex-wrap'>
                    <div className="w-1/2 lg:w-1/4">
                        <Supertitle className='text-white pb-4'>Contact</Supertitle>
                        <p className='text-white font-bold'>Tristan Chart, CFA</p>
                        <p className='text-white text-bold'>Fair Realty Commerical</p>
                        <p className='text-white text-bold'>250-777-7493</p>
                        <p className='text-white text-bold'>tristan@tristanchartcommercial.com</p>
                        <div className='flex space-x-4 mt-2'>
                            <a href='https://www.linkedin.com/in/tristanchart/' target='_blank'>
                                <BsLinkedin className='text-white' />
                            </a>
                            <a href='https://www.instagram.com/tristanchartcommercialrealty/' target='_blank'>
                                <BsInstagram className='text-white' />
                            </a>
                            <a href='https://www.facebook.com/tristanchartcommercialrealty' target='_blank'>
                                <BsFacebook className='text-white' />
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <Supertitle className='text-white pb-4'>Resources</Supertitle>
                        <FooterLink href='/purcell-brochure' download>Download Brochure</FooterLink>
                        <FooterLink href='/purcell-unit-plans' download>Download Unit Plans</FooterLink>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <div className="max-w-[232px]">
                            <img src='/img/macdonald-logo.png' />
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <div className="max-w-[200px]">
                            <img src='/img/royal-lepage-logo.png' />
                        </div>
                    </div>
                </Container>
            </div >
            <aside className="w-full bg-brand">
                <Container className="flex items-center justify-end">
                    <div className='flex p-1'>
                        <Link href='/disclaimer' className='text-sm text-white'>Site disclaimer</Link>
                        <p className='text-sm text-white px-2'>|</p>
                        <Link href='/privacy' className='text-sm text-white'>Privacy policy</Link>
                    </div>
                </Container>
            </aside>
        </>
    )
}

export default Footer