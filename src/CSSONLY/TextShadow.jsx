import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TextShadow = () => {
//   const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime commodi error.
//      Aliquid sunt est delectus, amet libero incidunt vero totam quae,
//       itaque distinctio eveniet asperiores obcaecati atque exercitationem enim autem iure aspernatur dolorum 
//       eligendi suscipit repudiandae deserunt? Perspiciatis consequatur odio delectus id minus culpa libero blanditiis
//        similique aspernatur tempora maiores, quam hic nemo debitis? Tenetur totam doloremque numquam tempora
//         quod eaque praesentium cupiditate vero repellat, sunt quam, ipsum eum cumque? Similique molestiae 
//         placeat facere doloremque veniam sequi repellat maxime dolor hic deserunt vitae, voluptates voluptas
//          quaerat quis perferendis provident iure veritatis obcaecati. Excepturi totam harum corrupti reprehenderit.
//           Aspernatur, nam rem explicabo inventore eos deserunt ipsa, dolor nobis corporis incidunt excepturi laboriosam 
//           hic fugit libero consequatur dolores consectetur totam dolorem, unde sapiente? Quia nihil non explicabo debitis
//            consequatur aliquam iste nulla error consectetur sit saepe aspernatur doloribus eveniet quisquam esse,
//             deleniti voluptates ut fuga molestiae incidunt eius pariatur magni et? Perferendis distinctio dolore
//              molestiae facilis architecto! Impedit laboriosam ipsa placeat. Obcaecati fugiat et ipsum beatae nostrum,
//               aliquid sapiente accusantium earum sunt eveniet quos ducimus, facere debitis dignissimos? Fugit vel
//                iusto aliquam, aperiam fugiat aliquid voluptatem maiores. Nam fuga alias deleniti tempora perferendis
//                 eligendi obcaecati, quisquam velit earum accusamus maiores non, nesciunt tempore ratione rerum 
//                 dolorem eveniet fugit. Sint, ipsam commodi ipsum vitae repudiandae deserunt dolorum quidem reprehenderit
//                  minus dolores iure voluptas exercitationem esse, earum corporis ad voluptatibus recusandae velit
//                   quam, sapiente nemo facilis? Iure inventore totam nulla ratione alias, rem excepturi beatae
//                    laborum quis itaque delectus magnam at minus tempore exercitationem dicta ducimus ut,
//                     quibusdam eum, ex molestias voluptatum id doloremque nobis. Nam qui at maiores accusantium
//                      ad autem quam odit tenetur similique minima totam fugit, quas fugiat. Quos illum esse, impedit
//                       officia deleniti voluptatum error fuga dolorem architecto voluptates quia alias assumenda
//                        aut quasi pariatur quo similique sunt quidem? Modi, accusamus unde ipsum ut sint at expedita
//                         non cumque mollitia? Omnis quis beatae quia nisi, perspiciatis nulla quo repellat explicabo
//                          quaerat tenetur inventore obcaecati minus ducimus, pariatur fuga maiores adipisci ad deleniti
//                           impedit qui accusantium? Dolor, dignissimos officiis! Vel culpa, eveniet repellendus dolor
//                            quasi tempora iusto alias fuga tempore quibusdam, optio quae explicabo nostrum blanditiis
//                             quis! Error, enim sapiente dolorem voluptas illo totam dignissimos quam, obcaecati debitis
//                              impedit unde hic, vero nam ipsum. Quo, quas quia velit rem modi expedita ut asperiores adipisci
//                               quae repellat quis iure repudiandae at voluptatum nulla quibusdam similique error quidem earum
//                                delectus. Molestias quas ullam deserunt, modi doloremque porro nihil aut error amet ipsum
//                                 blanditiis debitis fugiat nesciunt rem distinctio neque esse officiis reprehenderit nisi 
//                                 inventore omnis? Laborum amet nulla iusto quae dolore vero sapiente doloribus quam ipsam 
//                                 in tempore dolor, eum id soluta harum assumenda distinctio? Laudantium, doloribus, nihil 
//                                 facilis iure doloremque dicta magnam eligendi tempore quaerat exercitationem officia ab 
//                                 similique consectetur totam assumenda harum ea ipsam dolorem eum. Inventore, nostrum 
//                                 facilis quos beatae nesciunt laborum! Debitis temporibus repellat mollitia laudantium id 
//                                 beatae quasi a dolore deleniti rem voluptatum sit atque praesentium quas cum voluptates,
//                                  ut, sunt, fugiat qui aperiam! Repellat, earum nemo?`;

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam vitae blanditiis pariatur aperiam, quos ipsa. Doloribus fugiat voluptatibus reiciendis."
  useGSAP(() => {
    gsap.from(
      ".anim-text",
      {
        opacity: 0,
        y: 50,
        // duration: 0.5,
        stagger: {
            amount : 1
        },
      },
    );
  },[]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center text-white p-10">
      <div className="flex flex-wrap gap-x-3">
        {text.split(" ").map((word, index) => {
          return (
            <div
            key={index}
              style={{
                transform: `translateX(-${index * 0}px)`,
                position: "relative",
              }}
              className="flex justify-center items-center anim-text"
            >
              <h1
                style={{
                  textShadow: "0px 0px 50px #000000",
                }}
                className="text-[1.5rem] leading-[2rem]"
              >
                {word}
              </h1>
              <div className="absolute w-full h-[2rem] bg-gradient-to-l from-black via-black/10  to-transparent "></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextShadow;
