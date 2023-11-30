# AngularIm2023SignalsNgrx

## Create Interceptor
- `ng g interceptor interceptor/jwt`

## Auth Guard
- `server/routes.json`
- `ng g guard guard/auth`
- `src/app/guard/auth.guard.ts`
- `src/app/app.routes.ts` add authGuard

## Role Guard
- `ng g guard guard/role`
- `src/app/guard/role.guard.ts`
- `src/app/model/user.ts` add role
- `src/app/app.routes.ts` add data.role, roleGuard, forbidden page
- `ng g c page/forbidden`
- `src/app/page/forbidden/forbidden.component.html`

