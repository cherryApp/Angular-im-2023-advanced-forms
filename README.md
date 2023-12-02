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
- `ng g pipe pipe/geo`
- `src/app/pipe/geo.pipe.ts`
- `src/app/page/customer/customer.component.html` using pipe

## Memoize
- `src/app/pipe/geo.pipe.ts`
- `https://github.com/mgechev/memo-decorator`
- `npm i memo-decorator`
- Implementing the decorator.

## LoadComponent
- `src/app/app.routes.ts`
- `src/app/page/dashboard/dashboard.component.ts`

## Preloading 1
- Explain PreloadingStrategy
- Default: NoPreloading
- Set: PreloadAllModules
- `src/app/app.config.ts`
- `withPreloading(PreloadAllModules),`

## Preloading 2
- `src/app/app.routes.ts`
- To preload, set: 
```
data: {
  prelodad: true,
},
```
- create: `src/app/service/flag-based.preloading-strategy.ts`
- `src/app/app.config.ts`
- `withPreloading(FlagBasedPreloadingStrategy),`



