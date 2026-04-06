import Image from "next/image";

export function Clients() {
  return (
    <section id="clients" className="text-center mx-auto max-w-[80rem] px-6 md:px-8">
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-500 tracking-wider">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              <li>
                <Image src="https://cdn.magicui.design/companies/Google.svg" alt="Google" width={112} height={32} className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </li>
              <li>
                <Image src="https://cdn.magicui.design/companies/Microsoft.svg" alt="Microsoft" width={112} height={32} className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </li>
              <li>
                <Image src="https://cdn.magicui.design/companies/GitHub.svg" alt="GitHub" width={112} height={32} className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </li>
              <li>
                <Image src="https://cdn.magicui.design/companies/Uber.svg" alt="Uber" width={112} height={32} className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </li>
              <li>
                <Image src="https://cdn.magicui.design/companies/Notion.svg" alt="Notion" width={112} height={32} className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
