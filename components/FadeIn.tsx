"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      // Start slightly pushed down and completely transparent
      initial={{ opacity: 0, y: 40 }}
      // Animate to full opacity and original position when it enters the screen
      whileInView={{ opacity: 1, y: 0 }}
      // Only animate once, and start when the element is 100px from the bottom of the viewport
      viewport={{ once: true, margin: "-100px" }}
      // Control the speed and bounce of the animation
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}