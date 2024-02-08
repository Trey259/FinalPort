import { motion } from 'framer-motion';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Textarea } from "@/components/ui/textarea"
function App() {

    return (
        <>

            <motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <a href="https://discord.com" target="_blank">
                    <motion.img
                        src={viteLogo}
                        className="logo"
                        alt="Vite logo"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    />
                </a>
            </motion.div>
            <motion.h1
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '3rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '5rem'}} // Larger font size on animation
                transition={{duration: 1}}
            >
                Trapped Service
            </motion.h1>

            <motion.div
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '1rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '1rem'}} // Larger font size on animation
                transition={{duration: 1}}>T18+ content all of i is made up and not real, custom request or images will be used to make what you desire to
                you all down bad fellas out there. Want a piece your self? Click the button below to order right now!!!.
                Trapped Service isn't just a provider; it's an artisanal haven where pixels meet passion, crafting
                custom images that defy mediocrity since 2022. Our images aren't just pictures; they're symphonies of
                creativity, tailored to elevate your vision beyond the ordinary. For those who refuse to settle for the
                mundane, our pixels dance with purpose, painting masterpieces that speak volumes without uttering a
                word. So, if you're tired of the mundane and crave a visual feast that tantalizes the senses, click that
                button below and unlock a realm where imagination knows no bounds. Embrace excellence; choose Trapped
                Service.
            </motion.div>
            <a href="https://discord.com">
                <motion.div
                    className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <Button>Buy Now</Button>
                </motion.div>
            </a>
            <motion.h1
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '3rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '5rem'}} // Larger font size on animation
                transition={{duration: 1}}
            >
                Cuztomiziblity
            </motion.h1>
            <motion.div
                className="landing-prompt"
                initial={{opacity: 0, y: -50, fontSize: '1rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '1rem'}} // Larger font size on animation
                transition={{duration: 1}}> At Trapped Service, we pride ourselves on providing a personalized
                experience for our valued customers.
            </motion.div>
            <motion.h1
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '3rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '5rem'}} // Larger font size on animation
                transition={{duration: 1}}
            >
            </motion.h1>
            <motion.div
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '1rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '1rem'}} // Larger font size on animation
                transition={{duration: 1}}><Textarea>Save Your Own Prompt (data will be lost if you refresh the
                page)</Textarea>
            </motion.div>
            <motion.h1
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '3rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '5rem'}} // Larger font size on animation
                transition={{duration: 1}}
            >
                FAQ's
            </motion.h1>
            <motion.p
                className="read-the-docs"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Questions
            </motion.p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Why us?
                        </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                        At Trapped Service we provide our service since 2022 and provide the best and high quality
                        content and guarantee you and a fun and pleasure-full experience for sure.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Is it free?
                        </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Sadly it's not free because we provide the best quality products
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Are custom orders possible?
                        </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes we provide custom orders and deliver it under an hour.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            What payment methods do you accept
                        </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                        We accept crypto, paypal , cashapp and many more!! just open a ticket and let us know.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Any Examples?
                        </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes Below you can see our examples our visit our free gallery.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        {/* Image holder with Flexbox */}
                        <motion.div
                            className="image-holder"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <img
                                src="https://media.discordapp.net/attachments/1172456583326867497/1204422068725223474/2024-02-06_23-23-30_8066.png?ex=65d4ac76&is=65c23776&hm=aa31a267fd85266c60dc12f41a67b7fcb6c622df5750cbdbf3ebcbde108a6e0e&=&format=webp&quality=lossless&width=633&height=675"
                                alt="Placeholder"/>
                        </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                        {/* Image holder with Flexbox */}
                        <motion.div
                            className="image-holder"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <img
                                src="https://media.discordapp.net/attachments/1172456583326867497/1204422069589254184/2024-02-06_23-33-23_3162.png?ex=65d4ac76&is=65c23776&hm=74fa70f95bc104f1ae3e57cf9ce4162019dfb69a2587464372b4ebb9fea83ac0&=&format=webp&quality=lossless&width=633&height=675"
                                alt="Placeholder"/>
                        </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                        {/* Image holder with Flexbox */}
                        <motion.div
                            className="image-holder"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <img
                                src="https://media.discordapp.net/attachments/1172456583326867497/1204422071648526367/2024-02-06_23-20-22_5255.png?ex=65d4ac76&is=65c23776&hm=c2165d23ebbc24c2a392b2d7c1cabfa59b37ee466029eb9eb5664246eead7b3c&=&format=webp&quality=lossless&width=633&height=675"
                                alt="Placeholder"/>
                        </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                        {/* Image holder with Flexbox */}
                        <motion.div
                            className="image-holder"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <img
                                src="https://media.discordapp.net/attachments/1172456583326867497/1204422072592371732/2024-02-06_23-22-59_2931.png?ex=65d4ac77&is=65c23777&hm=c31be9a476a47080aca6a72ad598ec1ba99a85f06d993cadfd6ecad24e16618a&=&format=webp&quality=lossless&width=633&height=675"
                                alt="Placeholder"/>
                        </motion.div>
                    </CarouselItem>
                    <CarouselItem>
                        {/* Image holder with Flexbox */}
                        <motion.div
                            className="image-holder"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <img
                                src="https://media.discordapp.net/attachments/1172456583326867497/1204422070797205504/2024-02-06_23-10-29_6038.png?ex=65d4ac76&is=65c23776&hm=f05cc4944a48d5f16c20c7e05ee8b413720ea36f53c9ec41a5906c76a0761c88&=&format=webp&quality=lossless&width=633&height=675"
                                alt="Placeholder"/>
                        </motion.div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

            <motion.div
                className="landing-heading"
                initial={{opacity: 0, y: -50, fontSize: '1rem'}} // Increase font size
                animate={{opacity: 1, y: 0, fontSize: '1rem'}} // Larger font size on animation
                transition={{duration: 1}}> So what are you waiting for? Enroll Now!!

            </motion.div>
            <a href="https://discord.com">
                <motion.div
                    className="card"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <Button>Buy Now</Button>
                </motion.div>
            </a>
            <HoverCard>
                <HoverCardTrigger className="hover-underline">
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        @Trapped Service 2024
                    </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="gray-background">
                    The best FW custom/pre-shot images provider. Providing the down-bad's sauce since 2022
                </HoverCardContent>
            </HoverCard>
        </>
    );
}

export default App;
