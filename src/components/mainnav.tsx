import Link from "next/link"
import { cn } from "@/lib/utils"

const items = [
  {
    title: "Plant pots",
    href: "/categories/plant-pots",
  },
  {
    title: "Ceramics",
    href: "/categories/ceramics",
  },
  {
    title: "Tables",
    href: "/categories/tables",
  },
  {
    title: "Chairs",
    href: "/categories/chairs",
  },
  {
    title: "Crockery",
    href: "/categories/crockery",
  },
  {
    title: "Tableware",
    href: "/categories/tableware",
  },
  {
    title: "Cutlery",
    href: "/categories/cutlery",
  },
]

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  return (
    <nav className={cn("flex items-center space-x-6 text-sm", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-[#726E8D] transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

