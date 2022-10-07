import { render } from '@testing-library/react';
import { FirstApp } from './FirstApp';

describe('pruebas en <FirstApp />', () => {
  //   test('debe de hacer match con el snapshot', () => {
  //     const title = 'Hola, soy Goku';
  //     const { container } = render(<FirstApp title={title} />);
  //     expect(container).toMatchSnapshot();
  //   });
  test('debe de mostrar titulo en h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />,
    );
    expect(getByTestId('test-title').innerHTML).toContain(title);
    // expect(getByTestId('test-title').innerHTML).toBe(title);
    // expect(getByTestId('test-title')).toBeTruthy();
    // expect(getByText).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
  });
  test('debe mostrar subtitulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Hola, soy Subtitle';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />,
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
