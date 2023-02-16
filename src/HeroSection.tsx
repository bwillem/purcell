import { FC, ReactElement } from "react"

const HeroPanel: FC<{ children: ReactElement[] }> = props =>
    <div className="bg-[rgba(0,0,0,20)]" {...props} />

const HeroButton: FC<{ children: string }> = props =>
    <button className="bg-white uppercase" {...props} />

function HeroSection() {
    return (
        <div>
            <div className="container">
                <HeroPanel>
                    <h3 className="uppercase">For sale</h3>
                    <h1>Purcell Business Centre</h1>
                    <h2>Rare Flex-Industrial Strata Opportunity in the Kootenays</h2>
                    <HeroButton>Register now</HeroButton>
                </HeroPanel>
            </div>
        </div>
    )
}

export default HeroSection