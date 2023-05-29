const smoothSlideSideways = {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 1 },
        transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
}

export {smoothSlideSideways};