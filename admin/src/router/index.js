import Login from "../pages/Login/index";
import Home from "../pages/Home";
import CreateCategory from "../pages/category/CreateCategory";
import EditCategory from "../pages/category/EditCategory";
import CategoryList from "../pages/category/CategoryList";
import CreateItem from "../pages/item/CreateItem";
import EditItem from "../pages/item/EditItem";
import ItemList from "../pages/item/ItemList";
import CreateHero from "../pages/hero/CreateHero";
import EditHero from "../pages/hero/EditHero";
import HeroList from "../pages/hero/HeroList";
import CreateArticle from "../pages/article/CreateArticle";
import EditArticle from "../pages/article/EditArticle";
import ArticleList from "../pages/article/ArticleList";
import CreateUser from "../pages/user/CreateUser";
import EditUser from "../pages/user/EditUser";
import UserList from "../pages/user/UserList";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: PageNotFound
  }
];

export const adminRoutes = [
  { path: "/admin", component: Home, exact: true },
  { path: "/admin/createcategory", component: CreateCategory },
  { path: "/admin/editcategory/:id", component: EditCategory },
  { path: "/admin/categorylist", component: CategoryList },
  { path: "/admin/createitem", component: CreateItem },
  { path: "/admin/edititem/:id", component: EditItem },
  { path: "/admin/itemlist", component: ItemList },
  { path: "/admin/createhero", component: CreateHero },
  { path: "/admin/edithero/:id", component: EditHero },
  { path: "/admin/herolist", component: HeroList },
  { path: "/admin/createarticle", component: CreateArticle },
  { path: "/admin/editarticle/:id", component: EditArticle },
  { path: "/admin/articlelist", component: ArticleList },
  { path: "/admin/createuser", component: CreateUser },
  { path: "/admin/edituser/:id", component: EditUser },
  { path: "/admin/userlist", component: UserList }
];
