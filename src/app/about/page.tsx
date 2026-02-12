import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <section>
        <h1>About PrintForge</h1>
        <div>
          <div>
            <Image
              src="/hero-image-square.svg"
              alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
              width={350}
              height={350}
            />
          </div>
          <div>
            <p>About PrintForge</p>
            <h2>Empowering Makers Worldwide</h2>
            <p>
              Founded in 2023, PrintForge has quickly become the go-to Platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p>
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div>
          <h2>Key Features</h2>
          <div>
            <article>
              <h3>100k+ Models</h3>
              <p>
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>
            <article>
              <h3>Active Community</h3>
              <p>
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>
            <article>
              <h3>Free To Use</h3>
              <p>
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
