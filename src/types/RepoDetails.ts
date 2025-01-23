import { Owner } from "./OwnerProfile";

export interface RepoDetailsTypes {
    id: number;
    name: string;
    svn_url:string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    topics: string[];
    owner: Owner;
  }