import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type mcqcardprops = {
  problem:any;
  path:string;
}

const McqCard:React.FC<mcqcardprops> = ({ problem, path }) => {
  const params = useParams();
  const uid = params.tid;
  if(uid != path) {
    console.log("unmatched");
    
  }
  else console.log("matched");
  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{problem.title}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
      >
        {problem.difficulty}
      </th>
      <td className="px-6 py-4 capitalize">{problem.category}</td>
      <td className="px-6 py-4">
        <Link href={`${path}/mcq/`}>Modify</Link>
      </td>
    </tr>
  );
};

export default McqCard;
