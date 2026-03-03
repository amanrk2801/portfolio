import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Skill } from '../../data/skills'

type SkillBadgeProps = {
  skill: Skill
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: -5,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      rotate: 5,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  const badgeVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: '#3B82F6',
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
    initial: {
      scale: 1,
      backgroundColor: '#1D4ED8',
    },
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        key={skill.name}
        variants={badgeVariants}
        initial="initial"
        whileHover="hover"
        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer shadow-md text-white flex items-center gap-1"
      >
        {skill.name}
      </motion.span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-10 p-2 w-32 h-32 bg-white border border-gray-300 rounded shadow-lg -top-36 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-contain rounded"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

