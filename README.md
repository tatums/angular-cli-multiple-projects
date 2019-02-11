# AngularCliMultipleProjects

This is a simple hello world app that demonstrates multiple Angular projects using the Angular-cli.  The app leverages Angular's lazy loading feature. :muscle:

## Some of the benefits

1. Uses the Angular-cli; which promotes consistent naming conventions
1. test suite per-project is configured
1. stylesheets in production (currently we add multiple inline style tags)


### Adding a new project (js_app)

1. First, Use the Angular cli to generate a new projects

        $ ng generate application root-page --routing


1. Next, add a route to the project's `app-routing.module.ts` file.

        // projects/root-page/src/app/app-routing.module.ts

        const routes: Routes = [
          { path: 'home', component: AppComponent },
        ];

        @NgModule({
          imports: [RouterModule.forRoot(routes)],
          exports: [RouterModule]
        })
        export class AppRoutingModule { }


1. Then, add a shared module to the project's `app.module.ts` file.

        // projects/root-page/src/app/app.module.ts

        import { ModuleWithProviders } from '@angular/core';
        ...
        @NgModule({})
          export class RootPageSharedModule {
          static forRoot(): ModuleWithProviders {
          return {
              ngModule: AppModule,
              providers: []
            };
          }
        }


1. Finally, in the main app, import your project/module and define a route

        // src/app/app-routing.module.ts
        //
        import { RootPageSharedModule } from '../../projects/root-page/src/app/app.module';

        const routes: Routes = [{
          path: 'home',
          loadChildren: '../../projects/app1/src/app/app.module#RootPageSharedModule'
        },
        ...
        imports: [
          BrowserModule,
          AppRoutingModule,
          ...
          RootPageSharedModule.forRoot()
        ],
        ...
        @NgModule({
          imports: [
            RouterModule.forRoot(routes),
            RootPageSharedModule.forRoot(),
            ...
          ]
        exports: [RouterModule]
        })
        ...



-------------
### autogenerated (readme)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
