import React, { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [serachData, setSearchData] = useState([]);
  const [show, setShow] = useState(5);

  const handleSearch = (serachValue) => {
    if (serachValue === "") {
      setSearchData(data);
    } else {
      const filterBySearch = data.filter((item) => {
        if (item.title.toLowerCase().includes(serachValue.toLowerCase())) {
          return item;
        }
      });
      setSearchData(filterBySearch);
    }
    setShow(5);
  };

  const handleMore = () => {
    setShow(show + 5);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setSearchData(data);
      });
  }, []);

  return (
    <>
      <div>Search & Load more</div>
      <hr />
      <div
        style={{
          width: "30%",
          margin: "10px auto",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="serach here..."
          style={{ width: "40%", border: "1px solid orange" }}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul role="list" class="divide-y divide-gray-100">
          {data &&
            serachData.map((el, i) => {
              return (
                i < show && (
                  <li class="flex justify-between gap-x-6 py-5" key={el.id}>
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={el.url}
                        alt={el.title}
                      />
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          {el.title}
                        </p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                          {el.url}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              );
            })}
        </ul>
        {serachData && serachData.length > 5 && (
          <span className="cursor-pointer" onClick={handleMore}>
            Load more...
          </span>
        )}
      </div>
    </>
  );
};

export default Search;
