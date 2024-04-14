import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/nested-with-styles",
      name: "nested-with-styles",
      component: () => import("../views/NestedWithStylesView.vue")
    },
    {
      path: "/nested-with-props",
      name: "nested-with-props",
      component: () => import("../views/NestedWithPropsView.vue")
    },
    {
      path: "/nested-with-own-templates",
      name: "nested-with-own-templates",
      component: () => import("../views/NestedWithOwnTemplatesView.vue")
    },
    {
      path: "/nested-with-named-slots",
      name: "nested-with-named-slots",
      component: () => import("../views/NestedWithNamedSlotsView.vue")
    },
    {
      path: "/nested-slots-in-same-component",
      name: "nested-slots-in-same-component",
      component: () => import("../views/NestedSlotsInSameComponentView.vue")
    }
  ]
});

export default router;
