"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "CampaignStudio revolutionized our marketing operations, specifically in automated email flows. The analytics dashboard keeps us productive and informed.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        name: "Briana Patton",
        role: "CMO",
    },
    {
        text: "Implementing CampaignStudio was smooth and quick. The customizable, user-friendly interface made team onboarding effortless.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
        name: "Bilal Ahmed",
        role: "Tech Lead",
    },
    {
        text: "The delivery rates are exceptional, and the support team guided us through IP warming and setup, ensuring our success.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
        name: "Saman Malik",
        role: "Email Specialist",
    },
    {
        text: "This platform's seamless integration with our CRM enhanced our business operations and efficiency. Highly recommend for its API first approach.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        name: "Omar Raza",
        role: "CTO",
    },
    {
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient at launching campaigns.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
        name: "Zainab Hussain",
        role: "Growth Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our campaign ROAS improved with the A/B testing features. Positive customer feedback on the new email templates.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&auto=format&fit=crop",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using CampaignStudio, our online presence and conversions significantly improved, boosting business performance.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        name: "Hassan Ali",
        role: "E-commerce Manager",
    },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
    return (
        <section className="bg-background my-20 relative">
            <div className="container z-10 mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
                >
                    <div className="flex justify-center">
                        <div className="border py-1 px-4 rounded-full text-sm font-medium border-primary/20 bg-primary/5 text-primary">Testimonials</div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-5 text-center">
                        What our users say
                    </h2>
                    <p className="text-center mt-4 text-muted-foreground text-lg">
                        See what our customers have to say about us.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
