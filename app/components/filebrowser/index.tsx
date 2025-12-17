import { FaFolder } from "react-icons/fa";

type Folder = {
  name: string;
  folders?: Folder[];
};

export default function index() {
  // Fake data
  let folders: Folder[] = [
    {
      name: "Home",
      folders: [
        {
          name: "Music",
          folders: [
            {
              name: "Artists",
            },
            {
              name: "Albums",
            },
          ],
        },
        {
          name: "Videos",
          folders: [
            {
              name: "Movies",
            },
            {
              name: "TV Shows",
              folders: [
                {
                  name: "Season 1",
                },
                {
                  name: "Season 2",
                },
              ],
            },
          ],
        },
        {
          name: "Pictures",
          folders: [
            {
              name: "Wallpapers",
            },
            {
              name: "Screenshots",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-8 max-w-md mx-auto">
      <ul>
        <Folder folder={folders[0]} />
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  return (
    <li className="mb-1">
      <span className="flex items-center gap-1.5">
        <FaFolder className="size-6 text-sky-600" />
        {folder.name}
      </span>
      {folder.folders && (
        <ul className="pl-6 flex flex-col">
          {folder.folders.map((child: any) => (
            <Folder key={child.name} folder={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
