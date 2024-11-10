'use client';

// import { createInvoice } from '@/app/lib/actions';
import { justRevalidate } from '@/app/lib/revalidate';

// export default function RevalidateTestButton() {
//   const initialState = { message: null, errors: {} };
//   const [state, dispatch] = useFormState(createInvoice, initialState);

//   const testFormData = new FormData();
//   testFormData.append('customerId', 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa');
//   testFormData.append(
//     'amount',
//     (Math.floor(Math.random() * 9000) + 1000).toString(),
//   );
//   testFormData.append('status', 'pending');

//   return (
//     <button
//       type="button"
//       onClick={() => dispatch(testFormData)}
//       style={{ border: '1px solid red' }}
//     >
//       Create Invoice and Revalidate
//     </button>
//   );
// }

export function JustRevalidateButton() {
  return (
    <button
      type="button"
      onClick={async () => await justRevalidate()}
      style={{ border: '1px solid blue' }}
    >
      Just Revalidate
    </button>
  );
}
