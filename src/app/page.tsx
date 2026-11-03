import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { projects } from "@/data/projects";

export default function Home() {
  const [featured] = projects;

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Nora Womack · Vancouver, BC</p>
            <h1>Curious spirit,<br />creative energy.</h1>
            <p className="hero-intro">
              An aspiring model with a love of adventure, a big laugh,
              and a creative streak.
            </p>
          </div>
          <Link
            className="hero-image image-link"
            href={`/work/${featured.slug}`}
            aria-label={`View ${featured.title}`}
          >
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              sizes="100vw"
            />
            <span className="image-link-label">View portfolio</span>
          </Link>
          <div className="hero-meta">
            <p>{featured.title}</p>
            <p>{featured.location}</p>
          </div>
        </section>

        <section className="statement">
          <p className="eyebrow">Meet Nora</p>
          <p>
            From making films with friends to playing basketball and soccer,
            Nora loves trying something new. Bilingual in English and Mandarin
            Chinese, she is beginning her modeling journey in Vancouver.
          </p>
          <Link className="text-link" href="/about">More about Nora <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
