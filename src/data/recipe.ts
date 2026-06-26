export interface Swap {
  from: string;
  to: string;
  description: string;
}

export interface Ingredient {
  ingredient: string;
  description: string;
  quantity: string;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export const swaps: Swap[] = [
  {
    from: "Guanciale",
    to: "diced bacon",
    description:
      "Readily available and easy to find. The smoked variant works too — that’s just personal preference.",
  },
  {
    from: "Spaghetti",
    to: "any pasta",
    description:
      "Anything can replace spaghetti. My mom used to make it with penne, and nobody complained.",
  },
  {
    from: "Pecorino",
    to: "a hard cheese",
    description:
      "Hard to replace, but if the salty flavor is too much, use another hard cheese. Never anything creamy, fresh, or sweet.",
  },
];

export const ingredients: Ingredient[] = [
  {
    ingredient: "Spaghetti",
    description: "or any pasta",
    quantity: "150 g / 5.5 oz",
  },
  {
    ingredient: "Egg yolks",
    description: "1 per person, +1 per two",
    quantity: "3",
  },
  {
    ingredient: "Pecorino romano",
    description: "go by heart, adjust to taste",
    quantity: "q.b.",
  },
  {
    ingredient: "Guanciale",
    description: "or diced bacon, less if you like",
    quantity: "200 g / 7 oz",
  },
  {
    ingredient: "Salt & black pepper",
    description: "careful — pecorino is salty",
    quantity: "to taste",
  },
];

export const steps: Step[] = [
  {
    step: "01",
    title: "Prepare the guanciale",
    description:
      "Dice the guanciale and sear over medium heat. No oil — the fat renders out on its own. Cook just shy of too crunchy, then kill the heat.",
  },
  {
    step: "02",
    title: "Cook the pasta",
    description:
      "Bring a large pot of water to a boil (100°C/212°F), salt it once it’s bubbling, and cook the pasta to al dente — firm to the bite but cooked through.",
  },
  {
    step: "03",
    title: "Make the sauce",
    description:
      "Beat the egg yolks with grated pecorino, salt, and pepper. Keep adding cheese until it’s creamy yet thick. Go easy on the salt — pecorino is salty.",
  },
  {
    step: "04",
    title: "Combine pasta and sauce",
    description:
      "Reserve a spoonful of pasta water. Drain, return the pasta to the pan (heat OFF), mix in the guanciale, then the egg-cheese mixture. Stir vigorously. Loosen with pasta water if needed.",
  },
  {
    step: "05",
    title: "Serve immediately",
    description:
      "Plate it, top with more cheese and black pepper, and serve at once. Wait too long and the sauce dries out and the pasta turns sticky.",
  },
];
