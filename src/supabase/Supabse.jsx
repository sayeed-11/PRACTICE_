import React, { useEffect, useState } from "react";
import { supabase } from "./SupabaseApp";
import {info as data} from "../supabase/data/hoodie_data/data20/data"

const Supabse = () => {
  const [imgFiles, setImgFiles] = useState([]);
  const [lastFolder, setLastFolder] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);
  const [imgUrls, setImgUrls] = useState([]);

  const uploadFiles = async () => {
    const folder = Date.now().toString(); // store as string for paths
    setLastFolder(folder);

    for (let file of imgFiles) {
      const { data, error } = await supabase.storage
        .from("fashion") // must be your exact bucket name
        .upload(`${folder}/${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error(`Error uploading ${file.name}:`, error.message);
      } else {
        console.log(`Uploaded ${file.name} to:`, data.path);
      }
    }

    // Fetch URLs after upload
    const files = await getUrls(folder);
    if (files) {
      logPublicUrls(files, folder);
    }
  };

  const getUrls = async (folder) => {
    const { data, error } = await supabase.storage
      .from("fashion")
      .list(folder, {
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      console.error("Error listing files:", error.message);
      return null;
    }
    return data;
  };

  const logPublicUrls = (files, folder) => {
    const image_urls = [];
    for (const file of files) {
      const isPoster = !file.name.split(".")[0].endsWith(")");
      const { data } = supabase.storage
        .from("fashion")
        .getPublicUrl(`${folder}/${file.name}`);

      console.log(data.publicUrl);

      image_urls.push(data.publicUrl);
      if (isPoster) setPosterUrl(data.publicUrl);
    }
    setImgUrls(image_urls);
  };

  const uploadFullData = async () => {
    console.log(imgUrls);

    const productInfo = {
      productId: lastFolder,
      ...data,
      poster: posterUrl,
      imageUrls: imgUrls,
    };

    // const productInfo = {
    //   productId: lastFolder,
    //   title: "Jordan Brooklyn Fleece",
    //   type: "Men's Oversized Pullover Hoodie",
    //   price: 3695,
    //   size: ["S", "M", "L", "XL"],
    //   poster: posterUrl,
    //   imageUrls : imgUrls,
    //   description:
    //     "We love a good hoodie. This one prioritises comfort with an oversized fit and midweight brushed fleece that feels extra-soft on the inside.",
    //   color: "Black/Sail",
    //   ratings: {
    //     total_ratings: 100,
    //     rating_types: {
    //       1: 5,
    //       2: 5,
    //       3: 10,
    //       4: 20,
    //       5: 60,
    //     },
    //   },
    //   reviews: [
    //     {
    //       username: "Alex Mathio",
    //       img_url:
    //         "https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg",
    //       rating_type: 5,
    //       date: "13 Oct 2024",
    //       review:
    //         "This hoodie is super comfortable and perfect for cooler weather. The fabric feels soft against the skin, and the fit is relaxed without being too baggy. I really like the cozy hood and the front pockets — they’re great for keeping my hands warm or holding small items. It’s durable too, so I feel like it’ll last a long time. Definitely a great casual piece for everyday wear!",
    //     },
    //   ],
    // };

    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="flex flex-col gap-10">
      <input
        className="border-[1.5px] border-black/50 py-3 px-2 rounded-xl"
        onChange={(e) => setImgFiles(Array.from(e.target.files))}
        type="file"
        multiple
      />
      <button
      disabled
        onClick={uploadFiles}
        className="bg-amber-300 px-5 py-3 uppercase"
      >
        Upload images
      </button>

      {/* Optional: Only works if lastFolder is set */}
      {/*<button
        onClick={async () => {
          if (!lastFolder) {
            console.warn("No folder uploaded yet.");
            return;
          }
          const files = await getUrls(lastFolder);
          if (files) logPublicUrls(files, lastFolder);
        }}
        className="bg-amber-300 px-5 py-3"
      >
        Get URLs
      </button>*/}

      <button
      disabled
        onClick={uploadFullData}
        className="bg-amber-300 px-5 py-3 uppercase"
      >
        upload Full Data
      </button>
    </div>
  );
};

export default Supabse;

// import React, { useState } from "react";
// import { supabase } from "./SupabaseApp";

// const Supabse = () => {
//   const [imgFiles, setImgFiles] = useState([]);

//   const uploadFiles = async () => {
//     const folder = Date.now();
//     for (let file of imgFiles) {
//       const { data, error } = await supabase.storage
//         .from("fashion")
//         .upload(`${folder}/${file.name}`, file, {
//           cacheControl: "3600",
//           upsert: false,
//         });
//       if (error) {
//         console.error(`Error uploading ${file.name}:`, error.message);
//       } else {
//         console.log(`Uploaded ${file.name} to:`, data.path);
//       }
//     }

//     const result = await getUrls(folder);
//     urls(result, folder);

//   };

//   const getUrls = async (folder) => {
//     const { data, error } = await supabase.storage
//       .from("fashion")
//       .list(folder, {
//         // limit: 100,
//         offset: 0,
//         sortBy: { column: "name", order: "asc" },
//       });

//       return data;
//   };

//   const urls = (files, folder) => {
//     for (const file of files) {

//       const { data } = supabase.storage
//         .from("fashion")
//         .getPublicUrl(`${folder}/${file.name}`);
//       console.log(data.publicUrl);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-10">
//       <input
//         className="border-[1.5px] border-black/50 py-3 px-2 rounded-xl"
//         onChange={(e) => setImgFiles(Array.from(e.target.files))}
//         type="file"
//         multiple
//       />
//       <button onClick={uploadFiles} className="bg-amber-300 px-5 py-3">
//         upload
//       </button>

//       <button onClick={getUrls} className="bg-amber-300 px-5 py-3">
//         get URL
//       </button>
//     </div>
//   );
// };

// export default Supabse;
