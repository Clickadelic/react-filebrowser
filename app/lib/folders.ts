

export const folders: Folder[] = [
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
            { name: "Movies", folders: [
                { name: "Action", folders: [] },
                { name: "Comedy", folders: [] },
                { name: "Drama", folders: [] },
                { name: "Horror", folders: [] },
            ] },
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