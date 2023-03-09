import { forwardRef } from "react"
import Container from "./Container"
import H2 from "./H2"
import H3 from "./H3"
import Supertitle from "./Supertitle"
import PurcellFront from './img/purcell-front.png'
import ImpactLogo from './img/impact-logo.png'

const Ownership = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} id='ownership'>
            <Container className="py-24 space-y-8">
                <Supertitle className="text-black max-w-[20em]">
                    Why owning your real estate is a smart business decision
                </Supertitle>
                <div className="flex flex-wrap lg:flex-nowrap space-y-12 lg:space-y-0 lg:space-x-12">
                    <div className="w-full lg:w-1/3 space-y-8">
                        <p className='text-black'>
                            Whether purchasing real estate for the certainty of your business operation, or for the opportunity to invest, Purcell Business Centre offers the opportunity to own a newly upgraded strata unit, renovated by a trusted developer in a professionally managed building. As one of the highest quality industrial buildings in the Kootenays, combined with an extensive list of newly installed building and mechanical systems, the risk of significant capital repairs has been substantially minimized over the first 10 years, providing owners with carefree ownership and management.
                        </p>
                        <p className='text-black'>
                            Take advantage of the rarely offered opportunity to secure industrial real estate in today’s market.
                        </p>
                    </div>
                    <div className="w-1/2 lg:w-1/3 space-y-8">
                        <div className="space-y-4">
                            <H3>Build equity</H3>
                            <p>Build equity through monthly mortgage payments, investing in leasehold improvements, and long-term capital appreciation.</p>
                        </div>
                        <div className="space-y-4">
                            <H3>Lending terms</H3>
                            <p>As a business purchasing for your own use, take advantage of potentially favourable lending terms, such as higher Loan-to-Value, financing for leasehold improvements, and other unique benefits.</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/3 space-y-8">
                        <div className="space-y-4">
                            <H3>Control</H3>
                            <p>Secure your long-term business location by eliminating lease renewal risk, and take full charge of the property’s operational costs.</p>
                        </div>
                        <div className="space-y-4">
                            <H3>Tax benefits</H3>
                            <p>Multiple potential tax write-offs, including rental payments as a business expense, and carrying costs from holding company income. Speak to your tax consultant for unique opportunities available.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div
                className='relative before:absolute before:[left:0] before:w-full before:h-full before:[background:rgba(0,0,0,.5)] before:[content:""]'
                style={{
                    backgroundImage: `url(/img/purcell-business-center-wide.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <Container className="[z-index:2] relative text-center py-24 space-y-16">
                    <H2 className="text-white max-w-[28em] mx-auto">Owning your company’s real estate provides several attractive exit strategies for business owners.</H2>
                    <div className="flex">
                        <div className="w-1/3">
                            <H2>1</H2>
                            <p className="text-white max-w-[16em] mx-auto">Selling your business and retaining the real estate as an income producing asset.</p>
                        </div>
                        <div className="w-1/3">
                            <H2>2</H2>
                            <p className="text-white max-w-[16em] mx-auto">Monetizing your built up equity by selling your real estate (and potentially leasing it back).</p>
                        </div>
                        <div className="w-1/3">
                            <H2>3</H2>
                            <p className="text-white max-w-[16em] mx-auto">Selling your real estate and the business together.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-primary">
                <Container className="flex py-24 items-center">
                    <div className="space-y-8 lg:w-1/2">
                        <Supertitle className="text-white">
                            Path to ownership
                        </Supertitle>
                        <p className="text-white">
                            This is an exciting and important next step for your business, and MacDonald Communities will be there to assist you at each stage of the process. During construction, regular progress updates will be provided, so you can effectively plan your financing arrangements and coordination with legal counsel in preparation of taking ownership of your unit. During corporate signage installation and office improvement work, Macdonald Development will assist in the coordination with your contractors, so that your unit is fully move-in ready on day one. Upon occupancy, an experienced strata property manager will be available to ensure the property is well-maintained and fully managed, so you can continue to focus on the success of your core business.
                        </p>
                    </div>
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="max-w-[24em] mx-auto">
                            <img src={PurcellFront} />
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="py-24 space-y-8">
                <Supertitle>
                    Financing
                </Supertitle>
                <div className="flex flex-wrap space-y-12 lg:space-y-0">
                    <div className="lg:w-1/2 space-y-8">
                        <p>
                            Several opportunities for favourable financing terms may be available to you or your business. To find out which options may be available to you, please contact our commercial lending partner Impact Commercial Group.
                        </p>
                        <p>
                            Vendor-take-back financing options may also be available to you. For vendor-financing inquiries, please contact:
                        </p>
                        <p>
                            Tristan Chart, CFA<br />Fair Realty Commercial<br />250.777.7493<br />tristan@tristanchartcommercial.com
                        </p>
                    </div>
                    <div className="lg:pl-16 lg:w-1/2 space-y-4">
                        <H3>Michael Mullen</H3>
                        <p>
                            Partner | Commercial Mortgage Broker<br />Impact Commercial Group Inc.<br />604.928.1507<br />michael.mullen@impactcommercial.ca
                        </p>
                        <div className="max-w-[200px]">
                            <img src={ImpactLogo} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default Ownership