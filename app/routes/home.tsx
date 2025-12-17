// Folders Component and the folder data (However you read it)
import FileBrowser from "@/components/reusables/filebrowser";
import { folders } from "@/lib/folders";

/**
 * The Home component renders a FileBrowser component with the folder data.
 * It is the main entry point of the application and is responsible for rendering the file browser.
 */
export default function Home() {
  return (
    <FileBrowser folders={folders} />
  );
}
