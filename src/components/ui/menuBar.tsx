import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
function MenuBar() {
  return (
    <>
      <div className="w-full h-auto pt-[4px] pb-[4px] shadow-md">
        <div className="flex justify-around items-center">
          <a href="/">
            <Avatar>
              <div className="bg-[black] rounded text-[white] flex items-center justify-center text-[10px] w-full">LOGO</div>
            </Avatar>
          </a>
          <div><a href="/" className="text-[12px] font-bold">HOME</a></div>
          <div> <Button variant="outline" className="rounded-[16px] bg-[#2a4b6a] h-[25px] text-[12px] text-[white]">Sign in</Button></div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
