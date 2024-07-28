import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <section className="flex min-h-screen items-center justify-center">
        <LandingPage />
      </section>
    </main>
  );
}
