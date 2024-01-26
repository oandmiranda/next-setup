import NavLink from '@src/components/Link/navLink';
import Text from '@src/components/Text/text';

export default function Screen_2() {
  return (
    <>
      <Text tag="h5">Qualquer coisa</Text>
      <NavLink href={'./'} styleSheet={{ color: 'green', fontSize: '2rem' }}>
        Home
      </NavLink>
    </>
  );
}
