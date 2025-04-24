"use client"

import { useState } from "react"
import { ChefHat, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample recipes data
const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    ingredients: [
      "350g spaghetti",
      "150g pancetta or guanciale, diced",
      "3 large eggs",
      "50g pecorino cheese, grated",
      "50g parmesan, grated",
      "Freshly ground black pepper",
      "Salt to taste",
    ],
    instructions:
      "Cook pasta. Fry pancetta until crispy. Beat eggs with cheese. Toss hot pasta with pancetta, then quickly mix in egg mixture off heat. Season generously with black pepper.",
  },
  {
    title: "Chicken Stir Fry",
    description: "A quick and healthy meal with chicken and vegetables.",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 onion, sliced",
      "2 carrots, julienned",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp vegetable oil",
    ],
    instructions:
      "Heat oil in a wok. Stir-fry chicken until cooked. Add vegetables and stir-fry until tender-crisp. Add garlic and ginger. Mix in sauces and cook for another minute. Serve hot with rice.",
  },
  {
    title: "Avocado Toast",
    description: "A simple and nutritious breakfast option.",
    ingredients: [
      "2 slices of bread",
      "1 ripe avocado",
      "1 lemon, juiced",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "2 eggs (optional)",
    ],
    instructions:
      "Toast bread. Mash avocado with lemon juice, salt, and pepper. Spread on toast. Top with optional fried or poached eggs and sprinkle with red pepper flakes.",
  },
  {
    title: "Berry Smoothie Bowl",
    description: "A refreshing and healthy breakfast bowl.",
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 banana",
      "1/2 cup Greek yogurt",
      "1/4 cup milk or plant-based alternative",
      "Toppings: granola, sliced fruit, nuts, seeds, honey",
    ],
    instructions:
      "Blend berries, banana, yogurt, and milk until smooth. Pour into a bowl. Add toppings of your choice. Enjoy immediately.",
  },
  {
    title: "Vegetable Curry",
    description: "A flavorful and warming vegetarian curry.",
    ingredients: [
      "2 tbsp vegetable oil",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp curry powder",
      "1 can (400ml) coconut milk",
      "2 cups mixed vegetables (potatoes, carrots, peas, cauliflower)",
      "Salt to taste",
      "Fresh cilantro for garnish",
    ],
    instructions:
      "Heat oil and sauté onion until soft. Add garlic and ginger, cook for 1 minute. Add curry powder and stir. Add vegetables and coconut milk. Simmer until vegetables are tender. Season with salt and garnish with cilantro. Serve with rice or naan.",
  },
]

export default function RecipeRandomizer() {
  const [currentRecipe, setCurrentRecipe] = useState<(typeof recipes)[0] | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomRecipe = () => {
    setIsAnimating(true)

    // Simulate a loading effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recipes.length)
      setCurrentRecipe(recipes[randomIndex])
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-lg transition-all duration-300 w-full">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-lg">
          <CardTitle className="text-xl flex items-center gap-2">
            <ChefHat className="h-5 w-5" />
            {currentRecipe ? currentRecipe.title : "Ready to Cook?"}
          </CardTitle>
          <CardDescription>
            {currentRecipe ? currentRecipe.description : "Click the button below to get a random recipe"}
          </CardDescription>
        </CardHeader>
        <CardContent className={`pt-6 transition-opacity duration-300 ${isAnimating ? "opacity-30" : "opacity-100"}`}>
          {currentRecipe ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Ingredients:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {currentRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Instructions:</h3>
                <p className="text-sm">{currentRecipe.instructions}</p>
              </div>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center text-gray-400">
              <Utensils className="h-12 w-12 mb-3 opacity-50" />
              <p>Your random recipe will appear here</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            onClick={getRandomRecipe}
            className="bg-orange-500 hover:bg-orange-600 transition-all"
            disabled={isAnimating}
          >
            {currentRecipe ? "Get Another Recipe" : "Get Random Recipe"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
