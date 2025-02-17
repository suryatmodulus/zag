import { RouteDefinition } from "solid-app-router"
import { lazy } from "solid-js"

import Home from "./pages/home"

export const routes: RouteDefinition[] = [
  { path: "/transition", component: () => lazy(() => import("./pages/transition")) },
  { path: "/date-picker", component: () => lazy(() => import("./pages/date-picker")) },
  { path: "/select", component: () => lazy(() => import("./pages/select")) },
  {
    path: "/",
    component: Home,
  },
  { path: "/accordion", component: () => lazy(() => import("./pages/accordion")) },
  { path: "/checkbox", component: () => lazy(() => import("./pages/checkbox")) },
  { path: "/combobox", component: () => lazy(() => import("./pages/combobox")) },
  { path: "/dialog", component: () => lazy(() => import("./pages/dialog")) },
  { path: "/dialog-default-open", component: () => lazy(() => import("./pages/dialog-default-open")) },
  { path: "/editable", component: () => lazy(() => import("./pages/editable")) },
  { path: "/hover-card", component: () => lazy(() => import("./pages/hover-card")) },
  { path: "/menu", component: () => lazy(() => import("./pages/menu")) },
  { path: "/nested-menu", component: () => lazy(() => import("./pages/nested-menu")) },
  { path: "/menu-options", component: () => lazy(() => import("./pages/menu-options")) },
  { path: "/context-menu", component: () => lazy(() => import("./pages/context-menu")) },
  { path: "/number-input", component: () => lazy(() => import("./pages/number-input")) },
  { path: "/pagination", component: () => lazy(() => import("./pages/pagination")) },
  { path: "/pin-input", component: () => lazy(() => import("./pages/pin-input")) },
  // { path: "/popper", component: () => lazy(()=>import("./pages/popper")) },
  { path: "/popover", component: () => lazy(() => import("./pages/popover")) },
  { path: "/pressable", component: () => lazy(() => import("./pages/pressable")) },
  // { path: "/nested-popover", component: () => lazy(()=>import("./pages/nested-popover")) },
  { path: "/radio-group", component: () => lazy(() => import("./pages/radio-group")) },
  { path: "/range-slider", component: () => lazy(() => import("./pages/range-slider")) },
  { path: "/rating-group", component: () => lazy(() => import("./pages/rating-group")) },
  { path: "/slider", component: () => lazy(() => import("./pages/slider")) },
  { path: "/tabs", component: () => lazy(() => import("./pages/tabs")) },
  { path: "/tags-input", component: () => lazy(() => import("./pages/tags-input")) },
  { path: "/toast", component: () => lazy(() => import("./pages/toast")) },
  { path: "/tooltip", component: () => lazy(() => import("./pages/tooltip")) },
  { path: "/splitter", component: () => lazy(() => import("./pages/splitter")) },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
]
