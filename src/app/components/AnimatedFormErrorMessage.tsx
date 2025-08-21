"use client";
import { AnimatePresence, motion } from "motion/react";
import { useFormField } from "@/components/ui/form";

export default function FormErrorMessage() {
  const { error, formMessageId } = useFormField();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {error && (
        <motion.p
          className="text-sm text-destructive text-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {String(error.message)}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
