import { screens, containerMargin } from '../screens.json';

export const getContainer = () => {
  const containerProps = {};
  Object.entries(screens).forEach(([breakpoint, value]) => {
    containerProps[`@screen ${breakpoint}`] = {
      maxWidth: `${value - containerMargin}px`,
    };
  });

  return { '.container': containerProps };
};
