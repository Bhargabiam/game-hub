import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platfroms from "../data/platfroms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platfroms.length, results: platfroms },
  });

export default usePlatforms;
