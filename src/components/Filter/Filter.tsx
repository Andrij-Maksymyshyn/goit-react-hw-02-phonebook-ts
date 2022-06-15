import { LabelFil, InputFil } from './Filter.styled';

interface IProps {
  value: string,
  onChange: (event: string) => void,
};

const Filter = ({ value, onChange }: IProps) => (
  <LabelFil>
    Find contacts by name
    <InputFil type="text" value={value} onChange={onChange} />
  </LabelFil>
);

export default Filter;


