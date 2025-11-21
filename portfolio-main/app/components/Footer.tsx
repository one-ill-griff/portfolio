import { motion } from 'framer-motion';

<footer className="text-center py-10 text-sm text-gray-500">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    © {new Date().getFullYear()} Griffin O'Neill
  </motion.div>
</footer>