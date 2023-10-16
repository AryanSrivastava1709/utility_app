export default function Login({
  onChangePage,
  name,
  password,
  onChangeName,
  onChangePassword,
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#4c6ef5]">
      <div className="flex flex-col justify-center border-2 rounded-md p-8 shadow-2xl shadow-[#82c91e] text-buttonColor bg-[#82c91e]">
        <h1 className=" font-Mooli font-black text-5xl mb-6 text-center">
          Log in
        </h1>
        <form className="flex flex-col gap-3">
          <label className="font-Mooli text-xl">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className=" border-2 border-buttonColor px-3 py-2 rounded"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          />
          <label className="font-Mooli text-xl">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className=" border-2 border-buttonColor px-3 py-2 rounded"
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </form>
        <button
          className=" bg-buttonColor py-2 text-xl rounded-md w-full text-center my-5 font-Mooli text-white hover:bg-buttonColorHover"
          onClick={onChangePage}
        >
          Login
        </button>
      </div>
    </div>
  );
}
