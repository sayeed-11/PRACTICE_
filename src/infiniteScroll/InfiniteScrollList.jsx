import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const newItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1 + (page - 1) * 20}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setItems((prev) => [...prev, ...newItems]);

    if (page === 5) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll Example</h1>

      <div id="scrollableDiv" style={{ height: "80vh", overflow: "auto" }}>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4 className="text-center">Loading...</h4>}
          endMessage={<p className="text-center">You have seen it all!</p>}
          scrollableTarget="scrollableDiv"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border rounded p-4 mb-2 shadow-sm"
            >
              {item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollList;

