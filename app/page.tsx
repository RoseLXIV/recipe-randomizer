import RecipeRandomizer from "@/components/recipe-randomizer"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Randomizer</h1>
      <Analytics />
      <RecipeRandomizer />
    </main>
  )
}
