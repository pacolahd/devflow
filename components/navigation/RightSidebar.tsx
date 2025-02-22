import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";

// const hotQuestions = [
//   { _id: "1", title: "How to create a custom hook in React?" },
//   { _id: "2", title: "How to use React Query?" },
//   { _id: "3", title: "How to use Redux?" },
//   { _id: "4", title: "How to use React Router?" },
//   { _id: "5", title: "How to use React Context?" },
// ];
//
// const popularTags = [
//   { _id: "1", name: "react", questions: 100 },
//   { _id: "2", name: "next.js", questions: 80 },
//   { _id: "3", name: "typeScript", questions: 60 },
//   { _id: "4", name: "javaScript", questions: 50 },
//   { _id: "5", name: "node.js", questions: 40 },
// ];

const hotQuestions = [
  { _id: "1", title: "Is Career Fair worth it?" },
  { _id: "2", title: "How do I set up my Ashesi email on Outlook?" },
  { _id: "3", title: "How to deploy a project on Ashesi's server?" },
  {
    _id: "6",
    title: "What are the best resources for learning Data Structures?",
  },
  { _id: "4", title: "How do I format references in APA style?" },
  { _id: "5", title: "How to prepare for Career Fair Interviews" },
];

const popularTags = [
  { _id: "3", name: "final-year-project", questions: 130 },
  { _id: "1", name: "academics", questions: 120 },
  { _id: "2", name: "programming", questions: 90 },

  { _id: "4", name: "ashesi-life", questions: 50 },
  { _id: "5", name: "scholarships", questions: 40 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border right-0 flex h-screen w-[350px] flex-col gap-6 overflow-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
