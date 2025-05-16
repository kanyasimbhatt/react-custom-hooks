function useAddParameter(base_url: string, parameters: object) {
  const url = new URL(base_url);
  for (const a of Object.entries(parameters)) {
    url.searchParams.append(a[0], a[1] as string);
  }

  return [url];
}

export default useAddParameter;
