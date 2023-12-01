# Angular Optimisation Course

## Start
- `npm run dev`

## The slow app
- review:
- `src/main.ts`
- `src/app/app.config.ts`
- coding:
- `src/app/page/customer/customer.component.ts`

## OnPush strategy
- `src/app/page/customer/customer.component.ts`
- `changeDetection: ChangeDetectionStrategy.OnPush,`
- ![strategy](src/assets/strategy.webp)

## Pipes
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

