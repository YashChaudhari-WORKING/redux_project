import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTest } from "@/features/testFormatSlice";
export const CreateTest = ({ showModel, handleToogleModel, category }) => {
  const dispatch = useDispatch();
  const [modelData, setmodelData] = useState({
    questionLength: 5,
    questioncategory: null,
    questionDifficulty: null,
    questionType: null,
  });

  const Difficulty = [
    {
      id: 1,
      name: "Easy",
      query: "easy",
    },
    {
      id: 2,
      name: "Medium",
      query: "medium",
    },
    {
      id: 3,
      name: "Hard",
      query: "hard",
    },
  ];
  const Type = [
    {
      id: 1,
      name: "Multiple Choice",
      query: "multiple",
    },
    {
      id: 2,
      name: "True/False",
      query: "boolean",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setmodelData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {showModel && (
        <div className="fixed inset-0  flex justify-center items-center">
          <div className="rounded-[5px] border-1 flex flex-col gap-3 bg-amber-100 p-4 max-w-xl">
            <h2>Select Proper Options</h2>
            <div>
              <p>No of Questions:</p>
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                maxLength={2}
                value={modelData.questionLength}
                name="questionLength"
                id="questionLength"
                className="border"
              />
            </div>

            <div>
              <p>Select Category:</p>
              <select
                onChange={(e) => handleChange(e)}
                name="questioncategory"
                id="questioncategory"
              >
                {category.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Select Difficulty:</p>
              <select
                onChange={(e) => handleChange(e)}
                name="questionDifficulty"
                id="questionDifficulty"
              >
                {Difficulty.map((item) => (
                  <option key={item.id} value={item.query}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Select Type:</p>
              <select
                onChange={(e) => handleChange(e)}
                name="questionType"
                id="questionType"
              >
                {Type.map((item) => (
                  <option key={item.id} value={item.query}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                className="bg-red-200 p-2 "
                onClick={() => handleToogleModel()}
              >
                Close
              </button>
              <button
                onClick={() => dispatch(createTest(modelData))}
                className="bg-lime-200 p-2 "
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
