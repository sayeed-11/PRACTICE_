import React, { useState } from "react";
import { supabase } from "../supabase/SupabaseApp";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/974a52f4-7f79-4730-8699-e40590bfd7ef/M+J+BRK+CLLGTE+HBR+PO+HD+LB.png"; // Replace with your file URL
    link.download = "sample.png"; // Optional: rename file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [files, setFiles] = useState(null);

  // console.log(supabase.from());

  console.log(
    new Date()
      .toISOString()
      .replaceAll("-", "")
      .replaceAll(":", "")
      .replaceAll(".", "")
  );
  console.log(Date.now());

  const [allUrls, setUrls] = useState([]);

  const uploadAllFiles = async () => {
    if (!files || files.length === 0) {
      alert("No files selected.");
      return;
    }

    const imgFiles = Array.from(files);

    // for (let image of imgFiles) {
    //   const { data, error } = await supabase.storage
    //     .from("nike")
    //     .upload(`Nike-Sportswear/${image.name}`, image, {
    //       cacheControl: "3600",
    //       upsert: false,
    //     });

    //   if (error) {
    //     console.error(`❌ Upload failed for ${image.name}:`, error.message);
    //   } else {
    //     console.log(`✅ Uploaded ${image.name}`, data);
    //   }
    // }
  };

  const getAllFileUrls = async () => {
    const bucketName = "nike";
    const folderPath = "Nike-Sportswear"; // folder inside the bucket

    const { data: files, error } = await supabase.storage
      .from(bucketName)
      .list(folderPath, { limit: 100 });

    if (error) {
      console.error("Error fetching files:", error);
      return;
    }

    console.log("my files -> ", files);

    const urls = files.map((file) => {
      const fullPath = `${folderPath}/${file.name}`; // include folder name in path

      const { data: publicUrl } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fullPath);

      return publicUrl.publicUrl;
    });

    console.log("File URLs:", urls);
    setUrls(urls);
  };

  const createTable = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS test_table (
      id SERIAL PRIMARY KEY,
      name TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;

    const { data, error } = await supabase.rpc("execute_sql", { sql });

    if (error) console.error(error);
    else console.log("Table created", data);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black flex-col gap-5">
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="border-[1px] border-gray-600 text-gray-600 px-5 py-2"
      />

      <button
        onClick={uploadAllFiles}
        className="bg-gray-600 text-white px-5 py-2"
      >
        Upload Files
      </button>

      {allUrls && (
        <div className="text-white">
          {allUrls.map((link) => (
            <h1 key={link}>{link}</h1>
          ))}
        </div>
      )}

      <button
        onClick={getAllFileUrls}
        className="bg-gray-600 text-white px-5 py-2"
      >
        Get all urls
      </button>

      <button
        onClick={createTable}
        className="bg-gray-600 text-white px-5 py-2"
      >
        Create table
      </button>

      <button
        onClick={handleDownload}
        className="bg-gray-600 text-white px-5 py-2"
      >
        Download
      </button>
      <a className="text-red-500" href="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/974a52f4-7f79-4730-8699-e40590bfd7ef/M+J+BRK+CLLGTE+HBR+PO+HD+LB.png" download={"nike-hoodie.png"}>download</a>
    </div>
  );
};

export default Index;
