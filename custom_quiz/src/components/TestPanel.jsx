import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuestion, setAnswers } from "@/features/testQuestionSlice";
const TestPanel = ({ questionData }) => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, selectedAnswers, score } = useSelector(
    (state) => state.question
  );
  console.log(score);

  return (
    <div>
      <h3>Answers The Below Question</h3>
      <div>
        {questionData.map((que, index) => {
          return (
            <div key={que.id}>
              {currentQuestionIndex === index && (
                <div>
                  <p>
                    {index + 1}
                    {")."} {que.question}
                  </p>
                  {que.answers.map((ans, idx) => {
                    return (
                      <div key={idx}>
                        <span>
                          <input
                            type="radio"
                            name={`${idx}que`}
                            onChange={() =>
                              dispatch(setAnswers({ id: que.id, answers: ans }))
                            }
                            checked={
                              selectedAnswers.find((ans) => ans.id === que.id)
                                ?.answers === ans
                            }
                            value={ans}
                            id={`${idx}que`}
                          />{" "}
                          {ans}
                        </span>
                      </div>
                    );
                  })}
                  <div className="flex gap-2 mt-2 ">
                    <button
                      onClick={() => dispatch(changeQuestion("previous"))}
                      className="p-1 bg-gray-200 cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => dispatch(changeQuestion("next"))}
                      className="p-1 bg-gray-200 cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestPanel;
