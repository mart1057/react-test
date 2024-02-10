import AddImg from "./../../assets/icon/add-image.svg"
function SignIn() {
    return (
      <div className="flex justify-center mt-[36px] ">
      <div className="border w-full h-auto rounded-[6px] shadow-md pl-[24px] pr-[24px] pt-[14px] pb-[14px] flex flex-col items-center">
        <label>
          <div className="w-[100px] h-[100px] border rounded-[100px] border-[#021E42] flex justify-center cursor-pointer">
            <img src={AddImg} width={50} />
          </div>
          <input hidden type="file" />
        </label>
        </div></div>
    );
  }
  
  export default SignIn;
  