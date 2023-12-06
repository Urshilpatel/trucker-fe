import { Helmet } from 'react-helmet-async';

import { BolPageView } from 'src/sections/bol';

// ----------------------------------------------------------------------

export default function NewOrdersPage() {
  return (
    <>
      <Helmet>
        <title> Bol | Minimal UI </title>
      </Helmet>

      <BolPageView />
    </>
  );
}