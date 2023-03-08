import { forwardRef } from "react"
import Container from "./Container"
import H2 from "./H2"
import H3 from "./H3"
import Supertitle from "./Supertitle"

const Ownership = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} id='ownership'>
            <Container className="py-24 space-y-8">
                <Supertitle className="text-black max-w-[20em]">
                    Why owning your real estate is a smart business decision
                </Supertitle>
                <div className="flex space-x-12">
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
        </div>
    )
})

export default Ownership