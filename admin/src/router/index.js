import Login from "../pages/Login/index";
import Home from "../pages/Home";
import EditCategory from "../pages/category/EditCategory";
import CategoryList from "../pages/category/CategoryList";
import EditItem from "../pages/item/EditItem";
import ItemList from "../pages/item/ItemList";
import EditHero from "../pages/hero/EditHero";
import HeroList from "../pages/hero/HeroList";
import EditArticle from "../pages/article/EditArticle";
import ArticleList from "../pages/article/ArticleList";
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
  { path: "/admin/createcategory", component: EditCategory },
  { path: "/admin/editcategory/:id", component: EditCategory },
  { path: "/admin/categorylist", component: CategoryList },
  { path: "/admin/createitem", component: EditItem },
  { path: "/admin/edititem/:id", component: EditItem },
  { path: "/admin/itemlist", component: ItemList },
  { path: "/admin/createhero", component: EditHero },
  { path: "/admin/edithero/:id", component: EditHero },
  { path: "/admin/herolist", component: HeroList },
  { path: "/admin/createarticle", component: EditArticle },
  { path: "/admin/editarticle/:id", component: EditArticle },
  { path: "/admin/articlelist", component: ArticleList },
  { path: "/admin/createuser", component: EditUser },
  { path: "/admin/edituser/:id", component: EditUser },
  { path: "/admin/userlist", component: UserList }
];
