import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

async function getPage(slug: string) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Projects {
        projects {
          id
          name
          description
        }
      }`
    }),
  });
  console.log(await response.json());
}

export default async function Home({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

