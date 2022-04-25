import { render, fireEvent, getByText } from "@testing-library/react";
import DashboardMenus from "../DashboardMenus";

it("should check dashboard button", () => {
  const { queryByTitle } = render(<DashboardMenus />);
  const btn = queryByTitle("dashboardLink");
  expect(btn).toBeTruthy()
});

it('should check dashboard link', () => {
    const { queryByTitle } = render(<DashboardMenus/>)
    fireEvent.click(queryByTitle('dashboardLink'))
    expect(screen.getByRole('alert')).getByText('welcome')
})

