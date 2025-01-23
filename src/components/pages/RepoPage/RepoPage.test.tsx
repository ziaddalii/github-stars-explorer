import { screen } from "@testing-library/react";
import { render } from "../../../utils/test.utils";
import { waitFor } from "@testing-library/react";
import axios from "axios";
import RepoDetails from "../../../pages/RepoPage";
jest.mock("axios");

const mockRepo = {
  data: {
    id: 15151515,
    name: "Ahmed Khaled",
    svn_url: "string",
    full_name: "string",
    description: "string",
    stargazers_count: 12,
    topics: ["string"],
    owner: {
      avatar_url: "string",
      login: "string",
      name: "string",
      bio: "string",
      followers: 12,
      following: 12,
      location: "string",
      email: "string",
      twitter_username: "string",
      html_url: "string",
    },
  },
};

describe("RepoPage", () => {
  // beforeEach(() => {
  //   render(<RepoDetails />);
  // });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders repository page after API call", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce(mockRepo);
    render(<RepoDetails />);

    await waitFor(() => {
      expect(screen.getByText("Ahmed Khaled")).toBeInTheDocument();
      expect(screen.getByText("12")).toBeInTheDocument();
    });
  });

  test("renders Something Went Wrong after Failure API call", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const ThrowEx = new Error("error")
    mockedAxios.get.mockResolvedValue(ThrowEx);
    render(<RepoDetails />);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });
  });

});
