import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipe from "./Recipe";

test("renders meal title, description and image", () => {
  const mockRecipe = {
    strMeal: "Arepa",
    strInstructions: "Arepa instructions ...",
    strMealThumb: "https://via.placeholder.com/150",
  };

  render(<Recipe recipe={mockRecipe} />);

  const titleElement = screen.getByRole("heading", { name: /Arepa/i });
  const descElement = screen.getByText(/Arepa instructions .../i);
  const imgElement = screen.getByAltText(/Arepa/i);

  expect(titleElement).toBeInTheDocument();
  expect(descElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.src).toBe("https://via.placeholder.com/150");
});
