import { PropsWithChildren } from "react"

type PageLayoutProps = PropsWithChildren

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="contain mx-auto">
      {children}
    </div>
  )
}