import { Header } from "../components/Header";
import { Jokes } from "../components/Jokes";

export const JokePage = () => {
  return (
    <main>
      <Header heading="ChuckNorris Jokes" subHeading="Free JSON API for hand curated Chuck Norris facts." />
      <Jokes />
    </main>
  )
}
