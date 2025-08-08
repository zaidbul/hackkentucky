import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navigation = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "flex items-center justify-between py-4 bg-gray-100 w-[90vw] mx-auto",
      className
    )}
    {...props}
  />
))
Navigation.displayName = "Navigation"

const NavigationBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
NavigationBrand.displayName = "NavigationBrand"

const NavigationMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex items-center gap-6", className)}
    {...props}
  />
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("text-xl font-semibold ho", className)}
    {...props}
  />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4 ", className)}
    {...props}
  />
))
NavigationActions.displayName = "NavigationActions"

export {
  Navigation,
  NavigationBrand,
  NavigationMenu,
  NavigationMenuItem,
  NavigationActions,
}