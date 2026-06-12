import Image from "next/image"
import "./globals.css";
import rainbow from "./assets/rainbow.jpg";
import Carousel from "./components/carousel";

const cedarImages = [
  '/images/cedar/bathroom.jpg'

]
export default function Home() {
  return (
  
    <div className="w-full h-full bg-[#F6FEE7] ">
      <div className="rounded py-20">
          <div className=" relative overflow-hidden h-[700px] w-full ">
            <Image
              src={rainbow}
              alt="rainbow background image"
              priority
              className="w-full h-auto object-cover rounded-xxl"
            />
            <h2 className="absolute bottom-8 left-8 z-5 text-5xl md:text-5xl lg:text-8xl font-bold text-[#C2E2BD]">
              Welcome to the Kootenays!
            </h2>
          </div>
      </div>
      <div className="relative">
          <p>
            We have two private suites to enjoy.. the Cedar Loft & Maple Loft.
          </p>
          <p>
            Rent one suite for a private, restful experience - or both if you need additional space for friends and family.
          </p>
          <p>
            Each suite is 650 sqft., can accommodate 4 guests & 
            includes a full service kitchen w/ eating bar/workspace, 
            living room, private bedroom & bath w/ air conditioning. 

            Both suites include 
            pull out sofas to accommodate additional guests 
            & share access to the private 
            laundry room and all amenities.

            Located in the tranquil setting of Schroeder Creek 
            community on scenic Kootenay Lake.
            
            Includes access to: our private backyard that backs onto a 
            forested area that features plentiful space for lounging, 
            picnic table, BBQ, hot tub, & fire pit w/ chairs.

            Enjoy a day on the lake w/ 2 kayaks and all the necessary
            beach gear for a fabulous relaxing day!

            Close to the amenities of Kaslo, 
            but far enough to 'get away from it all!’
            
            Coming in for a special occasion?
            Contact us to make your 
            one-of-a-kind Kootenay Lake memories!
          </p>
          </div>
          <div>
            <Carousel images={cedarImages}/>
          </div>
          
     
    </div>
    







    
  );
}
// <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>