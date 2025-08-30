import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const StarggerView = () => {
    useGSAP(() => {
        gsap.from('.para', {
            opacity: 0,
            y : 50,
            duration : 1.5,
            stagger :  0.5,
            delay : 1
        })
    },[])
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center p-10 bg-black">
      <div className="w-full">
        <Title name="SAYEED ANWAR" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="para font-AbrilFatface">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          reiciendis voluptas at ut repellat error dicta debitis provident,
          optio sequi officiis ea saepe sit est doloribus laborum commodi
          doloremque minus perferendis voluptate pariatur quae consequuntur.
          Laboriosam, suscipit dolorem hic quae totam dignissimos, id
          repudiandae laborum eaque sapiente quibusdam aliquam quisquam culpa
          nisi inventore similique amet nam recusandae officia ipsa aperiam
          natus voluptatibus ut! A natus nisi, consequatur fugiat iure hic
          suscipit omnis quibusdam perspiciatis, ipsa pariatur cum minus culpa!
          Dignissimos ex nesciunt nobis hic excepturi, omnis impedit, inventore
          ut molestias at commodi distinctio eveniet enim eum magnam mollitia
          dolor nostrum nisi tempore vero quia praesentium aliquid! Culpa
          laudantium blanditiis labore molestiae dolorum amet numquam rerum
          minus atque, voluptatum doloribus, esse cupiditate aut. In, vitae
          excepturi autem facilis voluptatem fuga rerum illo ea doloremque
          adipisci saepe. Dolorem sed tenetur dolorum quos dolor, reprehenderit
          veniam, optio inventore autem enim perspiciatis est unde accusantium
          illo voluptas mollitia nobis rerum quae amet excepturi illum sapiente
          neque. Aliquam architecto consectetur, similique quis saepe unde,
          laborum dolores placeat, veniam deserunt officia neque commodi
          recusandae ea nihil ducimus tenetur sunt error! Natus aperiam delectus
          ea ut numquam cum ratione dicta nesciunt consequatur, recusandae sint,
          ducimus quos enim.
        </p>
        <p className="para font-AbrilFatface">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea
          sed id eligendi suscipit eum, distinctio provident voluptate magnam
          incidunt quod natus perferendis error! Deserunt reprehenderit nemo
          cupiditate, doloremque voluptate unde officiis officia cum
          necessitatibus amet consequatur facilis porro dolore quasi molestias
          similique minima, libero commodi iste animi suscipit cumque veritatis.
          Dolores tenetur placeat debitis cum ut numquam quos id, amet alias
          autem accusantium necessitatibus distinctio beatae sit sed ab
          deleniti! Expedita in, saepe adipisci at tempore, ab alias aut quae
          aliquam suscipit nobis dolorum. Cum maiores suscipit architecto
          adipisci dolorem vel beatae quaerat iusto possimus cupiditate
          blanditiis, quae autem.
        </p>
        <p className="para font-AbrilFatface">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          dignissimos quasi distinctio eum, enim nihil nesciunt culpa, rerum
          architecto eligendi consequuntur aspernatur. Quo recusandae odio
          nesciunt consectetur veritatis deserunt, corrupti, sint quibusdam
          voluptate placeat qui eaque facere voluptas molestias nihil repellat
          in maiores cum nisi ea similique autem tempore consequatur
          reprehenderit. Totam nemo incidunt ipsa, officiis sequi, cum ducimus
          doloribus asperiores modi architecto expedita neque? Fuga, assumenda
          aut! Cum delectus, a odio distinctio dolor nesciunt vero minus
          deleniti facilis accusantium! Corporis dignissimos fugiat totam odio,
          mollitia itaque veniam saepe vitae quas cum dolore enim consectetur,
          inventore voluptates officiis quibusdam modi nisi dolorum qui? Ipsam
          odio id hic saepe eligendi corporis aliquam dolor maxime ullam sequi
          consequuntur explicabo unde esse accusantium autem non adipisci
          quisquam cumque, in nisi blanditiis ad aliquid? Dignissimos, veniam
          dolore, nam error dolorem dolor alias quis rem quo culpa molestiae
          nemo? Cum facere dolores quod quidem beatae?
        </p>
      </div>
    </div>
  );
};

export default StarggerView;

const Title = ({ name }) => {
  const alphs = name.split("");

  useGSAP(() => {
    gsap.from("#left", {
      y: 120,
      //   x: -80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      delay: 0.2,
      //   scale : 0
    });

    gsap.from("#right", {
      y: 120,
      //   x: 80,
      opacity: 0,
      duration: 1,
      stagger: -0.15,
      delay: 0.2,
      //   scale : 0
    });
  }, []);

  return (
    <div className="flex items-center overflow-hidden">
      {alphs.map((item, index) => {
        const half = alphs.length / 2;
        return item === " " ? (
          <h1 className="text-transparent font-AbrilFatface text-[7rem] font-bold">
            -
          </h1>
        ) : (
          <h1
            id={index < half ? "left" : "right"}
            className="font-LuckiestGuy text-white text-[7rem] font-bold"
            key={index}
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
};
