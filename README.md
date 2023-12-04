<<<<<<< HEAD
# Angular Optimisation Course

## Start
- `npm run dev`

## The slow app
- review:
- [main.ts](src/main.ts)
- [app.config.ts](src/app/app.config.ts)
- coding:
- [customer.component.ts](src/app/page/customer/customer.component.ts)

## OnPush strategy
- [customer.component.ts](src/app/page/customer/customer.component.ts)
```typescript
changeDetection: ChangeDetectionStrategy.OnPush,
```
- ![strategy](src/assets/strategy.webp)

## Pipes
- command: `ng g pipe pipe/geo`
- [geo.pipe.ts](src/app/pipe/geo.pipe.ts)
- [customer.component.html: using pipe](src/app/page/customer/customer.component.html) 

## Memoize
- [geo.pipe.ts](src/app/pipe/geo.pipe.ts)
- [webpage](https://github.com/mgechev/memo-decorator)
- command: `npm i memo-decorator`
- Implementing the decorator.

## LoadComponent
- [app.routes.ts](src/app/app.routes.ts)
- [dashboard.component.ts](src/app/page/dashboard/dashboard.component.ts)

## Preloading 1
- Explain PreloadingStrategy
- Default: NoPreloading
- Set: PreloadAllModules
- [app.config.ts](src/app/app.config.ts)
```typescript
withPreloading(PreloadAllModules),
```

## Preloading 2
- [app.routes.ts](src/app/app.routes.ts)
- To preload, set: 
```
data: {
  prelodad: true,
},
```
- create: `src/app/service/flag-based.preloading-strategy.ts`
- [app.config.ts](src/app/app.config.ts)
```typescript
withPreloading(FlagBasedPreloadingStrategy),
```



=======
# Angular Intermadiate 2023 JWT and HTTP Course

## Setup Webtoken Server
- command: `npm i json-server-auth`
- [code package.json](package.json)
```json
"server": "json-server-auth --watch server/db.json --port 3000",
```

## Create AuthService
- command: `ng g service service/auth`
- [code AuthService](src/app/service/auth.service.ts)

## Login
- command: `ng g c page/login`
- [add LoginComponent](src/app/app.routes.ts)
- [code LoginComponent](src/app/page/login/login.component.ts)

## Logout
- [code LayoutComponent](src/app/common/layout/layout.component.ts)
```typescript
onLogout(): void {
  this.authService.logout();
}
```
- [show login/logout](src/app/common/layout/layout.component.html)

## Create Interceptor
- command: `ng g interceptor interceptor/jwt`
- [code interceptor](src/app/interceptor/jwt.interceptor.ts)
  
## Auth Guard
- [routes.json](server/routes.json)
- command: `ng g guard guard/auth`
- [code authGuard](src/app/guard/auth.guard.ts)
- [add authGuard](src/app/app.routes.ts)

## Role Guard
- command: `ng g guard guard/role`
- [code roleGuard](src/app/guard/role.guard.ts)
- [add role](src/app/model/user.ts)
- [add data.role, roleGuard, forbidden page](src/app/app.routes.ts)
- command `ng g c page/forbidden`
- [code forbiddenComponent](src/app/page/forbidden/forbidden.component.html)
>>>>>>> e3c562925e8fd0c316a8aad893dc9db56c2b9f65
