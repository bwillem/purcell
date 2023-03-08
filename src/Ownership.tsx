import { forwardRef } from "react"
import Container from "./Container"
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
        </div>
    )
})

export default Ownership