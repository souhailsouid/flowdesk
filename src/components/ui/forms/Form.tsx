import { Box, Grid } from '@mui/material';
import UseButton from '../buttons/Button';
import UseAutocomplete from '../inputs/AutoComplete';

interface FormComponentProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    options: { label: string, value: string }[],
    value: { label: string; value: string };
    onChange: (newValue: { label: string; value: string }) => void;
    loading: boolean;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, options, value, onChange, loading }) => {
    return (
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 2, mb: 4, ml: 2 }}>
            <Grid container spacing={2} flexDirection="column" alignItems="center">
                <UseAutocomplete options={options} value={value} onchange={onChange} />
                <UseButton text='Load data' type="submit" disabled={loading} />
            </Grid>
        </Box>
    );
};

export default FormComponent;
