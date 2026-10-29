// ============================================================
//  AL-SHAMAS — COMPANY CONTACT DETAILS
//  Single source of truth for the address and phone number
//  shown in the top bar, footer and contact page.
// ============================================================

export const COMPANY = {
  name: 'Al-Shamas Food Products',
  phone: '905-672-1204',
  phoneHref: 'tel:+19056721204',
  email: 'info@alshamasfood.ca',
  website: 'www.alshamasfoodproducts.ca',
  street: '2244 Drew Road',
  city: 'Mississauga, ON L5S 1B1',
  country: 'Canada',
  established: 2013,
  facilities: [
    { unit: 'Unit 1', est: 'EST #7088' },
    { unit: 'Unit 3', est: 'EST #866' },
  ],
};

/** One-line address, e.g. for the top bar. */
export const ADDRESS_SHORT = `${COMPANY.street}, Mississauga, ON`;
/** Full address, e.g. for the footer. */
export const ADDRESS_FULL = `${COMPANY.street}, ${COMPANY.city}`;
