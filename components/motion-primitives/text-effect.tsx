'use client'
import React from 'react'
import { motion } from 'motion/react'

interface TextEffectProps {
  children: string
  preset?: 'fade-in-blur'
  speedSegment?: number
  as?: React.ElementType
  className?: string
  segmentClassName?: string
  per?: 'word' | 'line' | 'char'
  delay?: number
}

export function TextEffect({
  children,
  preset = 'fade-in-blur',
  speedSegment = 0.3,
  as: Component = 'p',
  className,
  segmentClassName,
  per = 'word',
  delay = 0,
}: TextEffectProps) {
  const segments = React.useMemo(() => {
    if (per === 'line') return children.split('\n')
    if (per === 'char') return children.split('')
    return children.split(' ')
  }, [children, per])

  const presetVariants = {
    'fade-in-blur': {
      hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
  }

  const variants = presetVariants[preset]

  return (
    <Component className={className}>
      {segments.map((segment: string, i: number) => (
        <motion.span
          key={i}
          initial={variants.hidden}
          animate={variants.visible}
          transition={{
            type: 'spring',
            bounce: 0.3,
            duration: speedSegment * 3,
            delay: delay + i * speedSegment * 0.3,
          }}
          className={segmentClassName}
          style={{ display: 'inline-block', whiteSpace: per === 'word' ? 'pre-wrap' : undefined }}
        >
          {per === 'word' ? (i < segments.length - 1 ? segment + '\u00A0' : segment) : segment}
        </motion.span>
      ))}
    </Component>
  )
}
