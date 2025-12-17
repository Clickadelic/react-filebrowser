import type { Route } from "./+types/home";
import FileBrowser from "../components/filebrowser";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-4 container mx-auto">
      <FileBrowser />
    </div>
  );
}
