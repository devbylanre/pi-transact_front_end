type Groups<T> = {
  [group: string]: Partial<T>;
};

type ExtractedProps<T> = Groups<T> & { restProps: Partial<T> };

const extractProps = <T extends { [key: string]: any }>(
  props: T,
  groups: { [key: string]: (keyof T)[] }
): ExtractedProps<T> => {
  const extractedProps: Groups<T> = {};
  const restProps: Partial<T> = { ...props };

  Object.keys(groups).forEach((group) => {
    extractedProps[group] = {};

    groups[group].forEach((name) => {
      if (name in restProps) {
        extractedProps[group][name] = restProps[name];
        delete (restProps as any)[name];
      }
    });
  });

  return { ...extractedProps, restProps };
};

export default extractProps;
