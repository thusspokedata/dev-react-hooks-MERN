import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('me volví a generar');
  return <small>{value}</small>;
});
