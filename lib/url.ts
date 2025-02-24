import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}
interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const querystring = qs.parse(params);

  querystring[key] = value;

  return qs.stringifyUrl({ url: window.location.pathname, query: querystring });
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const querystring = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete querystring[key];
  });

  return qs.stringifyUrl(
    { url: window.location.pathname, query: querystring },
    { skipNull: true }
  );
};
