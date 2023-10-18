import { useAtom } from "jotai";
import { userAtom } from "../lib/atoms";

export default function AppliedJobsTable() {
  const [user, setUser] = useAtom(userAtom);
  const tableHead = [
    "id",
    "position",
    "salary",
    "company",
    "description",
    "category",
    "area",
    "status",
  ];
  return (
    <div className="mb-24 overflow-x-auto rounded-lg">
      <table className="min-w-full max-w-screen-lg divide-y divide-gray-200 dark:divide-gray-500 dark:text-white">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {tableHead.map((i, key) => (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-500 dark:bg-gray-800">
          {user.applied_jobs.map((i, key) => (
            <tr key={key} className="hover:bg-gray-200 dark:hover:bg-gray-600">
              <td className="whitespace-nowrap px-6 py-4">{key + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">{i.position}</td>
              <td className="whitespace-nowrap px-6 py-4">{i.salary},000</td>
              <td className="whitespace-nowrap px-6 py-4">{i.company}</td>
              <td className="whitespace-nowrap px-6 py-4">{i.description}</td>
              <td className="whitespace-nowrap px-6 py-4">{i.category}</td>
              <td className="whitespace-nowrap px-6 py-4">{i.area}</td>
              <td
                className={`whitespace-nowrap px-6 py-4 ${
                  i.status == "accepted"
                    ? "text-green-500"
                    : i.status == "rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {i.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
