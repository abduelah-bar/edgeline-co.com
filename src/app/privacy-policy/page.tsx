import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Section>
            <div className="flex justify-between items-center">
                <AnimatedWrapper>
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                        <p className="mt-4 text-xl text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </AnimatedWrapper>
                <AnimatedWrapper>
                    <Link href="/">
                        <Button variant="outline">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </AnimatedWrapper>
            </div>

            <article className="mt-12 max-w-none text-muted-foreground space-y-6">
                <p>ELC COMPANY ("us", "we", or "our") operates this website (the "Service").</p>
                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Information Collection and Use</h2>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                    <h3 className="text-xl font-semibold text-foreground">Types of Data Collected</h3>
                    
                    <h4 className="text-lg font-semibold text-foreground">Personal Data</h4>
                    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Cookies and Usage Data</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-foreground">Usage Data</h4>
                    <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Use of Data</h2>
                    <p>ELC COMPANY uses the collected data for various purposes:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Security of Data</h2>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>By email: info@edgeline-co.com</li>
                        <li>By phone number: +966 50 117 5465</li>
                    </ul>
                </div>
            </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
