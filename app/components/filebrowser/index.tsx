import { useState } from "react";

import { FaFolder } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

type Folder = {
	name: string;
	folders?: Folder[];
};

export default function index() {
  let folders: Folder[] = [
    {
      name: "Home",
      folders: [
        {
          name: "Music",
          folders: [
            { name: "Artists", folders: [] },
            { name: "Albums", folders: [] },
          ],
        },
        {
          name: "Videos",
          folders: [
            { name: "Movies", folders: [] },
            {
              name: "TV Shows",
              folders: [
                { name: "Season 1", folders: [] },
                { name: "Season 2", folders: [] },
              ],
            },
          ],
        },
        {
          name: "Pictures",
          folders: [
            { name: "Wallpapers", folders: [] },
            { name: "Screenshots", folders: [] },
          ],
        },
        { name: "Documents", folders: [] },
        { name: "Passwords.txt" },
      ],
    },
  ];

  return (
    <div className="dark:border-gray-700 rounded-md p-8 max-w-md mx-auto">
      <ul>
        <Node folder={folders[0]} />
      </ul>
    </div>
  );
}

function Node({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isFolder = folder.folders !== undefined;
  const hasChildren = isFolder && folder.folders !== undefined && folder.folders.length > 0;

  return (
    <li className="mb-1">
      <div className="flex items-center gap-1.5">
        {hasChildren && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoChevronForward
              className={`size-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </button>
        )}

        {isFolder ? <FaFolder className="size-5" /> : <FaFileAlt className="size-5" />}

        <span className="text-xl flex mt-1">{folder.name}</span>
      </div>

      {hasChildren && isOpen && (
        <ul className="pl-6 flex flex-col">
          {folder.folders!.map(child => (
            <Node key={child.name} folder={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
