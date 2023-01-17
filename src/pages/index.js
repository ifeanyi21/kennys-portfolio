import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Divider } from "@mui/material";
import ArticleCard from "@/components/Card/ArticleCard";
import Layout from "@/Layout/Layout";
import Kenny from "../assests/images/newyork.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const articles = [
    {
      url: "https://blog.kennykwrites.info/2019/09/04/nothing-beats-new-york/",
      header: "Nothing Beats New York",
      body: "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales...",
    },
    {
      url: "https://blog.kennykwrites.info/2019/05/09/getting-what-you-want/",
      header: "Getting What You Want",
      body: "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales...",
    },
    {
      url: "https://blog.kennykwrites.info/2019/03/21/are-you-sabotaging-your-creativity/",
      header: "Are You Sabotaging Your Creativity",
      body: "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales...",
    },
  ];
  return (
    <>
      <Layout>
        <div className="container">
          <div className="py-5">
            <div className="row align-items-center g-5 py-5">
              <div className="col-lg-6">
                <h1 className="text-6xl fw-bold lh-1 mb-8 text-red-300">
                  Stop being boring.
                </h1>
                <p className="lead">
                  The problem with the world is that we’ve settled for it. We’ve
                  accepted the way things are instead of imagining how they
                  could be. To create change, you’ve got to say something worth
                  disagreeing with. This is how you stand out and get the
                  attention your work deserves: You have to pick a fight.
                </p>
              </div>
              <div className="col-lg-6">
                <Image
                  src={Kenny}
                  className="d-block img-fluid"
                  alt="Kenny"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="py-24 px-10 bg-red-300 text-white shadow-lg rounded-md">
            <div className="flex justify-center">
              <div>
                <h1 className="mb-10 font-bold">
                  The Power of a Creative Life
                </h1>
                <p className="mb-8 font-medium">
                  When I was a kid, I discovered the power of creativity when my
                  dad told me bedtime stories he made up on the spot. Just
                  before turning thirty, I started calling myself a writer, and
                  as a result began to act like it, which taught me that before
                  we can do something new, we sometimes have to become someone
                  new.
                </p>
                <p className="mb-8 font-medium">
                  A decade later, I found myself stuck in a life I did not want,
                  having chased other people’s definitions of success and
                  feeling disappointed. It was time to re-create myself. This
                  website is where I attempt to share how the creative process
                  and transformational journey are intertwined. Whether you want
                  to write a book, launch a website, or build a business, it all
                  begins with you.
                </p>

                <Link
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-700 text-white font-bold no-underline"
                  href={"/about"}
                >
                  ABOUT KENNY
                </Link>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
              <div className="col-lg-4 p-0 overflow-hidden">
                <Image
                  className="rounded-lg-3"
                  src={Kenny}
                  alt=""
                  width="720"
                />
              </div>
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 mb-10 text-red-300">
                  Work with Me
                </h1>
                <p className="lead mb-8">
                  I am a bestselling author, speaker, and ghostwriter. I write
                  books on creativity and transformation and run a book
                  production agency called Fresh Complaint. To learn more about
                  ghostwriting, book coaching, and our editing services, click
                  the link below.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    {/* <button className="px-5 py-3 bg-slate-900 text-white" onClick={()=>navigate('/contact')}>
                  WORK WITH US
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="mb-10 text-6xl font-bold text-red-300">Books</h2>
            <p className="mb-8">
              Get any of my bestsellers on creativity and personal
              transformation.
            </p>

            <div className="flex justify-center">
              <div>
                <div>
                  {/* <img
                className="rounded-lg-3 mx-auto hover:scale-105"
                src={Unshackled}
                alt=""
                width="164"
              /> */}
                </div>
                {/* <h4 className="my-10">Unshackled</h4>
                <div className="flex">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.kobo.com/ww/en/ebook/unshackled-20"
                    className="no-underline css-ueiwni"
                  >
                    {" "}
                    <Button
                      variant="outlined"
                      // startIcon={
                      //   <img
                      //     src={KoboLogo}
                      //     className="w-4 h-4"
                      //     alt="Amazon's logo"
                      //   />
                      // }
                      sx={{ alignItems: "center", marginRight: 2 }}
                      size="large"
                    >
                      Buy
                    </Button>
                  </a>

                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.amazon.co.uk/Unshackled-Taiwo-Kolawole-ebook/dp/B0BFRY514V/ref=mp_s_a_1_1?crid=29KL2N60QU7E1&keywords=unshackled+taiwo+kolawole&qid=1673422522&sprefix=unshackled+taiwo+kolawole%2Caps%2C69&sr=8-1"
                    className="text-white no-underline"
                  >
                    <Button
                      variant="contained"
                      // startIcon={
                      //   <img
                      //     src={AmazonLogo}
                      //     className="w-4"
                      //     alt="Amazon's logo"
                      //   />
                      // }
                      sx={{ alignItems: "center" }}
                      size="large"
                    >
                      Buy
                    </Button>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h1 className="mb-16 text-red-300 text-center">Articles</h1>
            <div className="row">
              {articles.map((article, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <ArticleCard
                      body={article.body}
                      header={article.header}
                      url={article.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <a
                target={"_blank"}
                rel="noreferrer"
                href={"https://blog.kennykwrites.info"}
                className="no-underline css-ueiwni"
              >
                <Button
                  sx={{ color: "#FCA5A5", border: "1px solid #FCA5A5" }}
                  variant="outlined"
                  size="large"
                >
                  More Articles
                </Button>
              </a>
            </div>
          </div>
          <Divider />
        </div>
      </Layout>
    </>
  );
}
