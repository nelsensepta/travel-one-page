import React from "react";
import About from "./About";

export default function Member() {
  return (
    <div className="relative flex flex-col bg-black text-white md:pt-80 pt-52  px-5 sm:px-10">
      <div className="container mx-auto w-full leading-relaxed">
        <About />
        <div className="text-center items-center mx-auto space-y-2 w-3/4">
          <p className="uppercase">Become one of us</p>
          <h1 className="text-5xl">Member Benefit</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            felis eu erat sollicitudin sodales non mollis mi. Pellentesque
            maximus semper odio, ac pellentesque odio euismod eu. Vivamus eu
            rhoncus arcu.
          </p>
        </div>
        <div className="flex  justify-start py-20 w-full gap-5  sm:flex-row flex-col">
          <div className="flex items-start justify-center gap-2 sm:w-1/3 w-full">
            <span className="font-bold text-8xl">1</span>
            <div className="flex flex-col item-start justify-center gap-2">
              <h1 className="text-2xl">
                Vivamus eu rhoncus arcu. Mauris tincidunt libero at urna dapibus
                hendrerit
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac lectus non eros accumsan sagittis. Integer eu velit ultrices
                turpis vestibulum ultrices. Vestibulum sit amet nibh nulla.
                Pellentesque ultricies tortor id libero pellentesque, sed
                sodales orci ullamcorper. Phasellus nec nibh aliquam, consequat
                sapien venenatis, venenatis nisi. Duis aliquet consequat
                ullamcorper. In eros lorem, tristique quis tincidunt a, feugiat
                at ante. Aenean ac justo leo. Etiam sed iaculis est. Class
                aptent.
              </p>
            </div>
          </div>
          <div className=" flex items-start justify-start gap-2 sm:w-1/3 w-full ">
            <span className="font-bold text-8xl">2</span>
            <div className="flex flex-col item-start justify-center gap-2">
              <h1 className="text-2xl">
                Mauris tincidunt libero at urna dapibus hendrerit
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac lectus non eros accumsan sagittis. Integer eu velit ultrices
                venenatis, venenatis nisi. Duis aliquet consequat ullamcorper.
                In eros lorem, tristique quis tincidunt a, feugiat at ante.
                Aenean ac justo leo. Etiam sed iaculis est. Class aptent.
              </p>
            </div>
          </div>
          <div className=" flex items-start justify-start gap-2 sm:w-1/3 w-full">
            <span className="font-bold text-8xl">3</span>
            <div className="flex flex-col item-start justify-center gap-2">
              <h1 className="text-2xl">dapibus hendrerit</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac lectus non eros accumsan sagittis. Integer eu velit ultrices
                turpis vestibulum ultrices. Vestibulum sit amet nibh nulla.
                Pellentesque ultricies tortor id libero pellentesque, sed
                sodales orci ullamcorper. Phasellus nec nibh aliquam, consequat
                sapien
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
