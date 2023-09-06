import { capitalize } from "../scripts/capitalize";

test("capitalize", () => {
  expect(`${capitalize("odin")} ${capitalize("project")}`).toBe("Odin Project");
});
