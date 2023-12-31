"use client";
import McqTopicCard from "@/components/Test/McqTopicCard";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BaseURL = process.env.BaseURL;

const MCQTopic = () => {
  const params = useParams();
  const subject = String(params.subject);
  const topicparam = String(params.topic);
  const topic = topicparam.replace(/-/g, " ");

  const question = GetAllMcqs(subject, topic);

  return (
    <div className="mt-5 ml-10">
      {question &&
        (question as any).map((problem: any, idx: number) => (
          <McqTopicCard key={idx} problem={problem} />
        ))}
    </div>
  );
};

export default MCQTopic;

const GetAllMcqs = (subject: string, topic: string) => {
  const [question, setQuestion] = useState();
  useEffect(() => {
    const GetProblems = async () => {
      try {
        const response = await axios.post(BaseURL + `mcq/fetch-topic`, {
          subject: subject,
          category: topic,
        });
        let { data } = response.data;
        setQuestion(data);
      } catch (error: any) {
        throw error;
      }
    };

    GetProblems();
  }, [subject, topic]);

  return question;
};
