# Angular Intermadiate 2023 JWT and HTTP Course

## Setup Webtoken Server
- command: `npm i json-server-auth`
- [code package.json](package.json)
```json
"server": "json-server-auth --watch server/db.json --port 3000",
```

## Create AuthService
- command: `ng g service service/auth`
- [code AuthService](src\app\service\auth.service.ts)

## Login
- command: `ng g c page/login`
- [add LoginComponent](src/app/app.routes.ts)
- [code LoginComponent](src\app\page\login\login.component.ts)

## Logout
- [code LayoutComponent](src\app\common\layout\layout.component.ts)
```typescript
onLogout(): void {
  this.authService.logout();
}
```
- [show login/logout](src\app\common\layout\layout.component.html)

## Create Interceptor
- command: `ng g interceptor interceptor/jwt`
- [code interceptor](src\app\interceptor\jwt.interceptor.ts)
  
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
