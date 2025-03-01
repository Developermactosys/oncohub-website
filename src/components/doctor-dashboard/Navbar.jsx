import React, { useState } from "react";
import SearchInput from '../ui/field/SearchInput'
import notification from "../../assets/icon/notification.svg"
import user from "../../assets/images/user.png"



const Navbar = () => {
    const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center ">
    <SearchInput
      placeholder="Search"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <div className="flex gap-4 items-center">
        <div>
        <img src={notification} alt="" />

        </div>
        <div  className="border py-2 px-3 border-[#D9D9D9] rounded-2xl flex items-center gap-2">
            <img src={user} alt="user" />
            <span className="text-base font-medium">Dr. Archana</span>
        </div>
    </div>
  </div>
  )
}

export default Navbar
