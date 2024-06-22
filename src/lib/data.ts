interface MenuItem {
  title: string;
  href: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const newsList: MenuSection[] = [
  {
    title: "NEW ARRIVALS",
    items: [
      { title: "NEW IN THIS WEEK", href: "/new-in-this-week" },
      { title: "NEW IN THIS MONTH", href: "/new-in-this-month" },
      { title: "BRANDS NEW TO LVR", href: "/brands-new-to-lvr" },
    ],
  },
  {
    title: "POPULAR CATEGORIES",
    items: [
      { title: "DRESSES", href: "/dresses" },
      { title: "TOPS", href: "/tops" },
      { title: "BOTTOMS", href: "/bottoms" },
    ],
  },
  // Add more sections as needed
];
