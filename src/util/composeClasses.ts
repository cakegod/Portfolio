interface ObjProps {
  [key: string]: any;
}

const findColorName = (name: ObjProps[0], obj: ObjProps) =>
  Object.entries(obj).find((item) => item[0] === name)![1];

export const composeClass = (
  name: string,
  classBase: string,
  classColors: { [key: string]: string },
  obj: ObjProps
) => {
  return `${classBase} ${classColors[findColorName(name, obj)]}`;
};
