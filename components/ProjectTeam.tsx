import { forwardRef } from "react"
import Supertitle from "./Supertitle"
import H4 from "./H4"
import Container from "./Container"
import useNav from "@/hooks/useNav"

const ProjectTeam = forwardRef<HTMLDivElement, {}>((props) => {
    const ref = useNav('project')

    return (
        <div ref={ref} id='project-section' className="bg-primary-dark">
            <Container className="space-y-12 py-24">
                <Supertitle className="text-white">
                    Project team
                </Supertitle>
                <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-12">
                    <div className="w-full lg:w-1/4 max-w-[168px]">
                        <img src='/img/macdonald-logo.png' />
                    </div>
                    <div className="w-full lg:w-3/4 space-y-4">
                        <H4>
                            MacDonald Communities Limited
                        </H4>
                        <p className="text-white">Macdonald Development Corporation is a professional real estate investment and development company with operations across Western Canada and the United States. Founder Robert Macdonald has led the company since 1985, creating a legacy of commercial and residential properties across North America. Since 1999, the company has focused primarily on the development of commercial strata, mixed-use condominiums and single-family communities, creating over 4,000 high quality homes in the process. Macdonald Development Corporation represents the lead project developer for Purcell Business Centre.</p>
                    </div>
                </div>
                <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-12">
                    <div className="w-full lg:w-1/4 max-w-[168px]">
                        <img src='/img/fair-logo.png' />
                    </div>
                    <div className="w-full lg:w-3/4 space-y-4">
                        <H4>
                            Tristan Chart, CFA
                        </H4>
                        <p className="text-white">Over the course of a decade, Tristan has established himself as an industry leading commercial real estate professional, with over $4 billion of commercial property transaction volume within all major Canadian markets and across all major property types and disciplines, including industrial, office, retail, condo development land, hotel, multi-family, affordable housing, and long-term care. Tristan draws from his experience an extensive network of relationships that, combined with his attention to detail, professionalism and confidence, represent key components of his clients’ success. Tristan serves his clients with a regional focus across the BC Interior and Southern Alberta markets, and he is exclusively responsible for the marketing and sales of Purcell Business Centre.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default ProjectTeam