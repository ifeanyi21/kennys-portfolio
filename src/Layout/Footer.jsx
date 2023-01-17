import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="container my-16">
      <div className="row">
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Kenny Kolawole</h3>
          <p className="text-muted text-sm">
            © Kenny, Writer {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Recent Articles</h3>
          <div className="text-muted text-base">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://blog.kennykwrites.info/2019/09/04/nothing-beats-new-york/"
              className="text-black no-underline"
            >
              Nothing Beats New York
            </a>
          </div>
          <div className="text-muted text-base my-8">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://blog.kennykwrites.info/2019/05/09/getting-what-you-want/"
              className="text-black no-underline"
            >
              Getting What You Want
            </a>
          </div>
          <div className="text-muted text-base">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://blog.kennykwrites.info/2019/03/21/are-you-sabotaging-your-creativity/"
              className="text-black no-underline"
            >
              Are You Sabotaging Your Creativity
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-8">
          <h3 className="mb-8">Quick Links</h3>
          <div>
            <Link className="nav-link" href="/about">
              About
            </Link>
          </div>
          <div className="my-8">
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://blog.kennykwrites.info"
              className="nav-link"
            >
              My Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
