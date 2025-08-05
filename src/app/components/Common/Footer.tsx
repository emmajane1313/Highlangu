import { FunctionComponent } from "react";
import Transmissions from "./Transmissions";
import Image from "next/image";

const Footer: FunctionComponent<{ dict: Record<string, string> }> = ({ dict }) => {
  return (
    <div className="relative w-full h-fit bg-white p-4 flex flex-col gap-2">
      <div className="relative w-full h-fit bg-white border-2 px-2 border-black flex flex-col sm:flex-row">
        <div className="relative w-fit h-full flex justify-between flex-col border-b-2 sm:border-b-0 sm:border-r-2 p-2 gap-2">
          <div className="relative w-full h-fit flex flex-col gap-2 sm:mb-0 mb-20">
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4vw] uppercase font-lemon">
              Highlaŋu
            </div>
            <div className="relative w-full h-fit flex text-[7vw] sm:text-[4vw] uppercase font-faceT">
              The Highland-Yolŋu Alliance.
            </div>
          </div>
          <div className="relative w-full h-fit flex text-lg font-klar">
            From Gaels to First Nations, the threads were never just fabric.
            Handwoven legacies to zero-knowledge silk, heritage doesn’t fade. It
            forks. Coded through songline and signal, across the longest arc of
            connected memory. A cross-temporal mesh of transmission techniques
            refined through contact, refusal, adaptation, and return.
          </div>
        </div>
        <div className="relative w-full h-full flex flex-col">
          <div className="relative w-full h-full flex flex-col mid:flex-row justify-between border-b-2 gap-2 p-2">
            <div className="relative w-full h-fit mid:h-full flex">
              <div className="relative w-full h-[30rem] sm:h-[24rem] mid:h-full flex">
                <Image
                  draggable={false}
                  layout="fill"
                  objectFit="fill"
                  alt="Highlaŋu electric couture dress"
                  src={"/images/glitterdress.png"}
                />
              </div>
            </div>
            <div className="relative w-full h-fit flex text-justify text-[4vw] sm:text-[1.7vw] mid:text-[1.1vw] font-face">
              Highlaŋu is shared resistance architecture, shaped over millennia
              and carried forward intact. The revival of memory infrastructure
              built to survive deletion, mapped through relation and versioned
              across generations. Maritime kinship routes and landscape memory
              grids, carved into stone, held in breath, encoded in place. A
              sovereign knowledge protocol shaped by pressure, optimized through
              time. A living template for alliance networks of groups with deep
              resistance experience syncing geography, technology, and memory
              into durable empire-resistant cultural-transmission networks. An
              immune system against systematic imperial erasure.
            </div>
          </div>
          <div className="relative w-full h-full flex font-built flex-col  p-2">
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4.5vw] mid:text-[3.7vw]">
              Maximum Resistance Experience.
            </div>
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4.5vw] mid:text-[3.45vw]">
              Maximum Knowledge Preservation.
            </div>
            <div className="relative w-fit h-fit font-faceL flex text-xl">
              Where navigation becomes interface, and the archive remembers you
              back.
            </div>
          </div>
        </div>
      </div>
      <Transmissions dict={dict} />
    </div>
  );
};

export default Footer;
