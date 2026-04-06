import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    desc: "A basic plan for startups and individual users",
    price: "10",
    features: ["AI-powered analytics", "Basic support", "5 projects limit", "Access to basic AI tools"],
    highlight: false,
  },
  {
    name: "Premium",
    desc: "A premium plan for growing businesses",
    price: "20",
    features: ["Advanced AI insights", "Priority support", "Unlimited projects", "Access to all AI tools", "Custom integrations"],
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "An enterprise plan with advanced features for large organizations",
    price: "50",
    features: ["Custom AI solutions", "24/7 dedicated support", "Unlimited projects", "Access to all AI tools", "Custom integrations", "Data security and compliance"],
    highlight: false,
  },
  {
    name: "Ultimate",
    desc: "The ultimate plan with all features for industry leaders",
    price: "80",
    features: ["Bespoke AI development", "White-glove support", "Unlimited projects", "Priority access to new AI tools", "Custom integrations", "Highest data security and compliance"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-foreground">Pricing</h4>
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Simple pricing for everyone.
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Choose an <strong>affordable plan</strong> that&apos;s packed with the best features for engaging your audience.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <button
            type="button"
            role="switch"
            aria-checked="false"
            data-state="unchecked"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
          >
            <span
              data-state="unchecked"
              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            />
          </button>
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-background">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-8 rounded-2xl border p-4 overflow-hidden bg-card text-card-foreground ${
                plan.highlight ? "border-primary shadow-lg ring-1 ring-primary" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">{plan.name}</h2>
                  <p className="h-12 text-sm leading-5 text-muted-foreground">{plan.desc}</p>
                </div>
              </div>

              <div className="flex flex-row gap-1">
                <span className="text-4xl font-bold">
                  ${plan.price}
                  <span className="text-xs text-muted-foreground font-normal"> / month</span>
                </span>
              </div>

              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full font-semibold">
                Subscribe
              </button>

              <hr className="m-0 h-px w-full border-none bg-border" />

              <ul className="flex flex-col gap-3 font-normal">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium text-foreground">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="flex">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
