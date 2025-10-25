"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NavBar from "./home/navbar";

export default function Providers({ children })
{
  return <Provider store={store}>
           <NavBar/>
          {children}
    </Provider>;
}
