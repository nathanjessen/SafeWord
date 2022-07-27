import { render, cleanup } from "@testing-library/react";
import { Default } from "./FeatureSection.stories";

afterEach(cleanup);

test("renders without crashing", () => {
  render(<Default {...Default.args} />);
});
