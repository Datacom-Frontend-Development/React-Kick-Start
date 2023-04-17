import { useMatch, useResolvedPath } from "react-router-dom";

export const useRouteMatch = (path: string) => {
  let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname, end: true });
  return match;
};
