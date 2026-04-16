import { cn } from "@/lib/utils";

export type MarketingCard = {
  icon?: string;
  title: string;
  description: string;
};

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
  labelTone?: "accent" | "charcoal";
  className?: string;
};

export function MarketingSectionHeader({
  label,
  title,
  description,
  dark = false,
  labelTone = "accent",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-8 md:mb-10 w-full", className)}>
      <div className="space-y-3 mx-auto max-w-3xl">
        {label && (
          <div
            className={cn(
              "inline-block rounded-lg px-3 py-1 text-sm mx-auto",
              labelTone === "accent"
                ? "bg-brand-orange text-brand-charcoal"
                : "bg-brand-charcoal text-brand-cream",
            )}
          >
            {label}
          </div>
        )}
        <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-brand-orange">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-sm sm:text-base md:text-lg lg:text-xl/relaxed",
              dark ? "text-brand-cream" : "text-brand-dark-grey",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

type MarketingCardProps = {
  card: MarketingCard;
  variant?: "light" | "dark";
  iconClassName?: string;
  className?: string;
};

export function MarketingFeatureCard({
  card,
  variant = "light",
  iconClassName,
  className,
}: MarketingCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "text-center p-4 sm:p-6 rounded-lg transition-all",
        isDark
          ? "bg-brand-cream/10 border border-brand-orange/20 hover:border-brand-orange/40"
          : "border border-brand-charcoal/20 shadow-sm hover:shadow-lg",
        className,
      )}
    >
      {card.icon && <div className={cn("text-3xl mb-3", iconClassName)}>{card.icon}</div>}
      <h3
        className={cn(
          "text-lg font-bold font-heading mb-2",
          isDark ? "text-brand-orange" : "text-brand-charcoal",
        )}
      >
        {card.title}
      </h3>
      <p className={cn("text-sm", isDark ? "text-brand-cream/80" : "text-brand-medium-grey")}>
        {card.description}
      </p>
    </div>
  );
}

type IconPanelProps = {
  icon: string;
  title: string;
  description: string;
  dark?: boolean;
  className?: string;
  contentClassName?: string;
};

export function MarketingIconPanel({
  icon,
  title,
  description,
  dark = false,
  className,
  contentClassName,
}: IconPanelProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-3 sm:p-4 md:p-6 rounded-lg mt-6 lg:mt-0",
        dark ? "bg-brand-cream/10" : "bg-brand-charcoal/10",
        className,
      )}
    >
      <div className={cn("text-center", contentClassName)}>
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold font-heading text-brand-orange mb-2">{title}</h3>
        <p className={cn("text-sm", dark ? "text-brand-cream/80" : "text-brand-dark-grey")}>
          {description}
        </p>
      </div>
    </div>
  );
}

type BulletListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

export function MarketingBulletList({ items, className, itemClassName }: BulletListProps) {
  return (
    <ul className={cn("space-y-3 text-left max-w-md mx-auto lg:mx-0", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-start", itemClassName)}>
          <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-brand-orange mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type HeroBackdropProps = {
  overlayClassName?: string;
};

export function MarketingHeroBackdrop({ overlayClassName = "bg-brand-charcoal/80" }: HeroBackdropProps) {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
