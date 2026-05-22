export function Beacon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 100 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="8" fillOpacity="0.3" />
      <circle cx="12" cy="12" r="12" fillOpacity="0.1" />
      <path d="M28 4H33C36.5 4 38.5 6.5 38.5 9.5C38.5 12.5 36.5 15 33 15H31.5V20H28V4ZM32.5 12C34 12 35 11 35 9.5C35 8 34 7 32.5 7H31.5V12H32.5Z" />
      <path d="M42 4H45.5V20H42V4Z" />
      <path d="M50 12C50 7.5 53.5 4 58 4C62.5 4 66 7.5 66 12C66 16.5 62.5 20 58 20C53.5 20 50 16.5 50 12ZM62.5 12C62.5 9.2 60.5 7 58 7C55.5 7 53.5 9.2 53.5 12C53.5 14.8 55.5 17 58 17C60.5 17 62.5 14.8 62.5 12Z" />
      <path d="M70 7H66V4H77.5V7H73.5V20H70V7Z" />
    </svg>
  )
}
