import { motion } from 'framer-motion';
import { slide, showPath } from '../../assets/animationsVariants';
import { Container } from './WelcomeScreen.styled';

const WelcomeScreen = () => {
  return (
    <Container>
        <svg width="132" height="111" viewBox="0 0 132 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M62.6719 84.6875C60.0938 85.1562 56.6172 85.3906 52.2422 85.3906C47.8932 85.3906 43.9609 84.7917 40.4453 83.5938C36.9557 82.3958 33.9479 80.625 31.4219 78.2812C26.0052 73.2552 23.2969 66.25 23.2969 57.2656C23.2969 51.4062 24.6901 46.3281 27.4766 42.0312C31.2526 36.224 37.0469 32.526 44.8594 30.9375C47.2552 30.4688 50.1068 30.2344 53.4141 30.2344C56.7474 30.2344 59.4167 30.4167 61.4219 30.7812V38.2422C59.599 37.6693 56.7734 37.3828 52.9453 37.3828C49.1432 37.3828 45.9141 37.8516 43.2578 38.7891C40.6016 39.7266 38.401 41.0677 36.6562 42.8125C33.1667 46.224 31.4219 51.0417 31.4219 57.2656C31.4219 63.5417 33.1406 68.5156 36.5781 72.1875C40.3021 76.1458 45.6536 78.125 52.6328 78.125C56.7214 78.125 60.0677 77.8125 62.6719 77.1875V84.6875ZM64.7031 30.625H72.8281L89.8984 75.3125L106.891 30.625H115.016L93.6094 85H86.1094L64.7031 30.625Z"
            stroke="#33CC99"
            strokeWidth="4"
            variants={showPath}
            initial="hidden"
            animate="visible"
            />
        </svg>

      <motion.p variants={slide} initial="hidden" animate="visible">maker</motion.p>
    </Container>
  )
}

export default WelcomeScreen
