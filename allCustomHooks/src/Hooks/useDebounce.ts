export default function useDebounce<T extends (args: unknown[]) => unknown>(
  functionToDebounce: T,
  limit: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return [
    function (...args: unknown[]) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        functionToDebounce(args);
      }, limit);
    },
  ];
}
