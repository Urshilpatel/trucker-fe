import { Helmet } from 'react-helmet-async';

import { NewOrdersPageView } from 'src/sections/neworders';

// ----------------------------------------------------------------------

export default function NewOrdersPage() {
  return (
    <>
      <Helmet>
        <title> NewOrders | Minimal UI </title>
      </Helmet>

      <NewOrdersPageView />
    </>
  );
}