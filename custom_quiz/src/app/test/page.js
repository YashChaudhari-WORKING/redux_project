"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "@/features/testQuestionSlice";
import TestPanel from "@/components/TestPanel";

export default function page() {
  const dispatch = useDispatch();
  const { questionData, loading } = useSelector((state) => state.question);
  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  return (
    <div>
      <TestPanel questionData={questionData} />
    </div>
  );
}
