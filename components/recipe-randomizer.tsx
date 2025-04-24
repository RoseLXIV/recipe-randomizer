"use client"

import { useState } from "react"
import { ChefHat, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export const proteinOptions = [
  // Tofu variants
  {
    id: "tofu-jerk",
    group: "Tofu",
    item: "Tofu",
    prep: "Air-fried with jerk seasoning",
    types: ["bowl", "wrap", "plate"]
  },
  {
    id: "tofu-peanut",
    group: "Tofu",
    item: "Tofu",
    prep: "Baked in peanut sauce",
    types: ["bowl", "plate"]
  },
  {
    id: "tofu-curry",
    group: "Tofu",
    item: "Tofu",
    prep: "Curried with chickpeas",
    types: ["bowl", "plate"]
  },

  // Chickpea variants
  {
    id: "chickpeas-roasted",
    group: "Chickpeas",
    item: "Chickpeas",
    prep: "Roasted with spices",
    types: ["wrap", "bowl", "plate"]
  },
  {
    id: "chickpeas-patties",
    group: "Chickpeas",
    item: "Chickpeas",
    prep: "Mashed into patties",
    types: ["wrap", "bowl", "plate"]
  },
  {
    id: "chickpeas-curry",
    group: "Chickpeas",
    item: "Chickpeas",
    prep: "Stewed in coconut curry",
    types: ["bowl", "plate"]
  },
  {
    id: "chickpeas-salad",
    group: "Chickpeas",
    item: "Chickpeas",
    prep: "Tossed in salad",
    types: ["salad", "wrap"]
  },

  // Basa Fillet variants
  {
    id: "basa-panfried",
    group: "Basa Fillet",
    item: "Basa Fillet",
    prep: "Pan-fried",
    types: ["plate", "bowl"]
  },
  {
    id: "basa-grilled",
    group: "Basa Fillet",
    item: "Basa Fillet",
    prep: "Grilled with herbs",
    types: ["plate", "bowl"]
  },
  {
    id: "basa-foil",
    group: "Basa Fillet",
    item: "Basa Fillet",
    prep: "Foil-baked with lemon",
    types: ["plate", "bowl"]
  },
  {
    id: "basa-curry",
    group: "Basa Fillet",
    item: "Basa Fillet",
    prep: "Cooked in curry sauce",
    types: ["plate", "bowl"]
  },

  // Veggie Steak variants
  {
    id: "veggiesteak-seared",
    group: "Veggie Steak",
    item: "Veggie Steak",
    prep: "Pan-seared with onions",
    types: ["bowl", "wrap", "plate"]
  },
  {
    id: "veggiesteak-grilled",
    group: "Veggie Steak",
    item: "Veggie Steak",
    prep: "Grilled",
    types: ["plate", "bowl"]
  },
  {
    id: "veggiesteak-wrap",
    group: "Veggie Steak",
    item: "Veggie Steak",
    prep: "Chopped for wraps",
    types: ["wrap"]
  },
  {
    id: "veggiesteak-stirfry",
    group: "Veggie Steak",
    item: "Veggie Steak",
    prep: "Stir-fried with veggies",
    types: ["bowl", "plate"]
  },

  // Saltfish variants
  {
    id: "saltfish-callaloo",
    group: "Saltfish",
    item: "Saltfish",
    prep: "Flaked with callaloo",
    types: ["plate", "bowl"]
  },
  {
    id: "saltfish-fritters",
    group: "Saltfish",
    item: "Saltfish",
    prep: "Made into fritters",
    types: ["plate"]
  },
  {
    id: "saltfish-saute",
    group: "Saltfish",
    item: "Saltfish",
    prep: "Tomato-onion sauté",
    types: ["plate"]
  },
  {
    id: "saltfish-rundown",
    group: "Saltfish",
    item: "Saltfish",
    prep: "In coconut rundown",
    types: ["bowl", "plate"]
  },

  // Tuna variants
  {
    id: "tuna-salad",
    group: "Tuna (Canned)",
    item: "Tuna (Canned)",
    prep: "Tuna salad",
    types: ["wrap", "salad", "sandwich"]
  },
  {
    id: "tuna-patties",
    group: "Tuna (Canned)",
    item: "Tuna (Canned)",
    prep: "Formed into patties",
    types: ["wrap", "plate"]
  },
  {
    id: "tuna-pasta",
    group: "Tuna (Canned)",
    item: "Tuna (Canned)",
    prep: "Tossed in pasta",
    types: ["plate", "bowl"]
  },
  {
    id: "tuna-bowl",
    group: "Tuna (Canned)",
    item: "Tuna (Canned)",
    prep: "Flaked over veggie bowls",
    types: ["bowl"]
  },

  // Salmon variants
  {
    id: "salmon-baked",
    group: "Salmon",
    item: "Salmon",
    prep: "Oven-baked",
    types: ["plate", "bowl"]
  },
  {
    id: "salmon-seared",
    group: "Salmon",
    item: "Salmon",
    prep: "Pan-seared",
    types: ["plate", "bowl"]
  },
  {
    id: "salmon-patties",
    group: "Salmon",
    item: "Salmon",
    prep: "Made into patties",
    types: ["wrap", "plate"]
  },
  {
    id: "salmon-salad",
    group: "Salmon",
    item: "Salmon",
    prep: "Flaked over salad",
    types: ["salad", "bowl"]
  },

  // Jerk Burger variants
  {
    id: "jerkburger-whole",
    group: "Jerk Burger",
    item: "Jerk Burger",
    prep: "Grilled and served whole",
    types: ["burger", "plate"]
  },
  {
    id: "jerkburger-wrap",
    group: "Jerk Burger",
    item: "Jerk Burger",
    prep: "Sliced into wraps",
    types: ["wrap"]
  }
];


export const sideOptions = [
  // Salad variants
  {
    id: "salad-mixed",
    group: "Salad",
    item: "Salad",
    prep: "Mixed greens",
    types: ["burger", "wrap", "plate"]
  },
  {
    id: "salad-callaloo",
    group: "Salad",
    item: "Salad",
    prep: "Sautéed callaloo",
    types: ["plate", "bowl"]
  },

  // Bammy variants
  {
    id: "bammy-fried",
    group: "Bammy",
    item: "Bammy",
    prep: "Fried",
    types: ["plate"]
  },
  {
    id: "bammy-grilled",
    group: "Bammy",
    item: "Bammy",
    prep: "Grilled",
    types: ["plate"]
  },
  {
    id: "bammy-toasted",
    group: "Bammy",
    item: "Bammy",
    prep: "Oven-toasted",
    types: ["plate"]
  },

  // Sweet Potato variants
  {
    id: "sweetpotato-mashed",
    group: "Sweet Potato",
    item: "Sweet Potato",
    prep: "Mashed",
    types: ["plate", "bowl"]
  },
  {
    id: "sweetpotato-wedges",
    group: "Sweet Potato",
    item: "Sweet Potato",
    prep: "Roasted wedges",
    types: ["plate", "bowl"]
  },
  {
    id: "sweetpotato-cubes",
    group: "Sweet Potato",
    item: "Sweet Potato",
    prep: "Pan-fried cubes",
    types: ["plate"]
  },
  {
    id: "sweetpotato-boats",
    group: "Sweet Potato",
    item: "Sweet Potato",
    prep: "Stuffed boats",
    types: ["plate"]
  },

  // Irish Potato variants
  {
    id: "irishpotato-airfried",
    group: "Irish Potato",
    item: "Irish Potato",
    prep: "Air-fried chips",
    types: ["plate", "burger"]
  },
  {
    id: "irishpotato-mashed",
    group: "Irish Potato",
    item: "Irish Potato",
    prep: "Mashed with garlic",
    types: ["plate"]
  },
  {
    id: "irishpotato-boiled",
    group: "Irish Potato",
    item: "Irish Potato",
    prep: "Boiled and herbed",
    types: ["bowl", "plate"]
  },

  // Brown Rice / Quinoa variants
  {
    id: "grain-coconut",
    group: "Brown Rice / Quinoa",
    item: "Brown Rice / Quinoa",
    prep: "Coconut rice",
    types: ["plate", "bowl"]
  },
  {
    id: "grain-stirfry",
    group: "Brown Rice / Quinoa",
    item: "Brown Rice / Quinoa",
    prep: "Stir-fried",
    types: ["plate", "bowl"]
  },
  {
    id: "grain-pilaf",
    group: "Brown Rice / Quinoa",
    item: "Brown Rice / Quinoa",
    prep: "Pilaf style",
    types: ["plate", "bowl"]
  },

  // Dumplings variants
  {
    id: "dumplings-plain",
    group: "Dumplings",
    item: "Dumplings",
    prep: "Boiled plain",
    types: ["plate"]
  },
  {
    id: "dumplings-coconut",
    group: "Dumplings",
    item: "Dumplings",
    prep: "Coconut milk version",
    types: ["plate"]
  },
  {
    id: "dumplings-spiced",
    group: "Dumplings",
    item: "Dumplings",
    prep: "Herbed and spiced",
    types: ["plate"]
  },

  // Green Banana variants
  {
    id: "greenbanana-boiled",
    group: "Green Banana",
    item: "Green Banana",
    prep: "Boiled",
    types: ["plate"]
  },
  {
    id: "greenbanana-rundown",
    group: "Green Banana",
    item: "Green Banana",
    prep: "In rundown",
    types: ["plate"]
  },

  // Yam variants
  {
    id: "yam-boiled",
    group: "Yam",
    item: "Yam",
    prep: "Boiled chunks",
    types: ["plate"]
  },
  {
    id: "yam-mashed",
    group: "Yam",
    item: "Yam",
    prep: "Mashed",
    types: ["plate"]
  },
  {
    id: "yam-roasted",
    group: "Yam",
    item: "Yam",
    prep: "Roasted",
    types: ["plate", "bowl"]
  },

  // Couscous / Bulgur variants
  {
    id: "couscous-herbed",
    group: "Couscous / Bulgur",
    item: "Couscous / Bulgur",
    prep: "Herbed",
    types: ["plate", "bowl"]
  },
  {
    id: "couscous-beans",
    group: "Couscous / Bulgur",
    item: "Couscous / Bulgur",
    prep: "With beans",
    types: ["plate"]
  },
  {
    id: "couscous-veggies",
    group: "Couscous / Bulgur",
    item: "Couscous / Bulgur",
    prep: "With sautéed veggies",
    types: ["plate"]
  },

  // Wrap variants
  {
    id: "wrap-toasted",
    group: "Wrap",
    item: "Wrap",
    prep: "Toasted",
    types: ["wrap"]
  },
  {
    id: "wrap-stuffed",
    group: "Wrap",
    item: "Wrap",
    prep: "Stuffed",
    types: ["wrap"]
  },

  // Flatbread variants
  {
    id: "flatbread-toasted",
    group: "Flatbread",
    item: "Flatbread",
    prep: "Toasted",
    types: ["wrap", "plate"]
  },
  {
    id: "flatbread-stuffed",
    group: "Flatbread",
    item: "Flatbread",
    prep: "Stuffed",
    types: ["wrap"]
  },
  {
    id: "flatbread-dip",
    group: "Flatbread",
    item: "Flatbread",
    prep: "Used for dipping",
    types: ["plate", "bowl"]
  },

  // Naan variants
  {
    id: "naan-toasted",
    group: "Naan",
    item: "Naan",
    prep: "Toasted",
    types: ["wrap", "plate"]
  },
  {
    id: "naan-stuffed",
    group: "Naan",
    item: "Naan",
    prep: "Stuffed",
    types: ["wrap"]
  },
  {
    id: "naan-pizza",
    group: "Naan",
    item: "Naan",
    prep: "Used as pizza base",
    types: ["plate"]
  },

  // Elbow/Bowtie Pasta variants
  {
    id: "pasta-maccheese",
    group: "Elbow/Bowtie Pasta",
    item: "Elbow/Bowtie Pasta",
    prep: "Mac & cheese",
    types: ["plate", "bowl"]
  },
  {
    id: "pasta-garlicoil",
    group: "Elbow/Bowtie Pasta",
    item: "Elbow/Bowtie Pasta",
    prep: "Garlic oil pasta",
    types: ["plate", "bowl"]
  },
  {
    id: "pasta-tomatobasil",
    group: "Elbow/Bowtie Pasta",
    item: "Elbow/Bowtie Pasta",
    prep: "Tomato basil pasta",
    types: ["plate", "bowl"]
  },

  // Roasted Veggies variants
  {
    id: "veg-roasted-carrots",
    group: "Roasted Veggies",
    item: "Roasted Veggies",
    prep: "Carrots",
    types: ["plate", "bowl"]
  },
  {
    id: "veg-roasted-zucchini",
    group: "Roasted Veggies",
    item: "Roasted Veggies",
    prep: "Zucchini",
    types: ["plate", "bowl"]
  },
  {
    id: "veg-roasted-pumpkin",
    group: "Roasted Veggies",
    item: "Roasted Veggies",
    prep: "Pumpkin mix",
    types: ["plate", "bowl"]
  },

  // Steamed Veggies variants
  {
    id: "veg-steamed-broccoli",
    group: "Steamed Veggies",
    item: "Steamed Veggies",
    prep: "Broccoli",
    types: ["plate", "bowl"]
  },
  {
    id: "veg-steamed-spinach",
    group: "Steamed Veggies",
    item: "Steamed Veggies",
    prep: "Spinach",
    types: ["plate", "bowl"]
  },
  {
    id: "veg-steamed-cabbage",
    group: "Steamed Veggies",
    item: "Steamed Veggies",
    prep: "Cabbage",
    types: ["plate", "bowl"]
  },

  // Grains + Legumes variants
  {
    id: "legume-lentils",
    group: "Grains + Legumes",
    item: "Grains + Legumes",
    prep: "Lentils",
    types: ["plate", "bowl"]
  },
  {
    id: "legume-blackbeans",
    group: "Grains + Legumes",
    item: "Grains + Legumes",
    prep: "Black beans",
    types: ["plate", "bowl"]
  },
  {
    id: "legume-pigeonpeas",
    group: "Grains + Legumes",
    item: "Grains + Legumes",
    prep: "Pigeon peas",
    types: ["plate", "bowl"]
  }
];

function getRandomItem(obj: Record<string, string[]>): { item: string; prep: string } {
  const keys = Object.keys(obj)
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  const randomValue = obj[randomKey][Math.floor(Math.random() * obj[randomKey].length)]
  return { item: randomKey, prep: randomValue }
}

type Meal = {
  protein: { item: string; prep: string },
  side: { item: string; prep: string }
}

const calorieMap = {
  proteins: {
    "Tofu": 150,
    "Chickpeas": 180,
    "Basa Fillet": 120,
    "Veggie Steak": 200,
    "Saltfish": 160,
    "Tuna (Canned)": 120,
    "Salmon": 200,
    "Jerk Burger": 220
  },
  sides: {
    "Sweet Potato": 180,
    "Irish Potato": 150,
    "Brown Rice / Quinoa": 215,
    "Dumplings": 150,
    "Green Banana": 110,
    "Yam": 130,
    "Couscous / Bulgur": 170,
    "Wrap": 160,
    "Flatbread": 180,
    "Naan": 260,
    "Bammy": 220,
    "Salad": 50,
    "Roasted Veggies": 100,
    "Steamed Veggies": 80,
    "Grains + Legumes": 160,
    "Elbow/Bowtie Pasta": 220
  }
} as const

export default function MealRandomizer() {
  const [meal, setMeal] = useState<Meal | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const generateMeal = () => {
    setIsAnimating(true)
  
    setTimeout(() => {
      // 1. Pick a random protein
      const protein = proteinOptions[Math.floor(Math.random() * proteinOptions.length)]
  
      // 2. Filter sides by matching any meal type
      const validSides = sideOptions.filter(side =>
        side.types.some(type => protein.types.includes(type))
      )
  
      // 3. Pick a valid matching side
      const side = validSides[Math.floor(Math.random() * validSides.length)]
  
      // 4. Set meal
      setMeal({
        protein: { item: protein.item, prep: protein.prep },
        side: { item: side.item, prep: side.prep }
      })
  
      setIsAnimating(false)
    }, 500)
  }
  

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-lg transition-all duration-300 w-full">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-lg">
          <CardTitle className="text-xl flex items-center gap-2">
            <ChefHat className="h-5 w-5" />
            {meal ? `${meal.protein.item} & ${meal.side.item}` : "Ready to Cook?"}
          </CardTitle>
          <CardDescription>
            {meal ? "Here’s a meal idea with a protein and side preparation method." : "Click the button below to get a random meal idea"}
          </CardDescription>
        </CardHeader>
        <CardContent className={`pt-6 transition-opacity duration-300 ${isAnimating ? "opacity-30" : "opacity-100"}`}>
          {meal ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Protein:</h3>
                <p className="text-sm">{meal.protein.item} – <em>{meal.protein.prep}</em></p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Side:</h3>
                <p className="text-sm">{meal.side.item} – <em>{meal.side.prep}</em></p>
              </div>
              {meal && (
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Estimated Calories:</h3>
                <p className="text-sm text-orange-600 font-semibold">
                  {(
                    (calorieMap.proteins[meal.protein.item as keyof typeof calorieMap.proteins] || 0) +
                    (calorieMap.sides[meal.side.item as keyof typeof calorieMap.sides] || 0)
                  ).toLocaleString()} kcal
                </p>
              </div>
            )}
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center text-gray-400">
              <Utensils className="h-12 w-12 mb-3 opacity-50" />
              <p>Your random meal will appear here</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            onClick={generateMeal}
            className="bg-orange-500 hover:bg-orange-600 transition-all"
            disabled={isAnimating}
          >
            {meal ? "Get Another Meal" : "Get Random Meal"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
