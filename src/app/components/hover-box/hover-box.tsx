import React from 'react';
import { motion } from 'framer-motion';

const HoverBox: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Навядзі!
    </motion.div>
  );
};

export default HoverBox;