import React from 'react';
import {InputBlock, TextInputBlock, TextInputError} from './styled';
import {FieldProps} from 'formik';

const Input: React.FC<FieldProps> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const [focus, setFocus] = React.useState(false);

  return (
    <React.Fragment>
      <InputBlock focus={focus} error={Boolean(hasError)}>
        <TextInputBlock
          onFocus={() => setFocus(true)}
          value={value}
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
            setFocus(false);
          }}
          {...inputProps}
        />
      </InputBlock>
      {hasError && <TextInputError>{String(errors[name])}</TextInputError>}
    </React.Fragment>
  );
};

export default Input;
