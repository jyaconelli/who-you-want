"use client";

import { ContentRow } from "../components/ContentRow";
import React from "react";
import Sparkle from "react-sparkle";
import useMousePosition from "@/components/useMousePosition";
import useScrollPosition from "@/components/useScrollPosition";

export default function Home() {
  const { x, y } = useMousePosition();
  const scrollPosition = useScrollPosition();
  return (
    <main className="flex flex-col align-middle items-center bg-indigo-600 saturate-200 cursor-fancy">
      <div className="w-full h-full fixed z-50 pointer-events-none overflow-hidden">
        <div
          className="absolute h-[50px] w-[50px] z-50 rounded-full"
          style={{
            top: (y ?? 0) + scrollPosition - 25 ?? 0,
            left: (x ?? 0) - 25 ?? 0,
          }}
        >
          <Sparkle overflowPx={0} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/pattern.png)",
          backgroundSize: "200px 200px",
          // backgroundPosition: "center",
        }}
        className="flex w-full min-h-screen saturate-200 bg-repeat flex-col items-center justify-center gap-12 p-24 bg-indigo-500"
      >
        <div className="px-4 bg-black py-8 max-md:p-2 border-white border-4 max-w-screen-sm ">
          <h2 className="font-Gruppo text-3xl text-white max-md:text-1xl italic">
            do NoT FeAR
          </h2>
          <h1
            className="font-Gruppo font-black animate-spin-z text-9xl max-md:text-4xl bg-indigo-500 inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage: "url(/pattern.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "center",
            }}
          >
            THe quEErs are HeRE
          </h1>
        </div>
      </div>
      <div className="w-full justify-center flex p-12 max-md:p-8 saturate-200 bg-black">
        <div className="w-full justify-center flex max-md:p-0 p-12">
          <div className="max-w-screen-sm gap-4 flex flex-col justify-center bg-cover ">
            <ContentRow
              // reverse
              horizontal={false}
              text="You’ve found the venue, curated the guest list, sent the invitations,
        prepped the menu. You’ve got the (alleged) love of your life by your
        side and are ready to tie the knot. Hooray! Still, something gnaws at
        you. What if—yawn, cringe, grimace—it’s all just a bit, well, straight?"
            />
            <ContentRow
              text="Worried the vibes at your nuptials will be off? Worried your friends
          and family are embarrassing? Don’t have any friends and family?
          Worried no one will think you’re cool? Worried that uncle you never
          see will make everyone uncomfortable in all the wrong ways? Worried
          the capitalist-patriarchal tradition of marriage will make people
          confuse you for a square?"
            />
            <ContentRow
              reverse
              text=" We’re here for you. We are a couple of queers who are ready to spice
          up your wedding. Our speciality is being fabulous. We will dance our
          hearts out. We will pull people out of their shells. We will make your
          conservative relatives uncomfortable in generative ways. Or, if you
          prefer, we will simply look silently interesting (with a variable hint
          of intimidating). If your spouse asks who are they, we’re just your
          old weirdo friends from school! If that uncle calls us “tranny” or
          “faggot,” we’ll just take it as a compliment! We promise to get and
          keep the vibes going, long after the (way-too-early) last song."
            />
            <ContentRow
              text="Our services include, but are not limited to, dance floor activation,
          afterparty dynamization, conversational support, radical imaginative
          assistance, toasts, speeches, even officiation itself (we are ordained
          chaplains)."
            />
            <ContentRow
              reverse
              text=" Our qualifications include winning national speaking competitions,
          dancing competitions, and fashion competitions. We are trained actors,
          dancers, and artists. We are highly educated, courteous, and
          personable. We are sassy and kind. We can talk “up” or “down.” We can
          chameleon. We have given the valedictorian speech at an Ivy League
          university, officiated numerous weddings, improved countless awkward
          dance floors, brought an actual rainbow out of the sky by giving a
          toast."
            />
            <ContentRow
              text="Straight wedding syndrome can strike even LGBT+ unions (trust us).
          You’ll want our expertise to make sure your big day is as rad as you,
          in your heart of hearts, really are."
            />
            <div className="bg-pink-500 py-8 px-4 relative">
              <Sparkle />
              <p className="text-center">
                Contact us and we can scheme details. Let’s get serious to get
                loose.
                <br />
                Remember,{" "}
                <span
                  className="bg-black p-1 shadow-xl drop-shadow-2xl"
                  style={{
                    textShadow: "0 0 6px rgba(255,255,255, .5)",
                  }}
                >
                  <span className=" bg-gradient-to-r font-Tiny5 text-xl from-red-300 via-yellow-400-500 to-blue-200 inline-block text-transparent bg-clip-text">
                    we’ll always be who you want us to be.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
