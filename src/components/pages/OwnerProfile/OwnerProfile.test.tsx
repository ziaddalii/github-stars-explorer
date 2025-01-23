import { screen } from "@testing-library/react";
import { render } from "../../../utils/test.utils";
import { waitFor } from "@testing-library/react";
import axios from "axios";
import OwnerProfile from "../../../pages/OwnerProfile";
jest.mock("axios");

const mockOwner = {
  data: {
    avatar_url: "string",
    login: "ziaddalii",
    name: "Ziad",
    bio: "Egyptian Guy",
    followers: 12,
    following: 15,
    location: "Egypt",
    email: "devziadali@gmail.com",
    twitter_username: "ElonMusk",
    html_url: "",
  },
};

describe("Owner Profile", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders repository page after API call", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce(mockOwner);
    render(<OwnerProfile />);

    await waitFor(() => {
      expect(screen.getByText("ziaddalii")).toBeInTheDocument();
      expect(screen.getByText("12")).toBeInTheDocument();
      expect(screen.getByText("devziadali@gmail.com")).toBeInTheDocument();
    });
  });

  test("renders Something Went Wrong after Failure API call", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const ThrowEx = new Error("error");
    mockedAxios.get.mockResolvedValue(ThrowEx);
    render(<OwnerProfile />);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });
  });
});
