import { useWhyDidYouUpdate } from "../Hooks/useWhyDidYouUpdate";

type ChildrenType = {
  value: number;
};

const Child = (props: ChildrenType) => {
  useWhyDidYouUpdate<ChildrenType>("Child", props);

  return <div>{props.value}</div>;
};

export default Child;
