import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import "@marketsystems/nextjs13-appdir-breadcrumbs/dist/styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Breadcrumbs containerClassName="breadcrumb" rootLabel="Home" />
      <Link href="/nested/">Link to A Nested Page</Link>
    </main>
  );
}
