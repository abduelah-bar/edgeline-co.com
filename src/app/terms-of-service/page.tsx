import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Section>
            <div className="flex justify-between items-center">
                <AnimatedWrapper>
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
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
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. Terms</h2>
                    <p>By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on ELC COMPANY's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on ELC COMPANY's website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by ELC COMPANY at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. Disclaimer</h2>
                    <p>The materials on ELC COMPANY's website are provided on an 'as is' basis. ELC COMPANY makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    <p>Further, ELC COMPANY does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. Limitations</h2>
                    <p>In no event shall ELC COMPANY or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ELC COMPANY's website, even if ELC COMPANY or a ELC COMPANY authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Saudi Arabia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </div>
            </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
