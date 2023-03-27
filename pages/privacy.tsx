import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@/components/Container'
import H3 from '@/components/H3'
import { FC } from 'react'
import Link from 'next/link'
import H2 from '@/components/H2'

const inter = Inter({ subsets: ['latin'] })

const Bold: FC<{ children: string }> = props =>
    <p className='font-bold' {...props} />

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
                            Privacy Policy
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
                        <Bold>Interpretation</Bold>
                        <p className='text-white'>
                            The words of which the initial letter is capitalized have meanings defined under the
                            following conditions. The following definitions shall have the same meaning regardless of
                            whether they appear in singular or in plural.
                        </p>
                        <Bold>Definitions</Bold>
                        <p className='text-white'>
                            Age requirement; authority. In order to use the site, you must be at least 18 years of
                            age. You represent that (i) you have read and understood, and that you agree to be
                            bound by, this agreement and (ii) you are at least 18 years old. If you do not agree to, or
                            cannot comply with, any of these terms and conditions of this agreement, please do not
                            attempt to access this site.
                            We reserve the right to restrict certain areas of information on this site to our approved
                            registered users. In the event that any area of the site requires you to register with us
                            prior to our granting you access to such areas of the site, you agree to provide truthful
                            information, including but not limited to a member name and password as well as your
                            name, address, telephone number and a valid email address (the &quot;account
                            information&quot;). You agree to provide accurate account information and to update your
                            account information as necessary to keep it accurate. You are solely responsible for
                            maintaining the confidentiality of your member name and password. You agree to notify
                            us immediately of any unauthorized use of your member name, password or account.
                            The site owner will not be responsible for any losses arising out of the unauthorized use
                            of your account and you agree to indemnify and hold harmless the site owner, its
                            partners, parents, subsidiaries, agents, affiliates and/or licensors, as applicable, for any
                            improper, unauthorized or illegal uses of your account.

                        </p>
                        <Bold>License to Use the Site</Bold>
                        <p className='text-white'>
                            We grant to you a limited, non-exclusive, non-transferable license to access and use the
                            site in accordance with the terms and conditions set forth in this agreement. We reserve
                            all right, title and interest not expressly granted under this license to the fullest extent
                            possible under applicable laws. Any use of the site not specifically permitted under this
                            agreement is strictly prohibited.
                            You agree that you will not: (i) use the site to reproduce, transmit, display or distribute
                            copyrighted material in any medium or via any method without our express written

                            permission; (ii) copy, store, edit, change, prepare any derivative work of or alter in any
                            way any of the content provided on this site; or (iii) use our site in any way that violates
                            the terms of this agreement. The site is owned by us and is protected by Canadian
                            copyright laws and international treaty provisions. You will not sublicense, assign, or
                            transfer the license granted to you under this agreement. Any attempt to sublicense,
                            assign, or transfer any of the rights, duties, or obligations in violation of the provisions of
                            this agreement is void.
                            You agree that you will not: (a) impersonate any person or entity or misrepresent your
                            affiliation with any other person or entity; (b) engage in spamming, flooding, harvesting
                            of e-mail addresses or other personal information, spidering, screen scraping, database
                            scraping, or any other activity with the purpose of obtaining lists of users or any other
                            information, including specifically, property listings available through the site; (c) send
                            chain letters or pyramid schemes via the site; or (d) attempt to gain unauthorized
                            access to other computer systems through the site. You agree that you will not use the
                            site in any manner that could damage, disable, overburden, or impair the site or
                            interfere with any other party&#39;s use and enjoyment of the site.
                        </p>
                        <Bold>Intellectual Property</Bold>
                        <p className='text-white'>
                            You acknowledge that we own or have a license to all title and copyrights in and to the
                            content provided on this site. All title and intellectual property rights in and to any
                            licensed content provided on this site is the property of the respective content owners
                            and may be protected by applicable copyright or other intellectual property laws and
                            treaties and subject to use restrictions under such laws or treaties.
                            Photos herein are the property of their respective owners and use of these images
                            without the express written consent of the owner is prohibited.
                        </p>
                        <Bold>Submissions or Other Information</Bold>
                        <p className='text-white'>
                            If you submit to us or post on the site any property listing, testimonial, comment, review,
                            suggestion or any work of authorship (collectively a &quot;submission&quot;) including, without
                            limitation, submissions about any of our products or services, such submission will not
                            be confidential or secret, and may be used by us in any manner. Please do not submit
                            or send any submission to us that you consider contains confidential or proprietary
                            information. No submission sent to us will be considered or treated as confidential
                            information. We do not pre-screen submissions and we will have no obligation to read
                            any particular submission submitted or sent to us. By submitting or sending a
                            submission to us, you: (i) represent and warrant that the submission is original to you,
                            that no other party has any rights thereto, and that any &quot;moral rights&quot; in such
                            submission have been waived, and (ii) you grant us a royalty-free, unrestricted,
                            worldwide, perpetual, irrevocable, non-exclusive and fully transferable, assignable and
                            sublicensable right and license to use, reproduce, publish, distribute, display, translate,
                            summarize, modify and adapt such submission (in whole or part) and/or to incorporate it
                            in other works in any form, media, or technology now known or later developed, in our
                            sole discretion, with or without your name.
                        </p>
                        <Bold>Term</Bold>
                        <p className='text-white'>
                            This agreement will remain effective until terminated by us.
                        </p>
                        <Bold>Limitation of Liability</Bold>
                        <p className='text-white'>
                            In no event will we be liable to you for indirect, general, special, incidental,
                            consequential, exemplary or other damages (including, without limitation, damages for
                            loss of profits, business interruption, corruption of files, loss of business information or
                            any other pecuniary loss) even if we have been advised of the possibility of such
                            damages. No oral or written information or advice given by us or others will create a
                            warranty and neither you nor any third party may rely on any such information or advice.
                            Some jurisdictions do not allow the exclusion of implied warranties or limitation or
                            exclusion of liability for incidental or consequential damages, so the above exclusions
                            and limitations may or may not apply to you.
                        </p>
                        <Bold>Indemnity</Bold>
                        <p className='text-white'>
                            You will indemnify and hold us, our directors, officers, employees, affiliates, agents,
                            contractors, and licensors harmless with respect to any suits or claims arising out of (i)
                            your breach of this agreement, including, but not limited to, any infringement by you of
                            the copyright or intellectual property rights of any third party; or (ii) your use or misuse of
                            the site.
                        </p>
                        <Bold>Other</Bold>
                        <p className='text-white'>
                            You agree that you will comply with all applicable laws, including, but not limited to,
                            privacy laws and individual Provincial laws applicable to you with respect to the sale or
                            lease of real property.
                            We may present advertisements or promotional materials on or through the site. Your
                            dealings with, or participation in promotions of, any third-party advertisers on or through
                            the site are solely between you and such third party and your participation is subject to
                            the terms and conditions associated with that advertisement or promotion. You agree
                            that we are not responsible or liable for any loss or damage of any sort incurred as the
                            result of any such dealings or as the result of the presence of such third party materials
                            on the site.
                            This agreement will be governed by the laws of the Province of British Columbia. The
                            exclusive jurisdiction for any claim, action or dispute with us or relating in any way to
                            your use of the site will be in the Provincial and federal courts of the Province of British
                            Columbia.
                            We may send notices to you with respect to your use of the site by sending an email
                            message to the email address listed in your account information, by sending a letter via
                            regular mail to the contact address listed in your account information, or by a posting a
                            note on the site when you access your account. You agree that we may provide notice
                            to you through such means. Unless otherwise stated in the notices, the notices will
                            become effective immediately.
                            You acknowledge that you have read this agreement, understand it and will be bound
                            by its terms and conditions. You further acknowledge that this agreement represents the
                            complete and exclusive statement of the agreement between us and that it supersedes
                            any proposal or prior agreement oral or written, and any other communications between
                            us relating to the subject matter of this agreement.
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
                <title>Purcell Business Center | Privacy</title>
                <meta name="description" content="Purcell Business Center | Nelson, BC | Privacy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <Content />
            </main>
        </>
    )
}
