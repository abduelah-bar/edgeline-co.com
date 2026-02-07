import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';

type ProjectDetailsPageProps = {
    params: {
        id: string;
    }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = PlaceHolderImages.find(img => img.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Section>
            <AnimatedWrapper>
                <Link href="/projects">
                    <Button variant="outline">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        العودة للمشاريع
                    </Button>
                </Link>
            </AnimatedWrapper>

            <article className="mt-12">
                <AnimatedWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold text-center">{project.description}</h1>
                </AnimatedWrapper>

                <AnimatedWrapper delay={0.2}>
                    <div className="relative aspect-video w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden">
                        <Image
                        src={project.imageUrl}
                        alt={project.description}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                        />
                    </div>
                </AnimatedWrapper>

                <AnimatedWrapper delay={0.4}>
                    <div className="max-w-4xl mx-auto mt-8 space-y-4 text-muted-foreground text-lg">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                        <p>إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.</p>
                        <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.</p>
                    </div>
                </AnimatedWrapper>
            </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
