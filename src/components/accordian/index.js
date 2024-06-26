import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slicers/userSlicer";

const Accordian = () => {
  const dispatch = useDispatch();
  // const newUsers = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setUsers(data));
    // dispatch(getUsers());
  }, []);

  const onMultipleSelection = (user) => {
    if (multiple) {
      if (ids.includes(user.id)) {
        setIds([...ids.filter((id) => id !== user.id)]);
      } else {
        setIds([...ids, user.id]);
      }
    } else {
      setSelected(user.id === selected ? null : user.id);
    }
  };

  return (
    <div className="p-5">
      <div>
        <button
          style={{
            backgroundColor: "#5f5fa8",
            color: "#fff",
            padding: "10px",
            borderRadius: "4px",
          }}
          onClick={() => {
            setMultiple(!multiple);
            setSelected(null);
            setIds([]);
          }}
        >
          {multiple
            ? "Disable multiple selection"
            : "Enable multiple selection"}
        </button>
      </div>
      {users.map((user) => {
        return (
          <>
            <div
              className="p-4 flex justify-between cursor-pointer bg-gray-200 mt-2"
              key={user.id}
              onClick={() => onMultipleSelection(user)}
            >
              <div>{user.title}</div>
              <span className="order-last">
                {selected === user.id ? "-" : "+"}
              </span>
            </div>

            {ids.includes(user.id) && (
              <div className="pl-4 pr-4 pt-0 pb-4 bg-gray-100">{user.body}</div>
            )}
            {selected === user.id && (
              <div className="pl-4 pr-4 pt-0 pb-4 bg-gray-100">{user.body}</div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Accordian;
