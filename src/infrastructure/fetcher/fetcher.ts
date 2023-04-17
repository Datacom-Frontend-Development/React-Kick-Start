interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export interface IFetcher {
  Get: <T>(path: string, args?: RequestInit) => Promise<HttpResponse<T>>;
  Post: <T>(
    path: string,
    body: any,
    args?: RequestInit
  ) => Promise<HttpResponse<T>>;
  Put: <T>(
    path: string,
    body: any,
    args?: RequestInit
  ) => Promise<HttpResponse<T>>;
}

export const Http = async <T>(
  request: RequestInfo
): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const Get = async <T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<HttpResponse<T>> => {
  return await Http<T>(new Request(path, args));
};

export const Post = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "post", body: JSON.stringify(body) }
): Promise<HttpResponse<T>> => {
  return await Http<T>(new Request(path, args));
};

export const Put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<HttpResponse<T>> => {
  return await Http<T>(new Request(path, args));
};

export const Fetcher: IFetcher = {
  Get,
  Post,
  Put,
};
