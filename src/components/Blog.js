import React from "react";
import CardPost from "./molecules/CardPost";

export default function Blog() {
  return (
    <div className="bg-primary px-5 sm:px-10 py-20 ">
      <div className="mx-auto container w-full">
        <div className="space-y-10 text-center">
          <h1 className="text-3xl">Our latest blog post</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            felis eu erat sollicitudin sodales non mollis mi. Pellentesque
            maximus semper odio, ac pellentesque odio euismod eu. Vivamus eu
            rhoncus arcu.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 grid-rows-auto md:grid-cols-2 pt-10">
          <CardPost
            url="/img/building/city4.jpg"
            width="700"
            height="450"
            slug="#"
            alt="city4"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac felis
          eu erat sollicitudin sodales non mollis mi. Pellentesque maximus
          semper odio, ac pellentesque odio euismod eu. Vivamus eu rhoncus arcu."
            date="24,Jun 2021"
            title="The Culture Of Ninja"
          />
          <CardPost
            url="/img/building/city9.jpg"
            width="700"
            height="450"
            alt="city9"
            slug="#"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac felis
          eu erat sollicitudin sodales non mollis mi. Pellentesque maximus
          semper odio, ac pellentesque odio euismod eu. Vivamus eu rhoncus arcu."
            date="24,Jun 2021"
            title="The Culture Of Ninja"
          />
          <CardPost
            url="/img/building/city5.jpg"
            width="700"
            height="450"
            alt="city5"
            slug="#"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac felis
          eu erat sollicitudin sodales non mollis mi. Pellentesque maximus
          semper odio, ac pellentesque odio euismod eu. Vivamus eu rhoncus arcu."
            date="24,Jun 2021"
            title="The Culture Of Ninja"
          />
        </div>
      </div>
    </div>
  );
}
