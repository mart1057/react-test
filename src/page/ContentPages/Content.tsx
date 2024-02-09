import Banner from "../../assets/img/Banner.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const items = [
  {
    title: "Lorem ipsum",
    desc: "One-stop Platform community for Agents and Operator in Thailand.",
    img: img1,
  },
  {
    title: "Lorem ipsum",
    desc: "One-stop Platform community for Agents and Operator in Thailand.",
    img: img2,
  },
  {
    title: "Lorem ipsum",
    desc: "One-stop Platform community for Agents and Operator in Thailand.",
    img: img3,
  },
  {
    title: "Lorem ipsum",
    desc: "One-stop Platform community for Agents and Operator in Thailand.",
    img: img4,
  },
];
const cardItems = items.map((item) => (
    <div className="border pb-[8px] rounded-[8px] shadow-md">
      <img src={item.img} className="rounded-t-[8px]" />
        <div className="flex flex-col justify-between w-full mt-[8px]">
          <div className="text-[18px] font-bold ">{item.title}</div>
          <div className="text-[14px] text-[#142B41] mt-[8px]">{item.desc}</div>
          <div>
            <Button variant="outline" className="rounded-[33px] bg-[#2a4b6a] font-bold text-[12px] text-[white]">
            Buy package
            </Button>
          </div>
        </div>
    </div>
));
function ContentPage() {
  return (
    <div>
      <img src={Banner} />
      <div className="text-center mt-[16px] text-[32px] pl-[100px] pr-[100px]">
        <div className="font-bold">Lorem ipsum</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[14px]">
          {cardItems}
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
