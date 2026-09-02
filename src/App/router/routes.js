import AppLayout from "../../shared/layout/AppLayout.vue";
import Home from "../../modules/samples/pages/HomePage.vue";
import Perfil from "../../modules/samples/pages/Perfil.vue";

export const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "perfil",
        component: Perfil,
      },
    ],
  },
];
