import { useContext } from 'react';
import { FormContainer, Heading, FieldContainer, Input, TextArea, Subheading, AddButton } from './Form.styled';
import { CvContext } from '../../providers/CvDataProvider';


const Form = () => {
  const { cvData, handleInputChange } = useContext(CvContext);
  return (
    <FormContainer>
        <Heading>Podaj swoje dane</Heading>

        <form>
          <FieldContainer>
            <label htmlFor="name">Imię</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={cvData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="surname">Nazwisko</label>
            <Input
              type="text"
              id="surname"
              name="surname"
              value={cvData.surname}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="email">Adres email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={cvData.email}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="phone">Numer telefonu</label>
            <Input
              type="number"
              id="phone"
              name="phone"
              value={cvData.phoneNumber}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="image">Zdjęcie</label>
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="description">Napisz coś o sobie</label>
            <TextArea
              id="description"
              name="description"
              rows="10"
              cols="25"
              value={cvData.description}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <Subheading>Edukacja</Subheading>
          <AddButton>+ Dodaj uczelnie</AddButton>

          <FieldContainer>
            <label htmlFor="collegeName">Nazwa uczelni</label>
            <Input
              type="text"
              id="collegeName"
              name="collegeName"
              value={cvData.collegeName}
              onChange={handleInputChange}
            />
          </FieldContainer>
          {/* <p>Data Picker</p> */}

          <FieldContainer>
            <label htmlFor="degreeCourse">Nazwa kierunku</label>
            <Input
              type="text"
              id="degreeCourse"
              name="degreeCourse"
              value={cvData.degreeCourse}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <Subheading>Doświadczenie</Subheading>
          <AddButton>+ Dodaj pracę</AddButton>

          <FieldContainer>
            <label htmlFor="comapnyName">Nazwa firmy</label>
            <Input
              type="text"
              id="companyName"
              name="comapnyName"
              value={cvData.companyName}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="workStation">Nazwa stanowiska</label>
            <Input
              type="text"
              id="workStation"
              name="workStation"
              value={cvData.workStation}
              onChange={handleInputChange}
            />
          </FieldContainer>

          {/* <p>Data Picker</p> */}

          <FieldContainer>
            <label htmlFor="workStationDescription">Opis stanowiska</label>
            <TextArea
              id="workStationDescription"
              name="workStationDescription"
              rows="10"
              cols="25"
              value={cvData.workStationDescription}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <Subheading>Umiejętności</Subheading>
          <AddButton><span>+</span>Dodaj</AddButton>

          <FieldContainer>
            <label htmlFor="skill"/>
            <Input
              type="text"
              id="skill"
              name="skill"
              value={cvData.skill}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <Subheading>Zainteresowania</Subheading>
          <AddButton><span>+</span>Dodaj</AddButton>

          <FieldContainer>
            <label htmlFor="hobby"/>
            <Input
              type="text"
              id="hobby"
              name="hobby"
              value={cvData.hobby}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="footer">Stopka</label>
            <TextArea
              id="footer"
              name="footer"
              rows="10"
              cols="25"
              value={cvData.footer}
              onChange={handleInputChange}
            />
          </FieldContainer>
        </form>
      </FormContainer>
  )
}

export default Form
