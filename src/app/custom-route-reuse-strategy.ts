import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    private storedRoutes = new Map<string, DetachedRouteHandle>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return ['medications-details', 'medication-list'].includes(route.routeConfig.path);
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.storedRoutes.set(route.routeConfig.path, handle);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path)
            && (route.routeConfig.path === 'medications-details' && route.queryParams.from === 'alerts'
                || route.routeConfig.path === 'medication-list' && route.queryParams.from === 'details');
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.storedRoutes.get(route.routeConfig.path);
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}