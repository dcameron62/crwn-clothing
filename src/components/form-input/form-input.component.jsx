/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/6/2022
 * Time: 8:21 PM
 */
import {FormInputLabel, Input, Group} from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;