import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@/components/Container'
import H3 from '@/components/H3'
import { FC } from 'react'
import Link from 'next/link'
import H2 from '@/components/H2'

const inter = Inter({ subsets: ['latin'] })

const BoldParagraph: FC<{ children: string }> = props =>
    <p className='font-bold' {...props} />

const BoldSpan: FC<{ children: string }> = props =>
    <span className='font-bold' {...props} />

const Content = () => {
    return (
        <>
            <div className='bg-brand h-[32px] w-full' />
            <div className='bg-primary'>
                <Container className='space-y-8 py-24'>
                    <Link href='/' className='flex text-brand'>← Back</Link>
                    <div className='space-y-4'>
                        <H2>Privacy policy</H2>
                        <p className='text-white space-y-4'>
                            <br />
                            Last updated: February 13, 2023
                            <br />
                            This Privacy Policy describes Our policies and procedures on the collection, use and
                            disclosure of Your information when You use the Service and tells You about Your privacy
                            rights and how the law protects You.
                            <br />
                            We use Your Personal data to provide and improve the Service. By using the Service, You
                            agree to the collection and use of information in accordance with this Privacy Policy. This
                            Privacy Policy has been created with the help of the Privacy Policy Generator.
                        </p>
                    </div>
                    <div className='text-white space-y-4'>
                        <H2>Interpretation and definitions</H2>
                        <H3>Interpretation</H3>
                        <p className='text-white'>
                            The words of which the initial letter is capitalized have meanings defined under the
                            following conditions. The following definitions shall have the same meaning regardless of
                            whether they appear in singular or in plural.
                        </p>
                        <H3>Definitions</H3>
                        <p className='text-white'>
                            For the purposes of this Privacy Policy:
                        </p>
                        <BoldSpan>Account</BoldSpan> means a unique account created for You to access our Service or parts of
                        our Service.
                        <BoldSpan>Affiliate</BoldSpan> means an entity that controls, is controlled by or is under common control
                        with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity
                        interest or other securities entitled to vote for election of directors or other
                        managing authority.
                        <BoldSpan>Company</BoldSpan> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                        Agreement) refers to Purcell Business Centre.
                        <BoldSpan>Cookies</BoldSpan> are small files that are placed on Your computer, mobile device or any
                        other device by a website, containing the details of Your browsing history on that
                        website among its many uses.
                        <BoldSpan>Country</BoldSpan> refers to: British Columbia, Canada
                        <BoldSpan>Device</BoldSpan> means any device that can access the Service such as a computer, a
                        cellphone or a digital tablet.
                        <BoldSpan>Personal Data</BoldSpan> is any information that relates to an identified or identifiable
                        individual.
                        <BoldSpan>Service</BoldSpan> refers to the Website.
                        <BoldSpan>Service Provider</BoldSpan> means any natural or legal person who processes the data on
                        behalf of the Company. It refers to third-party companies or individuals employed
                        by the Company to facilitate the Service, to provide the Service on behalf of the

                        Company, to perform services related to the Service or to assist the Company in
                        analyzing how the Service is used.
                        <BoldSpan>Third-party Social Media Service</BoldSpan> refers to any website or any social network
                        website through which a User can log in or create an account to use the Service.
                        <BoldSpan>Usage Data</BoldSpan> refers to data collected automatically, either generated by the use of the
                        Service or from the Service infrastructure itself (for example, the duration of a page
                        visit).
                        <BoldSpan>Website</BoldSpan> refers to Purcell Business Centre, accessible from
                        www.purcellbusinesscentre.com
                        <BoldSpan>You</BoldSpan> means the individual accessing or using the Service, or the company, or other
                        legal entity on behalf of which such individual is accessing or using the Service, as
                        applicable.

                        <H2>Collecting and using your personal data</H2>
                        <H3>Types of data collected</H3>
                        <BoldParagraph>Personal data</BoldParagraph>
                        <p className='text-white'>
                            While using Our Service, We may ask You to provide Us with certain personally identifiable
                            information that can be used to contact or identify You. Personally identifiable information
                            may include, but is not limited to:
                            <ul>
                                <li>
                                    Email address
                                </li>
                                <li>
                                    First name and last name
                                </li>
                                <li>
                                    Phone number
                                </li>
                                <li>
                                    Address, State, Province, ZIP/Postal code, City
                                </li>
                                <li>
                                    Usage Data
                                </li>
                            </ul>
                        </p>
                        <BoldParagraph>Usage data</BoldParagraph>
                        <p className='text-white'>
                            Usage Data is collected automatically when using the Service.
                            Usage Data may include information such as Your Device&#39;s Internet Protocol address (e.g. IP
                            address), browser type, browser version, the pages of our Service that You visit, the time
                            and date of Your visit, the time spent on those pages, unique device identifiers and other
                            diagnostic data.
                            When You access the Service by or through a mobile device, We may collect certain
                            information automatically, including, but not limited to, the type of mobile device You use,
                            Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating
                            system, the type of mobile Internet browser You use, unique device identifiers and other
                            diagnostic data.
                            We may also collect information that Your browser sends whenever You visit our Service or
                            when You access the Service by or through a mobile device.
                        </p>
                        <BoldParagraph>Retention of your personal data</BoldParagraph>
                        <p className='text-white'>
                            The Company will retain Your Personal Data only for as long as is necessary for the
                            purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
                            extent necessary to comply with our legal obligations (for example, if we are required to
                            retain your data to comply with applicable laws), resolve disputes, and enforce our legal
                            agreements and policies.
                            The Company will also retain Usage Data for internal analysis purposes. Usage Data is
                            generally retained for a shorter period of time, except when this data is used to strengthen
                            the security or to improve the functionality of Our Service, or We are legally obligated to
                            retain this data for longer time periods.
                        </p>
                        <BoldParagraph>Transfer of Your Personal Data</BoldParagraph>
                        <p className='text-white'>
                            Your information, including Personal Data, is processed at the Company&#39;s operating offices
                            and in any other places where the parties involved in the processing are located. It means
                            that this information may be transferred to — and maintained on — computers located
                            outside of Your state, province, country or other governmental jurisdiction where the data
                            protection laws may differ than those from Your jurisdiction.
                            Your consent to this Privacy Policy followed by Your submission of such information
                            represents Your agreement to that transfer.
                            The Company will take all steps reasonably necessary to ensure that Your data is treated
                            securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
                            will take place to an organization or a country unless there are adequate controls in place
                            including the security of Your data and other personal information.
                        </p>
                        <BoldParagraph>Delete your personal data</BoldParagraph>
                        <p className='text-white'>
                            You have the right to delete or request that We assist in deleting the Personal Data that We
                            have collected about You.
                            Our Service may give You the ability to delete certain information about You from within
                            the Service.
                            You may update, amend, or delete Your information at any time by signing in to Your
                            Account, if you have one, and visiting the account settings section that allows you to manage
                            Your personal information. You may also contact Us to request access to, correct, or delete
                            any personal information that You have provided to Us.
                            Please note, however, that We may need to retain certain information when we have a legal
                            obligation or lawful basis to do so.
                        </p>
                        <H3>Disclosure of Your Personal Data</H3>
                        <BoldParagraph>Business transactions</BoldParagraph>
                        <p className='text-white'>
                            If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
                            transferred. We will provide notice before Your Personal Data is transferred and becomes
                            subject to a different Privacy Policy.
                        </p>
                        <BoldParagraph>Law enforcement</BoldParagraph>
                        <p className='text-white'>
                            Under certain circumstances, the Company may be required to disclose Your Personal Data
                            if required to do so by law or in response to valid requests by public authorities (e.g. a court
                            or a government agency).
                        </p>
                        <BoldParagraph>Other legal requirements</BoldParagraph>
                        <p className='text-white'>
                            The Company may disclose Your Personal Data in the good faith belief that such action is
                            necessary to:
                        </p>
                        <ul>
                            <li>
                                Comply with a legal obligation
                            </li>
                            <li>
                                Protect and defend the rights or property of the Company
                            </li>
                            <li>
                                Prevent or investigate possible wrongdoing in connection with the Service
                            </li>
                            <li>
                                Protect the personal safety of Users of the Service or the public
                            </li>
                            <li>
                                Protect against legal liability
                            </li>
                        </ul>
                        <BoldParagraph>Security of Your Personal Data</BoldParagraph>
                        <p className='text-white'>
                            The security of Your Personal Data is important to Us, but remember that no method of
                            transmission over the Internet, or method of electronic storage is 100% secure. While We
                            strive to use commercially acceptable means to protect Your Personal Data, We cannot
                            guarantee its absolute security.
                        </p>
                    </div>
                    <div className='text-white space-y-4'>
                        <H2>Children's privacy</H2>
                        <p className='text-white'>
                            Our Service does not address anyone under the age of 18. We do not knowingly collect
                            personally identifiable information from anyone under the age of 18. If You are a parent or
                            guardian and You are aware that Your child has provided Us with Personal Data, please

                            contact Us. If We become aware that We have collected Personal Data from anyone under
                            the age of 18 without verification of parental consent, We take steps to remove that
                            information from Our servers.
                            If We need to rely on consent as a legal basis for processing Your information and Your
                            country requires consent from a parent, We may require Your parent&#39;s consent before We
                            collect and use that information.
                        </p>
                    </div>
                    <div className='text-white space-y-4'>
                        <H2>Links to other websites</H2>
                        <p className='text-white'>
                            Our Service may contain links to other websites that are not operated by Us. If You click on a
                            third party link, You will be directed to that third party&#39;s site. We strongly advise You to
                            review the Privacy Policy of every site You visit.
                            We have no control over and assume no responsibility for the content, privacy policies or
                            practices of any third party sites or services.
                        </p>
                    </div>
                    <div className='text-white space-y-4'>
                        <H2>Changes to this privacy policy</H2>
                        <p className='text-white'>
                            We may update Our Privacy Policy from time to time. We will notify You of any changes by
                            posting the new Privacy Policy on this page.
                            We will let You know via email and/or a prominent notice on Our Service, prior to the
                            change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy
                            Policy.
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this
                            Privacy Policy are effective when they are posted on this page.
                        </p>
                    </div>
                    <div className='text-white space-y-4'>
                        <H2>Contact us</H2>
                        <p className='text-white'>
                            If you have any questions about this Privacy Policy, You can contact us:
                            By email: tristan@tristanchartcommercial.com
                            By phone number: 2507777493
                        </p>
                    </div>
                </Container>
            </div >
        </>
    )
}

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Purcell Business Centre | Privacy</title>
                <meta name="description" content="Purcell Business Centre | Nelson, BC | Privacy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <Content />
            </main>
        </>
    )
}
