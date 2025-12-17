import { useState } from "react";

import { FaFolder } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

import type { Folder } from "@/types";
import { cn } from "@/lib/utils";

interface FileBrowserProps {
  folders: Folder[];
  wrapperClasses?: string;
}

/**
 * A file browser component that renders a hierarchical list of folders and files.
 * @param {FileBrowserProps} props - The props object
 * @param {Folder[]} props.folders - The list of folders to render
 * @param {string} [props.wrapperClasses] - The wrapper classes to apply to the component
 * @returns {JSX.Element} The rendered file browser component
 */
export default function FileBrowser({ folders, wrapperClasses }: FileBrowserProps) {
  return (
    <div className={cn("w-full", wrapperClasses)}>
      <ul>
        <Node folder={folders[0]} />
      </ul>
    </div>
  );
}

interface NodeProps {
  folder: Folder;
}
/**
 * A single node in the file browser component. It renders a single folder or file.
 * @param {object} props - The props object
 * @param {Folder} props.folder - The folder to render
 * @returns {JSX.Element} The rendered node component
 */
function Node({ folder }: NodeProps) {
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
