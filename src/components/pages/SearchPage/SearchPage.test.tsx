import { screen } from "@testing-library/react";
import { render } from "../../../utils/test.utils";
import SearchPage from "../../../pages/SearchPage";
import { fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
jest.mock("axios");

describe("SearchPage", () => {
  beforeEach(() => {
    render(<SearchPage />);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders search form ui", () => {
    expect(screen.getByText("Stars Explorer")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for repositories")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Discover Top-Rated GitHub Repositories/i)
    ).toBeInTheDocument();
  });

  test("add queries to url on form submission", async () => {
    const originalLocation = window.location;
    const input = screen.getByPlaceholderText("Search for repositories");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.submit(form);

    expect(window.location.href).toContain("?q=react&page=1");

    window.location = originalLocation;
  });

  test("renders repository results after API call", async () => {
    const mockRepos = {
      data: {
        total_count: 70,
        items: [
          {
            id: 1,
            name: "react",
            owner: {
              login: "ziad",
              avatar_url: "dsfd.",
            },
            description: "A React repository",
            stargazers_count: 1000,
            topics: ["CSS", "JS", "REACT"],
          },
        ],
      },
    };
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce(mockRepos);

    const input = screen.getByPlaceholderText("Search for repositories");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("react")).toBeInTheDocument();
      expect(screen.getByText("A React repository")).toBeInTheDocument();
      expect(screen.getByText("CSS")).toBeInTheDocument();
    });
  });

  test("renders No Data when success API CALL returns but 0 items", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockEmptyResults = {
      data: {
        total_count: 0,
        items: [],
      },
    };
    mockedAxios.get.mockResolvedValueOnce(mockEmptyResults);

    const input = screen.getByPlaceholderText("Search for repositories");
    const form = screen.getByRole("form");

    fireEvent.change(input, {
      target: { value: "dfdsfdsfsd" },
    });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("No results found!")).toBeInTheDocument();
    });
  });

  test("render Something went wrong when API CALL fall", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const ThrowEx = new Error("API request failed");
    mockedAxios.get.mockResolvedValueOnce(ThrowEx);

    const input = screen.getByPlaceholderText("Search for repositories");
    const form = screen.getByRole("form");

    fireEvent.change(input, {
      target: { value: "react" },
    });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });
  });

  test("does not submit the form if input is empty", async () => {
    const input = screen.getByPlaceholderText("Search for repositories");
    const form = screen.getByRole("form");
    const mockRepos = {
      data: {
        total_count: 1,
        items: [
          {
            id: 1,
            name: "karim",
            owner: {
              login: "ziad",
              avatar_url: "dsfd.",
            },
            description: "A React repository",
            stargazers_count: 0,
            topics: ["CSS", "JS", "REACT"],
          },
        ],
      },
    };
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce(mockRepos);
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(form);
    await waitFor(() => {
      expect(screen.queryByText("karim")).not.toBeInTheDocument();
    });
  });
});
