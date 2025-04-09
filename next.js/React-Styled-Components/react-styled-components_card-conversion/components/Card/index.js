import { CardStyle } from "./Card";
import { CardTitle } from "./Card";
import { CardDescription } from "./Card";

export default function Card() {
  return (
    <CardStyle>
      <CardTitle>Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </CardDescription>
    </CardStyle>
  );
}
