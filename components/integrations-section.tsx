
import React from 'react';
import { cn } from "@/lib/utils";

const ShopifyLogo = () => (
    <svg role="img" viewBox="0 0 24 24" fill="#96BF48" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <title>Shopify</title>
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
    </svg>
);

const WixLogo = () => (
    <svg role="img" viewBox="0 0 24 24" fill="#0C6EFC" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <title>Wix</title>
        <path d="m0 7.354 2.113 9.292h.801a1.54 1.54 0 0 0 1.506-1.218l1.351-6.34a.171.171 0 0 1 .167-.137c.08 0 .15.058.167.137l1.352 6.34a1.54 1.54 0 0 0 1.506 1.218h.805l2.113-9.292h-.565c-.62 0-1.159.43-1.296 1.035l-1.26 5.545-1.106-5.176a1.76 1.76 0 0 0-2.19-1.324c-.639.176-1.113.716-1.251 1.365l-1.094 5.127-1.26-5.537A1.33 1.33 0 0 0 .563 7.354H0zm13.992 0a.951.951 0 0 0-.951.95v8.342h.635a.952.952 0 0 0 .951-.95V7.353h-.635zm1.778 0 3.158 4.66-3.14 4.632h1.325c.368 0 .712-.181.918-.486l1.756-2.59a.12.12 0 0 1 .197 0l1.754 2.59c.206.305.55.486.918.486h1.326l-3.14-4.632L24 7.354h-1.326c-.368 0-.712.181-.918.486l-1.772 2.617a.12.12 0 0 1-.197 0L18.014 7.84a1.108 1.108 0 0 0-.918-.486H15.77z" />
    </svg>
);

// Placeholder components for other logos using decent typography/icons
const ShopifyPlusLogo = () => (
    <div className="flex items-center gap-1">
        <ShopifyLogo />
        <span className="font-semibold text-lg italic text-[#96BF48]">plus</span>
    </div>
);

const BigCommerceLogo = () => (
    <span className="font-bold text-lg tracking-tight text-foreground">BIGCOMMERCE</span>
);

const WordPressLogo = () => (
    <div className="flex items-center gap-2 text-[#21759B]">
        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-serif font-bold text-xl">W</div>
        <span className="font-serif font-bold text-lg text-foreground">WordPress</span>
    </div>
);

const WooCommerceLogo = () => (
    <span className="font-bold text-2xl text-[#96588a]">Woo</span>
);

const ShoplazaLogo = () => (
    <div className="flex items-center gap-2">
        <div className="text-red-600 font-bold text-xl">✻</div>
        <span className="font-bold text-lg text-red-600 uppercase tracking-tight">SHOPLAZA</span>
    </div>
);

const EcwidLogo = () => (
    <div className="flex items-col">
        <span className="font-bold text-lg text-foreground">Ecwid</span>
        <span className="text-[10px] text-muted-foreground ml-1">by Lightspeed</span>
    </div>
);


const PlatformCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("bg-card hover:bg-muted/50 transition-colors duration-300 border border-border/50 rounded-xl flex items-center justify-center h-24 md:h-32 shadow-sm", className)}>
        {children}
    </div>
);

const SecondaryLogo = ({ name }: { name: string }) => (
    <span className="text-muted-foreground hover:text-foreground font-medium text-lg transition-colors cursor-default">
        {name}
    </span>
);

export function IntegrationsSection() {
    return (
        <section className="container px-4 md:px-6 mx-auto py-24 flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Connect CampaignStudio to your ecommerce platform
                </h2>
                <p className="text-muted-foreground text-lg">
                    CampaignStudio integrates with hundreds of ecommerce tools in a single click.
                    It&apos;s so smooth, you&apos;ll wonder why other tools feel so clunky.
                </p>
            </div>

            <div className="w-full max-w-5xl relative mb-12" data-aos="fade-up">
                {/* Background connecting line/bar effect - simulated with styling */}
                <div className="absolute top-1/2 left-0 w-full h-8 bg-[#F3EFE0] dark:bg-muted/30 -z-10 -translate-y-1/2 rounded-full hidden md:block" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    <PlatformCard><ShopifyPlusLogo /></PlatformCard>
                    <PlatformCard><BigCommerceLogo /></PlatformCard>
                    <PlatformCard><WordPressLogo /></PlatformCard>

                    <PlatformCard><WooCommerceLogo /></PlatformCard>
                    <PlatformCard><WixLogo /></PlatformCard>
                    <PlatformCard><ShoplazaLogo /></PlatformCard>
                    <PlatformCard><EcwidLogo /></PlatformCard>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl opacity-70" data-aos="fade-up" data-aos-delay="100">
                <SecondaryLogo name="aftership" />
                <SecondaryLogo name="smile.io" />
                <SecondaryLogo name="gorgias" />
                <SecondaryLogo name="ReCharge" />
                <SecondaryLogo name="LOYALTYLION" />
                <SecondaryLogo name="yotpo." />
                <SecondaryLogo name="Typeform" />
                <SecondaryLogo name="OKENDO" />
            </div>
        </section>
    );
}
