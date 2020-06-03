import { NextPage } from "next"
import { CaseStudyPicker, Seo, LargeHead, Wrapper, Section } from "components"
import styled from "styled-components"
import { UNICODE } from "../constants"

const VICTIMS = [
  {
    name: "George Floyd",
    link: "https://en.wikipedia.org/wiki/Killing_of_George_Floyd",
  },
  {
    name: "Breonna Taylor",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Breonna_Taylor",
  },
  {
    name: "Ahmaud Arbery",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Ahmaud_Arbery",
  },
  {
    name: "Tony McDade",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Tony_McDade",
  },
  {
    name: "Anthony Hill",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Anthony_Hill",
  },
  {
    name: "Jamarion Robinson",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Jamarion_Robinson",
  },
  {
    name: "Willie McCoy",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Willie_McCoy",
  },
  {
    name: "Emantic Fitzgerald Bradford J",
    link:
      "https://en.wikipedia.org/wiki/Shooting_of_Emantic_Fitzgerald_Bradford_Jr.",
  },
  {
    name: "Jemel Roberson",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Jemel_Roberson",
  },
  {
    name: "Botham Shem Jean",
    link: "https://en.wikipedia.org/wiki/Murder_of_Botham_Jean",
  },
  {
    name: "Anthony Lamar Smith",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Anthony_Lamar_Smith",
  },
  {
    name: "Ramarley Graham",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Ramarley_Graham",
  },
  {
    name: "Trayvon Martin",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Trayvon_Martin",
  },
  {
    name: "Larry Jackson Jr",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Larry_Jackson_Jr.",
  },
  {
    name: "Jonathan Ferrell",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Jonathan_Ferrell",
  },
  {
    name: "Chavis Carter",
    link: "https://en.wikipedia.org/wiki/Death_of_Chavis_Carter",
  },
  {
    name: "Victor White III",
    link: "https://en.wikipedia.org/wiki/Death_of_Chavis_Carter#Similar_deaths",
  },
  {
    name: "Dontre Hamilton",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Dontre_Hamilton",
  },
  {
    name: "Eric Garner",
    link: "https://en.wikipedia.org/wiki/Death_of_Eric_Garner",
  },
  {
    name: "John Crawford III",
    link: "https://en.wikipedia.org/wiki/Shooting_of_John_Crawford_III",
  },
  {
    name: "Michael Brown",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Michael_Brown",
  },
  {
    name: "Ezell Ford",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Ezell_Ford",
  },
  {
    name: "Kajieme Powell",
    link: "https://en.wikipedia.org/wiki/Ferguson_unrest#Kajieme_Powell",
  },
  {
    name: "Laquan McDonald",
    link: "https://en.wikipedia.org/wiki/Murder_of_Laquan_McDonald",
  },
  {
    name: "Akai Gurley",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Akai_Gurley",
  },
  {
    name: "Tamir Rice",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Tamir_Rice",
  },
  {
    name: "Jerame Reid",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Jerame_Reid",
  },
  {
    name: "Charly Keunang",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Charley_Leundeu_Keunang",
  },
  {
    name: "Tony Robinson",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Tony_Robinson",
  },
  {
    name: "Walter Scott",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Walter_Scott",
  },
  {
    name: "Freddie Gray",
    link: "https://en.wikipedia.org/wiki/Death_of_Freddie_Gray",
  },
  {
    name: "Samuel DuBose",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Samuel_DuBose",
  },
  {
    name: "Jamar Clark",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Jamar_Clark",
  },
  {
    name: "Quintonio LeGrier",
    link:
      "https://en.wikipedia.org/wiki/Dismissal_of_Robert_Rialmo#Quintonio_LeGrier",
  },
  {
    name: "Gregory Gunn",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Greg_Gunn",
  },
  {
    name: "Alton Sterling",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Alton_Sterling",
  },
  {
    name: "Philando Castile",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Philando_Castile",
  },
  {
    name: "Terence Crutcher",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Terence_Crutcher",
  },
  {
    name: "Keith Lamont Scott",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Keith_Lamont_Scott",
  },
  {
    name: "Alfred Olango",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Alfred_Olango",
  },
  {
    name: "Jordan Edwards",
    link: "https://en.wikipedia.org/wiki/Murder_of_Jordan_Edwards",
  },
  {
    name: "Stephon Clark",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Stephon_Clark",
  },
  {
    name: "Patrick Harmon",
    link: "https://en.wikipedia.org/wiki/Shooting_of_Patrick_Harmon",
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Seo title={null} />
      <Wrapper>
        <Centered>
          <Section>
            <LargeHead>
              <Centered>
                No <br />
                Justice
                <br />
                No
                <br />
                Peace. <br />
              </Centered>
            </LargeHead>
          </Section>
          <Section>
            <LargeHead>
              I stand in solidarity with{" "}
              {VICTIMS.map((victim, i) => {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={victim.link}
                  >
                    {victim.name}
                    {i !== VICTIMS.length - 1 ? " ● " : ""}
                  </a>
                )
              })}{" "}
              and countless others.
            </LargeHead>
          </Section>
          <Section>
            <p>
              <a href="https://blacklivesmatters.carrd.co/" rel="noreferrer">
                Find out how
                <br /> you can help {UNICODE.NE}
              </a>
            </p>
          </Section>
        </Centered>
      </Wrapper>
    </>
  )
}

const Centered = styled.div`
  text-align: center;

  br {
    display: block !important;
  }
`

export default Home
