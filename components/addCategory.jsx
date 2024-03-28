"use client";
import { useState} from "react";
import axios from "axios";

function AddCategories() {
    const [title,setTitle]= useState(null);
    const [description, setDescription] = useState();
    return (
        <div className="flex flex-col gap-[40px]">
            <input type="text"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-[#454141] text-[#2b0f0f]">add category</button>
        </div>
      );
}


export default AddCategories;