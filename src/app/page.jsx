"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
  const [timeLine, setTimeLine] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition < screenHeight * 0.5) {
        setTimeLine(1);
      } else if (
        scrollPosition >= screenHeight * 0.5 &&
        scrollPosition < screenHeight * 1.5
      ) {
        setTimeLine(2);
      } else if (
        scrollPosition >= screenHeight * 1.5 &&
        scrollPosition < screenHeight * 2.5
      ) {
        setTimeLine(3);
      } else {
        setTimeLine(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="background-section">
      <header className="container mx-auto flex justify-between items-center pt-16">
        <Image src="/image/Logo.svg" alt="Logo rasm" width={108} height={24} />
        <nav className="flex gap-4 font-bold">
          <Link href="#">Equipment</Link>
          <Link href="#">About us</Link>
          <Link href="#">Blog</Link>
        </nav>
        <div className="flex gap-2">
          <Image src="/image/cart.svg" alt="user rasm" width={24} height={24} />
          <p className="font-bold">Account</p>
        </div>
      </header>

      {/* Fixed timeline */}
      <div className="fixed top-[40%] right-10 transform -translate-y-1/2 p-6 text-white ">
        <div className="text-center">
          <div className="flex flex-col gap-6">
            <span
              className={`text-xl ${
                timeLine === 1 ? "text-white font-bold" : "text-slate-400"
              }`}
            >
              Start
            </span>
            <span
              className={`text-xl ${
                timeLine === 2 ? "text-white font-bold" : "text-slate-400"
              }`}
            >
              01
            </span>
            <span
              className={`text-xl ${
                timeLine === 3 ? "text-white font-bold" : "text-slate-400"
              }`}
            >
              02
            </span>
            <span
              className={`text-xl ${
                timeLine === 4 ? "text-white font-bold" : "text-slate-400"
              }`}
            >
              03
            </span>
          </div>
        </div>
      </div>

      <main>
        {/* Section 1 */}
        <div className="asosiy-qism flex pt-[200px] container mx-auto pb-[1100px]">
          <div className="insta">
            <Image
              src="/image/Social.svg"
              alt="instagram reklama"
              width={24}
              height={173}
            />
          </div>
          <div className="text mx-auto flex flex-col">
            <div className="chiziq flex gap-4 items-center">
              <span className="w-[72px] h-[2px] bg-[#FBD784]"></span>
              <p className="font-bold text-[18px] text-[#FBD784] tracking-[6px]">
                A Hiking guide
              </p>
            </div>
            <h1 className="text-[88px] leading-[100px] font-serif">
              Be Prepared For The <br /> Mountains And Beyond!
            </h1>
          </div>
        </div>

        {/* Section 2 */}
        <div className="1-qism flex justify-center items-center gap-[150px] bg-[#0B1D26] pb-[200px]">
          <div className="text flex flex-col gap-6 relative">
            <div className="chiziq flex gap-4 items-center">
              <span className="w-[72px] h-[2px] bg-[#FBD784]"></span>
              <p className="font-bold text-[18px] text-[#FBD784] tracking-[6px]">
                GET STARTED
              </p>
            </div>
            <h2>
              What level of hiker <br /> are you?
            </h2>
            <p className="w-[530px]">
              Determining what level of hiker you are can be an important tool
              when planning future hikes...
            </p>
            <button className="read flex gap-2 cursor-pointer">
              <p className="text-[#FBD784]">read more</p>
              <Image
                src="/image/ongga.svg"
                alt="arrow"
                width={16}
                height={24}
              />
            </button>
            <Image
              src="/image/01-raqam.svg"
              alt="o1 raqam"
              width={240}
              height={240}
              className="absolute left-[-160px] top-[-100px]"
            />
          </div>
          <Image src="/image/01.png" alt="1-rasm" width={566} height={720} />
        </div>

        {/* Section 3 */}
        <div className="2-qism flex justify-center items-center gap-[350px] bg-[#0B1D26] pb-[200px]">
          <Image src="/image/02.png" alt="2-rasm" width={566} height={720} />
          <div className="text flex flex-col gap-6 relative">
            <div className="chiziq flex gap-4 items-center">
              <span className="w-[72px] h-[2px] bg-[#FBD784]"></span>
              <p className="font-bold text-[18px] text-[#FBD784] tracking-[6px]">
                GET STARTED
              </p>
            </div>
            <h2>
              Picking the right <br /> Hikiing Gear!
            </h2>
            <p className="w-[530px]">
              The nice thing about beginning hiking is that you don’t really
              need any special gear...
            </p>
            <button className="read flex gap-2 cursor-pointer">
              <p className="text-[#FBD784]">read more</p>
              <Image
                src="/image/ongga.svg"
                alt="arrow"
                width={16}
                height={24}
              />
            </button>
            <Image
              src="/image/02-raqam.svg"
              alt="o2 raqam"
              width={240}
              height={240}
              className="absolute left-[-160px] top-[-100px]"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="3-qism flex justify-center items-center gap-[150px] bg-[#0B1D26] pb-[200px]">
          <div className="text flex flex-col gap-6 relative">
            <div className="chiziq flex gap-4 items-center">
              <span className="w-[72px] h-[2px] bg-[#FBD784]"></span>
              <p className="font-bold text-[18px] text-[#FBD784] tracking-[6px]">
                GET STARTED
              </p>
            </div>
            <h2 className="">
              Understand Your <br /> Map & Timing
            </h2>
            <p className="w-[530px]">
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <button className="read flex gap-2 cursor-pointer">
              <p className=" text-[#FBD784]">read more</p>
              <Image
                src="/image/ongga.svg"
                alt="arrow"
                width={16}
                height={24}
              />
            </button>
            <Image
              src="/image/03-raqam.svg"
              alt="o1 raqam"
              width={240}
              height={240}
              className="absolute left-[-160px] top-[-100px]"
            />
          </div>
          <Image src="/image/01.png" alt="1-rasm" width={566} height={720} />
        </div>,
      </main>
      <footer className=" bg-[#0B1D26] ">
        <div className="container mx-auto pb-[120px] flex justify-between">
          <div className="flex flex-col">
            {" "}
            <Image
              src="/image/Logo.svg"
              alt="Logo rasm"
              width={108}
              height={24}
            />{" "}
            <p className="font-bold pt-6 pb-[122px]">
              Get out there & discover your next <br /> slope, mountain &
              destination!
            </p>
            <p className="text-gray-500">
              Copyright 2023 MNTN, Inc. Terms & Privacy
            </p>
          </div>
          <div className="footer-nav flex gap-32 font-bold pr-16">
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-[#FBD784] pb-3">More on The Blog</p>
              <Link href="#">About MNTN</Link>
              <Link href="#">Contributors & Writers</Link>
              <Link href="#">Write For Us</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-[#FBD784] pb-3">More on MNTN</p>
              <Link href="#">The Team</Link>
              <Link href="#">Jobs</Link>
              <Link href="#">Press</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
