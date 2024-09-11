import { InstructionContainer, Heading, List, ButtonContainer, Button } from './Instruction.styled';
import { motion } from 'framer-motion';

//Instruction data
import { instruction } from "../../assets/data";

//Animation settings
import { slideInstruction } from '../../assets/animationsVariants';

const Instruction = () => {
  return (
    <InstructionContainer>
      <Heading>Instrukcja:</Heading>
      <List>
        {instruction?.map((instr, index) => (
          <motion.li
            key={instr.id}
            variants={slideInstruction}
            custom={index}
            initial="hidden"
            animate="visible"
            >{ instr.text }</motion.li>
        ))}
      </List>
      <ButtonContainer>
        <Button to='/themes'>Zaczynamy!</Button>
      </ButtonContainer>
    </InstructionContainer>
  )
}

export default Instruction
