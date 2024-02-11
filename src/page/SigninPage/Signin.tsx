import { Button } from "@/components/ui/button";
import AddImg from "./../../assets/icon/add-image.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SignIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    company: "",
    country: "",
    address: "",
    tax: "",
    phone: "",
    province: "",
    website: "",
    subDistric: "",
    distric: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData); // Log submitted data to the console
    // Here you can add code to send the form data to a server or perform any other action
  };
  return (
    <div className="flex justify-center mt-[36px] pl-[6.5vw] pr-[6.5vw] ">
      <div className="border w-full h-auto rounded-[6px] shadow-md pl-[100px] pr-[100px] pt-[14px] pb-[14px] ">
        <label className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] border rounded-[100px] border-[#021E42] flex justify-center cursor-pointer ">
            <img src={AddImg} width={50} />
          </div>
          <input hidden type="file" />
        </label>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative w-100">
                <svg
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z"
                    fill="#021E42"
                  />
                </svg>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="pl-12 pr-4 rounded-[4px] border border-[#D0D5DD] w-[100%]"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative w-100">
                <svg
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                    fill="#021E42"
                  />
                </svg>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="pl-12 pr-4 rounded-[4px] border border-[#D0D5DD]"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <div className="relative w-100">
                <svg
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                    fill="#021E42"
                  />
                </svg>
                <Input
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  onChange={handleChange}
                  value={formData.confirm_password}
                  className="pl-12 pr-4 rounded-[4px] border border-[#D0D5DD]"
                />
              </div>
            </div>
          </div>
          <div className="border-b-2 w-[100%] mt-[24px]"></div>
          <div>
            <div className="text-[20px] text-[#255FA8] mt-[24px]">
              Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[14px]">
              <div className="grid grid-rows-4 gap-2">
                <div>
                  <Label>Company Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter company name"
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                    className="rounded-[4px] border border-[#D0D5DD]"
                  />
                </div>
                <div>
                  <Label>Country</Label>
                  <Select>
                    <SelectTrigger className="rounded-[4px] border border-[#D0D5DD]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="row-span-2">
                  <Label>Address</Label>
                  <Textarea
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChange}
                    value={formData.address}
                    className="rounded-[4px] border border-[#D0D5DD] h-[85%]"
                  />
                </div>
              </div>
              {/* /////////////////////////////// 2 /////////////////////////// */}
              <div className="grid grid-row gap-4">
                <div>
                  <Label>Tax ID</Label>
                  <Input
                    type="text"
                    id="password"
                    placeholder="Enter Tax ID"
                    name="tax"
                    onChange={handleChange}
                    value={formData.tax}
                    className="rounded-[4px] border border-[#D0D5DD]"
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <div className="flex">
                    <Select>
                      <SelectTrigger className=" w-[40%] rounded-[4px] border border-[#D0D5DD] mr-[8px]">
                        <SelectValue placeholder="+66" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>{" "}
                    <Input
                      type="text"
                      placeholder="Enter Phone number"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      className="rounded-[4px] border border-[#D0D5DD]"
                    />
                  </div>
                </div>
                <div>
                  <Label>State/Province</Label>
                  <Select>
                    <SelectTrigger className="rounded-[4px] border border-[#D0D5DD]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>State/Province</Label>
                  <Select>
                    <SelectTrigger className="rounded-[4px] border border-[#D0D5DD]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* /////////////////////////////// 3 /////////////////////////// */}
              <div className="grid grid-row gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    type="Text"
                    placeholder="Enter Full name"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    className="rounded-[4px] border border-[#D0D5DD]"
                  />
                </div>
                <div>
                  <Label>Website</Label>
                  <Input
                    type="text"
                    placeholder="Enter website"
                    className="rounded-[4px] border border-[#D0D5DD]"
                  />
                </div>
                <div>
                  <Label>Sub-District</Label>
                  <Select>
                    <SelectTrigger className="rounded-[4px] border border-[#D0D5DD]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Zip Code</Label>
                  <Input
                    type="text"
                    placeholder="Enter Zip Code"
                    className="rounded-[4px] border border-[#D0D5DD]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[24px] flex justify-between pl-[14px] pr-[14px] ">
            <Button
              variant="outline"
              className="rounded-[16px] bg-[#021E42] h-[25px] text-[12px] text-[white]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="rounded-[16px] bg-[#5FC198] h-[25px] text-[12px] text-[white]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
