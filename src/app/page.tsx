export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-theme(spacing.16)-theme(spacing.64))] items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Coming Soon Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary">
            준비중
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-coming-soon">
            Coming Soon
          </h2>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-foreground font-medium">
            더 나은 서비스로 찾아뵙겠습니다
          </p>
          <p className="text-base md:text-lg text-foreground/70">
            곧 새로운 웹사이트로 여러분을 만나게 될 것입니다.
          </p>
        </div>

        {/* Accent decoration */}
        <div className="flex justify-center gap-2 pt-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-75" />
          <div className="w-2 h-2 rounded-full bg-yellow animate-pulse delay-150" />
        </div>
      </div>
    </main>
  )
}
