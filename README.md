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



