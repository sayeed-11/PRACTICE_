import React, { useEffect, useRef, useState } from "react";

const PageOffset = () => {
    const divRef = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const scrollHeight = divRef.current.scrollHeight;
        console.log("scrollHeight : ", scrollHeight - window.innerHeight);
        const height = scrollHeight - window.innerHeight;
        
        const handleScroll = () => {
            console.log(window.pageYOffset);
            const offset = window.pageYOffset;
            const cnt = ((100 * offset) / height);

            setCount(cnt);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <div ref={divRef} className="w-full min-h-screen">
        <div style={{
            width : `${count}%`
        }} className=" fixed top-0 h-1 bg-amber-300">

        </div>
      {/* <div className="flex justify-center sticky top-0 bg-black">
        <h1 className="text-[3rem]">{count}</h1>
      </div> */}
      <div className="flex flex-col gap-10 p-10 justify-start">
        <Lorem/>
      <Lorem/>
      <Lorem/>
      <Lorem/>
      <Lorem/>
      </div>
    </div>
  );
};

export default PageOffset;

const Lorem = () => {
    return(
              <div className="text-white/10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quae
        aliquam? Animi tempora, repudiandae libero quidem enim illum eius
        officia deserunt eligendi voluptatum natus est, vel voluptates quisquam
        aliquam at quos maxime esse rerum recusandae magni explicabo. Iste
        blanditiis atque earum nisi placeat accusantium nobis? Libero quos porro
        illum totam dignissimos repellendus, sint officiis, impedit tenetur
        nulla fugit ab nam nesciunt illo dolorem animi ex deserunt debitis
        dolore eum facere iste veritatis rem! Minima aperiam nam laboriosam
        alias unde? Quibusdam doloribus error qui maxime. Nobis officia
        voluptatum voluptatem eligendi quas quam obcaecati, explicabo provident
        ipsa modi dolores, libero tempore reprehenderit nihil deserunt beatae!
        Esse eaque nesciunt consequuntur soluta? Accusamus, vel alias veritatis,
        quam fuga eius tempora praesentium velit, fugiat porro deleniti
        asperiores hic! Possimus, porro. Nesciunt minus reprehenderit magni, qui
        cumque sit vero eligendi quam, molestias obcaecati, dolores voluptates
        placeat laudantium totam omnis sapiente. Voluptate explicabo assumenda,
        praesentium blanditiis minus temporibus dolore. Blanditiis aliquam alias
        odit ad error earum omnis excepturi, illo consequuntur aspernatur
        maiores quas architecto rem placeat dolor minus! Beatae dolores quaerat
        repellendus vero! Aliquam rerum nobis vitae vel harum incidunt laborum
        facere pariatur fugiat a adipisci ratione quaerat aliquid maxime et
        doloribus eveniet perferendis, doloremque, dignissimos dolore!
      </div>
    )
}
