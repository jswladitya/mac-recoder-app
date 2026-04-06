import { BarChart3, Cloud, Layers, Lock, Sparkles, Zap } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description: "Built on modern architecture ensuring blazing fast performance across all your devices.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Bank-grade Security",
    description: "Your data is encrypted at rest and in transit. We take your privacy seriously.",
    icon: Lock,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Powerful Analytics",
    description: "Gain deep insights into your usage patterns with our comprehensive dashboard.",
    icon: BarChart3,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Cloud Integration",
    description: "Seamlessly sync your data across all integrations with one click.",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "Seamless Workflow",
    description: "Integrates perfectly with your existing tools without any heavy lifting.",
    icon: Layers,
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    name: "AI Powered",
    description: "Leverage the latest in artificial intelligence to automate mundane tasks.",
    icon: Sparkles,
    color: "from-pink-400 to-rose-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 max-w-[80rem] mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">
          Unmatched Capabilities
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance text-foreground">
          Everything you need to scale
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
          Discover a suite of tools designed to help you build faster, scale smarter, and deliver stunning results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border bg-card p-8 md:p-10 transition-all hover:shadow-lg dark:hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5 group-hover:from-foreground group-hover:to-transparent" />
              
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-inner`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              
              <h4 className="mb-3 text-xl font-bold text-foreground">
                {feature.name}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
