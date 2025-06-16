"use client";
import React, { useEffect, useState } from "react";
import { fetchCategory } from "@/features/testFormatSlice";
import { useSelector, useDispatch } from "react-redux";
import { CreateTest } from "./models/CreateTest";
import { useRouter } from "next/navigation";
export const TestFormat = () => {
  const { category, createdTest } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModel, setshowModel] = useState(false);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  const handleToogleModel = () => {
    setshowModel(!showModel);
  };

  return (
    <div>
      <button
        className="p-2 rounded-[5px] bg-lime-200"
        onClick={() => handleToogleModel()}
      >
        Create Test
      </button>

      <CreateTest
        handleToogleModel={handleToogleModel}
        showModel={showModel}
        category={category}
      />

      <div className="border p-2 flex gap-5">
        {createdTest.map((test) => (
          <div key={test.id} className="p-2 border ">
            <p> No of Questions : {test.questionLength} </p>
            <p> Questions Category : {test.questioncategory} </p>
            <p> Questions Diffculty : {test.questionDifficulty} </p>
            <p> Questions Type : {test.questionType} </p>
            <button
              onClick={() =>
                router.push(
                  `https://opentdb.com/api.php?amount=${test.questionLength}&category=${test.questioncategory}&difficulty=${test.questionDifficulty}&type=${test.questionType}`
                )
              }
              className="p-2 rounded-2xl bg-lime-500"
            >
              Take Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
