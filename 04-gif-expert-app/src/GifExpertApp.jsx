import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = (newCategory) => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (onAddCategory) => {
    if (categories.includes(onAddCategory)) return;
    setCategories([onAddCategory, ...categories]);
  };
  console.log({ categories });
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
