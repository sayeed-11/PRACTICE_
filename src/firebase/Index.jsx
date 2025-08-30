import {
  putData,
  getData,
  getDocument, // ✅ Make sure spelling is intentional
  setDocument,
  db,
} from "./fireStore";

import Button from "./Button";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

const Index = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "users", "4yca2fb4eCWeadRiplIH"),
      (snap) => {
        console.log(snap.data());
      }
    );

    return () => {
      unsub();
    };
  },[]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div key={index} className="border-1 border-pink-500 p-5 rounded-xl">
            <h1>Name : {item.name}</h1>
            <h1>Age : {item.age}</h1>
            <h1>Gender : {item.gender}</h1>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Button title="GET DATA" click={getDocument} />
        <Button title="SET DATA" click={setDocument} />
      </div>
    </div>
  );
};

export default Index;
