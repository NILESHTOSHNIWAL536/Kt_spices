"use client";
import { Get, Post } from "@/lib/curd";
import { generateToken } from "@/utils/jwt";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store"; // adjust path
import HomePage from "../home/page";
import Link from "next/link";


type FormData = {
  name: string;
  mobileNumber: string;
};

export default function SignIn() {
  const dispatch=useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //  var handleSubmit = async (e:any) =>{
  //      e.preventDefault();
  //      console.log("Form Data:", formData);
  //      var r=await Get('/api/signin');
  //      console.log("GET Response:", await r.json());
  //      var res=await Post('/api/signin',formData);
  //      var data=await res.json();
  //      console.log("Response Data:", data);
  //      document.cookie = `token=${"data"}; path=/`;
  //  };

  var handleSubmit = async (e: any) => {
    e.preventDefault();
    var res = await Post("/api/signin", formData);
    var data = await res.json();
    if (res.status != 200 && res.status != 201) {
      alert("Invalid user");
    }else{ 

     dispatch(
        setUserInfo({
          _id: data.user._id,
          name: data.user.name,
          mobileNumber: data.user.mobileNumber,
          role: data.user.role,
        })
      );  

    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Sign In</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
              <Link href={"/home"}> <h1>HomePage</h1> </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
