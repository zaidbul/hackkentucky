import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GridSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
}

const GridSection = React.forwardRef<HTMLDivElement, GridSectionProps>(
  ({ className, title, subtitle, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("w-full py-12", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="text-center mb-12 ">
          {title && (
            <h2 className="text-4xl font-bold tracking-tight mb-4">{title}</h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
)
GridSection.displayName = "GridSection"

const GridContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6",
      className
    )}
    {...props}
  />
))
GridContainer.displayName = "GridContainer"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, description, icon, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("relative overflow-hidden border-2", className)}
      {...props}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-1">{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
)
StatCard.displayName = "StatCard"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, image, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("h-full hover:shadow-lg transition-shadow", className)}
      {...props}
    >
      {image && (
        <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            {icon || <div className="w-12 h-12 bg-white/20 rounded-full" />}
          </div>
        </div>
      )}
      <CardHeader>
        {!image && icon && (
          <div className="mb-4 text-primary">{icon}</div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
)
FeatureCard.displayName = "FeatureCard"

export { GridSection, GridContainer, StatCard, FeatureCard }