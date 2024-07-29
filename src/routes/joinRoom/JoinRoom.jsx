import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4, validate } from "uuid";
import { Toaster, toast } from "react-hot-toast";

export default function JoinRoom() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState(() => "");
  const [username, setUsername] = useState(() => "");

  function handleRoomSubmit(e) {
    e.preventDefault();
    if (!validate(roomId)) {
      toast.error("Incorrect room ID");
      return;
    }
    username && navigate(`/room/${roomId}`, { state: { username } });
  }

  function createRoomId(e) {
    try {
      setRoomId(uuidv4());
      toast.success("Room created");
    } catch (exp) {
      console.error(exp);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen hero">
      <form
        className="flex flex-col justify-center items-center border rounded-xl bg-white shadow-2xl h-96 p-5"
        onSubmit={handleRoomSubmit}
      >
        <p className=" mb-4 font-semibold">
          Paste your invitation code down below
        </p>

        <div className=" flex flex-col justify-center items-start">
          <input
            className=" h-9 w-72 bg-slate-200 rounded-md"
            id="roomIdInput"
            type="text"
            placeholder="Enter room ID"
            required
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
            autoSave="off"
            autoComplete="off"
          />
          <label htmlFor="roomIdInput" className=" h-11 w-auto text-red-500">
            {roomId ? "" : "Room ID required"}
          </label>
        </div>

        <div className="flex flex-col justify-center items-start">
          <input
            className="h-9 w-72 bg-slate-200 rounded-md "
            id="usernameInput"
            type="text"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoSave="off"
            autoComplete="off"
          />
          <label htmlFor="usernameInput" className="h-11 w-auto text-red-500">
            {username ? "" : "username required"}
          </label>
        </div>

        <button
          className="h-auto w-16 p-2 bg-yellow-300 text-black rounded-lg "
          type="submit"
        >
          Join
        </button>
        <p className=" w-48 mt-5">
          Don't have an invite code? Create your{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={createRoomId}
          >
            own room
          </span>
        </p>
      </form>
      <Toaster />
    </div>
  );
}
