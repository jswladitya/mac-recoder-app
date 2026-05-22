import { cn } from '../lib/utils'

export const LogoIcon = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            className={cn('size-6 shrink-0', className)}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="squircle_logo">
                    <rect width="200" height="200" rx="46" />
                </clipPath>
            </defs>
            <rect width="200" height="200" rx="46" fill="#171717" />
            <g clipPath="url(#squircle_logo)">
                {/* Cute Orange Face Dome */}
                <path 
                    d="M -10 210 L -10 125 C -10 60 35 34 100 34 C 165 34 210 60 210 125 L 210 210 Z" 
                    fill="#f37823" 
                />
                
                {/* Soft Cheeks Blush */}
                <ellipse cx="36" cy="146" rx="16" ry="12" fill="#ea7e73" />
                <ellipse cx="164" cy="146" rx="16" ry="12" fill="#ea7e73" />
                
                {/* Eyes */}
                <circle cx="67" cy="110" r="31" fill="#ffffff" />
                <circle cx="133" cy="110" r="31" fill="#ffffff" />
                
                {/* Pupils */}
                <circle cx="67" cy="106" r="19" fill="#111111" />
                <circle cx="133" cy="106" r="19" fill="#111111" />
                
                {/* Glares */}
                <circle cx="61" cy="100" r="5" fill="#ffffff" />
                <circle cx="127" cy="100" r="5" fill="#ffffff" />
                
                {/* Adorable Smile */}
                <path 
                    d="M 88,142 Q 100,153 112,142" 
                    stroke="#3d2314" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    fill="none" 
                />
            </g>
        </svg>
    )
}

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn("flex items-center gap-2.5", className)}>
            <LogoIcon className="h-6 w-auto" uniColor={uniColor} />
            <span className="font-bold tracking-tight text-xl text-foreground select-none">
                SleekDemo
            </span>
        </div>
    )
}

