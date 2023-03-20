import { forwardRef } from "react"
import Container from "./Container"
import H3 from "./H3"
import Supertitle from "./Supertitle"

const Financing = forwardRef<HTMLDivElement, {}>((props, ref) =>
    <>
        <div ref={ref} />
        <Container id='financing' className="py-24 space-y-8">
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
                    <div className="max-w-[178px]">
                        <img src='/img/impact-logo.png' />
                    </div>
                </div>
            </div>
        </Container>
    </>
)

export default Financing