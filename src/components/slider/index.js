import React, { useEffect, useState } from "react";

const data = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
];

const Slider = () => {
  const [show, setShow] = useState(1);

  const handlePrev = () => {
    setShow(show === 1 ? 5 : show - 1);
  };

  const handleNext = () => {
    setShow(show === 5 ? 1 : show + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(show === 5 ? 1 : show + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <h1>Slider</h1>
      <hr />
      <div className="flex justify-between w-100">
        <div
          className="flex"
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            className="m-5 cursor-pointer"
            onClick={handlePrev}
            style={{
              background: "orange",
              width: "36px",
              height: "38px",
              fontSize: "24px",
              borderRadius: "50%",
            }}
          >
            {"<"}
          </span>
        </div>
        <div style={{ height: "500px" }}>
          {data.map((el, i) => {
            return (
              el.id === show && (
                <div
                  key={el.id}
                  className="m-5 animate-[wiggle_1s_ease-in-out_infinite]"
                >
                  <img src={el.url} alt={el.title} width={500} height={200} />
                </div>
              )
            );
          })}
        </div>
        <div
          className="flex"
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            className="m-5 cursor-pointer"
            onClick={handlePrev}
            style={{
              background: "orange",
              width: "36px",
              height: "38px",
              fontSize: "24px",
              borderRadius: "50%",
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Slider;
