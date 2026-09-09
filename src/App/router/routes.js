import AppLayout from "../../shared/layout/AppLayout.vue";
import Perfil from "../../modules/samples/pages/Perfil.vue";
import CatalogoPage from "../../modules/samples/pages/CatalogoPage.vue";
import HomePage from "../../modules/samples/pages/HomePage.vue";

export const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "perfil",
        component: Perfil,
      },
      {
        path:"catalogo",
        component: CatalogoPage
      }
    ],
  },
];
