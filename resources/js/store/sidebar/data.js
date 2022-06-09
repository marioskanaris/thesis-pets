/**
 * Sidebar Module
 */
export const sidebar = [
  {
    title: "Αρχική",
    path: "/admin/home",
    icon: "mdi-home",
    name: "home",
    items: null,
    roles: [
      "admin",
      "shelter",
      "guest",
    ]
  },
  {
    title: "Το Προφίλ Μου",
    path: "/admin/profile",
    icon: "mdi-face",
    name: "profile",
    items: null,
    roles: [
      "admin",
      "shelter",
      "guest",
    ]
  },
  {
    title: "Χρήστες",
    path: "/admin/users",
    icon: "mdi-account",
    name: "users",
    items: null,
    roles: [
      "admin"
    ]
  },
  {
    title: "Blogs",
    path: "/admin/blogs",
    icon: "mdi-animation",
    name: "blogs",
    items: null,
    roles: [
      "admin"
    ]
  },
  {
    title: "Άρθρα",
    path: "/admin/posts",
    icon: "mdi-post",
    name: "posts",
    items: null,
    roles: [
      "admin"
    ]
  },
  {
    title: "Φιλοζωικές",
    path: "/admin/shelters",
    icon: "mdi-home-heart",
    name: "shelters",
    items: null,
    roles: [
      "admin"
    ]
  },
  {
    title: "Υιοθεσίες",
    path: "/admin/adoptions",
    icon: "mdi-home-variant",
    name: "adoptions",
    items: null,
    roles: [
      "admin",
      "shelter"
    ]
  },
  {
    title: "Χαμένα Κατοικίδια",
    path: "/admin/lost-pets",
    icon: "mdi-bullhorn",
    name: "lost-pets",
    items: null,
    roles: [
      "admin",
      "shelter",
      "guest",
    ]
  },
  {
    title: "Εντοπισμένα Κατοικίδια",
    path: "/admin/found-pets",
    icon: "mdi-paw",
    name: "found-pets",
    items: null,
    roles: [
      "admin",
      "shelter"
    ]
  },
];
