import { Helmet } from 'react-helmet-async';

import { AddOrdersPageView } from 'src/sections/addorders';

// ----------------------------------------------------------------------

export default function AddOrdersPage() {
  return (
    <>
      <Helmet>
        <title> AddOrders | Minimal UI </title>
      </Helmet>

      <AddOrdersPageView />
    </>
  );
}