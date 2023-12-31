import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
  },

  { path: "**", redirectTo: "admin", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
