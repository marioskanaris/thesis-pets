const Dashboard = () => import("Views/Dashboard");
const Home = () => import("Views/Home");
const Profile = () => import("Views/menu/Profile");
const Users = () => import("Views/menu/Users");
const UsersEdit = () => import("Views/components/Users/Edit");

const Blogs = () => import("Views/menu/Blogs");
const BlogsCreate = () => import("Views/components/Blogs/Create");
const BlogsEdit = () => import("Views/components/Blogs/Edit");

const Posts = () => import("Views/menu/Posts");
const PostsCreate = () => import("Views/components/Posts/Create");
const PostsEdit = () => import("Views/components/Posts/Edit");

const Shelters = () => import("Views/menu/Shelters");
const SheltersCreate = () => import("Views/components/Shelters/Create");
const SheltersEdit = () => import("Views/components/Shelters/Edit");

const Adoptions = () => import("Views/menu/Adoptions");
const AdoptionsCreate = () => import("Views/components/Adoptions/Create");
const AdoptionsEdit = () => import("Views/components/Adoptions/Edit");

const LostPets = () => import("Views/menu/LostPets");
const LostPetsCreate = () => import("Views/components/LostPets/Create");
const LostPetsEdit = () => import("Views/components/LostPets/Edit");

const FoundPets = () => import("Views/menu/FoundPets");
const FoundPetsCreate = () => import("Views/components/FoundPets/Create");
const FoundPetsEdit = () => import("Views/components/FoundPets/Edit");

const adminRoutes = {
  path: "/admin/home",
  component: Dashboard,
  name: "Dashboard",
  children: [
    {
      path: "/admin/home",
      component: Home,
      name: "home",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Αρχική Σελίδα",
        breadcrumb: "Home",
        icon: "mdi-home",
      },
    },
    {
      path: "/admin/profile",
      component: Profile,
      name: "profile",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Το Προφίλ Μου",
        breadcrumb: "Profile",
        icon: "mdi-face",
      },
    },
    {
      path: "/admin/users",
      component: Users,
      name: "users",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Χρήστες",
        breadcrumb: "Users",
        icon: "mdi-account",
      },
    },
    {
      path: "/admin/users/:id/edit",
      component: UsersEdit,
      name: "users-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "User Edit",
        breadcrumb: "User Edit",
        icon: "mdi-account",
      },
    },
    {
      path: "/admin/blogs",
      component: Blogs,
      name: "blogs",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Blogs",
        breadcrumb: "Blogs",
        icon: "mdi-animation",
      },
    },
    {
      path: "/admin/blogs/create",
      component: BlogsCreate,
      name: "blogs-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Blog Create",
        breadcrumb: "Blog Create",
        icon: "mdi-animation",
      },
    },
    {
      path: "/admin/blogs/:id/edit",
      component: BlogsEdit,
      name: "blogs-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Blog Edit",
        breadcrumb: "Blog Edit",
        icon: "mdi-animation",
      },
    },
    {
      path: "/admin/posts",
      component: Posts,
      name: "posts",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Άρθρα",
        breadcrumb: "Posts",
        icon: "mdi-post",
      },
    },
    {
      path: "/admin/posts/create",
      component: PostsCreate,
      name: "posts-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Post Create",
        breadcrumb: "Post Create",
        icon: "mdi-post",
      },
    },
    {
      path: "/admin/posts/:id/edit",
      component: PostsEdit,
      name: "posts-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Post Edit",
        breadcrumb: "Post Edit",
        icon: "mdi-animation",
      },
    },
    {
      path: "/admin/shelters",
      component: Shelters,
      name: "shelters",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Φιλοζωικές",
        breadcrumb: "Shelters",
        icon: "mdi-home-heart",
      },
    },
    {
      path: "/admin/shelters/create",
      component: SheltersCreate,
      name: "shelters-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Shelter Create",
        breadcrumb: "Shelter Create",
        icon: "mdi-home-heart",
      },
    },
    {
      path: "/admin/shelters/:id/edit",
      component: SheltersEdit,
      name: "shelters-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Shelter Edit",
        breadcrumb: "Shelter Edit",
        icon: "mdi-home-heart",
      },
    },
    {
      path: "/admin/adoptions",
      component: Adoptions,
      name: "adoptions",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Υιοθεσίες",
        breadcrumb: "Adoptions",
        icon: "mdi-home-variant",
      },
    },
    {
      path: "/admin/adoptions/create",
      component: AdoptionsCreate,
      name: "adoptions-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Δημιουργία Υιοθεσίας",
        breadcrumb: "Adoption Create",
        icon: "mdi-home-variant",
      },
    },
    {
      path: "/admin/adoptions/:id/edit",
      component: AdoptionsEdit,
      name: "adoptions-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Επεξεργασία Υιοθεσίας",
        breadcrumb: "adoption Edit",
        icon: "mdi-home-variant",
      },
    },
    {
      path: "/admin/lost-pets",
      component: LostPets,
      name: "lost-pets",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Χαμένα Κατοικίδια",
        breadcrumb: "LostPets",
        icon: "mdi-bullhorn",
      },
    },
    {
      path: "/admin/lost-pets/create",
      component: LostPetsCreate,
      name: "lost-pets-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Lost Pet Create",
        breadcrumb: "Lost Pet Create",
        icon: "mdi-bullhorn",
      },
    },
    {
      path: "/admin/lost-pets/:id/edit",
      component: LostPetsEdit,
      name: "lost-pets-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Lost Pet Edit",
        breadcrumb: "Lost Pet Edit",
        icon: "mdi-bullhorn",
      },
    },

    {
      path: "/admin/found-pets",
      component: FoundPets,
      name: "found-pets",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Εντοπισμένα Κατοικίδια",
        breadcrumb: "Found Pets",
        icon: "mdi-paw",
      },
    },
    {
      path: "/admin/found-pets/create",
      component: FoundPetsCreate,
      name: "found-pets-create",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Found Pet Create",
        breadcrumb: "Found Pet Create",
        icon: "mdi-paw",
      },
    },
    {
      path: "/admin/found-pets/:id/edit",
      component: FoundPetsEdit,
      name: "found-pets-edit",
      meta: {
        inSideBar: true,
        requiresAuth: true,
        title: "Found Pet Edit",
        breadcrumb: "Found Pet Edit",
        icon: "mdi-paw",
      },
    },
  ],
};

export default adminRoutes;
