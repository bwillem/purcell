import { FC, ForwardedRef, forwardRef, ReactElement } from "react"
import H2 from "./H2"
import Supertitle from "./Supertitle"

const HeroPanel: FC<{ children: ReactElement[] }> = props =>
    <div className="w-1/2 space-y-2 px-24 py-12 bg-[rgba(0,0,0,.5)]" {...props} />

const HeroButton: FC<{ children: string }> = props =>
    <button className="px-4 py-3 bg-white uppercase" {...props} />

const HeroHeading: FC<{ children: any }> = props =>
    <h1 className="text-white text-[64px] font-bold leading-[1]" {...props} />

const url = `${process.env.PUBLIC_URL}/img/purcell-hero.png`

function HeroSection(props: {}, ref: ForwardedRef<any>) {
    return (
        <div ref={ref} style={{
            backgroundImage: `url('${url}')`,
            backgroundSize: 'cover',
            height: 'calc(100vh - 102px)',
        }}>
            <div className="mx-auto container pt-24">
                <HeroPanel>
                    <Supertitle>For sale</Supertitle>
                    <div className="space-y-8">
                        <HeroHeading>Purcell<br />Business<br />Centre</HeroHeading>
                        <H2>Rare Flex-Industrial Strata Opportunity in the Kootenays</H2>
                        <HeroButton>Register now</HeroButton>
                    </div>
                </HeroPanel>
            </div>
        </div>
    )
}

export default forwardRef(HeroSection)
