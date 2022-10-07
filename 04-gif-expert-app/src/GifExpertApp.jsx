import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = (newCategory) => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (onAddCategory) => {
    if (categories.includes(onAddCategory)) return;
    setCategories([...categories, onAddCategory]);
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
