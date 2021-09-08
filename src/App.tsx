import React from 'react'
import { Octocat } from './components/Octocat'

export function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <Octocat
            name="Terracottocat"
            number="149"
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            link="https://octodex.github.com//terracottocat/"
            imageAlt="Terracottocat"
            authorImage="https://github.com/chubbmo.png"
            authorLink="https://github.com/chubbmo"
            authorAlt="chubbmo"
          />

          <Octocat
            name="Octogatos"
            number="148"
            image="https://octodex.github.com//images/Octogatos.png"
            link="https://octodex.github.com//octogatos/"
            imageAlt="Octogatos"
            authorImage="https://github.com/cameronfoxly.png"
            authorLink="https://github.com/cameronfoxly"
            authorAlt="cameronfoxly"
          />

          <Octocat
            name="Sentrytocat"
            number="143"
            image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            link="https://octodex.github.com//sentrytocat/"
            imageAlt="Sentrytocat"
            authorImage="https://github.com/cameronmcefee.png"
            authorLink="https://github.com/cameronmcefee"
            authorAlt="cameronfoxly"
          />

          <Octocat
            name="Boxertocat"
            number="141"
            image="https://octodex.github.com//images/boxertocat_octodex.jpg"
            link="https://octodex.github.com//boxertocat/"
            imageAlt="Boxertocat"
            authorImage="https://github.com/rubyjazzy.png"
            authorLink="https://github.com/rubyjazzy"
            authorAlt="rubyjazzy"
          />

          <Octocat
            name="Surftocat"
            number="140"
            image="https://octodex.github.com//images/surftocat.png"
            link="https://octodex.github.com//suftocat/"
            imageAlt="Surftocat"
            authorImage="https://github.com/jeejkang.png"
            authorLink="https://github.com/jeejkang"
            authorAlt="jeejkang"
          />

          <Octocat
            name="Scubatocat"
            number="138"
            image="https://octodex.github.com//images/scubatocat.png"
            link="https://octodex.github.com//scubatocat/"
            imageAlt="Scubatocat"
            authorImage="https://github.com/cameronfoxly.png"
            authorLink="https://github.com/cameronfoxly"
            authorAlt="cameronfoxly"
          />

          <Octocat
            name="Dinotocat"
            number="130"
            image="https://octodex.github.com//images/dinotocat.png"
            link="https://octodex.github.com//dinotocat/"
            imageAlt="Dinotocat"
            authorImage="https://github.com/kimestoesta.png"
            authorLink="https://github.com/kimestoesta"
            authorAlt="kimestoesta"
          />

          <Octocat
            name="Spidertocat"
            number="88"
            image="https://octodex.github.com//images/spidertocat.png"
            link="https://octodex.github.com//spidertocat/"
            imageAlt="Spidertocat"
            authorImage="https://github.com/jeejkang.png"
            authorLink="https://github.com/jeejkang"
            authorAlt="jeejkang"
          />

          <Octocat
            name="Scottocat"
            number="5"
            image="https://octodex.github.com//images/scottocat.jpg"
            link="https://octodex.github.com//scottocat/"
            imageAlt="Scottocat"
            authorImage="https://github.com/cameronmcefee.png"
            authorLink="https://github.com/cameronmcefee"
            authorAlt="cameronmcefee"
          />

          <Octocat
            name="Puppeteer"
            number="4"
            image="https://octodex.github.com//images/puppeteer.png"
            link="https://octodex.github.com//puppeteer/"
            imageAlt="Puppeteer"
            authorImage="https://github.com/cameronmcefee.png"
            authorLink="https://github.com/cameronmcefee"
            authorAlt="cameronmcefee"
          />

          <Octocat
            name="OctobiWanCatnobi"
            number="3"
            image="https://octodex.github.com//images/octobiwan.jpg"
            link="https://octodex.github.com//octobiwan/"
            imageAlt="OctobiWanCatnobi"
            authorImage="https://github.com/cameronmcefee.png"
            authorLink="https://github.com/cameronmcefee"
            authorAlt="cameronmcefee"
          />

          <Octocat
            name="ClassAct"
            number="2"
            image="https://octodex.github.com//images/class-act.png"
            link="https://octodex.github.com//class-act/"
            imageAlt="ClassAct"
            authorImage="https://github.com/cameronmcefee.png"
            authorLink="https://github.com/cameronmcefee"
            authorAlt="cameronmcefee"
          />
        </section>
      </main>
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
